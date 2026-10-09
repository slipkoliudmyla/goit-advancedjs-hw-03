# goit-advancedjs-hw-03

Homework for the GoIT course "Advanced JavaScript and TypeScript", topic 6
"HTTP requests and working with a backend".

Image search app: type a keyword, the app requests photos from the
[Pixabay API](https://pixabay.com/api/docs/) with [Axios](https://axios-http.com/)
and renders a gallery. Big images open in
[SimpleLightbox](https://simplelightbox.js.org/), notifications use
[iziToast](https://marcelodolza.github.io/iziToast/), the loader is taken from
[css-loader](https://github.com/vineethtrv/css-loader).

- `src/js/pixabay-api.js` — `getImagesByQuery(query)` HTTP request
- `src/js/render-functions.js` — SimpleLightbox instance, `createGallery`,
  `clearGallery`, `showLoader`, `hideLoader`
- `src/main.js` — app logic

## Run locally

```bash
npm install
npm run dev
```

## Live page

https://slipkoliudmyla.github.io/goit-advancedjs-hw-03/
