(() => {
  const footer = document.querySelector('[data-deferred-background]');
  if (!footer) return;

  const reveal = () => {
    footer.style.backgroundImage = `url("${footer.dataset.deferredBackground}")`;
    delete footer.dataset.deferredBackground;
  };

  if (!('IntersectionObserver' in window)) {
    reveal();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      reveal();
      observer.disconnect();
    }
  }, { rootMargin: '300px' });
  observer.observe(footer);
})();
