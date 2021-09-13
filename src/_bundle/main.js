import Alpine from "alpinejs";
import "lazysizes";

window.Alpine = Alpine;

// Start Alpine when the page is ready.
window.addEventListener("DOMContentLoaded", () => {
  Alpine.start();
});

// Restart Alpine when the DOM is altered by HTMX.
document.body.addEventListener("htmx:afterSwap", () => {
  Alpine.start();
});

window.addEventListener("alpine:initializing", () => {
  Alpine.data("global", () => ({
    isOpen: false,

    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  }));
});
