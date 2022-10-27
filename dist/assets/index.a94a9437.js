(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function c(){}function A(e){return e()}function j(){return Object.create(null)}function g(e){e.forEach(A)}function L(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function N(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode.removeChild(e)}function S(e){return document.createElement(e)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function z(e){return Array.from(e.childNodes)}let b;function f(e){b=e}const a=[],E=[],p=[],O=[],D=Promise.resolve();let y=!1;function G(){y||(y=!0,D.then(B))}function $(e){p.push(e)}const _=new Set;let h=0;function B(){const e=b;do{for(;h<a.length;){const t=a[h];h++,f(t),J(t.$$)}for(f(null),a.length=0,h=0;E.length;)E.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(a.length);for(;O.length;)O.pop()();y=!1,_.clear(),f(e)}function J(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const m=new Set;let Q;function P(e,t){e&&e.i&&(m.delete(e),e.i(t))}function R(e,t,n,o){if(e&&e.o){if(m.has(e))return;m.add(e),Q.c.push(()=>{m.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function U(e){e&&e.c()}function I(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||$(()=>{const l=e.$$.on_mount.map(A).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...l):g(l),e.$$.on_mount=[]}),i.forEach($)}function Z(e,t){const n=e.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,t){e.$$.dirty[0]===-1&&(a.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,o,r,i,l,H=[-1]){const d=b;f(e);const s=e.$$={fragment:null,ctx:[],props:i,update:c,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:j(),dirty:H,skip_bound:!1,root:t.target||d.$$.root};l&&l(s.root);let w=!1;if(s.ctx=n?n(e,t.props||{},(u,v,...C)=>{const k=C.length?C[0]:v;return s.ctx&&r(s.ctx[u],s.ctx[u]=k)&&(!s.skip_bound&&s.bound[u]&&s.bound[u](k),w&&V(e,u)),v}):[],s.update(),w=!0,g(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const u=z(t.target);s.fragment&&s.fragment.l(u),u.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&P(e.$$.fragment),I(e,t.target,t.anchor,t.customElement),B()}f(d)}class F{$destroy(){Z(this,1),this.$destroy=c}$on(t,n){if(!L(n))return c;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let t;return{c(){t=S("nav"),t.innerHTML=`<ul class="logo"><li><a href="https://bloomjobs.live"><img src="" style="height: 30px"/></a></li> 
		<li><a href="https://bloomjobs.live" class="secondary"><strong>Bloom</strong></a></li></ul> 
	<ul style="flex: 1; justify-content: center"><li class="search-container"><input type="search" id="search" placeholder="Search..."/></li></ul> 
	<ul class="profile"><li><a href="#" class="secondary" style="padding: 8px"><svg height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img" fill="none"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></li></ul>`,T(t,"class","container-fluid")},m(n,o){N(n,t,o)},p:c,i:c,o:c,d(n){n&&x(t)}}}class X extends F{constructor(t){super(),q(this,t,null,W,M,{})}}function Y(e){let t,n,o;return n=new X({}),{c(){t=S("main"),U(n.$$.fragment)},m(r,i){N(r,t,i),I(n,t,null),o=!0},p:c,i(r){o||(P(n.$$.fragment,r),o=!0)},o(r){R(n.$$.fragment,r),o=!1},d(r){r&&x(t),Z(n)}}}class ee extends F{constructor(t){super(),q(this,t,null,Y,M,{})}}new ee({target:document.getElementById("app")});
