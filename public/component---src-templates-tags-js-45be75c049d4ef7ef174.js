(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return o}));var n=a(0),r=a.n(n),l=(a(47),a(210)),c=a(141),u=a(220);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,o=a.allMarkdownRemark,s=o.edges,m=o.totalCount,i=m+" post"+(1===m?"":"s")+' tagged with "'+n+'"';return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{home:!0,about:!0}),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,i),r.a.createElement(u.a,{edges:s}))))};var o="2233356276"},220:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),l=a(47),c=function(e){var t=e.edges;return r.a.createElement("ul",{className:"c-postList"},t.map((function(e){var t=e.node.frontmatter,a="ar"===t.lang?"u-rightToLeft":null,n=Math.ceil(parseInt(t.length)/150);return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(l.a,{to:t.path,className:a},t.title),r.a.createElement("p",{className:a},t.description),r.a.createElement("h5",null," Posted ",t.date," . ",n," min read "),t.tags?r.a.createElement("div",{className:"o-tagsContainer"},t.tags.map((function(e){return r.a.createElement(l.a,{to:"tags/"+e},e)}))):null))})))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-45be75c049d4ef7ef174.js.map