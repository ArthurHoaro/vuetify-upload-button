!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vuetify-upload-button",[],t):"object"==typeof exports?exports["vuetify-upload-button"]=t():e["vuetify-upload-button"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1);var o=n(6)(n(7),n(8),"data-v-255ebcc8",null);e.exports=o.exports},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(4)("6e3a1154",o,!0)},function(e,t,n){t=e.exports=n(3)(!1),t.push([e.id,".upload-btn[data-v-255ebcc8]{padding-left:16px;padding-right:16px}.upload-btn input[type=file][data-v-255ebcc8]{position:absolute;height:.1px;width:.1px;overflow:hidden;opacity:0;z-index:-1}.upload-btn-hover[data-v-255ebcc8]{cursor:pointer}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=o(a),i=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(r(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(r(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(m){var r=f++;o=p||(p=a()),t=i.bind(null,o,r,!1),n=i.bind(null,o,r,!0)}else o=a(),t=l.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function i(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function l(e,t){var n=t.css,o=t.media,a=t.sourceMap;if(o&&e.setAttribute("media",o),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document,u=n(5),d={},c=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var a=u(e,t);return o(a),function(t){for(var n=[],r=0;r<a.length;r++){var i=a[r],l=d[i.id];l.refs--,n.push(l)}t?(a=u(e,t),o(a)):a=[];for(var r=0;r<n.length;r++){var l=n[r];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete d[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},a=0;a<t.length;a++){var r=t[a],i=r[0],l=r[1],s=r[2],u=r[3],d={id:e+":"+a,css:l,media:s,sourceMap:u};o[i]?o[i].parts.push(d):n.push(o[i]={id:i,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,o){var a,r=e=e||{},i=typeof e["default"];"object"!==i&&"function"!==i||(a=e,r=e["default"]);var l="function"==typeof r?r.options:r;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),o){var s=Object.create(l.computed||null);Object.keys(o).forEach(function(e){var t=o[e];s[e]=function(){return t}}),l.computed=s}return{esModule:a,exports:r,options:l}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"upload-btn",props:{accept:{"default":"*",type:String},block:{"default":!1,type:Boolean},color:{"default":"primary",type:String},disabled:{"default":!1,type:Boolean},flat:{"default":!1,type:Boolean},hover:{"default":!0,type:Boolean},icon:{"default":!1,type:Boolean},large:{"default":!1,type:Boolean},loading:{"default":!1,type:Boolean},name:{"default":"uploadFile",type:String},outline:{"default":!1,type:Boolean},ripple:{"default":!0,type:Boolean},round:{"default":!1,type:Boolean},small:{"default":!1,type:Boolean},title:{"default":"Upload",type:String},closable:{"default":!0,type:Boolean}},data:function(){return{id:Math.floor(1e5*Math.random()),filename:null}},computed:{classes:function n(){var n={"v-btn--block":this.block,"v-btn--flat":this.flat,"upload-btn-hover":this.hover,"v-btn--icon":this.icon,"v-btn--large":this.large,"v-btn--loading":this.loading,"v-btn--outline":this.outline,"v-btn--round":this.round,"v-btn--small":this.small,"v-btn--disabled":this.disabled},e="";for(var t in n)n[t]&&(e+=t+" ");return e}},methods:{change:function(e){this.$emit("change",e),e.target.files.length?this.filename=e.target.files[0].name:this.filename=null},deleteFile:function(e){this.$emit("deleteFile",e),this.filename=null,this.$refs["uploadFile-"+this.id].value=""}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-btn"},[n("input",{ref:"uploadFile-"+e.id,attrs:{id:"uploadFile-"+e.id,type:"file",name:e.name,accept:e.accept},on:{change:e.change}}),e._v(" "),n("label",{directives:[{name:"ripple",rawName:"v-ripple",value:e.ripple,expression:"ripple"}],"class":"v-btn "+e.classes+e.color+" upload-btn",attrs:{"for":"uploadFile-"+e.id}},[e._v("\n    "+e._s(e.icon?"":e.title)+"\n    "),e._t("icon")],2),e._v(" "),e.closable&&null!=e.filename?n("v-btn",{staticClass:"close",attrs:{flat:"",icon:"",color:"red","data-id":e.id},nativeOn:{click:function(t){return e.deleteFile(t)}}},[n("v-icon",[e._v("close")])],1):e._e()],1)},staticRenderFns:[]}}])});