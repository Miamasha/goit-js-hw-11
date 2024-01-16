import{S as c,i as s}from"./assets/vendor-46aac873.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();let d="41863553-31a4ca98ea592d85823201a44";var u=new c(".gallery a",{captionsData:"alt",captions:!0,captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".search-form");n.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation();let l=n.elements.searchText.value;fetch(`https://pixabay.com/api/?key=${d}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{i.hits.length===0&&s.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const r=document.querySelector(".gallery");let t=i.hits.map(e=>`
                <li class="gallery-item">
                    <a 
                    class="gallery-link" 
                    href="${e.largeImageURL}"      
                    >
                        <img
                        class="gallery-image"
                        src="${e.previewURL}"
                        
                        alt="${e.tags}"
                        width="150"
                        height="100"
                        />
                    
                    <ul class="gallery-item-info">
                        <li>
                            <div class="gallery-item-info-title">Likes</div>
                            <div class="gallery-item-info-value">${e.likes}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Views</div>
                            <div class="gallery-item-info-value">${e.views}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Comments</div>
                            <div class="gallery-item-info-value">${e.comments}</div>
                        </li>
                        <li>
                            <div class="gallery-item-info-title">Downloads</div>
                            <div class="gallery-item-info-value">${e.downloads}</div>
                        </li>
                    </ul></a>
                </li>
                `).join("");r.innerHTML=t,u.refresh()}).catch(i=>s.error({message:i,position:"topRight"}))});
//# sourceMappingURL=commonHelpers.js.map
