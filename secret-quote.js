// Hidden motivational quote, independent of the cipher mystery.
(() => {
  'use strict';
  const trigger = document.getElementById('hidden-quote-trigger');
  const dialog = document.getElementById('hidden-quote-dialog');
  const closeButton = document.getElementById('hidden-quote-close');
  if (!trigger || !dialog || !closeButton) return;
  let previousFocus = null;
  function openQuote() {
    previousFocus = document.activeElement;
    dialog.hidden = false;
    closeButton.focus();
  }
  function closeQuote() {
    dialog.hidden = true;
    previousFocus?.focus?.();
  }
  trigger.addEventListener('click', openQuote);
  closeButton.addEventListener('click', closeQuote);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeQuote();
  });
  document.addEventListener('keydown', event => {
    if (dialog.hidden) return;
    if (event.key === 'Escape') closeQuote();
    if (event.key === 'Tab') {
      event.preventDefault();
      closeButton.focus();
    }
  });
})();
