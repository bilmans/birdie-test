(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),s=n.n(i),a=(n(10),n(2)),o=(n(11),n(12),n(5)),h=n.n(o),j=(n(14),n(0)),u=function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(j.jsxs)("form",{action:"/",method:"get",children:[Object(j.jsx)("label",{htmlFor:"header-search",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Search Events"})}),Object(j.jsx)("input",{className:"input",value:t,onInput:function(e){return n(e.target.value)},type:"text",id:"header-search",placeholder:"Filter",name:"s"})]})};var l=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=(t[0],t[1]),r=window.location.search,i=new URLSearchParams(r).get("s"),s=Object(c.useState)(i||""),o=Object(a.a)(s,2),l=o[0],d=o[1],b=Object(c.useState)([]),f=Object(a.a)(b,2),O=f[0],x=f[1],p=Object(c.useState)([]),v=Object(a.a)(p,2),m=v[0],g=v[1],y="http://localhost:3000/event";function w(){fetch(y).then((function(e){if(!e.ok)throw Error("No access to database");return e.json()})).then((function(e){return n(e),console.log(e),e})).then((function(e){!function(e,t){x(t?e.filter((function(e){var n=t.toLowerCase().split(" "),c=[];for(var r in n)c.push(S(n[r],e));return c.reduce((function(e,t){return e&&t}))})):e)}(e,i)}))}function S(e,t){for(var n in t){if("string"===typeof t[n])if(t[n].toLowerCase().includes(e))return!0}return!1}function C(e){var t=new Date(e);return h()(t).format("YYYY-MM-DD HH:mm")}return Object(c.useEffect)((function(){w(),fetch(y+"/careRecipient").then((function(e){if(!e.ok)throw Error("No access to database");return e.json()})).then((function(e){g(e)})),console.log(O)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Choose a care recipient:"}),Object(j.jsx)("select",{name:"careRecipient",onChange:function(e){d(e.target.value)},children:m.map((function(e){return Object(j.jsx)("option",{value:e.care_recipient_id,children:e.care_recipient_id})}))}),Object(j.jsx)(u,{searchQuery:l,setSearchQuery:d}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"content-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Event Type"}),Object(j.jsx)("th",{children:"Visit"}),Object(j.jsx)("th",{children:"Care Recipient"}),Object(j.jsx)("th",{children:"Caregiver"}),Object(j.jsx)("th",{children:"Notes"})]})}),Object(j.jsx)("tbody",{children:O.map((function(e){return function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:C(e.timestamp)}),Object(j.jsx)("th",{children:e.event_type}),Object(j.jsx)("th",{children:e.visit_id}),Object(j.jsx)("th",{children:e.care_recipient_id}),Object(j.jsx)("th",{children:e.caregiver_id}),Object(j.jsx)("th",{children:e.payload.note})]},e.id)}(e)}))})]})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),d()}],[[16,1,2]]]);
//# sourceMappingURL=main.73782a81.chunk.js.map