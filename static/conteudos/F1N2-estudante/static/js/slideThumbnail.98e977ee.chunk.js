(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[171],{90019:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>lt});var r=n(71869),o=n(77707),i=n(47962),a=n(29905),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},l={position:"absolute",left:0,right:0,top:0,bottom:0},c=(0,i.Pi)((function(e){var t,n,i,a,c=e.backgroundImage,u=e.backgroundImageOpacity,d=e.backgroundImageSize,p=e.backgroundImagePosition,f=e.backgroundColor,y=e.onClick;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",{onClick:y,style:s(s({},l),{backgroundColor:f}),role:"button",tabIndex:y?0:void 0,"aria-label":y?"slide background":void 0}),c&&(0,r.jsx)("div",{style:s(s({},l),{opacity:u,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===p||void 0===p?void 0:p.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===p||void 0===p?void 0:p.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(i=null===d||void 0===d?void 0:d.Width)&&void 0!==i?i:0," ").concat(null!==(a=null===d||void 0===d?void 0:d.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(c),"')"),pointerEvents:"none"})})]})})),u="CHART_DATA_TABLE",d=n(66424),p=function(e){return e?"string"===typeof e?e:e.Rotatione:"rotate(0deg)"},f=n(40677),y=function(e){var t=e.item,n=e.disabled,o=e.feedbackText,i=e.questionSubtitleText,a=e.showAnswersIcon,s=e.feedbackColor,l=e.documentColors,c=e.t,u=e.hasDefaultAnimation,p=void 0!==u&&u,y=e.answerSelectedPreview,h=void 0!==y&&y,v=e.selectedAnswerIds,m=e.showCorrectAnswers,g=void 0!==m&&m,b=t.Question,w=t.Answers,x=t.Appearance,I=t.Id,O=w.filter((function(e){return e.Text.length>0})),j=c("__new.editor.content.questionMultiple");return(0,r.jsx)(f.h,{type:d.InteractiveQuestionType.Quiz,itemId:I,question:b||j,disabled:n,showAnswersIcon:a,hasDefaultAnimation:p,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:i,appearance:x,answers:O,answerSelectedPreview:h,selectedAnswerIds:v,showCorrectAnswers:g,dataCy:"quizInteractiveQuestionItem"})};y.Container=f.h.Container,y.Question=f.h.Question,y.Subtitle=f.h.Subtitle,y.Answers=f.h.Answers,y.Answer=f.h.Answer,y.Feedback=f.h.Feedback,y.Button=f.h.Button;const h=(0,i.Pi)(y);var v=n(57259),m=function(e){var t=e.item,n=e.disabled,o=e.feedbackText,i=e.showAnswersIcon,a=e.feedbackColor,s=e.documentColors,l=e.t,c=e.hasDefaultAnimation,u=void 0!==c&&c,p=e.answerSelectedPreview,y=void 0!==p&&p,h=e.selectedAnswerIds,v=e.showCorrectAnswers,m=void 0!==v&&v,g=t.Question,b=t.Answers,w=t.Appearance,x=t.Id;return(0,r.jsx)(f.h,{type:d.InteractiveQuestionType.TrueFalse,itemId:x,question:g||l("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:u,documentColors:s,feedbackText:o,feedbackColor:a,appearance:w,answers:b,answerSelectedPreview:y,selectedAnswerIds:h,showCorrectAnswers:m,dataCy:"trueFalseInteractiveQuestionItem"})};m.Container=f.h.Container,m.Question=f.h.Question,m.Answers=f.h.Answers,m.Answer=f.h.Answer,m.Feedback=f.h.Feedback,m.Button=f.h.Button;var g=(0,i.Pi)(m),b=function(e){var t=e.item,n=e.disabled,o=e.feedbackText,i=e.questionSubtitleText,a=e.showAnswersIcon,s=e.feedbackColor,l=e.documentColors,c=e.t,u=e.hasDefaultAnimation,p=void 0!==u&&u,y=e.answerSelectedPreview,h=void 0!==y&&y,v=e.selectedAnswerIds,m=e.showCorrectAnswers,g=void 0!==m&&m,b=t.Question,w=t.Answers,x=t.Appearance,I=t.Id,O=w.filter((function(e){return e.Image.length>0}));return(0,r.jsx)(f.h,{type:d.InteractiveQuestionType.Image,itemId:I,question:b||c("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:p,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:i,appearance:x,answers:O,answerSelectedPreview:h,selectedAnswerIds:v,showCorrectAnswers:g,dataCy:"imageInteractiveQuestionItem"})};b.Container=f.h.Container,b.Question=f.h.Question,b.Subtitle=f.h.Subtitle,b.Answers=f.h.Answers,b.Answer=f.h.Answer,b.Feedback=f.h.Feedback,b.Button=f.h.Button;var w=(0,i.Pi)(b),x=n(86571),I=function(e){var t=e.item,n=e.disabled,o=e.feedbackText,i=e.questionSubtitleText,a=e.showAnswersIcon,s=e.feedbackColor,l=e.documentColors,c=e.t,u=e.hasDefaultAnimation,p=void 0!==u&&u,y=e.answerSelectedPreview,h=void 0!==y&&y,v=e.selectedAnswerIds,m=e.showCorrectAnswers,g=void 0!==m&&m,b=e.showResultPreview,w=void 0!==b&&b,x=t.Question,I=t.Answers,O=t.Appearance,j=t.Id,k=I.filter((function(e){return e.Text.length>0})),P=c("__new.editor.content.questionMultiple");return(0,r.jsx)(f.h,{type:d.InteractiveQuestionType.Survey,itemId:j,question:x||P,disabled:n,showAnswersIcon:a,hasDefaultAnimation:p,documentColors:l,feedbackText:o,feedbackColor:s,questionSubtitleText:i,appearance:O,answers:k,answerSelectedPreview:h,selectedAnswerIds:v,showCorrectAnswers:g,showResultPreview:w,showResultEnabled:t.Options.ShowResults,dataCy:"surveyInteractiveQuestionItem"})};I.Container=f.h.Container,I.Question=f.h.Question,I.Subtitle=f.h.Subtitle,I.Answers=f.h.Answers,I.Answer=f.h.Answer,I.Feedback=f.h.Feedback,I.Button=f.h.Button;var O=(0,i.Pi)(I),j=["onClick","onMouseOver","onMouseOut"];function k(e,t){return(0,o.useMemo)((function(){var n={};return j.forEach((function(r){var o=e[r];n[r]=o?function(){return o(t)}:void 0})),n}),[e,t])}var P=function(){return P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},P.apply(this,arguments)},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},C=(0,o.forwardRef)((function(e,t){var n,o=e.item,i=e.zIndex,a=e.style,s=e.t,l=e.selectedAnswerIds,c=e.showCorrectAnswers,u=void 0!==c&&c,f=e.documentConfig,y=k(S(e,["item","zIndex","style","t","selectedAnswerIds","showCorrectAnswers","documentConfig"]),o),m=o.data||o,b=m.Opacity,I=m.Rotation,j=m.Frame,C=m.Position,A=m.ZIndex,T=m.Size,z=m.Type;switch(z){case d.InteractiveQuestionType.Quiz:n=(0,r.jsx)(h,{item:o.data||o,t:s,selectedAnswerIds:l,showCorrectAnswers:u,disabled:u,documentColors:null===f||void 0===f?void 0:f.colors},o.Id);break;case d.InteractiveQuestionType.OpenAnswer:n=(0,r.jsx)(v.g,{item:o.data||o,t:s,userAnswer:(null===l||void 0===l?void 0:l.length)?l[0]:void 0,disabled:u,documentColors:null===f||void 0===f?void 0:f.colors},o.Id);break;case d.InteractiveQuestionType.TrueFalse:n=(0,r.jsx)(g,{item:o.data||o,t:s,selectedAnswerIds:l,showCorrectAnswers:u,disabled:u,documentColors:null===f||void 0===f?void 0:f.colors},o.Id);break;case d.InteractiveQuestionType.Image:n=(0,r.jsx)(w,{item:o.data||o,t:s,selectedAnswerIds:l,showCorrectAnswers:u,disabled:u,documentColors:null===f||void 0===f?void 0:f.colors},o.Id);break;case d.InteractiveQuestionType.Sort:n=(0,r.jsx)(x.X,{item:o.data||o,t:s,showCorrectAnswers:u,disabled:u,documentColors:null===f||void 0===f?void 0:f.colors},o.Id);break;case d.InteractiveQuestionType.Survey:n=(0,r.jsx)(O,{item:o.data||o,t:s,selectedAnswerIds:l},o.Id);break;default:throw new Error("InteractiveQuestion type ".concat(z," does not have any component associated"))}return(0,r.jsx)("div",P({ref:t,style:P({height:T.Height,left:C.PositionLeft,opacity:b,overflow:"hidden",position:"absolute",top:C.PositionTop,transform:p(I),width:T.Width,zIndex:i||A},a),className:j,role:"button",tabIndex:void 0===y.onClick?0:void 0},y,{children:n}))}));const A=(0,i.Pi)(C);function T(e,t){var n,r=null!==(n=e.data)&&void 0!==n?n:e,o={position:"absolute"};return"Position"in r&&(o.left=r.Position.PositionLeft,o.top=r.Position.PositionTop),"Size"in r&&(o.width=r.Size.Width,o.height=r.Size.Height),void 0!==t?o.zIndex=t:"ZIndex"in r&&(o.zIndex=r.ZIndex),"Rotation"in r&&(o.transform=p(r.Rotation)),"Opacity"in r&&(o.opacity=r.Opacity),"IsHidden"in r&&r.IsHidden&&(o.display="none"),o}var z=n(76647),B=z.ZP.div.withConfig({displayName:"Wrapper",componentId:"sc-1857j29"})((function(e){var t=e.theme.color;return{position:"absolute",margin:0,backgroundColor:t.brand.primary(.15),"& img":{border:"1px solid ".concat(t.brand.primary()),width:"100%",height:"100%",userSelect:"none"}}})),R=function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},R.apply(this,arguments)},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Q=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=k(E(e,["item","zIndex","style"]),n);return(0,r.jsx)(B,R({ref:t,style:R(R({width:"100%",height:"100%"},T(n,o)),i)},a))}));const _=(0,i.Pi)(Q);var Z=function(){return Z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Z.apply(this,arguments)},L=o.lazy((function(){return n.e(323).then(n.bind(n,7289))}));const N=function(e){return(0,r.jsx)(o.Suspense,Z({fallback:null},{children:(0,r.jsx)(L,Z({},e))}))};var W=function(){return W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},W.apply(this,arguments)},F=o.lazy((function(){return Promise.all([n.e(342),n.e(482)]).then(n.bind(n,48687))}));const q=function(e){return(0,r.jsx)(o.Suspense,W({fallback:null},{children:(0,r.jsx)(F,W({},e))}))};var H=n(33230),M=function(){return M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},M.apply(this,arguments)},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},V=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},G=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},U=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=e.documentConfig,s=k(D(e,["item","zIndex","style","documentConfig"]),n),l=n.data||n,c=l.Data,d=l.Id,p=l.Options,f=l.Size,y=l.ChartType,h=l.Type,v=l.RawData,m=l.tableRawData,g=l.Version,b=y||h,w=b===u,x=g>=1,I=g>=2?H.X.LabelsFontSize:void 0,O=g<2,j=g>=3?p.TextColor:void 0,P={pointerEvents:"none"};return(0,r.jsx)("div",M({ref:t,style:M(M({},T(n,o)),i),role:"button",tabIndex:void 0===s.onClick?0:void 0},s,{children:w?(0,r.jsx)(N,{cellStyles:p.CellStyles,data:m||v,id:d,tableStyles:p.TableStyles,normalWordBreak:x,style:P}):(0,r.jsx)(q,{colors:G([],V(p.Colors),!1),data:c,enableAnimation:!1,height:f.Height,id:d,invertYAxis:p.InvertYAxis,prefix:p.Prefix,showAxisLabels:p.AxisLabels,showLegend:p.Legend,showTooltip:p.Tooltip,suffix:p.Suffix,textColor:p.TextColor,type:b,width:f.Width,documentConfig:a,lineVariant:p.LineVariant,showLineMarkers:p.ShowMarkers,labelsFontSize:I,showTitles:O,colorAllTexts:j,style:P})}))}));const X=(0,i.Pi)(U);var Y=z.ZP.div.withConfig({displayName:"Wrapper",componentId:"sc-acowwk"})((function(e){var t=e.theme.size;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),$=function(){return $=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$.apply(this,arguments)},J=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},K=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.getZIndexOfItem,a=e.style,s=e.canBeTranslated,l=e.documentConfig,c=e.t,u=k(J(e,["item","zIndex","getZIndexOfItem","style","canBeTranslated","documentConfig","t"]),n);return(0,r.jsx)(Y,$({ref:t,style:$($({},T(n,o)),a)},u,{children:n.groupedItems.map((function(e){return(0,r.jsx)(rt,{itemType:e.type,item:e,getZIndexOfItem:i,canBeTranslated:s,documentConfig:l,t:c},e.Id)}))}))}));const ee=(0,i.Pi)(K);function te(e,t,n){var r=new Image,o=n;n||(o={mimeType:"image/png"}),r.onload=function(){try{var e=document.createElement("canvas");e.width=r.width,e.height=r.height;var n=e.getContext("2d");n&&n.drawImage(r,0,0);var i=e.toDataURL(null===o||void 0===o?void 0:o.mimeType);t(null,i)}catch(a){t(!0,null)}},r.onerror=function(){t(!0,null)},r.setAttribute("crossOrigin","anonymous"),r.src=function(e,t){if(!t)return e;var n=new URL(e);return n.protocol.startsWith("http")?(Object.keys(t).forEach((function(e){n.searchParams.set(e,t[e])})),n.toString()):e}(e,{v:"anonymous"})}var ne=n(94294),re=n(61847);const oe=e=>{let{className:t,color:n,height:r,size:i,style:a,width:s,...l}=e;return o.createElement(re.Z,{className:t,color:n,height:r,size:i,style:a,viewBox:"0 0 16 16",width:s,...l},o.createElement("g",null,o.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))};var ie=z.ZP.div.withConfig({displayName:"ErrorImgWrapper",componentId:"sc-1khirvj"})((function(e){var t=e.theme,n=t.color,r=t.size,o=t.shadow;return{background:n.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:n.neutral.white(),borderRadius:r.units(.33),padding:r.units(.5),boxShadow:o.short}})),ae=(0,z.ZP)(oe).withConfig({displayName:"ErrorIconStyled",componentId:"sc-18i566h"})((function(){return{width:"50%",height:"50%"}})),se=z.ZP.p.withConfig({displayName:"ErrorTextStyled",componentId:"sc-izh9xm"})((function(e){var t=e.theme.size;return{display:e.$showTitle?"block":"none",fontSize:t.units(3)}})),le=function(){return le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},le.apply(this,arguments)},ce=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ue=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},de=(0,o.forwardRef)((function(e,t){var n,i=e.item,a=e.zIndex,s=e.style,l=k(ce(e,["item","zIndex","style"]),i),c=null!==(n=i.Source)&&void 0!==n?n:i.data.Source,u=ue((0,o.useState)(null),2),d=u[0],p=u[1],f=ue((0,o.useState)(!1),2),y=f[0],h=f[1],v=ue((0,o.useState)(null),2),m=v[0],g=v[1],b=(0,o.useRef)(!1),w=(0,o.useRef)(/\.(gif)|data:image\/gif/.test(c)),x=(0,o.useCallback)((function(){try{te(c,(function(e,t){b.current&&(e?h(!0):(p(t),g(c)))}))}catch(e){console.warn(e),h(!0)}}),[c]);if((0,o.useEffect)((function(){return b.current=!0,function(){b.current=!1}}),[]),(0,o.useEffect)((function(){w.current&&x()}),[x]),(0,o.useEffect)((function(){w.current?!w.current||d&&m===c||x():(p(null),h(!1),g(null))}),[c,d,m,x]),w.current&&!d&&!y)return null;var I=i.data||i,O=parseInt(I.Size.Height,10)<200;return(0,r.jsx)("div",le({ref:t,style:le(le({overflow:"hidden"},T(i,a)),s),className:I.Frame,role:"button",tabIndex:void 0===l.onClick?0:void 0},l,{children:y?(0,r.jsxs)(ie,{children:[(0,r.jsx)(ae,{}),(0,r.jsx)(se,le({$showTitle:!O},{children:"GIF"}))]}):(0,r.jsx)("div",le({style:{position:"absolute",top:"".concat(I.Offset.top,"%"),left:"".concat(I.Offset.left,"%"),right:"".concat(I.Offset.right,"%"),bottom:"".concat(I.Offset.bottom,"%")}},{children:(0,r.jsx)("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,ne.s)(I.Transformations)},src:d||c,alt:I.Name})}))}))}));const pe=(0,i.Pi)(de);var fe=function(){return fe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},fe.apply(this,arguments)},ye=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},he=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.style,i=k(ye(e,["item","style"]),n),a=n.data||n;return(0,r.jsx)("div",fe({ref:t,className:"pin-item",style:fe(fe(fe({},T(n,void 0)),{zIndex:99999,maxWidth:"100%",width:"100%",height:"100%"}),o),role:"button",tabIndex:void 0===i.onClick?0:void 0},i,{children:(0,r.jsx)("img",{style:{width:"32px",height:"32px"},src:a.Source,alt:a.Name})}))}));const ve=(0,i.Pi)(he);var me=n(12023),ge=z.ZP.div.withConfig({displayName:"RichContentWrapper",componentId:"sc-1witgj6"})((function(e){var t=e.theme,n=t.color,r=t.size;return{background:n.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:n.neutral.white(),borderRadius:r.units(2/3),padding:r.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(r.units(1)," 0 ").concat(n.neutral.black(.2)),"& svg":{width:r.units(5.5)}}})),be=function(){return be=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},be.apply(this,arguments)},we=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},xe=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=k(we(e,["item","zIndex","style"]),n),s=n.data||n,l=parseInt(s.Size.Height,10)<50?"80%":"100%";return(0,r.jsx)("div",be({ref:t,style:be(be({},T(n,o)),i),role:"button",tabIndex:void 0===a.onClick?0:void 0},a,{children:(0,r.jsx)(ge,{children:(0,r.jsx)(me.Z,{height:l})})}))}));const Ie=(0,i.Pi)(xe);var Oe=n(73269),je=z.ZP.div.withConfig({displayName:"SvgWrapper",componentId:"sc-b9rik6"})({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none",height:"100%"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),ke=function(){return ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ke.apply(this,arguments)},Pe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Se=(0,o.forwardRef)((function(e,t){var n,i,a=e.item,s=e.zIndex,l=e.style,c=k(Pe(e,["item","zIndex","style"]),a),u=(0,o.useRef)(null),d=null!==(n=a.data)&&void 0!==n?n:a,p=null===(i=d.Colors)||void 0===i?void 0:i[0],f=d.sourceSvg||d.SourceSvg;(0,o.useLayoutEffect)((function(){var e=u.current;e&&(e.querySelectorAll(".color1").forEach((function(e){e.style.fill=p})),Oe.G6&&e.querySelectorAll("linearGradient").forEach((function(e){var t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[f,p]);var y=(0,o.useCallback)((function(e){u.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return(0,r.jsx)(je,ke({className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:f},ref:y,style:ke(ke(ke({},T(a,s)),{backgroundColor:d.Background}),l)},c))}));const Ce=(0,i.Pi)(Se);var Ae=n(24313),Te=n(2290),ze=n(63077),Be=n(76578),Re=function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Re.apply(this,arguments)},Ee=z.ZP.div.withConfig({displayName:"TextFakeWrapper",componentId:"sc-1k260eu"})({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(function(e){var t=e.theme,n=t.color,r=t.size;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(n.neutral.black(.5))},"&.interparagraph_medium":Re({},Be.oB.mixins.setInterparagraph(r.units(1))),"&.interparagraph_big":Re({},Be.oB.mixins.setInterparagraph(r.units(2.25))),"& p":{margin:"0 0 ".concat(r.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:r.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:r.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(r.units(5)),border:"none",padding:0}}})),Qe=function(){return Qe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Qe.apply(this,arguments)},_e=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ze=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=e.canBeTranslated,s=k(_e(e,["item","zIndex","style","canBeTranslated"]),n),l=n.data||n,c=(0,ze.j)(l),u=l.Version>=6;return(0,r.jsx)(Ee,Qe({ref:t,className:(0,Ae.Z)([c,{notranslate:!a}]),style:Qe(Qe(Qe({},T(n,o)),{backgroundColor:l.Background,color:l.Color,fontSize:l.FontSize,fontFamily:(0,Te.k)(l.FontFamily,u),padding:l.Padding,lineHeight:l.LineHeight,letterSpacing:"".concat(l.LetterSpacing,"px"),wordWrap:l.Version<2?"initial":"break-word"}),i),dangerouslySetInnerHTML:{__html:l.TextMessage}},s))}));const Le=(0,i.Pi)(Ze);var Ne=n(97194),We=n(81481),Fe=(0,z.ZP)(Be.h2).withConfig({displayName:"StyledBasicParagraph",componentId:"sc-z728tn"})((function(e){return{color:e.theme.color.neutral.cement()}})),qe=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},He.apply(this,arguments)},Me=function(e){function t(t){var n=e.call(this,t)||this;return n.randomId=(0,Ne.v4)(),n.fakeBars=new Array(40).fill(1),n.renderBars=function(){for(var e=n.props.theme,t=[],r=0;r<41;r+=1)t.push(128);n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height),n.ctx.fillStyle=e.color.neutral.cement();for(var o=0;o<41;o+=1){var i=8*o,a=-(t[o]/2||5);n.ctx.fillRect(i,n.canvas.height,4,a)}},n.canvasRef=o.createRef(),n}return qe(t,e),t.prototype.componentDidMount=function(){this.canvas=document.querySelector("#canva-element-fake".concat(this.randomId)),this.ctx=this.canvas.getContext("2d"),this.renderBars()},t.prototype.render=function(){var e=this.props,t=e.name,n=e.width;return(0,r.jsxs)("div",He({className:"widget-audio-player"},{children:[(0,r.jsx)("div",He({className:"widget-audio-player-play-container"},{children:(0,r.jsx)(We.Z,{})})),(0,r.jsxs)("div",He({className:"widget-audio-player-info-container"},{children:[(0,r.jsx)("div",He({className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},{children:(0,r.jsx)("canvas",{id:"canva-element-fake".concat(this.randomId),style:{width:"100%",height:"42%"}})})),(0,r.jsx)("div",{className:"widget-audio-player-file-progress-bar"}),(0,r.jsx)("div",He({className:"widget-audio-player-file-name-container"},{children:(0,r.jsx)(Fe,He({className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},{children:t}))}))]}))]}))},t}(o.Component);const De=(0,z.Zz)(Me);var Ve=function(){return Ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ve.apply(this,arguments)},Ge=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ue=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=k(Ge(e,["item","zIndex","style"]),n),s=n.data||n,l=s.Name,c=s.Size,u=s.Background;return(0,r.jsx)("div",Ve({ref:t,style:Ve(Ve(Ve({},T(n,o)),{backgroundColor:u}),i),role:"button",tabIndex:void 0===a.onClick?0:void 0},a,{children:(0,r.jsx)(De,{name:l,width:c.Width})}))}));const Xe=(0,i.Pi)(Ue);var Ye=z.ZP.div.withConfig({displayName:"VideoFakeWrapper",componentId:"sc-lu1nms"})((function(e){var t=e.theme.color;return{background:t.neutral.black(.8),color:t.neutral.white(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),$e=function(){return $e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},$e.apply(this,arguments)},Je=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ke=(0,o.forwardRef)((function(e,t){var n=e.item,o=e.zIndex,i=e.style,a=k(Je(e,["item","zIndex","style"]),n),s=(n.data||n).Background;return(0,r.jsx)(Ye,$e({ref:t,style:$e($e($e({},T(n,o)),{backgroundColor:s}),i)},a,{children:(0,r.jsx)(oe,{height:"50%",width:"50%"})}))}));const et=(0,i.Pi)(Ke);var tt=function(){return tt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},tt.apply(this,arguments)},nt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},rt=(0,i.Pi)((function(e){var t=e.itemType,n=e.item,i=e.getZIndexOfItem,s=e.events,l=e.renderItem,c=nt(e,["itemType","item","getZIndexOfItem","events","renderItem"]),d=(0,o.useRef)(null),p=tt(tt({item:n,zIndex:i(n),getZIndexOfItem:i,ref:l?d:void 0},s),c);var f=function(){var e;switch(t){case a.ItemType.Area:return(0,r.jsx)(_,tt({},p));case a.ItemType.Image:return(0,r.jsx)(pe,tt({},p));case a.ItemType.Pin:return(0,r.jsx)(ve,tt({},p));case a.ItemType.RichContent:return(0,r.jsx)(Ie,tt({},p));case a.ItemType.Svg:return(0,r.jsx)(Ce,tt({},p));case a.ItemType.Text:return(0,r.jsx)(Le,tt({},p));case a.ItemType.WidgetAudio:var o=null!==(e=n.data)&&void 0!==e?e:n;return o.DisplayPlayer&&!o.IsBackground?(0,r.jsx)(Xe,tt({},p)):null;case a.ItemType.WidgetVideo:return(0,r.jsx)(et,tt({},p));case a.ItemType.Chart:case u:return(0,r.jsx)(X,tt({},p));case a.ItemType.Activity:return(0,r.jsx)(A,tt({},p));case a.ItemType.Group:return(0,r.jsx)(ee,tt({},p));default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}();return l?l({item:n,itemId:n.Id,itemType:t,itemNode:f,itemRef:d}):f})),ot=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},it=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},at=[];function st(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((function(e){return e.data?!e.data.IdGroup:!e.IdGroup})).map((function(e){return{item:e,itemType:t}})))&&void 0!==n?n:at}const lt=(0,i.Pi)((function(e){var t=e.slide,n=e.documentConfig,i=e.getZIndexOfItem,s=void 0===i?function(){}:i,l=e.canBeTranslated,u=void 0===l||l,d=e.onItemClick,p=e.onItemMouseOver,f=e.onItemMouseOut,y=e.onBackgroundClick,h=e.itemStyles,v=e.renderItem,m=e.showBackgroundColor,g=void 0===m||m,b=e.showBackgroundImage,w=void 0===b||b,x=e.t,I=function(e,t){if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor}(t,g),O=function(e,t){var n,r,o;if(t)return"Background"in e?e.Background:null!==(r=null===(n=e.background)||void 0===n?void 0:n.CurrentBackgroundImage)&&void 0!==r?r:null===(o=e.background)||void 0===o?void 0:o.currentBackgroundImage}(t,w),j=function(e){var t;return"data"in e?null!==(t=e.data.backgroundSize)&&void 0!==t?t:e.data.SizeBackground:e.SizeBackground?e.SizeBackground:e.BackgroundHeight||e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Width,Height:e.Height}}(t),k=function(e){var t;return"data"in e?null!==(t=e.data.backgroundPosition)&&void 0!==t?t:e.data.PositionBackground:e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft||e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground}(t),P="data"in t?t.data.OpacityBackground:t.OpacityBackground,S=(0,o.useMemo)((function(){return{onClick:d,onMouseOver:p,onMouseOut:f}}),[d,f,p]);return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(c,{backgroundImageOpacity:P,backgroundImage:O,backgroundImageSize:j,backgroundImagePosition:k,backgroundColor:I,onClick:y},t.Id),it(it(it(it(it(it(it(it(it(it(it([],ot(st(t.areas,a.ItemType.Area)),!1),ot(st(t.images,a.ItemType.Image)),!1),ot(st(t.pins,a.ItemType.Pin)),!1),ot(st(t.richContents,a.ItemType.RichContent)),!1),ot(st(t.svgs,a.ItemType.Svg)),!1),ot(st(t.texts,a.ItemType.Text)),!1),ot(st(t.widgetsAudio,a.ItemType.WidgetAudio)),!1),ot(st(t.widgetsVideo,a.ItemType.WidgetVideo)),!1),ot(st(t.charts,a.ItemType.Chart)),!1),ot(st(t.activities,a.ItemType.Activity)),!1),ot(st(t.groups,a.ItemType.Group)),!1).map((function(e){var t=e.item,o=e.itemType;return(0,r.jsx)(rt,{itemType:o,item:t,events:S,getZIndexOfItem:s,canBeTranslated:u,documentConfig:n,style:null===h||void 0===h?void 0:h[t.Id],renderItem:v,t:x},t.Id)}))]})}))},97194:(e,t,n)=>{var r=n(60151),o=n(59480),i=o;i.v1=r,i.v4=o,e.exports=i},64182:e=>{for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},1189:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},60151:(e,t,n)=>{var r,o,i=n(1189),a=n(64182),s=0,l=0;e.exports=function(e,t,n){var c=t&&n||0,u=t||[],d=(e=e||{}).node||r,p=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==p){var f=i();null==d&&(d=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==p&&(p=o=16383&(f[6]<<8|f[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),h=void 0!==e.nsecs?e.nsecs:l+1,v=y-s+(h-l)/1e4;if(v<0&&void 0===e.clockseq&&(p=p+1&16383),(v<0||y>s)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=y,l=h,o=p;var m=(1e4*(268435455&(y+=122192928e5))+h)%4294967296;u[c++]=m>>>24&255,u[c++]=m>>>16&255,u[c++]=m>>>8&255,u[c++]=255&m;var g=y/4294967296*1e4&268435455;u[c++]=g>>>8&255,u[c++]=255&g,u[c++]=g>>>24&15|16,u[c++]=g>>>16&255,u[c++]=p>>>8|128,u[c++]=255&p;for(var b=0;b<6;++b)u[c+b]=d[b];return t||a(u)}},59480:(e,t,n)=>{var r=n(1189),o=n(64182);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[i+s]=a[s];return t||o(a)}}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/slideThumbnail.98e977ee.chunk.js.map