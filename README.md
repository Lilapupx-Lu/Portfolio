# Portfolio — Lucas Blas

Sitio estático bilingüe (ES / EN). Sin dependencias, sin build, sin conexión:
tipografías, imágenes, CSS y JS son locales. Se abre con doble clic en
`index.html` y funciona igual servido desde GitHub Pages.

## Estructura

```
index.html                  Home ES — todas las piezas, 3 filas
diseno-impreso.html         Sección: Diseño Impreso
anuncios-digitales.html     Sección: Anuncios Digitales
redes-sociales.html         Sección: Redes Sociales
ilustracion-digital.html    Sección: Ilustración Digital
clientes.html               Sección: Clientes
sobre-mi.html               Página Sobre mí

en/index.html               Home EN
en/print-design.html        Print Design
en/digital-ads.html         Digital Ads
en/social-content.html      Social Content
en/digital-art.html         Digital Art
en/clients.html             Clients
en/about.html               About

assets/css/estilos.css      Hoja única, compartida por las 14 páginas
assets/js/main.js           Menú móvil, header pegajoso, volver arriba
assets/fonts/               Fraunces + Poppins (.woff2)
assets/img/                 96 piezas + retrato
```

## Cómo editar

- **Estilos**: todo en `assets/css/estilos.css`. Los colores están arriba, como
  variables en `:root`. `--radio` controla el redondeo de las imágenes.
- **Agregar o quitar piezas**: cada una es un `<article class="portfolio-item">`.
  Copiá uno existente y cambiá imagen, título y subtítulo.
- **Cuántas piezas se ven**: la clase `limit_rows` en `.projects_holder` recorta
  a 3 filas. Quitala para mostrar todas. El corte por breakpoint está en el CSS,
  en las reglas `nth-of-type`.
- **Cambiar el idioma de una página**: cada archivo tiene su gemela en la otra
  carpeta y se enlazan con el conmutador ES/EN del header. Si renombrás una,
  actualizá también el `href` de su gemela y el `<link rel="alternate">`.

## Pendientes

- Los enlaces de LinkedIn, Behance y YouTube apuntan a `#`.
- Las secciones **Anuncios Digitales** y **Redes Sociales** están rellenas con
  piezas prestadas de otras secciones, marcadas en el HTML con
  `<!-- PIEZAS PRESTADAS -->`. Hay que reemplazarlas por trabajo real.
- Los subtítulos de las piezas están en español también en la versión inglesa.
- Las imágenes son material de referencia, no obra propia: reemplazar antes de
  publicar el sitio de cara al público.

## Publicar

Repositorio → **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
La URL queda en `https://<usuario>.github.io/<repo>/`.
