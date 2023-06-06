var t="ontouchstart"in window||navigator.msMaxTouchPoints;function e(t,e){const n=t.match(new RegExp(`.*(?=${e})`));return null===n?"":n.join("")}function n(t,e){const n=t.match(new RegExp(`[^${e}]+$`));return null===n?"":n[0]}function i(t){const e=t.match(/\d+(?!.*\d)/g);return null===e?"":e[0]}function o(t){console.warn("Can’t parse the file sequence correctly, returning [].\nReason: "+t)}const s=[];class c{constructor(t){if(this.config={canvas:null,list:[],from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0,smoothing:!0,...t},""==this.config.from&&""==this.config.to&&0==this.config.list.length)return console.error("Missing filenames."),!1;if(null===this.config.canvas){const t=document.createElement("canvas");document.body.appendChild(t),this.config.canvas=t,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d"),this.list=this.config.list.length>0?this.config.list:function(t,s,c=1){const a=[],h=i(t);if(""===h)return o("the first filename doesn’t contain a number."),a;const r=i(s);if(""===r)return o("the last filename doesn’t contain a number."),a;const g=e(t,h),f=n(t,h);if(g!==e(s,r)||f!==n(s,r))return o("the base-names of '"+t+"' and '"+s+"' don’t match."),a;if((0==h.charAt(0)||0==r.charAt(0))&&h.length!=r.length)return o("wrong number of leading zeros."),a;const l=parseInt(h),u=parseInt(r);for(let t=l;t<=u;t+=c)a.push(g+(t+"").padStart(h.length,"0")+f);return a}(this.config.from,this.config.to,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?new u(this.images,[this.list.shift()],a.bind(null,this)):"all"==this.config.autoLoad&&this.load()}load(){this.load=function(){console.log("load() can be called only once.")},new u(this.images,this.list,a.bind(null,this),h.bind(null,this))}run(){const e=t?"touchmove":"mousemove",n=t?"touchstart":"mousedown",i=t?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(e,l.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(e,f.bind(null,this)),this.ctx.canvas.addEventListener(n,r.bind(null,this)),document.addEventListener(i,g.bind(null,this));else if("auto"===this.config.playMode){let t=0;const e=n=>{const i=n-t;i>=this.config.interval&&(this.nextImage(),t=Math.max(n,n-(i-this.config.interval))),requestAnimationFrame(e)};requestAnimationFrame(e)}}nextImage(t){t||(t=this.config.loop),"pong"===t?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}drawImage(t){if(void 0===t&&(t=this.current),t<0||t>=this.images.length)return;const e=this.config.hiDPI?window.devicePixelRatio:1,n=this.ctx.canvas.width/e,i=this.ctx.canvas.height/e,o=n/i,s=this.images[t],c=s.width/s.height;let a,h;"cover"==this.config.scaleMode?o>c?(a=n,h=a/c):(h=i,a=h*c):"contain"==this.config.scaleMode?o<c?(a=n,h=a/c):(h=i,a=h*c):(a=s.width,h=s.height);const r=n/2-a/2,g=i/2-h/2;this.ctx.save(),this.ctx.scale(e,e),this.ctx.clearRect(0,0,n,i),this.ctx.imageSmoothingEnabled=this.config.smoothing,this.ctx.drawImage(s,0,0,s.width,s.height,Math.floor(r),Math.floor(g),Math.ceil(a),Math.ceil(h)),this.ctx.restore()}size(t,e){const n=this.config.hiDPI?window.devicePixelRatio:1,i=this.ctx.canvas;i.width=t*n,i.height=e*n,i.style.width=t+"px",i.style.height=e+"px",this.drawImage()}}function a(t,e){e.id>t.lastLoaded&&t.config.showLoadedImages&&(t.drawImage(e.id),t.lastLoaded=e.id),"function"==typeof t.config.imageLoad&&(e.sequencer=t,t.config.imageLoad(e)),"function"==typeof t.imageLoad&&(e.sequencer=t,t.imageLoad(e)),0===e.id&&(t.config.fitFirstImage&&(t.size(e.img.width,e.img.height),t.config.fitFirstImage=!1),t.drawImage(0),t.current=0)}function h(t,e){"function"==typeof t.config.queueComplete&&(e.sequencer=t,t.config.queueComplete(e)),"function"==typeof t.queueComplete&&t.queueComplete(e),t.run(),t.config.showLoadedImages||"none"===t.config.playMode||t.drawImage(0)}function r(t,e){let n,i;e.touches?(n=e.touches[0].pageX-e.touches[0].target.offsetLeft,i=e.touches[0].pageY-e.touches[0].target.offsetTop):(n=e.offsetX,i=e.offsetY),t.pointer={x:n,y:i,down:!0,currentId:t.current}}function g(t,e){t.pointer.down=!1}function f(t,e){if(!t.pointer.down)return;const n=t.images.length;let i,o;e.touches?(i=e.touches[0].pageX-e.touches[0].target.offsetLeft,o=e.touches[0].pageY-e.touches[0].target.offsetTop):(i=e.offsetX,o=e.offsetY);let s=0;/x/.test(t.config.direction)?s=(i-t.pointer.x)*t.directionSign:/y/.test(t.config.direction)&&(s=(o-t.pointer.y)*t.directionSign);let c=t.pointer.currentId+Math.floor(s/t.config.dragAmount);c<0?c=n- -c%n:c>n&&(c%=n),c!=t.current&&(t.drawImage(c),t.current=c),e.preventDefault()}function l(t,e){const n=t.images.length,i=t.config.hiDPI?window.devicePixelRatio:1;let o,s,c,a;e.touches?(o=e.touches[0].pageX-e.touches[0].target.offsetLeft,s=e.touches[0].pageY-e.touches[0].target.offsetTop):(o=e.offsetX,s=e.offsetY),"x"==t.config.direction?(a=t.ctx.canvas.width/i,c=o):"-x"==t.config.direction?(a=t.ctx.canvas.width/i,c=a-o-1):"y"==t.config.direction?(a=t.ctx.canvas.height/i,c=s):"-y"==t.config.direction&&(a=t.ctx.canvas.height/i,c=a-s-1);const h=(r=Math.floor(c/a*n),f=n-1,r<(g=0)?g:r>f?f:r);var r,g,f;h!=t.current&&(t.drawImage(h),t.current=h),e.preventDefault()}function u(t,e,n,i){const o=Math.min(e.length,4);let s=t.length-1,c=t.length;for(let t=0;t<o;t++)a();function a(){if(s>=e.length-1)return;s++;const o=new Image;var h;o.src=e[s],h=s,o.onload=t=>{"function"==typeof n&&n({id:h,img:o,count:++c,total:e.length}),c<e.length&&a(),c==e.length&&"function"==typeof i&&i({total:e.length})},o.onerror=t=>{console.error("Error with: "+e[h])},t.push(o)}}var d={make:function(t){const e=new c(t);return!1!==e&&s.push(e),e},instances:s};export{d as default};