import { galleryItems } from './gallery-items.js';
// Change code below this line

const paletteContainer = document.querySelector(".gallery");
let cardsMarkup = createGalleryMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

const imageDivs = document.querySelectorAll('.gallery__image');


imageDivs.forEach(function (image) {
    image.addEventListener("click", onPaletteContainerClick);
});

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(item => {
        return `
  <div class="gallery__item">
  <a class="gallery__link" href=${item.preview}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>
`;
    })
        .join(" ");
}
function onPaletteContainerClick(evt) {

    evt.preventDefault();
    const image = this;
    let dataSourseAtr = image.getAttribute('data-source');

     window.instance = basicLightbox.create(`
    <img src=${dataSourseAtr} width="800" height="600">
`);
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    } else {

        window.instance.show();
    }
    window.onkeydown = function (event) {
        if (event.keyCode == 27) {
            if (window.instance.visible()) {
                window.instance.close();
            }
        }
    };

}






