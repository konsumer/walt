(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});n(172),n(173),n(48);var a=n(0),r=n.n(a),l=n(142);t.default=function(e){var t=e.data.allDocumentationJs.edges.map(function(e){return e.node});return t.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),r.a.createElement(l.a,null,r.a.createElement("div",{id:"api"},r.a.createElement("section",{className:"content"},r.a.createElement("h2",null,"API"),t.map(function(e,t){var n=e.name,a=(e.kind,e.returns),l=e.params,c=e.examples,m=e.description.childMarkdownRemark.html;return r.a.createElement("article",{key:t},r.a.createElement("h3",null,n),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),!!a.length&&r.a.createElement("div",null,"returns ",a[0].type.name),!!l.length&&r.a.createElement("div",{className:"parameters"},r.a.createElement("h4",null,"Parameters"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",null,l.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.type&&e.type.name?e.type.name:"Unknown"))})))),c&&!!c.length&&r.a.createElement("div",{className:"examples"},r.a.createElement("h4",null,"Example",c.length>1&&r.a.createElement("span",null,"s")),c.map(function(e,t){var n=e.highlighted;return r.a.createElement("pre",{key:t,dangerouslySetInnerHTML:{__html:n}})})))}))))};var c="108505211"},172:function(e,t,n){var a=n(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},173:function(e,t,n){"use strict";var a=n(6),r=n(18),l=n(26),c=n(17),m=[].sort,u=[1,2,3];a(a.P+a.F*(c(function(){u.sort(void 0)})||!c(function(){u.sort(null)})||!n(13)(m)),"Array",{sort:function(e){return void 0===e?m.call(l(this)):m.call(l(this),r(e))}})}}]);
//# sourceMappingURL=component---src-pages-api-js-ec6c8675c3d04b99acee.js.map