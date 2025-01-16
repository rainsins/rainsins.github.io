/**
 * Initial Bootstrap Tooltip.
 */
export function loadTooptip() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  [...tooltipTriggerList].map(
    (tooltipTriggerEl) => {
      return $(tooltipTriggerEl).data("bs-title") ? tippy(tooltipTriggerEl, {
        content: $(tooltipTriggerEl).data("bs-title"),
        placement: 'top',
        theme: 'translucent',
      }) : tippy(tooltipTriggerEl, {
        content: $(tooltipTriggerEl).data("bs-original-title"),
        placement: 'top',
        theme: 'translucent',
      });
    }
  );
}
