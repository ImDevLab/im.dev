_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{"5xSE":function(n,e,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,e,a){"use strict";a.d(e,"a",(function(){return r}));var t=a("KQm4"),s=a("rePB"),i=a("q1tI"),p=a.n(i),o=a("98BF"),c=a("Zb5r"),l=a("AOjV"),u=p.a.createElement;function r(n){var e=n.plugin,a=n.name,i=o.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,(function(n,e,a){return"".concat(e," ").concat(a.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(n){return!i.includes(n)})).slice(0,2);return u(p.a.Fragment,null,u("p",null,"By default, ",i.length?"only ".concat(Object(c.a)(i)):"no"," variants are generated for ",a," utilities."),u("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",u("code",null,e)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",i.length>0?"also ":"","generate"," ",Object(c.a)(r)," variants:"),u(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},e,i),add:Object(s.a)({},e,[].concat(Object(t.a)(i),Object(t.a)(r)))}))}},AOjV:function(n,e,a){"use strict";a.d(e,"a",(function(){return r}));var t=a("q1tI"),s=a.n(t),i=a("Btb4"),p=a.n(i),o=a("AI3G"),c=a("iuhU"),l=s.a.createElement;function u(n){var e=n.edits,a=n.indent,s=void 0===a?"":a,i=n.type,o=void 0===i?"inserted":i;return l("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===o,"deleted-sign deleted":"inserted"!==o})},Object.keys(e).map((function(n,a){return l(t.Fragment,{key:a},l("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===o,deleted:"inserted"!==o})},"inserted"===o?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(i=n)?i:"'".concat(i,"'"),":"," ",p()(e[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,e){return"[".concat(e.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,e){return"".concat(0===e?"":"+ "+s).concat(n)})).join("\n"),",\n");var i})))}function r(n){var e=n.path,a=n.add,s=n.remove,i=n.before,p=n.after;return e="string"===typeof e?e.split("."):e,l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((function(n,e){return l(t.Fragment,{key:e},"  ","  ".repeat(e+1),n,": ","{\n")})),i&&Object(o.a)(i).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")}))),s&&l(u,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&l(u,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),l("span",{className:"token unchanged"},p&&Object(o.a)(p).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")})),e.map((function(n,a){return l(t.Fragment,{key:a},"  ","  ".repeat(e.length-a),"}\n")})),"  }")))}},Btb4:function(n,e,a){"use strict";const t=a("5xSE"),s=a("p+I8"),i=a("GAX2").default;n.exports=(n,e,a)=>{const p=[];return function n(e,a,o){let c;(a=a||{}).indent=a.indent||"\t",o=o||"",c=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=n=>{if(void 0===a.inlineCharacterLimit)return n;const e=n.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return e.length<=a.inlineCharacterLimit?e:n.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+a.indent)};if(-1!==p.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||t(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";p.push(e);const t="["+c.newLine+e.map((t,s)=>{const i=e.length-1===s?c.newLine:","+c.newLineOrSpace;let p=n(t,a,o+a.indent);return a.transform&&(p=a.transform(e,s,p)),c.indent+p+i}).join("")+c.pad+"]";return p.pop(),l(t)}if(s(e)){let t=Object.keys(e).concat(i(e));if(a.filter&&(t=t.filter(n=>a.filter(e,n))),0===t.length)return"{}";p.push(e);const s="{"+c.newLine+t.map((s,i)=>{const p=t.length-1===i?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,u=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),r=l||u?s:n(s,a);let m=n(e[s],a,o+a.indent);return a.transform&&(m=a.transform(e,s,m)),c.indent+String(r)+": "+m+p}).join("")+c.pad+"}";return p.pop(),l(s)}return e=String(e).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,a)}},"Ca+n":function(n,e,a){"use strict";a.d(e,"a",(function(){return m}));var t=a("q1tI"),s=a.n(t),i=a("S5AU"),p=a.n(i),o=a("iuhU"),c=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function u(n){var e=n.children,a=n.active,t=n.onClick;return c("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":a,"text-gray-500":!a}),onClick:t},e)}var r=function(n){return'<div class="'.concat(n,'"></div>')};function m(n){var e=n.classNames,a=n.snippet,s=void 0===a?r:a,i=n.preview,m=n.previewClassName,d=Array.isArray(e[0])?e.length:1,g=Object(t.useState)(0),f=g[0],b=g[1];return c("div",{className:"mt-8"},c("div",{className:"flex justify-center"},c("div",{className:"grid grid-cols-5 mb-2 bg-white"},c(u,{active:0===f,onClick:function(){return b(0)}},c("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"all")),c(u,{active:1===f,onClick:function(){return b(1)}},c("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"sm")),c(u,{active:2===f,onClick:function(){return b(2)}},c("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"md")),c(u,{active:3===f,onClick:function(){return b(3)}},c("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),c("p",{className:"text-xs"},"lg")),c(u,{active:4===f,onClick:function(){return b(4)}},c("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},c("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),c("p",{className:"text-xs"},"xl")))),c("div",{className:"overflow-hidden mb-8"},c("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},c("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},c("code",{className:"inline-block p-4"},p()(s(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((function(n,e){return"{{CLASSNAMES[".concat(e,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(n,a){if(a%2===1){var t=n.match(/\[([0-9]+)\]/);return(t?e[parseInt(t[1],10)]:e).map((function(n,e){return n?c("span",{key:"".concat(a,"-").concat(e),className:f===e?"text-code-yellow":""},0===e?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(n){return"".concat(l[e]).concat(n)})).join(" ")):null})).filter(Boolean)}return n}))))),c("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",m,{"p-4":!m})},i(function(n){if(d>1)return e.map((function(e){for(var a=n;a>=0;a--)if(e[a])return e[a].replace(/\(([^)]+)\)/g,"$1")}));for(var a=n;a>=0;a--)if(e[a])return e[a].replace(/\(([^)]+)\)/g,"$1")}(f)))))}},GAX2:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.getOwnPropertySymbols(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))},"IBu/":function(n,e,a){"use strict";const t=a("sQdO");n.exports=n=>{const e=t(n);if(0===e)return n;const a=new RegExp(`^[ \\t]{${e}}`,"gm");return n.replace(a,"")}},LZQ4:function(n,e,a){"use strict";a.r(e),a.d(e,"Layout",(function(){return h})),a.d(e,"classes",(function(){return x})),a.d(e,"meta",(function(){return y})),a.d(e,"tableOfContents",(function(){return O})),a.d(e,"default",(function(){return N}));var t=a("wx14"),s=a("Ff2n"),i=a("q1tI"),p=a.n(i),o=a("7ljp"),c=a("YFqc"),l=a.n(c),u=a("tc9R"),r=a("pOT7"),m=a("vRWG"),d=a("I6Nb"),g=a("tnc+"),f=a.n(g),b=a("8C7G"),v=a("wH44"),k=a("Ca+n"),h=(p.a.createElement,m.DocumentationLayout),x={plugin:f.a},y={title:"Line Height",description:"Utilities for controlling the leading (line height) of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},O=[{title:"Relative line-heights",slug:"relative-line-heights",children:[]},{title:"Fixed line-heights",slug:"fixed-line-heights",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:h,classes:x,meta:y,tableOfContents:O},w=d.ContentsLayout;function N(n){var e=n.components,a=Object(s.a)(n,["components"]);return Object(o.a)(w,Object(t.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(o.a)(u.a,{level:2,id:"relative-line-heights",toc:!0},"Relative line-heights"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"leading-none"),", ",Object(o.a)("inlineCode",{parentName:"p"},"leading-tight"),", ",Object(o.a)("inlineCode",{parentName:"p"},"leading-snug"),", ",Object(o.a)("inlineCode",{parentName:"p"},"leading-normal"),", ",Object(o.a)("inlineCode",{parentName:"p"},"leading-relaxed"),", and ",Object(o.a)("inlineCode",{parentName:"p"},"leading-loose")," utilities to give an element a relative line-height based on its current font-size."),Object(o.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-none</p>\n    <p class="leading-none text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-tight</p>\n    <p class="leading-tight text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-snug</p>\n    <p class="leading-snug text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-normal</p>\n    <p class="leading-normal text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-relaxed</p>\n    <p class="leading-relaxed text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="text-sm text-gray-600">.leading-loose</p>\n    <p class="leading-loose text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-none ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-tight ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-snug ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-normal ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-relaxed ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-loose ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(u.a,{level:2,id:"fixed-line-heights",toc:!0,badge:"v1.2.0+",mdxType:"Heading"},"Fixed line-heights"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"leading-{size}")," utilities to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element's final size."),Object(o.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-3</p>\n    <p class="leading-3 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-4</p>\n    <p class="leading-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-5</p>\n    <p class="leading-5 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-6</p>\n    <p class="leading-6 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-7</p>\n    <p class="leading-7 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-8</p>\n    <p class="leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="text-sm text-gray-600">.leading-9</p>\n    <p class="leading-9 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="text-sm text-gray-600">.leading-10</p>\n    <p class="leading-10 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-3 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-5 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-7 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-8 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-9 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leading-10 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the line height of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing line height utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:leading-loose")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"leading-loose")," utility at only medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(k.a,{classNames:["leading-none","leading-tight","leading-normal","leading-relaxed","leading-loose"],snippet:function(n){return'\n    <p class="'.concat(n,' ...">Lorem ipsum dolor sit amet ...</p>\n  ')},preview:function(n){return Object(o.a)("p",{className:"text-gray-800 ".concat(n)},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.")},mdxType:"ResponsiveCodeSample"}),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"By default Tailwind provides six relative and eight fixed ",Object(o.a)("inlineCode",{parentName:"p"},"line-height")," utilities. You change, add, or remove these by customizing the ",Object(o.a)("inlineCode",{parentName:"p"},"lineHeight")," section of your Tailwind theme config."),Object(o.a)("pre",{className:"language-diff"},Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       lineHeight: {\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'extra-loose': '2.5',\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '12': '3rem',\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(o.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(b.a,{plugin:"lineHeight",mdxType:"Variants"}),Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(v.a,{plugin:"lineHeight",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},S5AU:function(n,e,a){"use strict";const t=a("IBu/"),s=a("S6im");n.exports=(n,e=0,a)=>s(t(n),e,a)},S6im:function(n,e,a){"use strict";n.exports=(n,e=1,a)=>{if(a={indent:" ",includeEmptyLines:!1,...a},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof a.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``);if(0===e)return n;const t=a.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(t,a.indent.repeat(e))}},YuTi:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Zb5r:function(n,e,a){"use strict";function t(n){return n.reduce((function(e,a,t){return 0===t?a:t===n.length-1?"".concat(e," and ").concat(a):"".concat(e,", ").concat(a)}),"")}a.d(e,"a",(function(){return t}))},hCV3:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/line-height",function(){return a("LZQ4")}])},"p+I8":function(n,e,a){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},pOT7:function(n,e,a){"use strict";a.d(e,"a",(function(){return o}));var t=a("q1tI"),s=a.n(t),i=a("iuhU"),p=s.a.createElement;function o(n){var e=n.preview,a=n.snippet,t=n.previewClassName;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(i.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:"rounded-b-lg bg-gray-800"},p("pre",{className:"scrollbar-none m-0 p-0 language-html"},p("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:a}}))))}},sQdO:function(n,e,a){"use strict";n.exports=n=>{const e=n.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((n,e)=>Math.min(n,e.length),1/0):0}},"tnc+":function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:n,e:e,theme:a,variants:t}){n(s.default.fromPairs(s.default.map(a("lineHeight"),(n,a)=>[`.${e(`leading-${a}`)}`,{"line-height":n}])),t("lineHeight"))}};var t,s=(t=a("LvDl"))&&t.__esModule?t:{default:t}},wH44:function(n,e,a){"use strict";a.d(e,"a",(function(){return m}));var t=a("rePB"),s=a("q1tI"),i=a.n(s),p=a("AOjV"),o=a("AI3G"),c=a("Zb5r"),l=i.a.createElement;function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(t.a)(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function m(n){var e=n.plugin,a=n.name,s=Object(o.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,(function(n,e,a){return"".concat(e," ").concat(a.toLowerCase())})),l(i.a.Fragment,null,l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(p.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,e){return r(r({},n),{},Object(t.a)({},e,!1))}),{})}))}},yLpj:function(n,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}n.exports=a}},[["hCV3",0,2,5,1,3,4]]]);