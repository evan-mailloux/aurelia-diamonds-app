const CACHE="aurelia-v2";
const FILES=["./", "index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/cat-bracelets.jpg", "img/cat-earrings.jpg", "img/cat-necklaces.jpg", "img/cat-rings.jpg", "img/club.jpg", "img/e1.jpg", "img/e2.jpg", "img/e3.jpg", "img/e4.jpg", "img/e5.jpg", "img/e6.jpg", "img/hero.jpg", "img/jeweller.jpg", "img/n1.jpg", "img/n2.jpg", "img/n3.jpg", "img/n4.jpg", "img/n5.jpg", "img/r1.jpg", "img/r2.jpg", "img/r3.jpg", "img/r4.jpg", "img/r5.jpg", "img/r6.jpg", "img/r7.jpg", "img/tryon.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res}).catch(()=>r)));return}
  if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put("index.html",cp));return res}).catch(()=>caches.match("index.html")));return}
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));
});
