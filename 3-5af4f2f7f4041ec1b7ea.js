(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{360:function(e,t,a){a(47);var n={siteTitle:"Mr. Kannah",siteTitleShort:"Mr. Kannah",siteLogo:"/static/logos/logo-1024.png",siteUrl:"https://mrkannah.com",pathPrefix:"/",siteDescription:"Fadee Kannah's portfolio site. Includes everything you need to know about me.",siteRss:"/rss.xml",googleAnalyticsID:"UA-28181698-1",disqusShortname:"mrkannah",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",copyright:"Fadee Kannah © 2019",themeColor:"#26a69a",backgroundColor:"#1c313a",primary:{light:"#63d7cb",main:"#25a59a",dark:"#00756c"},secondary:{light:"#718792",main:"#455a64",dark:"#1c313a"}};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},375:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(5),r=a.n(n),i=a(0),o=a.n(i),l=a(373),u=a.n(l),s=a(360),c=a.n(s),m=(a(412),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement("meta",{name:"description",content:c.a.siteDescription}),o.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display|Poppins",rel:"stylesheet"})),e)},t}(o.a.Component))},376:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(0),o=a.n(i),l=a(373),u=a.n(l),s=a(372),c=a.n(s),m=a(360),p=a.n(m),g=a(382),M=a.n(g),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r,i=this.props,l=i.url,s=i.postSEO,m=i.pageSEO||{},g=m.title,d=m.description,h=m.image;if(s){var y=s.frontmatter;g=y.title,t=y.author,a=y.authorTwitter,r=y.dateModified,d=y.description?y.description:s.excerpt,h=y.coverURL||y.coverFile.publicURL,n=y.date,e=c()(p.a.siteUrl,p.a.pathPrefix,l)}h=h?c()(p.a.siteUrl,p.a.pathPrefix,h):M.a;var f=c()(p.a.siteUrl,p.a.pathPrefix),D=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:p.a.siteTitle}];return s&&D.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":e,name:g,image:{"@type":"ImageObject",url:h}}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:e,name:g,headline:g,image:{"@type":"ImageObject",url:h},author:{"@type":"Person",name:t},publisher:{"@type":"Organization",url:f,name:t,logo:c()(p.a.siteUrl,p.a.pathPrefix,p.a.siteLogo)},datePublished:n,dateModified:r,description:d}),o.a.createElement(u.a,{title:g},o.a.createElement("meta",{name:"description",content:d}),o.a.createElement("meta",{name:"image",content:h}),o.a.createElement("meta",{property:"og:url",content:s?e:l}),o.a.createElement("meta",{property:"og:title",content:g}),o.a.createElement("meta",{property:"og:description",content:d}),o.a.createElement("meta",{property:"og:image",content:h}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a?o.a.createElement("meta",{name:"twitter:creator",content:a}):null,o.a.createElement("meta",{name:"twitter:site",content:"@fadeenk"}),o.a.createElement("meta",{name:"twitter:title",content:g}),o.a.createElement("meta",{name:"twitter:description",content:d}),o.a.createElement("meta",{name:"twitter:image",content:h}))},t}(i.Component);t.a=d},379:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(0),o=a.n(i),l=a(433),u=a(378),s=a.n(u),c=a(360),m=a.n(c),p=[{label:"GitHub",url:"https://github.com/fadeenk",icon:o.a.createElement(l.a,{style:{fill:"white"}})},{label:"Twitter",url:"https://twitter.com/fadeenk",icon:o.a.createElement(l.c,{style:{fill:"white"}})},{label:"LinkedIn",url:"https://www.linkedin.com/in/fadeek/",icon:o.a.createElement(l.b,{style:{fill:"white"}})}],g=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){return p.map(function(e){return o.a.createElement("a",{href:e.url,key:e.label},o.a.createElement(s.a,null,e.icon))})},a.render=function(){return o.a.createElement("div",{style:{background:m.a.secondary.dark,textAlign:"center",margin:"0 auto",padding:"10px"}},this.getLinkElements(),o.a.createElement("p",{style:{color:"white",margin:0}},m.a.copyright))},t}(i.Component);t.a=g},380:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(0),o=a.n(i),l=a(69),u=(a(372),a(383)),s=a.n(u),c=(a(422),a(406)),m=a.n(c),p=a(405),g=a.n(p),M=a(424),d=a.n(M),h=a(377),y=a.n(h),f=a(370),D=a(360),j=a.n(D),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).getParentRouteValue=function(e){void 0===e&&(e=a.props.location.pathname);var t=a.props.routes.filter(function(t){return e.startsWith(t.value)})[1];return t&&t.nested?t.value:e},a.openDropdownMenu=function(e,t){var n={};n[t]=e.currentTarget,a.setState(n)},a.dismissDropdown=function(e,t){e.stopPropagation();var n={};n[a.getParentRouteValue(t)]=null,a.setState(n)},a.state={},a}r()(t,e);var a=t.prototype;return a.generateDropdown=function(e,t){var a=this,n=[e].concat(e.nested).map(function(e){var n=e.value.toLowerCase()===t?j.a.primary.main:"black";return o.a.createElement(y.a,{key:e.value,value:e.value,style:{color:n},onClick:function(t){a.dismissDropdown(t,e.value),Object(l.navigate)(e.value)}},e.label)});return o.a.createElement(d.a,{open:Boolean(this.state[e.value]),value:e.value,anchorEl:this.state[e.value],onClose:function(t){return a.dismissDropdown(t,e.value)}},n)},a.render=function(){var e=this,t=this.props,a=t.routes,n=t.currentRoute,r=a.map(function(t){if(!Array.isArray(t.nested))return o.a.createElement(g.a,{key:t.value,value:t.value,label:t.label,classes:{label:e.props.classes.label},onClick:function(){return Object(l.navigate)(t.value)}});var a=t.label+" ▼";return o.a.createElement(g.a,{key:t.value,value:t.value,onClick:function(a){return e.openDropdownMenu(a,t.value)},classes:{label:e.props.classes.label},label:o.a.createElement("div",null,o.a.createElement("span",{style:{fontSize:"14px"}},a),e.generateDropdown(t,n))})});return o.a.createElement(m.a,{value:this.getParentRouteValue(),centered:!0,variant:"fullWidth",className:"desktop",onChange:function(t,a){return e.openDropdownMenu(a)},classes:{indicator:this.props.classes.indicator}},r)},t}(i.Component),v=Object(f.withStyles)({indicator:{backgroundColor:j.a.primary.light},label:{color:"white"}})(L),E=(a(71),a(430)),I=a.n(E),N=a(428),w=a.n(N),b=a(404),x=a.n(b),S=a(378),A=a.n(S),k=a(429),z=a.n(k),T=a(426),O=a.n(T),C=a(427),Y=a.n(C),U=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDrawer=function(){var e=Date.now();e-a.lastToggled>500&&(a.lastToggled=e,a.setState({openDrawer:!a.state.openDrawer}))},a.toggleMenu=function(e,t){e.stopPropagation();var n={};n[t]=!a.state[t],a.setState(n)},a.getMenuItemForRoute=function(e,t){var n=e.value.toLowerCase()===a.props.location.pathname.toLowerCase()?j.a.primary.light:"white";return o.a.createElement(y.a,{key:e.value,value:e.value,style:{color:n},onClick:function(){return Object(l.navigate)(e.value)}},o.a.createElement("span",{style:{paddingLeft:t?"18px":0}},e.label))},a.getMenuItemsForRouteWithNested=function(e){var t=e.nested.map(function(e){return a.getMenuItemForRoute(e,!0)}),n=e.value.toLowerCase()===a.props.location.pathname?j.a.primary.light:"white";return[o.a.createElement(y.a,{key:e.value,value:e.value,style:{color:n,marginRight:"40px"},onClick:function(){return Object(l.navigate)(e.value)}},e.label,o.a.createElement(A.a,{onClick:function(t){return a.toggleMenu(t,e.value)},style:{width:"36px",height:"36px",zIndex:1e3,color:n,marginTop:"-5px",position:"fixed",right:"4px"}},a.state[e.value]?o.a.createElement(O.a,null):o.a.createElement(Y.a,null))),o.a.createElement(w.a,{key:e.label,in:a.state[e.value],timeout:"auto",unmountOnExit:!0},o.a.createElement(x.a,{component:"div",disablePadding:!0},t))]},a.state={openDrawer:!1},a.lastToggled=0,a}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){var e={};this.props.routes.filter(function(e){return e.nested}).forEach(function(t){e[t.value]=!0}),this.setState(e)},a.render=function(){var e=this,t=this.props.routes.map(function(t){return Array.isArray(t.nested)?e.getMenuItemsForRouteWithNested(t):e.getMenuItemForRoute(t,!1)});return o.a.createElement("div",{style:{textAlign:"right"},className:"mobile"},o.a.createElement(A.a,{onClick:this.toggleDrawer},o.a.createElement(z.a,{style:{color:j.a.primary.main}})),o.a.createElement(I.a,{open:this.state.openDrawer,anchor:"right",classes:{paper:this.props.classes.paper},onClose:this.toggleDrawer,style:{textAlign:"left"}},o.a.createElement(x.a,null,t)))},t}(i.Component),Q=Object(f.withStyles)({paper:{backgroundColor:j.a.secondary.dark,minWidth:"200px"}})(U),P=48,R=[{label:"Home",value:"/"},{label:"About",value:"/about/",nested:[{label:"Education",value:"/about/education/"},{label:"Software Development",value:"/about/softwareDevelopment/"}]},{label:"Resume",value:"/resume/"},{label:"Blog",value:"/blog/"},{label:"Contact",value:"/contact/"}],W=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"navbar",style:this.props.style},o.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto"}},o.a.createElement(l.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"logo",style:{height:P,float:"left",fill:j.a.primary.main}})),o.a.createElement(Q,{routes:R,location:this.props.location}),o.a.createElement(v,{routes:R,location:this.props.location})))},t}(i.Component);t.a=W},382:function(e,t,a){e.exports=a.p+"static/fadee-4973f52d7bba2fbdafdfacc5d4b74e3b.jpg"},383:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0tMS0xaDU4MnY0MDJILTF6Ii8+CiAgPHBhdGggZD0iTTAgMGgyNzkuNjR2MjIzLjNIMFYweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0yNzkuNjQgMTUuNDI1QzI3OS42NCA2LjkwNSAyNzIuNzMgMCAyNjQuMjEyIDBIMTUuNDI1QzYuOTA1IDAgMCA2LjkwNiAwIDE1LjQyNXYxOTIuNDVjMCA4LjUyIDYuOTA2IDE1LjQyNiAxNS40MjUgMTUuNDI2aDI0OC43ODhjOC41MiAwIDE1LjQyNi02LjkgMTUuNDI2LTE1LjQyVjE1LjQzeiIvPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzYzZDdjYiIgZD0iTTY2LjY2OCAzMS42MjdjMC0xLjQ1Ni0uNTc2LTIuODUzLTEuNjA2LTMuODgzLTEuMDMtMS4wMy0yLjQyNS0xLjYwNy0zLjg4LTEuNjA3SDI4LjA1Yy0xLjQ1NyAwLTIuODUzLjU3OC0zLjg4MiAxLjYwNy0xLjAzIDEuMDMtMS42MDYgMi40MjctMS42MDYgMy44ODN2MTYwLjc0NWMwIDEuNDU3LjU4IDIuODU0IDEuNjE3IDMuODgzIDEuMDMgMS4wMyAyLjQzIDEuNjA4IDMuODggMS42MDhoMzMuMTJjMS40NjIgMCAyLjg2LS41NjcgMy44ODItMS42MDQgMS4wMzctMS4wMyAxLjYxNS0yLjQyIDEuNjE1LTMuODhWMzEuNjJoLS4wMXptNjMuNiAwYzAtMS40NTYtLjU4LTIuODUzLTEuNjEtMy44ODMtMS4wMjgtMS4wMy0yLjQyNC0xLjYwNy0zLjg4LTEuNjA3SDkxLjYzNmMtMS40NjYgMC0yLjg2Mi41NzgtMy44ODUgMS42MDctMS4wMyAxLjAzLTEuNjEgMi40MjctMS42MSAzLjg4M3YxNjAuNzQ1YzAgMS40NTcuNTc2IDIuODU0IDEuNjA2IDMuODgzIDEuMDI3IDEuMDMgMi40MjQgMS42MDggMy44OCAxLjYwOGgzMy4xM2MxLjQ1IDAgMi44NS0uNTY3IDMuODgtMS42MDQgMS4wMjYtMS4wMyAxLjYwMy0yLjQyIDEuNjAzLTMuODhWMzEuNjJoLjA0em02My41ODQgMGMwLTEuNDU2LS41NzgtMi44NTMtMS42MDgtMy44ODMtMS4wMy0xLjAzLTIuNDI1LTEuNjA3LTMuODgtMS42MDdIMTU1LjIzYy0xLjQ1OCAwLTIuODU0LjU3OC0zLjg4MyAxLjYwNy0xLjAzIDEuMDMtMS42MDggMi40MjctMS42MDggMy44ODN2MTYwLjc0NWMwIDEuNDU3LjU3IDIuODU0IDEuNiAzLjg4MyAxLjAzIDEuMDMgMi40MjQgMS42MDggMy44OCAxLjYwOGgzMy4xMzRjMS40NTYgMCAyLjg1Mi0uNTY3IDMuODgtMS42MDQgMS4wMy0xLjAzIDEuNjEtMi40MiAxLjYxLTMuODhWMzEuNjJ6bTYzLjU4NSAwYzAtMy4wMzMtMi40NTctNS40OS01LjQ5LTUuNDlIMjE4LjhjLTMuMDMgMC01LjQ5IDIuNDU3LTUuNDkgNS40OXY2My4zNDhjMCAzLjAzMiAyLjQ2IDUuNDkgNS40OSA1LjQ5aDMzLjEzNWMzLjAzMiAwIDUuNDktMi40NTggNS40OS01LjQ5VjMxLjYyN2guMDEyem0wIDk3LjM5OGMwLTMuMDMyLTIuNDU3LTUuNDktNS40OS01LjQ5SDIxOC44Yy0zLjAzIDAtNS40OSAyLjQ1OC01LjQ5IDUuNDl2NjMuMzQ4YzAgMy4wNDIgMi40NiA1LjQ5IDUuNDkgNS40OWgzMy4xMzVjMy4wMzIgMCA1LjQ5LTIuNDQ4IDUuNDktNS40OXYtNjMuMzM4bC4wMTItLjAxeiIvPgo8L3N2Zz4K"},471:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(472),o=a.n(i),l=a(0),u=a.n(l),s=a(69),c=a(370),m=a(449),p=a.n(m),g=a(360),M=a.n(g),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.tags;return Array.isArray(t)?t.map(function(t,a){return u.a.createElement(s.Link,{to:"/tags/"+o()(t),key:a,style:{textDecoration:"none"}},u.a.createElement(p.a,{label:"#"+t,clickable:!0,className:e.props.classes.chip}))}):null},t}(l.Component);t.a=Object(c.withStyles)({chip:{margin:"2px",background:M.a.primary.light,"&:hover":{background:M.a.primary.dark,color:"white"}}})(d)},500:function(e,t,a){"use strict";a(501);var n=a(5),r=a.n(n),i=a(472),o=a.n(i),l=a(0),u=a.n(l),s=a(69),c=a(370),m=a(407),p=a.n(m),g=a(408),M=a.n(g),d=a(800),h=a.n(d),y=a(471),f=a(360),D=a.n(f),j={link:{textDecoration:"none",color:D.a.secondary.dark,"&:hover":{color:D.a.primary.main,textDecoration:"none"}}},L=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(e){var t=[];return e.forEach(function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,author:e.node.frontmatter.author,category:e.node.frontmatter.category,cover:e.node.frontmatter.coverURL||e.node.frontmatter.coverFile.publicURL,title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})}),t},a.render=function(){var e=this,t=this.getPostList(this.props.postEdges);return u.a.createElement("div",{style:{width:"90%",fontSize:"1em",margin:"0 auto",padding:"1em 0",lineHeight:"1.5em",maxWidth:"800px"}},u.a.createElement(p.a,{style:{margin:"10px 0"}},u.a.createElement(M.a,null,t.map(function(a,n){return u.a.createElement("div",{key:n},u.a.createElement(s.Link,{to:a.path,className:e.props.classes.link},u.a.createElement("img",{src:a.cover,className:"blogImage",style:{float:"right",marginLeft:"10px",marginBottom:"10px",borderRadius:"4px"}}),u.a.createElement("h2",{style:{textShadow:"0 12px 30px rgba(0, 0, 0, 0.15)",fontSize:"2rem",lineHeight:"2rem",marginBottom:"0.75rem",marginTop:"0.75rem"}},a.title)),u.a.createElement("small",{style:{color:D.a.primary.dark}},"By: ",a.author),u.a.createElement("br",null),a.date," — ",a.timeToRead," Min Read — In ",u.a.createElement(s.Link,{to:"/categories/"+o()(a.category),className:e.props.classes.link},a.category),u.a.createElement("br",null),a.excerpt," ",a.tags?u.a.createElement("br",null):null," ",u.a.createElement(y.a,{tags:a.tags}),u.a.createElement("br",{style:{clear:"both"}}),n<t.length-1?u.a.createElement(h.a,{style:{margin:"20px 0"}}):null)}))))},t}(u.a.Component);t.a=Object(c.withStyles)(j)(L)},501:function(e,t,a){"use strict";a(502)("link",function(e){return function(t){return e(this,"a","href",t)}})},502:function(e,t,a){var n=a(13),r=a(32),i=a(25),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},800:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(801))},801:function(e,t,a){"use strict";var n=a(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(68)),i=n(a(31)),o=n(a(359)),l=n(a(0)),u=(n(a(1)),n(a(361))),s=(a(368),n(a(362))),c=a(414),m=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.fade)(e.palette.divider,.08)},middle:{marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit}}};function p(e){var t,a=e.absolute,n=e.classes,s=e.className,c=e.component,m=e.inset,p=e.light,g=e.variant,M=(0,o.default)(e,["absolute","classes","className","component","inset","light","variant"]);return l.default.createElement(c,(0,r.default)({className:(0,u.default)(n.root,(t={},(0,i.default)(t,n.inset,m||"inset"===g),(0,i.default)(t,n.middle,"middle"===g),(0,i.default)(t,n.absolute,a),(0,i.default)(t,n.light,p),t),s)},M))}t.styles=m,p.defaultProps={absolute:!1,component:"hr",light:!1,variant:"fullWidth"};var g=(0,s.default)(m,{name:"MuiDivider"})(p);t.default=g}}]);
//# sourceMappingURL=3-5af4f2f7f4041ec1b7ea.js.map