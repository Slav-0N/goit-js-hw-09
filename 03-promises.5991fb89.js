!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("6JpON"),i=document.querySelector(".form");function u(e,t){var r=Math.random()>.3;promisEl=new Promise((function(n,o){setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(t){t.preventDefault();var r=i.elements,n=r.delay,o=r.step,l=r.amount,f=Number(n.value);if(Number(n.value)<0&&Number(o.value)<0&&Number(l.value)<=0)return void e(a).Notify.failure("Congratulations, you are talented!\n     You managed to enter incorrectly all the parameters at the same time. :-)");if(Number(n.value)<0||Number(o.value)<0)return void e(a).Notify.failure('"First delay" and "Delay step" parameters must be positive and negative numbers');if(Number(l.value)<=0)return void e(a).Notify.failure("Amount parameter must be greater than zero");for(var s=0;s<=l.value-1;s+=1)u(s+1,f),promisEl.then((function(t){var r=t.position,n=t.delay;e(a).Notify.success("Fulfilled promise ".concat(r," in ").concat(n,"ms"))})).catch((function(t){var r=t.position,n=t.delay;e(a).Notify.failure("Rejected promise ".concat(r," in ").concat(n,"ms"))})),f+=Number(o.value)}))}();
//# sourceMappingURL=03-promises.5991fb89.js.map
