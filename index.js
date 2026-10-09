import{a as f,S as m,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="57960591-b55a4c5bc2965b6a82b8bf429",d="https://pixabay.com/api/";function g(i){return f.get(d,{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y({webformatURL:i,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:o}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${s}" />
      </a>
      <ul class="info">
        <li class="info-item"><b>Likes</b><span>${n}</span></li>
        <li class="info-item"><b>Views</b><span>${e}</span></li>
        <li class="info-item"><b>Comments</b><span>${t}</span></li>
        <li class="info-item"><b>Downloads</b><span>${o}</span></li>
      </ul>
    </li>`}function b(i){const r=i.map(y).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),g(r).then(s=>{if(s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{a.error({message:`Something went wrong: ${s.message}`,position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
