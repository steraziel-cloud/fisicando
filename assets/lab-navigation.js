/* Labs keep the catalog location explicit, including when opened in a new tab. */
window.GatitoLabNavigation = {
  bind(back, theory, {lesson, level}) {
    const params = new URLSearchParams(location.search);
    const fallback = new URL('lezioni.html', location.href);
    fallback.searchParams.set('livello', level);
    fallback.searchParams.set('lezione', lesson);
    fallback.hash = 'lesson-lab';
    if (['studente','altro'].includes(params.get('ruolo'))) fallback.searchParams.set('ruolo', params.get('ruolo'));
    let destination = fallback;
    try {
      const requested = params.get('ritorno');
      if (requested) {
        const candidate = new URL(requested, location.href);
        const catalog = new URL('lezioni.html', location.href);
        if (candidate.origin === catalog.origin && candidate.pathname === catalog.pathname && !candidate.username && !candidate.password) destination = candidate;
      }
    } catch {}
    back.href = destination.href;
    const theoryURL = new URL('reader.html', location.href);
    theoryURL.searchParams.set('lezione', lesson);
    theoryURL.searchParams.set('livello', level);
    if (['studente','altro'].includes(params.get('ruolo'))) theoryURL.searchParams.set('ruolo', params.get('ruolo'));
    theoryURL.searchParams.set('ritorno',destination.href);
    theory.href = theoryURL.href;
  }
};
