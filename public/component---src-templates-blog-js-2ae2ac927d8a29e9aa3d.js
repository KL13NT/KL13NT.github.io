(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(214),s=a(215),c=a(216),i=(a(225),a(226));t.default=function(e){var t=e.pageContext.edges;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null),l.a.createElement(c.a,{about:!0,home:!1}),l.a.createElement(r.a,null,l.a.createElement("h1",null,"Blog"),l.a.createElement("p",null,"These are not entirely thoughts."),l.a.createElement(i.a,{edges:t})))}},226:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),l=a.n(n),r=a(31),s=function(e){var t=e.edges;return l.a.createElement("ul",{className:"c-postList"},t.map((function(e){var t=e.node,a=t.frontmatter,n=t.fields,s="ar"===a.lang?"u-rightToLeft":null,c=Math.ceil(n.readingTime.minutes);return l.a.createElement("li",{key:a.title},l.a.createElement(r.Link,{key:a.title,className:"u-unstyledLink",to:a.path},l.a.createElement("h1",{className:s},a.title)),l.a.createElement("p",{className:s},a.introduction||a.description),l.a.createElement("span",null," Posted ",a.date," . ",c," min read "),a.tags?l.a.createElement("div",{className:"o-tagsContainer"},a.tags.map((function(e){return l.a.createElement(r.Link,{key:e+Math.random(),className:"u-unstyledLink",to:"tags/"+e},e)}))):null)})))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-2ae2ac927d8a29e9aa3d.js.map