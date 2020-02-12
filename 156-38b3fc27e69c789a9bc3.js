(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{"./.linaria-cache/src/components/home/SearchInput.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/home/SearchResults.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/home/StickerPackPreviewCard.linaria.css":function(e,t,a){},"./src/components/home/Home.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/react/index.js"),s=a.n(n),o=a("./src/components/home/SearchInput.tsx"),c=a("./src/components/home/SearchResults.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,u=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("p",{className:"my-4 py-lg-2"},"Welcome to Signal Stickers, the unofficial directory for Signal sticker packs. You can filter packs by title, author, or tags."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(o.a,null))),s.a.createElement(c.a,null))},d=u;t.default=d,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"HomeComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx"),l.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/Home.tsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/SearchInput.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),s=a.n(n),o=a("./node_modules/debounce-fn/index.js"),c=a.n(o),l=a("./node_modules/linaria/lib/index.js"),i=a("./node_modules/linaria/react.js"),u=a("./node_modules/react/index.js"),d=a.n(u),m=a("./node_modules/react-octicon/lib/index.js"),f=a.n(m),p=a("./node_modules/use-breakpoint/index.umd.js"),b=a.n(p),h=a("./src/etc/constants.ts"),k=a("./src/contexts/StickersContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=Object(i.styled)("div")({name:"SearchInput",class:"sooxe2f"}),x=function(){var e=Object(u.useContext)(k.b),t=e.allStickerPacks,a=e.searchQuery,r=e.setSearchQuery,n=Object(u.useState)(""),o=s()(n,2),i=o[0],m=o[1],p=b()(h.a,"xl").breakpoint,v=c()((function(e){r(e)}),{wait:250});function x(e){m(e.currentTarget.textContent)}var S=["cute","privacy","meme","for children"].map((function(e){return d.a.createElement("a",{href:"#",className:"badge badge-signal",onClick:x},e)}));Object(u.useEffect)((function(){a&&m(a)}),[]),Object(u.useEffect)((function(){return v.cancel(),v(i),function(){v.cancel()}}),[i]);var y=t?"Search ".concat(t.length," sticker packs..."):"";return d.a.createElement(g,{className:"form-group mb-4 mb-md-5"},d.a.createElement("div",{className:Object(l.cx)("input-group",["md","lg","xl"].includes(p)&&"input-group-lg")},d.a.createElement("div",{className:"input-group-prepend"},d.a.createElement("span",{className:"input-group-text"},d.a.createElement(f.a,{name:"search"}))),d.a.createElement("input",{type:"text",key:"search",className:"form-control",onChange:function(e){var t=e.target.value;m(t)},value:i,placeholder:y,title:"Search","aria-label":"search",autoComplete:"false",spellCheck:"false"}),d.a.createElement("div",{className:"input-group-append"},d.a.createElement("button",{className:"input-group-text btn btn-light btn-sm",onClick:function(e){e.preventDefault(),m(""),r("")},title:"Clear Search Results"}," ",d.a.createElement(f.a,{name:"x",className:"text-danger"})))),d.a.createElement("small",null,"Lost? Why not start with these tags?")," ",S)};v(x,"useContext{{\n    allStickerPacks,\n    searchQuery,\n    setSearchQuery\n  }}\nuseState{[searchQueryInputValue, setSearchQueryInputValue]('')}\nuseBreakpoint{{\n    breakpoint\n  }}\nuseEffect{}\nuseEffect{}",(function(){return[b.a]}));var S,y,j=x;t.a=j,a("./.linaria-cache/src/components/home/SearchInput.linaria.css"),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(g,"SearchInput","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(x,"SearchInputComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx"),S.register(j,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchInput.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/SearchResults.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),s=a.n(n),o=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),c=a.n(o),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),u=a("./node_modules/linaria/react.js"),d=a("./node_modules/react/index.js"),m=a.n(d),f=a("./node_modules/react-router-dom/esm/react-router-dom.js"),p=a("./node_modules/react-waypoint/es/index.js"),b=a("./node_modules/ramda/es/take.js"),h=a("./node_modules/use-async-effect/index.js"),k=a.n(h),v=a("./src/contexts/StickersContext.tsx"),g=a("./src/components/home/StickerPackPreviewCard.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},S=Object(u.styled)("div")({name:"StickerPackList",class:"soapbay"}),y=function(){var e=Object(d.useContext)(v.b).searchResults,t=Object(d.useState)(0),a=i()(t,2),r=a[0],n=a[1],o=Object(d.useState)([]),l=i()(o,2),u=l[0],h=l[1];function x(){return y.apply(this,arguments)}function y(){return(y=c()(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(u.length>=e.length)){t.next=2;break}return t.abrupt("return");case 2:n(a=r+64),h(b.a(a,e));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return k()(c()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(0),h([]),e.next=4,x();case 4:case"end":return e.stop()}}),e)}))),[e]),m.a.createElement(S,{className:"row"},u.map((function(e){var t=e.meta,a=e.manifest;return m.a.createElement(f.b,{className:"col-6 col-md-4 col-lg-3 mb-4",key:t.id,to:"/pack/".concat(t.id)},m.a.createElement(g.a,{stickerPack:{meta:t,manifest:a}}))})),m.a.createElement(p.a,{key:r,onEnter:x,bottomOffset:"-500px"}))};x(y,"useContext{{\n    searchResults\n  }}\nuseState{[cursor, setCursor](0)}\nuseState{[renderedSearchResults, setRenderedSearchResults]([])}\nuseAsyncEffect{}",(function(){return[k.a]}));var j,w,E=y;t.a=E,a("./.linaria-cache/src/components/home/SearchResults.linaria.css"),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(S,"StickerPackList","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),j.register(64,"PAGE_SIZE","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),j.register(y,"StickerPackListComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx"),j.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/SearchResults.tsx")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/home/StickerPackPreviewCard.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),s=a.n(n),o=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),c=a.n(o),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),u=a("./node_modules/react/index.js"),d=a.n(u),m=a("./node_modules/linaria/react.js"),f=a("./node_modules/use-async-effect/index.js"),p=a.n(f),b=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},k=Object(m.styled)("div")({name:"StickerPackPreviewCard",class:"s6bnemm",vars:{"s6bnemm-0":[function(e){return e.nsfw?"blur(4px)":"none"}]}}),v=function(e){var t=Object(u.useState)(),a=i()(t,2),r=a[0],n=a[1],o=e.stickerPack,l=o.meta,m=o.manifest;p()(c()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0===l.id){e.next=6;break}return e.next=4,Object(b.b)(l.id,l.key,m.cover.id);case 4:t=e.sent,n(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("[StickerPackPreviewCard::Effect::GetCover] ".concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);var f=[m.title,l.nsfw&&" (NSFW)"].filter(Boolean).join("");return d.a.createElement(k,{className:"card",nsfw:l.nsfw,"aria-label":f},r?d.a.createElement("img",{className:"card-img-top",src:r}):d.a.createElement("div",{className:"card-img-top"}),d.a.createElement("div",{className:"card-header"},f))};h(v,"useState{[cover, setCover]}\nuseAsyncEffect{}",(function(){return[p.a]}));var g,x,S=v;t.a=S,a("./.linaria-cache/src/components/home/StickerPackPreviewCard.linaria.css"),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(k,"StickerPackPreviewCard","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),g.register(v,"StickerPackPreviewCardComponent","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx"),g.register(S,"default","/home/travis/build/signalstickers/signalstickers/src/components/home/StickerPackPreviewCard.tsx")),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&x(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=156-38b3fc27e69c789a9bc3.js.map