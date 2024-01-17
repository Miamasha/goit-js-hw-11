import{S as u,i as n}from"./assets/vendor-46aac873.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let y="41863553-31a4ca98ea592d85823201a44";var f=new u(".gallery a",{captionsData:"alt",captions:!0,captionPosition:"bottom",captionDelay:250});const c=document.querySelector(".gallery"),a=document.querySelector(".loader-container"),d=document.querySelector(".search-form");d.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),a.style.display="block",c.innerHTML="";let l=d.elements.searchText.value;fetch(`https://pixabay.com/api/?key=${y}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{i.hits.length===0&&n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});let r=i.hits.map(e=>`
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
                `).join("");c.innerHTML=r,f.refresh(),a.style.display="none"}).catch(i=>{a.style.display="none",n.error({message:i,position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
