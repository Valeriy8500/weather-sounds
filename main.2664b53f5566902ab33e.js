(()=>{"use strict";var e={458:(e,o,r)=>{r.r(o)},146:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.cardsInfo=void 0,o.cardsInfo=[{iconPath:"images/sun.svg",iconAlt:"sun icon",backgroundPath:"url(images/summer-bg.jpg)",audioPath:"sounds/summer.mp3",id:1},{iconPath:"images/cloud-rain.svg",iconAlt:"rain icon",backgroundPath:"url(images/rainy-bg.jpg)",audioPath:"sounds/rain.mp3",id:2},{iconPath:"images/cloud-snow.svg",iconAlt:"snow icon",backgroundPath:"url(images/winter-bg.jpg)",audioPath:"sounds/winter.mp3",id:3}]}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{const e=r(146);r(458);const o=document.querySelector(".page"),t=document.querySelector(".volume-slider"),a=document.querySelector(".template-audio-card").content.querySelector(".audio-cards__container"),n=document.querySelector(".audio-cards");let c=0;e.cardsInfo.forEach((r=>{n.append(function(r){const n=a.cloneNode(!0),i=n.querySelector(".audio-cards__card"),d=n.querySelector(".audio-cards__icon"),u=n.querySelector(".audio-cards__audio"),s="images/pause.svg";return u.id=String(r.id),u.src=r.audioPath,d.src=r.iconPath,d.setAttribute("alt",r.iconAlt),i.style.backgroundImage=r.backgroundPath,i.addEventListener("click",(function(){if(t.addEventListener("input",(()=>{const e=Number(t.value);u.volume=e})),0===c)u.play(),d.src=s,c=r.id;else if(c===r.id)u.paused?(u.play(),d.src=s):(u.pause(),d.src=r.iconPath),c=r.id;else{const o=document.getElementById(`${c}`),t=document.querySelectorAll(".audio-cards__icon");t.length&&t.forEach(((o,r)=>{c-1===r&&(o.src=e.cardsInfo[r].iconPath)})),d.src=s,o.pause(),u.play(),c=r.id}o.style.backgroundImage=r.backgroundPath})),n}(r))}))})()})();
//# sourceMappingURL=main.2664b53f5566902ab33e.js.map