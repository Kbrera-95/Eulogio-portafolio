// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eulogio.com',
  output: 'static',

  /*
    Por defecto Astro colapsa el HTML compilado a una sola línea. Con
    `compressHTML: false` conserva el sangrado del `.astro`, así los archivos
    de `dist/` se pueden abrir y leer con la anidación a la vista.
    Cuesta ~15% de peso, que el servidor recupera con gzip/brotli.
  */
  compressHTML: false,

  build: {
    inlineStylesheets: 'auto',
  },
});
