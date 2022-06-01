(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{211:function(e,r,n){"use strict";n.d(r,{X:function(){return m}});var t=n(7294),i=n(2125),o=n(9207),l=n(6808),c=n(363),a=n(1755),u=(0,i.css)(["color:",";"],(function(e){return(0,l.ut)(e.colorProp||e.theme.heading.color,e.theme)})),f=i.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],c.$G,(function(e){return function(e){var r=(e.theme.heading.level[e.level]||{}).font;return r&&r.family?(0,i.css)(["font-family:",";"],r.family):e.theme.heading.font?(0,i.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var r=e.size||"medium",n=e.theme.heading,t=n.level[e.level];if(t){var l=t[r],c=[(0,i.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],l?l.size:r,l?l.height:"normal",(e.fillProp?"none":l&&l.maxWidth)||t.medium.maxWidth,t.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var a=e.theme.global.breakpoints[n.responsiveBreakpoint];if(a){var u=n.level[e.level+1]?n.level[e.level+1][r]:n.level[e.level][r];u&&c.push((0,o.bk)(a,"\n            font-size: "+u.size+";\n            line-height: "+u.height+";\n            max-width: "+(e.fillProp?"none":u.maxWidth)+";\n          "))}}return c}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&c.jt}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return(e.colorProp||e.theme.heading.color)&&u}),(function(e){return e.theme.heading&&e.theme.heading.extend}));f.defaultProps={},Object.setPrototypeOf(f.defaultProps,a.l);var s={},d=["color","fill","level"];function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h.apply(this,arguments)}var m=(0,t.forwardRef)((function(e,r){var n=e.color,i=e.fill,o=e.level,l=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,d);return t.createElement(f,h({as:"h"+o,colorProp:n,fillProp:i,level:+o},l,{ref:r}))}));m.displayName="Heading",m.defaultProps={level:1,responsive:!0},m.propTypes=s},9253:function(e,r,n){"use strict";n.d(r,{E:function(){return h}});var t=n(7294),i=n(2125),o=n(363),l=n(1755),c={cover:"cover",contain:"contain"},a=(0,i.css)(["flex:1 1;overflow:hidden;object-fit:",";"],(function(e){return c[e.fit]})),u=i.default.img.withConfig({displayName:"StyledImage",componentId:"sc-ey4zx9-0"})([""," "," "," "," ",""],o.$G,(function(e){return e.fit&&a}),(function(e){return e.fillProp&&(0,o.EW)(e.fillProp)}),(function(e){return e.theme.image&&e.theme.image.extend}),(function(e){return e.opacityProp&&"opacity: "+(!0===e.opacityProp?e.theme.global.opacity.medium:e.theme.global.opacity[e.opacityProp]||e.opacityProp)+";\n  "}));u.defaultProps={},Object.setPrototypeOf(u.defaultProps,l.l);var f={},s=["a11yTitle","fallback","onError","opacity","fill","src"];function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var h=(0,t.forwardRef)((function(e,r){var n=e.a11yTitle,i=e.fallback,o=e.onError,l=e.opacity,c=e.fill,a=e.src,f=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,s),h=(0,t.useState)(!1),m=h[0],p=h[1],v={onError:(o||i)&&function(e){o&&o(e),!m&&i&&""!==i&&(e.target.src=i,p(!0))},onLoad:function(){p(!1)}};return t.createElement(u,d({"aria-label":n},f,v,{ref:r,opacityProp:l,fillProp:c,src:void 0===a?"":a}))}));h.displayName="Image",h.propTypes=f},4478:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(5901)}])},4313:function(e,r,n){"use strict";var t=n(5893),i=(n(7294),n(3499)),o=n(2125),l=n(9719),c=n(211),a=n(9253),u=n(9517),f=n(2366);function s(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function d(){var e=s(["\n display: grid;\n grid-gap: 1rem;\n @media ","  {\n     grid-template-columns: repeat(2, 1fr);\n  }\n  @media ","  {\n     grid-template-columns: repeat(3, 1fr);\n  }\n"]);return d=function(){return e},e}function h(){var e=s(["\n  gap:0.5rem;\n"]);return h=function(){return e},e}function m(){var e=s(["\n  border-radius:0.5rem;\n"]);return m=function(){return e},e}function p(){var e=s(["\n  border-radius:0.5rem;\n  overflow: hidden;\n"]);return p=function(){return e},e}var v=(0,o.default)(l.x).withConfig({componentId:"sc-1b538d89-0"})(d(),i.GW.breakpoint.minmobile,i.GW.breakpoint.mintablet),g=(0,o.default)(l.x).withConfig({componentId:"sc-1b538d89-1"})(h()),x=(0,o.default)(l.x).withConfig({componentId:"sc-1b538d89-2"})(m()),j=(0,o.default)(l.x).withConfig({componentId:"sc-1b538d89-3"})(p()),b=function(e){var r=e.project;return(0,t.jsxs)(x,{background:"white",pad:"small",align:"center",border:{color:"lightBorderColor",size:"small"},children:[(0,t.jsx)(l.x,{margin:{vertical:"small"},children:(0,t.jsx)(c.X,{color:"headingColor",level:"2",size:"small",children:r.title})}),(0,t.jsx)(j,{height:"xsmall",width:"xsmall",margin:{vertical:"small"},border:{size:"small",color:"lightBorderColor"},children:(0,t.jsx)(a.E,{fit:"cover",src:r.image})}),(0,t.jsxs)(g,{direction:"row",justify:"center",margin:{vertical:"small"},fill:"horizontal",children:[(0,t.jsx)(f.ZP,{href:r.link[0],children:"Code"}),(0,t.jsx)(f.ZP,{href:r.link[1],children:"Demo"}),(0,t.jsx)(f.ZP,{href:r.link[2],children:"Article"})]}),(0,t.jsx)(l.x,{children:(0,t.jsx)(u.x,{textAlign:"center",color:"fontColor1",margin:{vertical:"small"},children:r.description})})]})};r.Z=function(e){var r=e.projects;return(0,t.jsx)(v,{children:r.map((function(e){return(0,t.jsx)(b,{project:e.data})}))})}},2366:function(e,r,n){"use strict";n.d(r,{AM:function(){return m},ZP:function(){return v},_u:function(){return h}});var t=n(5893),i=n(1664),o=n.n(i),l=n(5902),c=n(2125),a=n(7747),u=n(9517);function f(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function s(){var e=f(["\n      &:hover {\n      border:1px solid ",";\n      color:white;\n\n      & > span {\n    color: ",";\n  }\n    }\n  "]);return s=function(){return e},e}function d(){var e=f(["\n  border-radius:0.5rem;\n  ","\n"]);return d=function(){return e},e}var h=function(e){var r=e.children,n=e.href;return(0,t.jsx)(o(),{href:n,children:(0,t.jsx)(l._u,{children:r})})},m=function(e){var r=e.children,n=e.href,i=e.test?l.rU:l._u;return(0,t.jsx)(o(),{href:n,children:(0,t.jsx)(i,{children:r})})},p=(0,c.default)(l.TK).withConfig({componentId:"sc-9f49480b-0"})(d(),(function(e){return(0,c.css)(s(),(0,a.normalizeColor)("primary1",e.theme),(0,a.normalizeColor)("primary1",e.theme))})),v=function(e){var r=e.children,n=e.href;return(0,t.jsxs)("a",{href:n,children:["  ",(0,t.jsx)(p,{background:"white",color:"secondary",border:{color:"lightBorderColor",size:"xsmall"},pad:{horizontal:"small",vertical:"xxsmall"},children:(0,t.jsx)(u.x,{color:"fontColor1",weight:"bold",children:r})})]})};r.Co=function(e){var r=e.children,n=e.href;return(0,t.jsx)(o(),{href:n,children:(0,t.jsx)("a",{children:r})})}},5901:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return v},default:function(){return g}});var t=n(5893),i=(n(7294),n(9719)),o=n(211),l=n(9517),c=n(2366),a=n(3499),u=function(){return(0,t.jsx)(i.x,{children:(0,t.jsxs)(i.x,{align:"center",children:[(0,t.jsx)(i.x,{margin:{bottom:"medium"},children:(0,t.jsx)(o.X,{color:"fontColor1",level:"1",size:"small",children:"Projecten"})}),(0,t.jsx)(i.x,{margin:{bottom:"medium"},children:(0,t.jsxs)(l.x,{textAlign:"center",size:"large",children:["Al mijn open-source projecten van klein tot groot met uitleg hoe ik ze geschreven heb. Hier is een link naar mijn ",(0,t.jsx)(c._u,{href:a.$t,children:"GitHub"})," account"]})})]})})},f=n(5902),s=n(2125),d=n(4313);function h(){var e,r,n=(e=["\n  padding-right:0.5rem;\n  padding-left:0.5rem;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return h=function(){return n},n}var m=(0,s.default)(f.Pm).withConfig({componentId:"sc-ff2e9042-0"})(h()),p=function(e){var r=e.projects;return(0,t.jsxs)(m,{alignSelf:"center",margin:{bottom:"large"},children:[(0,t.jsx)(i.x,{margin:{vertical:"large"},children:(0,t.jsx)(u,{})}),(0,t.jsx)(d.Z,{projects:r})]})};var v=!0,g=function(e){var r=e.projects;return(0,t.jsx)(p,{projects:r})}}},function(e){e.O(0,[774,888,179],(function(){return r=4478,e(e.s=r);var r}));var r=e.O();_N_E=r}]);