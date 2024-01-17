// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let key = '41863553-31a4ca98ea592d85823201a44'
var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captions: true, captionPosition: 'bottom', captionDelay: 250,});

const gallery = document.querySelector(".gallery");
const loader =document.querySelector(".loader-container"); 
const form = document.querySelector('.search-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    loader.style.display = 'block';
    gallery.innerHTML = '';
    let searchText = form.elements["searchText"].value;
    fetch(`https://pixabay.com/api/?key=${key}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        
    }).then((jsonData) => {
        if (jsonData.hits.length === 0){
            iziToast.warning({message: 'Sorry, there are no images matching your search query. Please try again!', position: 'topRight'});
        }

        
        let galleryMarkup = jsonData.hits
            .map((image) => `
                <li class="gallery-item">
                    <a 
                    class="gallery-link" 
                    href="${image.largeImageURL}"      
                    >
                        <img
                        class="gallery-image"
                        src="${image.previewURL}"
                        
                        alt="${image.tags}"
                        width="150"
                        height="100"
                        />
                    
                    <ul class="gallery-item-info">
                        <li>
                            <div class="gallery-item-info-title">Likes</div>
                            <div class="gallery-item-info-value">${image.likes}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Views</div>
                            <div class="gallery-item-info-value">${image.views}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Comments</div>
                            <div class="gallery-item-info-value">${image.comments}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Downloads</div>
                            <div class="gallery-item-info-value">${image.downloads}</div>
                        </li>
                    </ul></a>
                </li>
                `)
            .join("");
gallery.innerHTML = galleryMarkup;
lightbox.refresh();
loader.style.display = 'none';

    })
    .catch((error) => {
        loader.style.display = 'none';
        iziToast.error({ message: error, position: 'topRight'})
    } );
});