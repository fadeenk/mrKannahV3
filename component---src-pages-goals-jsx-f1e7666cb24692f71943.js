(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ikds:function(e,n,t){"use strict";t.r(n);t("a1Th"),t("I5cv"),t("/SS/"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V");var a=t("q1tI"),o=t.n(a),r=t("hpys"),i=t("okzv"),s=t("zk/v"),c=t("wx14"),d=t("DSFK"),l=t("25BE"),u=t("BsWD"),p=t("PYwp");var m=t("ODXe"),f=t("Ff2n"),h=(t("TOwV"),t("17x9"),t("iuhU")),b=t("dRu9"),g=t("H2TA"),y=t("wpWl"),v=t("4Hym"),w=t("tr08"),x=a.forwardRef((function(e,n){var t=e.children,o=e.classes,r=e.className,i=e.collapsedHeight,s=void 0===i?"0px":i,d=e.component,l=void 0===d?"div":d,u=e.in,p=e.onEnter,m=e.onEntered,g=e.onEntering,x=e.onExit,E=e.onExiting,O=e.style,k=e.timeout,j=void 0===k?y.b.standard:k,R=Object(f.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),B=Object(w.a)(),C=a.useRef(),H=a.useRef(null),I=a.useRef(),T="number"==typeof s?"".concat(s,"px"):s;a.useEffect((function(){return function(){clearTimeout(C.current)}}),[]);return a.createElement(b.a,Object(c.a)({in:u,onEnter:function(e,n){e.style.height=T,p&&p(e,n)},onEntered:function(e,n){e.style.height="auto",m&&m(e,n)},onEntering:function(e,n){var t=H.current?H.current.clientHeight:0,a=Object(v.a)({style:O,timeout:j},{mode:"enter"}).duration;if("auto"===j){var o=B.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),I.current=o}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(t,"px"),g&&g(e,n)},onExit:function(e){var n=H.current?H.current.clientHeight:0;e.style.height="".concat(n,"px"),x&&x(e)},onExiting:function(e){var n=H.current?H.current.clientHeight:0,t=Object(v.a)({style:O,timeout:j},{mode:"exit"}).duration;if("auto"===j){var a=B.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),I.current=a}else e.style.transitionDuration="string"==typeof t?t:"".concat(t,"ms");e.style.height=T,E&&E(e)},addEndListener:function(e,n){"auto"===j&&(C.current=setTimeout(n,I.current||0))},timeout:"auto"===j?null:j},R),(function(e,i){return a.createElement(l,Object(c.a)({className:Object(h.a)(o.container,r,{entered:o.entered,exited:!u&&"0px"===T&&o.hidden}[e]),style:Object(c.a)({minHeight:T},O),ref:n},i),a.createElement("div",{className:o.wrapper,ref:H},a.createElement("div",{className:o.wrapperInner},t)))}))}));x.muiSupportAuto=!0;var E=Object(g.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(x),O=t("kKAo");var k=a.createContext({}),j=t("yCxk"),R=a.forwardRef((function(e,n){var t,o=e.children,r=e.classes,i=e.className,s=e.defaultExpanded,b=void 0!==s&&s,g=e.disabled,y=void 0!==g&&g,v=e.expanded,w=e.onChange,x=e.square,R=void 0!==x&&x,B=e.TransitionComponent,C=void 0===B?E:B,H=e.TransitionProps,I=Object(f.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=Object(j.a)({controlled:v,default:b,name:"ExpansionPanel"}),S=Object(m.a)(T,2),N=S[0],P=S[1],D=a.useCallback((function(e){P(!N),w&&w(e,!N)}),[N,w,P]),A=a.Children.toArray(o),M=(t=A,Object(d.a)(t)||Object(l.a)(t)||Object(u.a)(t)||Object(p.a)()),F=M[0],$=M.slice(1),q=a.useMemo((function(){return{expanded:N,disabled:y,toggle:D}}),[N,y,D]);return a.createElement(O.a,Object(c.a)({className:Object(h.a)(r.root,i,N&&r.expanded,y&&r.disabled,!R&&r.rounded),ref:n,square:R},I),a.createElement(k.Provider,{value:q},F),a.createElement(C,Object(c.a)({in:N,timeout:"auto"},H),a.createElement("div",{"aria-labelledby":F.props.id,id:F.props["aria-controls"],role:"region"},$)))})),B=Object(g.a)((function(e){var n={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],n),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(R),C=t("VD++"),H=t("PsDL"),I=a.forwardRef((function(e,n){var t=e.children,o=e.classes,r=e.className,i=e.expandIcon,s=e.IconButtonProps,d=e.onBlur,l=e.onClick,u=e.onFocusVisible,p=Object(f.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),m=a.useState(!1),b=m[0],g=m[1],y=a.useContext(k),v=y.disabled,w=void 0!==v&&v,x=y.expanded,E=y.toggle;return a.createElement(C.a,Object(c.a)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":x,className:Object(h.a)(o.root,r,w&&o.disabled,x&&o.expanded,b&&o.focused),onFocusVisible:function(e){g(!0),u&&u(e)},onBlur:function(e){g(!1),d&&d(e)},onClick:function(e){E&&E(e),l&&l(e)},ref:n},p),a.createElement("div",{className:Object(h.a)(o.content,x&&o.expanded)},t),i&&a.createElement(H.a,Object(c.a)({className:Object(h.a)(o.expandIcon,x&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),i))})),T=Object(g.a)((function(e){var n={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],n),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],n),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",n),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(I),S=a.forwardRef((function(e,n){var t=e.classes,o=e.className,r=Object(f.a)(e,["classes","className"]);return a.createElement("div",Object(c.a)({className:Object(h.a)(t.root,o),ref:n},r))})),N=Object(g.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(S),P=t("1iKp"),D=t.n(P),A=t("U1il"),M=t("IpnI"),F=t.n(M),$="family",q="Work",V="Travel",L="Possessions",U="Personal",W="Charity",_={},K=function(e,n,t,a){void 0===t&&(t=""),void 0===a&&(a=!1),this.goal=n,this.description=t,this.completed=a,_[e]||(_[e]=[]),_[e].push(this)};new K(U,"Become an engineer","Childhood goal to become an engineer. Over time it got more specific and decided to become a computer engineer. Although, was working professionally as an engineer I wanted to make it official. As of May 2019, I am a SDSU alumnus computer engineer.",!0),new K(U,"Be in a newspaper",'<p>Part of me always wanted to have my face in a newspaper. That first became true when I was recognized as <a href="https://newscenter.sdsu.edu/sdsu_newscenter/news_story.aspx?sid=75337">a leader in STEM by SDSU</a>. Soon after my name and app were in <a href="http://thedailyaztec.com/47880/opinion/course-snatcher-app-is-an-unfair-advantage/">the school\'s paper</a>. After that my name and picture became associated with coursekey and can be found in bunch of papers, articles and even places I didn\'t expect.</p>',!0),new K(q,"Publish technical content",'<p>Done a little bit on different places, <a href="https://medium.com/@fadeekannah">medium</a>, <a href="https://dev.to/fadeenk">dev.to</a> and mostly on my <a href="/blog">blog</a>.</p>',!0),new K(U,"Have a financial roadmap","Have a better understanding of where I stand financially. Have a map to get out of dept. Have assets evaluated and documented. Have budget plan."),new K(U,"Have a retirement plan","Ensure easy/early retirement is possible"),new K(U,"Become financially independent","Won't have to worry about money"),new K(q,"Become a millionaire",""),new K(q,"Run my own business","Kannah software and consulting services.",!0),new K(q,"Become venture backed business","CourseKey",!0),new K(q,"Have multiple incomes"),new K(U,"Create things","Mostly different software",!0),new K(L,"Have a patent",'<a href="https://patents.google.com/patent/US10212542B2/">Facilitating a meeting or education session</a>',!0),new K(L,"Have a second patent"),new K(L,"Buy a house","Family house",!0),new K(L,"Buy a second house","source of income or vacation place"),new K(V,"Live in three countries","Iraq, Turkey and USA",!0),new K(V,"Visit Japan"),new K(V,"Travel to three different countries","Mexico"),new K(V,"Travel to six of the continents"),new K($,"Find a partner and get married","Fall in love and find the partner that is ideal for me"),new K($,"Have two children"),new K($,"Take care of my parents and siblings"),new K($,"Ensure parents retire comfortably"),new K($,"Have property for parents to retire in"),new K($,"Ensure family is financially set if anything happens to me"),new K(q,"Become an investor and help small businesses"),new K(L,"Buy a Predator Thronos"),new K(U,"Solve big complex problems to make the world better"),new K(W,"Help my extended family that is in need"),new K(U,"Become a mentor");var z=_;var G={width:"90%",margin:"0 auto",maxWidth:"800px"};var J=function(e){var n,t;t=e,(n=c).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a;a=c;function c(){return e.apply(this,arguments)||this}return c.prototype.render=function(){var e={title:"Goals | "+F.a.siteTitle,description:"My Goals."};return o.a.createElement(r.a,null,o.a.createElement(i.a,{url:this.props.location.href,pageSEO:e}),o.a.createElement(s.a,{style:{background:F.a.secondary.dark},location:this.props.location}),o.a.createElement("div",{style:{textAlign:"center",backgroundImage:"linear-gradient("+F.a.secondary.dark+", "+F.a.primary.light+" 40%, "+F.a.primary.light+" 60%, "+F.a.secondary.dark+")",padding:"1em 0"}},Object.keys(z).map((function(e){return o.a.createElement("div",{style:G},o.a.createElement("h2",null,e),z[e].map((function(e){return o.a.createElement(B,null,o.a.createElement(T,{expandIcon:o.a.createElement(D.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},e.completed?o.a.createElement("del",null,e.goal):e.goal),o.a.createElement(N,null,e.description))})))}))),o.a.createElement(A.a,null))},c}(o.a.Component);n.default=J},yCxk:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t("f3/d");var a=t("q1tI");function o(e){var n=e.controlled,t=e.default,o=(e.name,a.useRef(void 0!==n).current),r=a.useState(t),i=r[0],s=r[1];return[o?n:i,a.useCallback((function(e){o||s(e)}),[])]}}}]);
//# sourceMappingURL=component---src-pages-goals-jsx-f1e7666cb24692f71943.js.map