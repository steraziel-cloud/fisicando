const fs=require('fs'),vm=require('vm'),path=require('path');
const filename=path.join(__dirname,'algebra-notebook.cjs');
const driver=fs.readFileSync(filename,'utf8').replace('vm.runInNewContext(suite,',"suite+=fs.readFileSync(path.join(__dirname,'monomial-practice-workflows.cjs'),'utf8');vm.runInNewContext(suite,");
vm.runInNewContext(driver,{require,__dirname,__filename:filename,console,structuredClone,process},{filename});
