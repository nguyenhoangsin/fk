(this.webpackJsonpfk=this.webpackJsonpfk||[]).push([[8],{232:function(t,n,e){t.exports={logo:"CoinTitle_logo__2Jifj",title:"CoinTitle_title__3Vc57",button:"CoinTitle_button__8seWB",check:"CoinTitle_check__2aNRZ"}},233:function(t,n,e){t.exports={wrap:"Variation_wrap__1nOO2",normal:"Variation_normal__3Yadl",manyUp:"Variation_manyUp__QG-h8",manyDown:"Variation_manyDown__FvkCo"}},234:function(t,n,e){t.exports={wrap:"Price_wrap__3iS7p"}},235:function(t,n,e){t.exports={wrap:"Pool_wrap__3GOwt"}},236:function(t,n,e){t.exports={filterInput:"TrackToken_filterInput__2wNWj"}},291:function(t,n,e){"use strict";e.r(n);var i=e(3),o=e(191),a=e(5),r=e(6),c=e(9),s=e(7),l=e(8),u=e(4),p=e(75),d=e(194),f=e(214),b=e.n(f),h=e(35),v=e(203),j=e(204),m=e(205),y=e(206),O=e(93),x=e(195);function k(t,n){t.forEach((function(t){new Notification(t.title,{icon:t.icon||n,body:t.body}).onclick=function(n){n.preventDefault(),window.open("https://poocoin.app/tokens/".concat(t.address),"_blank")}}))}var g=e(76),w=e(56),C=e.n(w),N=e(190),_=e(192);function P(t){var n,e,i,o,a;return C.a.isNil(null===(n=t.targetPool)||void 0===n?void 0:n.liquidity)?"NA":"".concat(N.a.convertToInternationalCurrencySystem(null===(e=t.targetPool)||void 0===e?void 0:e.liquidity)," (").concat((null===(i=t.targetPool)||void 0===i?void 0:i.dApp)===_.a.PANCAKE?"":(null===(o=t.targetPool)||void 0===o?void 0:o.dApp)+" | ").concat(null===(a=t.targetPool)||void 0===a?void 0:a.quoteSymbol,")").concat(C.a.round(t.variationPrice,2)<=-h.n?"  \u2193"+N.a.convertToInternationalCurrencySystem(Math.abs(t.variationLiquidity)):"")}function T(t){var n=[];return t.forEach((function(t){var e;if(null!==(e=t.variationNotification)&&void 0!==e&&e.isPush){var i,o={address:t.address,title:I(t),icon:t.logoURI,body:S(t)},a=C.a.round(null===(i=t.targetPool)||void 0===i?void 0:i.liquidity,2),r=Math.abs(C.a.round(t.variationPrice,2));a<h.d.A.LIQUIDITY?r>=h.d.A.LOSER&&n.push(o):a<h.d.B.LIQUIDITY?r>=h.d.B.LOSER&&n.push(o):a<h.d.C.LIQUIDITY?r>=h.d.C.LOSER&&n.push(o):n.push(o)}})),n=C.a.chain(n).reverse().uniqBy("address").value()}function I(t){var n=function(t){if(t>h.c.C)return"\ud83c\udf47";if(t>h.c.B)return"\ud83c\udf4a";if(t>h.c.A)return"\ud83c\udf4f";return"\ud83d\udcb9"}(Math.abs(C.a.round(t.variationPrice,2)));return"".concat(n," ").concat(C.a.isNil(t.burn)?t.symbol||t.name:"*["+N.a.buildBurnPercent(t.burn)+"] "+(t.symbol||t.name)," ").concat(C.a.round(t.variationPrice,2),"%")}function S(t){var n,e,i,o;return"\ud83d\udcb5 $".concat(N.a.roundCurrency(t.price),"\n\ud83d\udc49 ").concat(N.a.convertToInternationalCurrencySystem(null===(n=t.targetPool)||void 0===n?void 0:n.liquidity)," (").concat((null===(e=t.targetPool)||void 0===e?void 0:e.dApp)===_.a.PANCAKE?"":(null===(i=t.targetPool)||void 0===i?void 0:i.dApp)+" | ").concat(null===(o=t.targetPool)||void 0===o?void 0:o.quoteSymbol,")  -").concat(N.a.convertToInternationalCurrencySystem(Math.abs(t.variationLiquidity)),"\ud83d\udcb0")}var L=e(199),U=e(207),A=e.n(U),R=e(232),q=e.n(R),V=e(19),W=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(t){var i;return Object(a.a)(this,e),(i=n.call(this,t)).state=void 0,i.state={isCopied:!1},i.onCopyClipboard=i.onCopyClipboard.bind(Object(c.a)(i)),i.onOpenLinkInfo=i.onOpenLinkInfo.bind(Object(c.a)(i)),i}return Object(r.a)(e,[{key:"onCopyClipboard",value:function(t){var n=this;A()(t),this.setState({isCopied:!0}),setTimeout((function(){n.setState({isCopied:!1})}),2e3)}},{key:"onOpenLinkInfo",value:function(){var t=this.props,n=t.address,e=t.web;window.open("https://tokensniffer.com/token/".concat(n)),e?window.open(e):window.open("https://www.coingecko.com/en/coins/".concat(n))}},{key:"render",value:function(){var t=this,n=this.props,e=n.coinTitle,i=n.address,o=n.logoURI,a=this.state.isCopied;return Object(V.jsxs)(u.Fragment,{children:[Object(V.jsx)("button",{className:q.a.button,title:"Check info",onClick:this.onOpenLinkInfo,children:Object(V.jsx)("img",{className:q.a.logo,alt:"",src:o||x.a})}),Object(V.jsx)("a",{className:q.a.title,href:"https://dexscreener.com/bsc/".concat(i),target:"_blank",rel:"noopener noreferrer",title:"Link to chart",children:e}),a?Object(V.jsx)("button",{className:"".concat(q.a.button," ").concat(q.a.check),title:"Copied!",children:Object(V.jsx)("i",{className:"bi bi-check2"})}):Object(V.jsx)("button",{className:q.a.button,title:"Copy contract to clipboard",onClick:function(){return t.onCopyClipboard(i)},children:Object(V.jsx)("i",{className:"bi bi-clipboard"})}),Object(V.jsx)("a",{href:"".concat(window.location.href,"#/swap/").concat(i),target:"_blank",rel:"noopener noreferrer",title:"Flast Swap",children:Object(V.jsx)("button",{className:q.a.button,children:Object(V.jsx)("i",{className:"bi bi-currency-exchange"})})})]})}}]),e}(u.PureComponent),B=e(233),D=e.n(B),E=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(t){var i;return Object(a.a)(this,e),(i=n.call(this,t)).getStyle=i.getStyle.bind(Object(c.a)(i)),i.getVariationText=i.getVariationText.bind(Object(c.a)(i)),i}return Object(r.a)(e,[{key:"getStyle",value:function(){if(C.a.isNil(this.props.variation))return D.a.normal;var t=C.a.round(this.props.variation,2);return t>-h.n&&t<h.n?D.a.normal:t>=h.n?D.a.manyUp:D.a.manyDown}},{key:"getVariationText",value:function(){if(C.a.isNil(this.props.variation))return"NA";var t=C.a.round(this.props.variation,2),n=C.a.round(this.props.division,1);return 0===t?t+"%":t>0?"+"+t+"%":t+"%"+(t<=-h.n?"  \u2193".concat(n):"")}},{key:"render",value:function(){return Object(V.jsx)("span",{className:D.a.wrap+" "+this.getStyle(),children:this.getVariationText()})}}]),e}(u.PureComponent),F=e(234),J=e.n(F);function M(t){return Object(V.jsx)("span",{className:J.a.wrap,children:t.price})}var z=e(235),Q=e.n(z);function Y(t){return Object(V.jsx)("span",{className:Q.a.wrap,children:t.pool})}var G=e(236),K=e.n(G),H=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(t){var i;return Object(a.a)(this,e),(i=n.call(this,t)).state=void 0,i.stopRecursion=!1,i.columnConfigs=[{name:"Coin",cell:function(t){return Object(V.jsx)(W,{coinTitle:t.coinTitle,address:t.address,logoURI:t.logoURI,web:t.web})},minWidth:"400px"},{name:"Variation",cell:function(t){return Object(V.jsx)(E,{variation:t.variation,division:t.division})},minWidth:"80px"},{name:"Price",cell:function(t){return Object(V.jsx)(M,{price:t.price})},minWidth:"100px"},{name:"Pool",cell:function(t){return Object(V.jsx)(Y,{pool:t.pool})},minWidth:"120px"}],i.state={filterText:""},Object(f.createTheme)("dark",{background:{default:"transparent"}}),i.onChangeFilter=i.onChangeFilter.bind(Object(c.a)(i)),i}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v.a.showLoading(),t.next=3,Object(j.b)();case 3:return t.next=5,Object(m.a)();case 5:v.a.hideLoading(),this.recursionUpdateTokenPrice(),"Notification"in window?"granted"!==Notification.permission&&Notification.requestPermission():O.c.warn("This browser does not support desktop notification!");case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t){var n;JSON.stringify(this.props.tokenNotifications)!==JSON.stringify(t.tokenNotifications)&&(n=this.props.tokenNotifications,"Notification"in window?"granted"===Notification.permission?k(n,x.a):Notification.requestPermission().then((function(t){"granted"===t&&k(n,x.a)})):n.forEach((function(t){O.c.info("".concat(t.title))})))}},{key:"componentWillUnmount",value:function(){this.stopRecursion=!0}},{key:"recursionUpdateTokenPrice",value:function(){var t=Object(o.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.stopRecursion){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(y.b)();case 4:return t.next=6,new Promise((function(t){return setTimeout(t,h.a)}));case 6:return t.next=8,this.recursionUpdateTokenPrice();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onChangeFilter",value:function(t){this.setState({filterText:t})}},{key:"filterTokens",value:function(t){var n=this.state.filterText;if(!n){var e=function(t){var n=C.a.slice(t,0,5),e=C.a.slice(t,-5);return C.a.uniqBy([].concat(Object(g.a)(n),Object(g.a)(e),Object(g.a)(C.a.slice(t,5,-5))),"address")}(t);return e}return t.filter((function(t){return t.coinTitle.toLowerCase().includes(n.toLowerCase())||t.address.toLowerCase()===n.toLowerCase()}))}},{key:"render",value:function(){var t=this.state.filterText;return Object(V.jsx)(d.b,{fluid:"xl",className:"py-2 py-lg-3 py-xl-5",children:Object(V.jsx)(d.h,{children:Object(V.jsx)(d.a,{xl:{offset:1,size:10},children:Object(V.jsxs)("div",{className:"fk-container px-2 px-lg-4 px-xl-5 pt-2 pt-lg-4 pt-xl-5 pb-xl-4",children:[Object(V.jsx)("div",{className:"mb-1",children:Object(V.jsx)(L.a,{className:"fk-input-lg "+K.a.filterInput,isShowClear:!0,placeholder:"Enter token name / address...",value:t,onChange:this.onChangeFilter})}),Object(V.jsx)(b.a,{columns:this.columnConfigs,data:this.filterTokens(this.props.tokens),pagination:!0,responsive:!0,theme:"dark",customStyles:{rows:{style:{minHeight:"52px"}},headCells:{style:{fontSize:"16px",fontWeight:"700"}},cells:{style:{fontSize:"14px",fontWeight:"500"}},pagination:{style:{fontSize:"14px",fontWeight:"500"}}}})]})})})})}}]),e}(u.PureComponent);n.default=Object(p.b)((function(t){return{tokens:(n=t.tokens,C.a.chain(n).sortBy(["variationPrice"]).map((function(t){return{coinTitle:"".concat(C.a.isNil(t.burn)?t.name:"*["+N.a.buildBurnPercent(t.burn)+"] "+t.name," (").concat(t.symbol?t.symbol:"NA",")"),pool:P(t),price:C.a.isNil(t.price)?"NA":"".concat(N.a.roundCurrency(t.price)),variation:t.variationPrice,division:t.divisionPrice,address:t.address,logoURI:t.logoURI,web:t.web}})).value()),tokenNotifications:T(t.tokens)};var n}))(H)}}]);
//# sourceMappingURL=8.4459f5e4.chunk.js.map