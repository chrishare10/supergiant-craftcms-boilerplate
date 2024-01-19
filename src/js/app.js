/* CSS */
import "@js/parts/css";

/* Tailwind */
import "@js/parts/tailwindcss";

/* Lazyloading */
import "@js/parts/lazyloading";

/* JS */
import "@js/parts/scripts";

/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();


/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR");
  });
}
