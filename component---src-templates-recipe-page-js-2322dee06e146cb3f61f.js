(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),o=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=u(e),a=m(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+l+s+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(x,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,N=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+E+"ms":"none"},s),z="boolean"==typeof h?"lightgray":h,V={transitionDelay:E+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&V,{},s,{},m),P={title:t,alt:this.state.isVisible?"":a,style:T,className:f,itemProp:v};if(g){var j=g,M=j[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),z&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&V)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:P,imageVariants:j,generateSources:k}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:P,imageVariants:j,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(j),c.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:j}))}}))}if(p){var W=p,_=W[0],q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete q.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},z&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:z,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},C&&V)}),_.base64&&c.default.createElement(I,{src:_.base64,spreadProps:P,imageVariants:W,generateSources:k}),_.tracedSVG&&c.default.createElement(I,{src:_.tracedSVG,spreadProps:P,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(W),c.default.createElement(x,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},_,{imageVariants:W}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:C,sizes:R,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=O;t.default=z},IpXl:function(e,t,a){"use strict";a.r(t);var r=a("9Hrx"),i=a("q1tI"),n=a.n(i),l=a("Wbzz"),s=a("9eSz"),o=a.n(s),c=a("Bl7J"),d=a("vrFN"),u=a("ok1R"),m=a("rhny"),f=a("k1TG"),g=a("8o2o"),p=a("TSYQ"),h=a.n(p),E=a("33Jr"),b=function(e){var t=e.className,a=e.cssModule,r=e.color,i=e.innerRef,l=e.pill,s=e.tag,o=Object(g.a)(e,["className","cssModule","color","innerRef","pill","tag"]),c=Object(E.e)(h()(t,"badge","badge-"+r,!!l&&"badge-pill"),a);return o.href&&"span"===s&&(s="a"),n.a.createElement(s,Object(f.a)({},o,{className:c,ref:i}))};b.defaultProps={color:"secondary",pill:!1,tag:"span"};var y=b,v=a("OSPL"),S=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return n.a.createElement(c.a,{location:this.props.location,title:t},n.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,isRecipe:!0,datePublished:e.frontmatter.date,image:e.frontmatter.full_img.publicURL,recipe:e.frontmatter}),n.a.createElement("div",{className:"container"},n.a.createElement(u.a,{className:"recipe-detail-row"},n.a.createElement(m.a,{md:"6",sm:"12",className:"mb-4"},n.a.createElement(o.a,{className:"recipe-full-img",alt:e.frontmatter.title,fluid:e.frontmatter.full_img.childImageSharp.fluid})),n.a.createElement(m.a,{md:"6",className:" d-none d-md-block d-lg-none"},n.a.createElement("div",{className:"recipe-details p-2"},n.a.createElement("h1",null,e.frontmatter.title),n.a.createElement("p",null,e.frontmatter.description))),n.a.createElement(m.a,{lg:"6",md:"12"},n.a.createElement("div",{className:"recipe-details p-2"},n.a.createElement("h1",{className:"d-block d-md-none d-lg-block"},e.frontmatter.title),n.a.createElement("p",{className:"d-block d-md-none d-lg-block"},e.frontmatter.description),n.a.createElement("div",{className:"recipe-detail-columns"},n.a.createElement("div",{className:"recipe-detail"},n.a.createElement("span",{"data-uk-icon":"icon: clock; ratio: 1.4",className:"uk-icon"},n.a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-svg":"clock"},n.a.createElement("circle",{fill:"none",stroke:"#000",strokeWidth:"1.1",cx:"10",cy:"10",r:"9"}),n.a.createElement("rect",{x:"9",y:"4",width:"1",height:"7"}),n.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.1",d:"M13.018,14.197 L9.445,10.625"}))),n.a.createElement("h5",{className:"uk-text-500 uk-margin-small-top mb-0"},"Prep Time"),n.a.createElement("span",{className:"uk-text-small"},e.frontmatter.prep)),n.a.createElement("div",{className:"recipe-detail"},n.a.createElement("span",{"data-uk-icon":"icon: future; ratio: 1.4",className:"uk-icon"},n.a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-svg":"future"},n.a.createElement("polyline",{points:"19 2 18 2 18 6 14 6 14 7 19 7 19 2"}),n.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.1",d:"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"}),n.a.createElement("rect",{x:"9",y:"4",width:"1",height:"7"}),n.a.createElement("path",{d:"M13.018,14.197 L9.445,10.625",fill:"none",stroke:"#000",strokeWidth:"1.1"}))),n.a.createElement("h5",{className:"uk-text-500 uk-margin-small-top uk-margin-remove-bottom"},"Cook Time"),n.a.createElement("span",{className:"uk-text-small"},e.frontmatter.cook)),n.a.createElement("div",{className:"recipe-detail"},n.a.createElement("span",{"data-uk-icon":"icon: users; ratio: 1.4",className:"uk-icon"},n.a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-svg":"users"},n.a.createElement("circle",{fill:"none",stroke:"#000",strokeWidth:"1.1",cx:"7.7",cy:"8.6",r:"3.5"}),n.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.1",d:"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"}),n.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.1",d:"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"}))),n.a.createElement("h5",{className:"uk-text-500 uk-margin-small-top uk-margin-remove-bottom"},"Servings"),n.a.createElement("span",{className:"uk-text-small"},e.frontmatter.servings))),n.a.createElement("hr",null),n.a.createElement("div",{id:"recipe-actions",className:"text-center"},n.a.createElement("ul",{className:"list-unstyled list-inline recipe-tag-list"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("small",null,"Tags:")),e.frontmatter.tags.map((function(e){return n.a.createElement("li",{key:e,className:"list-inline-item"},n.a.createElement(l.Link,{to:"/tags/"+Object(v.slugify)(e)},n.a.createElement(y,{className:"bg-orange"},e)))})))))),n.a.createElement(m.a,{sm:"12"},n.a.createElement("article",null,n.a.createElement(u.a,{className:"pt-5 recipe-body"},n.a.createElement(m.a,{sm:"12",md:"7"},n.a.createElement("h3",null,"Instructions"),n.a.createElement("section",{className:"recipe-instructions",dangerouslySetInnerHTML:{__html:e.html}})),n.a.createElement(m.a,{sm:"12",md:{size:4,offset:1},className:"order-md-last order-first"},e.frontmatter.tools?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"sidebar-title"},"Tools"),n.a.createElement("ul",{className:"list-unstyled sidebar-list tool-list"},e.frontmatter.tools.map((function(e){return n.a.createElement("li",{key:e.name},e.name)})))):n.a.createElement(n.a.Fragment,null),n.a.createElement("h3",{className:"sidebar-title"},"Ingredients"),n.a.createElement("ul",{className:"list-unstyled sidebar-list ingredients-list"},e.frontmatter.ingredients.map((function(e){return n.a.createElement("li",{key:e.ingredient},e.amount," ",e.link?n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.ingredient," ",n.a.createElement("span",{className:"sr-only"},"(Opens in new window)")):e.ingredient,e.note?n.a.createElement("small",{className:"d-block"},n.a.createElement("em",null,e.note)):"")}))),e.frontmatter.suggestions?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"sidebar-title"},"Serving Suggestions"),n.a.createElement("ul",{className:"list-unstyled sidebar-list suggestion-list"},e.frontmatter.suggestions.map((function(e){return n.a.createElement("li",{key:e.ingredient},e.ingredient)})))):n.a.createElement(n.a.Fragment,null))),n.a.createElement("hr",null),n.a.createElement("nav",null,n.a.createElement("ul",{className:"recipe-footer-nav list-inline"},n.a.createElement("li",{className:"list-inline-item"},r&&n.a.createElement(l.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),n.a.createElement("li",{className:"list-inline-item"},i&&n.a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))))))},t}(n.a.Component);t.default=S},OSPL:function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}}]);
//# sourceMappingURL=component---src-templates-recipe-page-js-2322dee06e146cb3f61f.js.map