import { galleryItems } from "./gallery-items.js";
// Change code below this line

const paletteContainer = document.querySelector(".gallery");
let galleryMarkup = createGalleryMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery__item a", {
  nav: true,
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>
</div>
`;
    })
    .join(" ");
}
