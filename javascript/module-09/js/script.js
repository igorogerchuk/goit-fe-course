'use strict';

import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(galleryItem =>
  gallery.appendChild(createGalleryItem(galleryItem)),
);

function createGalleryItem(galleryItemData) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  galleryItem.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__link"
  href='${galleryItemData.original}'>
  <img
    class="gallery__image"
    src='${galleryItemData.preview}'
    data-source='${galleryItemData.original}'
    alt='${galleryItemData.description}'
  />

  <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span>
</a>`,
  );
  return galleryItem;
}

gallery.addEventListener('click', openLightbox);

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox___image');

function openLightbox(e) {
  e.preventDefault();

  if (e.currentTarget === e.target) {
    return;
  }

  lightboxImage.src = e.target.dataset.source;
  lightboxImage.alt = e.target.alt;

  lightbox.classList.add('is-open');

  window.addEventListener('keydown', handleKeyDown);
}

lightbox.addEventListener('click', closeLightbox);

function closeLightbox(e) {
  if (e.target === lightboxImage) {
    return;
  }
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';

  window.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeLightbox(e);
}
