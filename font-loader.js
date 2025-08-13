
// Font loading script
document.documentElement.classList.add('fonts-loading');
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.remove('fonts-loading');
    document.documentElement.classList.add('fonts-loaded');
    document.body.classList.add('fonts-loaded');
  });
} else {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
      document.body.classList.add('fonts-loaded');
    }, 100);
  });
}

