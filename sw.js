if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bt3UCGTe.js",revision:null},{url:"index.html",revision:"b3758fdf37292cfb96b926e20b15c92a"},{url:"registerSW.js",revision:"63ec1db6b09adb59596fdc1d06865ca2"},{url:"icon.png",revision:"dc55014464a441b46794a3b7261e8688"},{url:"manifest.webmanifest",revision:"a04fe707d4c50a3c1777b46c8ebafa1e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
