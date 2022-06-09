import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

const galleryItemsEl = galleryItems
  .map((item) => 
            `<div class='gallery__item'>
                <a class="gallery__link" href=${item.original}>
                    <img class='gallery__image' 
                        src=${item.preview} 
                        data-source=${item.original}
                        alt='${item.description}'                
                    </>
                </a>
            </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItemsEl);

gallery.addEventListener("click", getModalImage);

let instanceLightbox;

function getModalImage(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  instanceLightbox = basicLightbox.create(`
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`);

  instanceLightbox.show();

  document.addEventListener("keydown", closeModal);
}

function closeModal(e) {
  if (e.code === "Escape") {
    instanceLightbox.close();
    document.removeEventListener("keydown", closeModal);
  }
}
