var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var o=i("iQIUW");function r(e,t){return new Promise(((n,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}function l(e,t){o.Notify.init({useIcon:!1}),o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function s(e,t){o.Notify.init({useIcon:!1}),o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(this.elements.delay.value),n=Number(this.elements.step.value),i=Number(this.elements.amount.value);for(let e=1;e<=i;e++)r(e,t+(e-1)*n).then((({position:e,delay:t})=>{l(e,t)})).catch((({position:e,delay:t})=>{s(e,t)}))}));
//# sourceMappingURL=03-promises.2046ce13.js.map
