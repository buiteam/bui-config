!function(){var e,t;!function(n,r){function i(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function o(){}var u=i("Function"),c={};o.prototype.exec=function(){function e(e){return o.get(e).exec()}var t=this;if(this.execed)return t.exports;this.execed=!0;var n=t.factory,i=u(n)?n(e,t.exports={},t):n;return i===r&&(i=t.exports),delete t.factory,t.exports=i,i},e=function(e,t,n){var r={id:e,deps:t,factory:n};o.save(r)},o.save=function(e){var t=o.get(e.id);t.id=e.id,t.dependencies=e.deps,t.factory=e.factory},o.get=function(e){return c[e]||(c[e]=new o)},t=function(e){var t=o.get(e);return t.execed||t.exec(),t.exports}}(this),e("bui-config/1.1.0/config",[],function(){function e(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}var t=window.BUI=window.BUI||{};t.use=seajs.use,t.config=seajs.config;var n=document.getElementsByTagName("script"),r=n[n.length-1],i=e(r),o=i.substring(0,i.lastIndexOf("/")),u="true"===r.getAttribute("data-debug")?!0:!1;t.loaderScript=r,seajs.config({paths:{bui:o}}),t.setDebug=function(e){t.debug=e,e&&seajs.config({map:[[/.js$/,"-debug.js"]]})},t.setDebug(u),window.jQuery&&window.define("jquery",[],function(){return window.jQuery})}),t("bui-config/1.1.0/config")}();