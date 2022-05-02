// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const createList = document.querySelector('.gallery')

const createEl = galleryItems.map(value => {
    const imagEl = (`
<a class="gallery__item" href="${value.original}">
  <img class="gallery__image" 
  src="${value.preview}" 
  alt="${value.description}"
  title="${value.description}" />
</a>`)
  return imagEl
}).join('')

createList.insertAdjacentHTML('afterbegin', createEl)

console.log(createEl)


  var lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,


  });

