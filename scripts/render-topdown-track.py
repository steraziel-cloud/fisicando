"""Rebuild the transparent rail asset from the saved mathematical geometry."""
import json
import math
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
folder = root / 'assets/images/reader/period-lab'
config = json.loads((folder / 'track-topdown-v1.json').read_text())
scale = 3
image = Image.new('RGBA', (config['imageWidth'] * scale, config['imageHeight'] * scale))
draw = ImageDraw.Draw(image)
cx, cy = config['center']['x'], config['center']['y']
a, b = config['semiAxes']['a'], config['semiAxes']['b']
gauge = config['gauge']

def geometry(t):
    c, s = math.cos(t), math.sin(t)
    length = math.hypot(b*c, a*s)
    return (cx+a*c, cy+b*s), (b*c/length, a*s/length)

def pixels(points):
    return [(round(x*scale), round(y*scale)) for x,y in points]

def line(points, fill, width):
    draw.line(pixels(points), fill=fill, width=round(width*scale), joint='curve')

def rectangle(p,n,length,width,fill,offset=0):
    x,y=p; nx,ny=n; tx,ty=-ny,nx
    corners=[(x+nx*u+tx*v+offset,y+ny*u+ty*v+offset)
             for u,v in [(-length/2,-width/2),(length/2,-width/2),(length/2,width/2),(-length/2,width/2)]]
    draw.polygon(pixels(corners),fill=fill)

# Integrate distance to place the sleepers evenly along the ellipse.
count=8192
samples=[geometry(math.tau*i/count)[0] for i in range(count+1)]
distances=[0.0]
for p,q in zip(samples,samples[1:]):
    distances.append(distances[-1]+math.dist(p,q))
import bisect
for i in range(config['sleeperCount']):
    distance=distances[-1]*i/config['sleeperCount']
    k=min(bisect.bisect_right(distances,distance)-1,count-1)
    fraction=(distance-distances[k])/(distances[k+1]-distances[k])
    p,n=geometry(math.tau*(k+fraction)/count)
    rectangle(p,n,config['sleeperLength']+2,config['sleeperWidth']+2,(24,16,8,75),1.5)
    rectangle(p,n,config['sleeperLength'],config['sleeperWidth'],(91,56,30,255))
    rectangle(p,n,config['sleeperLength']-2,config['sleeperWidth']-3,(148,97,49,255))
    # Fine longitudinal wood grain, consistent under rotation.
    nx,ny=n;tx,ty=-ny,nx;x,y=p
    for offset in [-2,1.5]:
        line([(x+nx*u+tx*offset,y+ny*u+ty*offset) for u in [-22,22]],(103,63,31,220),.7)
    for u in [-gauge/2,gauge/2]:
        rectangle((x+nx*u,y+ny*u),n,9,10,(57,52,44,255))
    if i==0:
        # The station-side sleeper is the unmistakable measurement reference.
        rectangle(p,n,config['sleeperLength'],config['sleeperWidth'],(251,196,46,255))
        for u in [-18,-6,6,18]:
            rectangle((x+nx*u,y+ny*u),n,5,config['sleeperWidth'],(36,37,34,255))

for side in [-1,1]:
    points=[];highlight=[]
    for i in range(4097):
        p,n=geometry(math.tau*i/4096)
        points.append((p[0]+side*gauge/2*n[0],p[1]+side*gauge/2*n[1]))
        highlight.append((p[0]+(side*gauge/2-.8)*n[0],p[1]+(side*gauge/2-.8)*n[1]))
    line([(x+1,y+1) for x,y in points],(20,18,17,90),7)
    line(points,(45,49,49,255),5.5)
    line(points,(133,144,145,255),3.4)
    line(highlight,(222,231,228,255),1.1)

image=image.resize((config['imageWidth'],config['imageHeight']),Image.Resampling.LANCZOS)
image.save(folder/'track-topdown-v1.png')
print(folder/'track-topdown-v1.png')
