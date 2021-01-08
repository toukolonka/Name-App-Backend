(this["webpackJsonpname-app-backend"]=this["webpackJsonpname-app-backend"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),o=n(8),r=n.n(o),i=n(56),s=n(53),l=n.n(s),j=n(69),u=n(40),b=n(70),h=n.n(b),d=n(51),p=n(12),m=n(28),O=n(151),x=n(152),f=n(155),g=n(153),v=n(165),k=n(149),w=n(11),y=n(48),C=n(74),N=n.n(C),I=n(150),B=n(154),R=n(166),S=n(75),z=n.n(S),A=n(163),L=Object(k.a)((function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:0,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(w.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),E=function(e){var t=e.checkName,n=e.checkChange,o=Object(a.useState)(null),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Boolean(i),j=L(),b=Object(y.a)(),h=Object(I.a)(b.breakpoints.down("xs")),d=Object(p.f)(),k=function(e){d.push(e),s(null)};return Object(c.jsx)("div",{className:j.root,children:Object(c.jsx)(O.a,{position:"static",children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(g.a,{className:j.title,variant:"h6",noWrap:!0,children:"Name-App"}),Object(c.jsxs)("div",{className:j.search,children:[Object(c.jsx)("div",{className:j.searchIcon,children:Object(c.jsx)(N.a,{})}),Object(c.jsx)(v.a,{placeholder:"Filter",classes:{root:j.inputRoot,input:j.inputInput},inputProps:{"aria-label":"search"},value:t,onChange:n})]}),Object(c.jsx)("div",{className:j.grow}),h?Object(c.jsxs)("div",{children:[Object(c.jsx)(B.a,{edge:"start",className:j.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(c.jsx)(z.a,{})}),Object(c.jsxs)(A.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){return s(null)},children:[Object(c.jsx)(R.a,{onClick:function(){return k("/")},children:"Amount"}),Object(c.jsx)(R.a,{onClick:function(){return k("/byname")},children:"Name"}),Object(c.jsx)(R.a,{onClick:function(){return k("/total")},children:"Total"})]})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{color:"inherit",component:m.b,to:"/",children:"Amount"}),Object(c.jsx)(f.a,{color:"inherit",component:m.b,to:"/byname",children:"Name"}),Object(c.jsx)(f.a,{color:"inherit",component:m.b,to:"/total",children:"Total"})]})]})})})},T=n(156),G=n(157),J=n(158),F=n(121),M=n(159),P=n(160),W=n(161),q=n(5),D=Object(q.a)((function(e){return{head:{fontSize:20,backgroundColor:e.palette.common.white},body:{fontSize:14}}}))(T.a),H=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(G.a),K=function(e){var t=e.names,n=e.sortedBy;return Object(c.jsx)(J.a,{component:F.a,children:Object(c.jsxs)(M.a,{children:[Object(c.jsx)(P.a,{children:Object(c.jsxs)(H,{children:["amount"===n?Object(c.jsx)(D,{children:"Amount"}):Object(c.jsx)(D,{children:"Name"}),"name"===n?Object(c.jsx)(D,{children:"Amount"}):Object(c.jsx)(D,{children:"Name"})]})}),Object(c.jsx)(W.a,{children:t.map((function(e){return Object(c.jsxs)(H,{children:["amount"===n?Object(c.jsx)(D,{children:e.amount}):Object(c.jsx)(D,{children:e.name}),"name"===n?Object(c.jsx)(D,{children:e.amount}):Object(c.jsx)(D,{children:e.name})]},e.name)}))})]})})},Q=n(164),U=n(162),V=function(e){var t=e.total;return Object(c.jsxs)(Q.a,{position:"relative",display:"flex",paddingTop:2,m:"auto",children:[Object(c.jsx)(Q.a,{top:300,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(c.jsx)(U.a,{size:300})}),Object(c.jsx)(Q.a,{top:300,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(c.jsx)(g.a,{variant:"h1",component:"div",color:"textSecondary",children:t})})]})},X=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),b=s[0],d=s[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:3001/api/names");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m,O=n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})),x=Object(i.a)(O).sort((function(e,t){return t.amount-e.amount})),f=Object(i.a)(O).sort((function(e,t){return e.name.localeCompare(t.name)})),g=(m="amount",n.reduce((function(e,t){return e+t[m]}),0));return Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{checkName:b,checkChange:function(e){d(e.target.value)}}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/total",children:Object(c.jsx)(V,{total:g})}),Object(c.jsx)(p.a,{path:"/byname",children:Object(c.jsx)(K,{names:f,sortedBy:"name"})}),Object(c.jsx)(p.a,{path:"/",children:Object(c.jsx)(K,{names:x,sortedBy:"amount"})})]})]})};r.a.render(Object(c.jsx)(m.a,{children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.9a47758b.chunk.js.map