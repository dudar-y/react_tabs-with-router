(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c.n(n),s=c(7),i=c(2),j=(c(0),c(3)),r=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},b=c(15),l=c.n(b),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}];var o=function(){var e,t=Object(i.r)().tabId||"",c=(e=t,d.find((function(t){return t.id===e})));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:d.map((function(e){return Object(j.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":e.id===t}),children:Object(j.jsx)(s.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:c?c.content:"Please select a tab"})]})},x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(o,{})]})},h=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},O=(c(31),c(32),c(33),function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})}),m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.c,{to:"/",className:O,children:"Home"}),Object(j.jsx)(s.c,{to:"/tabs",className:O,children:"Tabs"})]})})}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(i.b,{})})})]})},u=function(){return Object(j.jsx)(s.a,{children:Object(j.jsx)(i.e,{children:Object(j.jsxs)(i.c,{path:"/",element:Object(j.jsx)(m,{}),children:[Object(j.jsx)(i.c,{index:!0,element:Object(j.jsx)(r,{})}),Object(j.jsx)(i.c,{path:"home",element:Object(j.jsx)(i.a,{to:"/"})}),Object(j.jsx)(i.c,{path:"tabs",children:Object(j.jsx)(i.c,{path:":tabId?",element:Object(j.jsx)(x,{})})}),Object(j.jsx)(i.c,{path:"*",element:Object(j.jsx)(h,{})})]})})})};a.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f397c911.chunk.js.map