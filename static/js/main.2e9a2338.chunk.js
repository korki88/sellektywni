(this.webpackJsonptemplates=this.webpackJsonptemplates||[]).push([[0],{49:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t.n(n),a=t(19),i=t.n(a),l=t(5),r=t(6),j=t(4),d=t(1),o=t(0);function b(e){var c=e.visibility,t=Object(n.useRef)(null),s=j.a.timeline().pause();return Object(n.useEffect)((function(){var e=t.current.children,n=j.a.timeline().pause();n.set(e[0],{y:"-50%",x:"-50%",duration:0},"-=1").to(e[0],{opacity:1,scale:1,ease:d.a.easeOut.config(1.7),duration:2}),"visible"===c.logo&&s.to(t.current,{autoAlpha:1,top:"50%",zIndex:99},"0").play().add(n.play())}),[c.logo]),Object(o.jsx)("div",{className:"Logo",ref:t,children:Object(o.jsx)("div",{className:"logoImg",alt:"logo"})})}var u=t(8),h=t.n(u);t(30);function O(){return Object(o.jsx)("div",{className:"ProductsList",children:Object(o.jsxs)("ul",{className:"list",children:[Object(o.jsxs)("li",{className:"item",children:[Object(o.jsx)("img",{src:"./Assets/img/buty/5.jpg"}),Object(o.jsx)("span",{children:"39.99z\u0142"})]}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})}),Object(o.jsx)("li",{className:"item",children:Object(o.jsx)("span",{children:"39.99z\u0142"})})]})})}function x(e){var c=e.clickHandler;return Object(o.jsxs)("div",{className:"MainTabs",children:[Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)(O,{}))},children:"DLA NIEJ"}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)(O,{}))},children:"DLA NIEGO"})]})}function f(e,c,t,n){var s=e[0].children;c.set(e,{autoAlpha:0});for(var a=-n/(s.length-1),i=0;i<s.length;i++){var l=s[i];c.set(l,{rotate:t+a*i+"deg"});for(var r=0;r<l.children.length;r++){var j=l.children[r];c.set(j,{rotate:-(t+a*i)*Math.pow(r+1,r)+"deg"}),(i+1)%2===0&&c.to(j,{rotate:"180deg"})}}}function p(e){var c=e.clickHandler,t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=j.a.timeline();f(t.current.children,e,-90,180)}),[]),Object(o.jsx)("div",{ref:t,className:"SecondNav",children:Object(o.jsxs)("div",{className:"links-wrapper",children:[Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Ustawienia"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-cog"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Produkty second hand"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("span",{children:"Second Hand"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Produkty Outlet"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("span",{children:"Outlet"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Produkty dla Vintage"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("span",{children:"Vintage"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Log-In"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-sign-in-alt"})})})]})})}function m(e){var c=e.clickHandler,t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=j.a.timeline();f(t.current.children,e,-90,180)}),[]),Object(o.jsx)("div",{ref:t,className:"ThirdNav",children:Object(o.jsxs)("div",{className:"links-wrapper",children:[Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Facebook"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Informacje"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"far fa-file-alt"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"G\u0142\xf3wna"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-home"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Konto uzytkownika"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-user-circle"})})}),Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Instagram"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fab fa-instagram"})})})]})})}function k(e){var c=e.clickHandler;return Object(o.jsx)("div",{className:"BasketNav",children:Object(o.jsx)("button",{onClick:function(){return c(Object(o.jsx)("i",{className:"fas fa-smile-wink",children:"Produkty dla niej"}))},children:Object(o.jsx)("span",{children:Object(o.jsx)("i",{className:"fas fa-shopping-basket"})})})})}function N(e){var c=e.clickHandler,t=e.progress,s=Object(n.useRef)(null),a=j.a.timeline().delay(2).pause();return Object(n.useEffect)((function(){var e=s.current.children;t.phase1&&a.play().set(s.current,{top:"50%",y:"-50%",autoAlpha:0}).set([e[3],e[2],e[1]],{top:"50%",left:"50%",y:"-50%",x:"-50%",scale:0}).set(e[1],{background:h.a.rgb(215,226,188).alpha(.3).darken(.2),backdropFilter:"blur(2px)",boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.2)"}).set(e[0],{background:h.a.rgb(215,226,188).alpha(.3).darken(.1),backdropFilter:"blur(2px)",boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.2)",width:"50rem",height:"50rem",borderRadius:"50%",scale:0}).pause().set(s.current,{autoAlpha:1}).play().to([e[3],e[2],e[1],e[0]],{duration:1,scale:1,stagger:".12"}).to([e[0],e[1],e[2]],{duration:.8,scale:0,stagger:".12"})}),[t.phase1]),Object(n.useEffect)((function(){var e=s.current.children;t.phase2&&(console.log(e[2].children[0]),a.to(e[3],{y:"-25%",duration:1},"+=.6").set(e[2],{y:"-35%"}).set(e[1],{y:"-40%",background:"none",backdropFilter:"none",boxShadow:"none"}).set(e[0],{width:"75%",height:"7rem",borderRadius:"0 0 5px 5px",y:"50%"}).to(e[3].children[0],{autoAlpha:1}).set([e[2].children[0],e[1].children[0],e[0].children[0],e[0].children[1]],{autoAlpha:1,width:"100%",height:"100%",transformOrigin:" center"},"-=1").to([e[2],e[1],e[0]],{scale:1,duration:1},"-=.4"))}),[t.phase2]),Object(o.jsxs)("div",{className:"Navigation",ref:s,children:[Object(o.jsx)(x,{clickHandler:c}),Object(o.jsx)(p,{clickHandler:c}),Object(o.jsx)(m,{clickHandler:c}),Object(o.jsx)(k,{clickHandler:c})]})}function g(e){var c=e.content;return Object(o.jsx)("div",{className:"ContentWrapper",children:Object(o.jsx)("span",{children:c})})}function v(){var e=Object(n.useRef)(null),c=j.a.timeline().pause(),t=Object(n.useState)({logo:"hidden",content:"hidden"}),s=Object(r.a)(t,2),a=s[0],i=s[1],u=Object(n.useState)({phase1:!1,phase2:!1}),h=Object(r.a)(u,2),O=h[0],x=h[1],f=Object(n.useState)("Hello"),p=Object(r.a)(f,2),m=p[0],k=p[1];return Object(n.useEffect)((function(){var t=Object(r.a)(e.current.children,3),n=t[0],s=t[1],a=t[2];c.set(e.current,{display:"block"}).play().add(i((function(e){return Object(l.a)(Object(l.a)({},e),{},{logo:"visible"})}))).add(x((function(e){return Object(l.a)(Object(l.a)({},e),{},{phase1:!0})}))).to(n,{top:"80%",zIndex:3,duration:.5,delay:4,width:"20%",rotate:"90deg"}).to(n,{top:"80%",left:"95%",duration:.5},"-=.5").to(n.children[0],{opacity:.4},"-=1").to(s,{top:"0",duration:1},"-=1").to(e.current,{display:"grid",duration:1},"+=2").add(x((function(e){return Object(l.a)(Object(l.a)({},e),{},{phase2:!0})}))).to(a,{autoAlpha:1,height:"100vh",duration:.5,transformOrigin:"0 50%",ease:d.c.easeIn},"-=1.4")}),[]),Object(o.jsxs)("div",{className:"App",ref:e,children:[Object(o.jsx)(b,{visibility:a}),Object(o.jsx)(N,{progress:O,clickHandler:function(e){k(e)}}),Object(o.jsx)(g,{visibility:a,content:m})]})}i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.2e9a2338.chunk.js.map