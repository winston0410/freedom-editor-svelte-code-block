"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}let i;function l(t){i=t}const f=[],d=[],p=[],m=[],h=Promise.resolve();let $=!1;function g(t){p.push(t)}let y=!1;const b=new Set;function _(){if(!y){y=!0;do{for(let t=0;t<f.length;t+=1){const e=f[t];l(e),x(e.$$)}for(f.length=0;d.length;)d.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];b.has(e)||(b.add(e),e())}p.length=0}while(f.length);for(;m.length;)m.pop()();$=!1,y=!1,b.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const v=new Set;function k(t,e){-1===t.$$.dirty[0]&&(f.push(t),$||($=!0,h.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function w(c,a,u,f,d,p,m=[-1]){const h=i;l(c);const $=a.props||{},y=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:m};let b=!1;if(y.ctx=u?u(c,$,(t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),b&&k(c,t)),e}):[],y.update(),b=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(s)}else y.fragment&&y.fragment.c();a.intro&&((x=c.$$.fragment)&&x.i&&(v.delete(x),x.i(w))),function(t,n,c){const{fragment:a,on_mount:s,on_destroy:u,after_update:i}=t.$$;a&&a.m(n,c),g(()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(g)}(c,a.target,a.anchor),_()}var x,w;l(h)}var E=t=>t?t.data.code:"";function C(e){let n,o,r,c=E(e[0])+"";return{c(){var t,e,a,s;n=u("pre"),o=u("code"),t=c,r=document.createTextNode(t),e=o,a="contenteditable",null==(s="")?e.removeAttribute(a):e.getAttribute(a)!==s&&e.setAttribute(a,s)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),a(n,o),a(o,r)},p(t,[e]){1&e&&c!==(c=E(t[0])+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,c)},i:t,o:t,d(t){t&&s(n)}}}function D(t,e,n){let{i18n:o}=e,{savedData:r}=e;return t.$set=t=>{"i18n"in t&&n(1,o=t.i18n),"savedData"in t&&n(0,r=t.savedData)},[r,o]}var A,S=(A=Object.freeze({__proto__:null,default:class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),w(this,t,D,C,c,{i18n:1,savedData:0})}}}))&&A.default||A;var j={Code:class{constructor(t){this.options={i18n:{locale:"en-US",rtl:"ltr",translations:{}},controllers:[],...t}}render(t,e){const n=document.createElement("div");n.classList.add("freedom-editor-blocks",this.constructor.name+"-block"),n.dataset.blockType=this.constructor.name;new S({target:n,props:{i18n:t,savedData:e}});return n}save(t){const e=t.querySelector("code");if(""!==e.textContent)return{type:this.constructor.name,data:{code:e.textContent}}}}};module.exports=j;
