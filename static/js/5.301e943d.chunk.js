(this.webpackJsonpfk=this.webpackJsonpfk||[]).push([[5],{103:function(e,t,n){"use strict";var a=n(43),r=n(37),i={showLoading:function(){var e;(null===(e=Object(a.b)().loading)||void 0===e?void 0:e.isLoading)||Object(a.a)(r.a.showLoading())},hideLoading:function(){var e;(null===(e=Object(a.b)().loading)||void 0===e?void 0:e.isLoading)&&Object(a.a)(r.a.hideLoading())}};t.a=i},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(73),r=n.n(a),i=n(3),o=n(85),s=n(16),c=n.n(s),u=n(35),d=n(6),l=n(91),p=n(43),b=n(22);function v(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(){var t,n,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.b)().tokens,n=t.map((function(e){return e.address})),a=[[],[]],o=!1,e.prev=4,e.next=7,h(n);case 7:a=e.sent,e.next=15;break;case 10:e.prev=10,e.t0=e.catch(4),o=!0,u.c.error("Get token info failure!",{autoClose:500}),console.log(e.t0);case 15:if(!o){e.next=17;break}return e.abrupt("return");case 17:t=t.map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{symbol:a[0][t],decimals:a[1][t]})})),Object(p.a)(b.a.getTokenInfo(t));case 19:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark((function e(t){var n,a,i,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.a.chunk(t,d.b),a=[],i=[],c.a.each(n,(function(e){a.push(l.a.getSymbols(e)),i.push(l.a.getDecimals(e))})),e.next=6,Promise.all([].concat(a,i));case 6:return o=e.sent,s=[c.a.flatten(c.a.slice(o,0,c.a.size(o)/2)),c.a.flatten(c.a.slice(o,c.a.size(o)/2))],e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},105:function(e,t,n){e.exports={btnIcon:"InputText_btnIcon__2xZss",btnIconIOS:"InputText_btnIconIOS__vG8tS"}},110:function(e,t){},112:function(e,t){},162:function(e,t,n){e.exports={logo:"CoinTitle_logo__2DpXk",title:"CoinTitle_title__pPd7J",button:"CoinTitle_button__3_FZX",check:"CoinTitle_check__VXOSx"}},163:function(e,t,n){e.exports={wrap:"Variation_wrap__1nxwR",normal:"Variation_normal__2qN6O",manyUp:"Variation_manyUp__1v02P",manyDown:"Variation_manyDown__2v9P-"}},164:function(e,t,n){e.exports={wrap:"Price_wrap__BEA8b"}},165:function(e,t,n){e.exports={wrap:"Pool_wrap__pU8tF"}},166:function(e,t,n){e.exports={filterInput:"TokenTable_filterInput__2gjpV"}},212:function(e,t,n){"use strict";n.r(t);var a,r=n(73),i=n.n(r),o=n(85),s=n(24),c=n(25),u=n(42),d=n(27),l=n(26),p=n(0),b=n(29),v=n(96),f=n(127),h=n.n(f),m=n(6),y=n(103),g=n(104),j=n(3),k=n(28),O=n(16),A=n.n(O),P=n(210),x=n(35),w=n(44),N=n(45),T=n(81),C=n(91),I=n(43),S=n(46),M=n(22);function R(){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(i.a.mark((function e(){var t,n,r,o,s,c,u,d,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.b)().tokens,n=[],r=[],o=[],s=[],[],t.forEach((function(e){n.push([w.b.address,e.address]),r.push([w.d.address,e.address]),o.push([w.c.address,e.address]),s.push([w.a.address,e.address])})),c=[].concat(n,r,o,s),u=[[],[],[],[]],d=!1,e.prev=10,e.next=13,G(c);case 13:u=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(10),d=!0,x.c.error("Get token pool failure!"),console.log(e.t0);case 21:if(!d){e.next=23;break}return e.abrupt("return");case 23:l=T.a.computedTokenReservePricePerQuote(A.a.last(u[2])),Object(I.a)(S.a.updateBnb({bnb:{price:l}})),p=D(u,t.length),t=t.map((function(e,t){var n=E(a.PANCAKE,p.pancake,t,e.decimals,l),r=E(a.APE,p.ape,t,e.decimals,l),i=A.a.maxBy([].concat(Object(k.a)(n),Object(k.a)(r)),"liquidity");return Object(j.a)(Object(j.a)({},e),{},{price:i.reservePrice,targetPool:i,pools:[].concat(Object(k.a)(n),Object(k.a)(r))})})),Object(I.a)(M.a.getPool(t));case 28:case"end":return e.stop()}}),e,null,[[10,16]])})))).apply(this,arguments)}function G(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(i.a.mark((function e(t){var n,a,r,o,s,c,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=A.a.chunk(t,m.b),a=[],r=[],o=[],s=[],A.a.each(n,(function(e){a.push(C.a.getPoolAddress(N.f,e)),r.push(C.a.getPoolAddress(N.a,e)),o.push(C.a.getReversesMulti(N.f,e)),s.push(C.a.getReversesMulti(N.a,e))})),e.next=8,Promise.all([].concat(a,r,o,s,[C.a.getReversesMulti(N.f,[[w.b.address,w.a.address]])]));case 8:return c=e.sent,u=(A.a.size(c)-1)/4,d=[A.a.flatten(A.a.slice(c,0,u)),A.a.flatten(A.a.slice(c,u,2*u)),A.a.flatten([].concat(Object(k.a)(A.a.slice(c,2*u,3*u)),[A.a.last(c)])),A.a.flatten(A.a.slice(c,3*u,4*u))],e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){var n=A.a.chunk(e[0],t),a=A.a.chunk(e[1],t),r=A.a.chunk(e[2],t),i=A.a.chunk(e[3],t);return{pancake:{busd:{address:n[0],reserve:r[0]},usdt:{address:n[1],reserve:r[1]},usdc:{address:n[2],reserve:r[2]},bnb:{address:n[3],reserve:r[3]}},ape:{busd:{address:a[0],reserve:i[0]},usdt:{address:a[1],reserve:i[1]},usdc:{address:a[2],reserve:i[2]},bnb:{address:a[3],reserve:i[3]}}}}function E(e,t,n,a,r){var i=[{dApp:e,address:t.busd.address[n].toLowerCase(),quoteSymbol:w.b.symbol,quoteAddress:w.b.address,liquidity:T.a.computedLiquidity(t.busd.reserve[n]),reservePrice:T.a.computedTokenReservePricePerQuote(t.busd.reserve[n],a),reserve:[P.b.formatUnits(t.busd.reserve[n][0],a),P.b.formatUnits(t.busd.reserve[n][1],a)]},{dApp:e,address:t.usdt.address[n].toLowerCase(),quoteSymbol:w.d.symbol,quoteAddress:w.d.address,liquidity:T.a.computedLiquidity(t.usdt.reserve[n]),reservePrice:T.a.computedTokenReservePricePerQuote(t.usdt.reserve[n],a),reserve:[P.b.formatUnits(t.usdt.reserve[n][0],a),P.b.formatUnits(t.usdt.reserve[n][1],a)]},{dApp:e,address:t.usdc.address[n].toLowerCase(),quoteSymbol:w.c.symbol,quoteAddress:w.c.address,liquidity:T.a.computedLiquidity(t.usdc.reserve[n]),reservePrice:T.a.computedTokenReservePricePerQuote(t.usdc.reserve[n],a),reserve:[P.b.formatUnits(t.usdc.reserve[n][0],a),P.b.formatUnits(t.usdc.reserve[n][1],a)]},{dApp:e,address:t.bnb.address[n].toLowerCase(),quoteSymbol:w.a.symbol,quoteAddress:w.a.address,liquidity:T.a.computedLiquidity(t.bnb.reserve[n])*r,reservePrice:T.a.computedTokenReservePricePerQuote(t.bnb.reserve[n],a)*r,reserve:[P.b.formatUnits(t.bnb.reserve[n][0],a),P.b.formatUnits(t.bnb.reserve[n][1],a)]}];return i=i.filter((function(e){return e.address!==N.e}))}!function(e){e.PANCAKE="PANCAKE",e.APE="APE"}(a||(a={}));n(100),n(141),n(98);function W(){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(i.a.mark((function e(){var t,n,r,o,s,c,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.b)().tokens,n=[],r=[],t.forEach((function(e){var t,i,o;switch(null===(t=e.targetPool)||void 0===t?void 0:t.dApp){case a.PANCAKE:n.push([null===(i=e.targetPool)||void 0===i?void 0:i.quoteAddress,e.address]);break;case a.APE:r.push([null===(o=e.targetPool)||void 0===o?void 0:o.quoteAddress,e.address])}})),o=[[],[]],s=!1,e.prev=6,e.next=9,Z(n,r);case 9:o=e.sent,e.next=17;break;case 12:e.prev=12,e.t0=e.catch(6),s=!0,F(),console.log(e.t0);case 17:if(!s){e.next=19;break}return e.abrupt("return");case 19:c=T.a.computedTokenReservePricePerQuote(A.a.last(o[0])),Object(I.a)(S.a.updateBnb({bnb:{price:c}})),u=J([].concat(n,r),[].concat(Object(k.a)(o[0].slice(0,o[0].length-1)),Object(k.a)(o[1]))),t=t.map((function(e){var t,n,a=u[e.address],r=null===(t=e.targetPool)||void 0===t?void 0:t.liquidity,i=e.price;switch(null===(n=e.targetPool)||void 0===n?void 0:n.quoteAddress){case w.b.address:case w.d.address:case w.c.address:r=T.a.computedLiquidity(a),i=T.a.computedTokenReservePricePerQuote(a,e.decimals);break;case w.a.address:r=T.a.computedLiquidity(a)*c,i=T.a.computedTokenReservePricePerQuote(a,e.decimals)*c}return Object(j.a)(Object(j.a)({},e),{},{price:i,targetPool:Object(j.a)(Object(j.a)({},e.targetPool),{},{liquidity:r,reservePrice:i})})})),Object(I.a)(M.a.updateTokenPrice(t));case 24:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function Z(e,t){return X.apply(this,arguments)}function X(){return(X=Object(o.a)(i.a.mark((function e(t,n){var a,r,o,s,c,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A.a.chunk(t,m.b),r=A.a.chunk(n,m.b),o=[],s=[],A.a.each(a,(function(e){o.push(C.a.getReversesMulti(N.f,e))})),A.a.each(r,(function(e){s.push(C.a.getReversesMulti(N.a,e))})),e.next=8,Promise.all([].concat(o,s,[C.a.getReversesMulti(N.f,[[w.b.address,w.a.address]])]));case 8:return c=e.sent,u=(A.a.size(c)-1)/2,d=[A.a.flatten([].concat(Object(k.a)(A.a.slice(c,0,u)),[A.a.last(c)])),A.a.flatten(A.a.slice(c,u,2*u))],e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){var n={};return e.forEach((function(e,a){n[e[1]]=t[a]})),n}var Y=0;function F(){1===++Y?(x.c.error("Update token price failure!",{autoClose:1e3,hideProgressBar:!0}),Y++):5===Y&&(Y=0)}var V=n(95);function q(e,t){e.forEach((function(e){new Notification(e.title,{icon:e.icon||t,body:e.body}).onclick=function(t){t.preventDefault(),window.open("https://poocoin.app/tokens/".concat(e.address),"_blank")}}))}function B(e){var t,n,r,i,o;return A.a.isNil(null===(t=e.targetPool)||void 0===t?void 0:t.liquidity)?"NA":"".concat(T.a.convertToInternationalCurrencySystem(null===(n=e.targetPool)||void 0===n?void 0:n.liquidity)," (").concat((null===(r=e.targetPool)||void 0===r?void 0:r.dApp)===a.PANCAKE?"":(null===(i=e.targetPool)||void 0===i?void 0:i.dApp)+" | ").concat(null===(o=e.targetPool)||void 0===o?void 0:o.quoteSymbol,")").concat(A.a.round(e.variationPrice,2)<=-m.l?"  \u2193"+T.a.convertToInternationalCurrencySystem(Math.abs(e.variationLiquidity)):"")}function Q(e){var t=[];return e.forEach((function(e){var n;if(null===(n=e.variationNotification)||void 0===n?void 0:n.isPush){var a={address:e.address,title:_(e),icon:e.logoURI,body:H(e)};t.push(a)}})),t}function _(e){return"".concat(A.a.isNil(e.burn)?e.symbol||e.name:"*["+T.a.buildBurnPercent(e.burn)+"] "+(e.symbol||e.name)," ").concat(A.a.round(e.variationPrice,2),"%  \u2193").concat(A.a.round(e.divisionPrice,1))}function H(e){var t,n,r,i;return"Price: $".concat(T.a.roundCurrency(e.price),"\nLP: ").concat(T.a.convertToInternationalCurrencySystem(null===(t=e.targetPool)||void 0===t?void 0:t.liquidity)," (").concat((null===(n=e.targetPool)||void 0===n?void 0:n.dApp)===a.PANCAKE?"":(null===(r=e.targetPool)||void 0===r?void 0:r.dApp)+" | ").concat(null===(i=e.targetPool)||void 0===i?void 0:i.quoteSymbol,")  \u2193").concat(T.a.convertToInternationalCurrencySystem(Math.abs(e.variationLiquidity)))}var K=n(99),$=n(160),ee=n.n($),te=n(162),ne=n.n(te),ae=n(2),re=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state=void 0,a.state={isCopied:!1},a.onClickCopyClipboard=a.onClickCopyClipboard.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"onClickCopyClipboard",value:function(e){var t=this;ee()(e),this.setState({isCopied:!0}),setTimeout((function(){t.setState({isCopied:!1})}),2e3)}},{key:"render",value:function(){var e=this,t=this.props,n=t.coinTitle,a=t.address,r=t.logoURI,i=t.web,o=this.state.isCopied;return Object(ae.jsxs)(p.Fragment,{children:[Object(ae.jsx)("img",{className:ne.a.logo,alt:n,src:r||V.a,title:a}),Object(ae.jsx)("a",{className:ne.a.title,href:"https://poocoin.app/tokens/".concat(a),target:"_blank",rel:"noopener noreferrer",title:"Link to poocoin",children:n}),o?Object(ae.jsx)("button",{className:"".concat(ne.a.button," ").concat(ne.a.check),title:"Copied!",children:Object(ae.jsx)("i",{className:"bi bi-check2"})}):Object(ae.jsx)("button",{className:ne.a.button,title:"Copy contract to clipboard",onClick:function(){return e.onClickCopyClipboard(a)},children:Object(ae.jsx)("i",{className:"bi bi-clipboard"})}),Object(ae.jsx)("a",{href:"https://tokensniffer.com/token/".concat(a),target:"_blank",rel:"noopener noreferrer",title:"Check tokensniffer",children:Object(ae.jsx)("button",{className:ne.a.button,children:Object(ae.jsx)("i",{className:"bi bi-lightning-charge"})})}),i?Object(ae.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",title:"Check coinmarketcap",children:Object(ae.jsx)("button",{className:ne.a.button,children:Object(ae.jsx)("i",{className:"bi bi-info-lg"})})}):""]})}}]),n}(p.PureComponent),ie=n(163),oe=n.n(ie),se=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=a.getStyle.bind(Object(u.a)(a)),a.getVariationText=a.getVariationText.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"getStyle",value:function(){if(A.a.isNil(this.props.variation))return oe.a.normal;var e=A.a.round(this.props.variation,2);return e>-m.l&&e<m.l?oe.a.normal:e>=m.l?oe.a.manyUp:oe.a.manyDown}},{key:"getVariationText",value:function(){if(A.a.isNil(this.props.variation))return"NA";var e=A.a.round(this.props.variation,2),t=A.a.round(this.props.division,1);return 0===e?e+"%":e>0?"+"+e+"%":e+"%"+(e<=-m.l?"  \u2193".concat(t):"")}},{key:"render",value:function(){return Object(ae.jsx)("span",{className:oe.a.wrap+" "+this.getStyle(),children:this.getVariationText()})}}]),n}(p.PureComponent),ce=n(164),ue=n.n(ce);function de(e){return Object(ae.jsx)("span",{className:ue.a.wrap,children:e.price})}var le=n(165),pe=n.n(le);function be(e){return Object(ae.jsx)("span",{className:pe.a.wrap,children:e.pool})}var ve=n(166),fe=n.n(ve),he=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state=void 0,a.columnConfigs=[{name:"Coin",cell:function(e){return Object(ae.jsx)(re,{coinTitle:e.coinTitle,address:e.address,logoURI:e.logoURI,web:e.web})},minWidth:"400px"},{name:"Variation",cell:function(e){return Object(ae.jsx)(se,{variation:e.variation,division:e.division})},minWidth:"80px"},{name:"Price",cell:function(e){return Object(ae.jsx)(de,{price:e.price})},minWidth:"100px"},{name:"Pool",cell:function(e){return Object(ae.jsx)(be,{pool:e.pool})},minWidth:"120px"}],a.state={filterText:""},Object(f.createTheme)("dark",{background:{default:"transparent"}}),a.onChangeFilter=a.onChangeFilter.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.a.showLoading(),e.next=3,Object(g.a)();case 3:return e.next=5,R();case 5:y.a.hideLoading(),this.recursionUpdateTokenPrice(),"Notification"in window?"granted"!==Notification.permission&&Notification.requestPermission():x.c.warn("This browser does not support desktop notification!");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t;JSON.stringify(this.props.tokenNotifications)!==JSON.stringify(e.tokenNotifications)&&(t=this.props.tokenNotifications,"Notification"in window?"granted"===Notification.permission?q(t,V.a):Notification.requestPermission().then((function(e){"granted"===e&&q(t,V.a)})):t.forEach((function(e){x.c.info("".concat(e.title))})))}},{key:"recursionUpdateTokenPrice",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:return e.next=4,new Promise((function(e){return setTimeout(e,m.a)}));case 4:return e.next=6,this.recursionUpdateTokenPrice();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChangeFilter",value:function(e){this.setState({filterText:e})}},{key:"filterTokens",value:function(e){var t=this.state.filterText;if(!t){var n=function(e){var t=A.a.slice(e,0,5),n=A.a.slice(e,-5);return A.a.uniqBy([].concat(Object(k.a)(t),Object(k.a)(n),Object(k.a)(A.a.slice(e,5,-5))),"address")}(e);return n}return e.filter((function(e){return e.coinTitle.toLowerCase().includes(t.toLowerCase())||e.address.toLowerCase()===t.toLowerCase()}))}},{key:"render",value:function(){var e=this.state.filterText;return Object(ae.jsx)(v.b,{fluid:"xl",className:"py-2 py-lg-3 py-xl-5",children:Object(ae.jsx)(v.h,{children:Object(ae.jsx)(v.a,{xl:{offset:1,size:10},children:Object(ae.jsxs)("div",{className:"fk-container px-2 px-lg-4 px-xl-5 pt-2 pt-lg-4 pt-xl-5 pb-xl-4",children:[Object(ae.jsx)("div",{className:"mb-1",children:Object(ae.jsx)(K.a,{className:"fk-input-lg "+fe.a.filterInput,isShowClear:!0,placeholder:"Enter token name / address...",value:e,onChange:this.onChangeFilter})}),Object(ae.jsx)(h.a,{columns:this.columnConfigs,data:this.filterTokens(this.props.tokens),pagination:!0,responsive:!0,theme:"dark",customStyles:{rows:{style:{minHeight:"52px"}},headCells:{style:{fontSize:"16px",fontWeight:"700"}},cells:{style:{fontSize:"14px",fontWeight:"500"}},pagination:{style:{fontSize:"14px",fontWeight:"500"}}}})]})})})})}}]),n}(p.PureComponent);t.default=Object(b.b)((function(e){return{tokens:(t=e.tokens,A.a.chain(t).sortBy(["variationPrice"]).map((function(e){return{coinTitle:"".concat(A.a.isNil(e.burn)?e.name:"*["+T.a.buildBurnPercent(e.burn)+"] "+e.name," (").concat(e.symbol?e.symbol:"NA",")"),pool:B(e),price:A.a.isNil(e.price)?"NA":"".concat(T.a.roundCurrency(e.price)),variation:e.variationPrice,division:e.divisionPrice,address:e.address,logoURI:e.logoURI,web:e.web}})).value()),tokenNotifications:Q(e.tokens)};var t}))(he)},81:function(e,t,n){"use strict";var a=n(16),r=n.n(a),i=n(210);var o={computedLiquidity:function(e){var t=Number(i.b.formatEther(e[0]));return t||0},computedTokenReservePricePerQuote:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=Number(i.b.formatEther(e[0])),a=Number(i.b.formatUnits(e[1],t));if(!n||!a)return 0;var r=n/a;return r},convertToInternationalCurrencySystem:function(e){var t=Math.abs(Number(e));return t>=1e9?r.a.round(t/1e9,3)+"B":t>=1e6?r.a.round(t/1e6,2)+"M":t>=1e3?r.a.round(t/1e3,1)+"K":r.a.round(t).toString()},convertBalanceToInternationalCurrencySystem:function(e){var t=Math.abs(Number(e));return t>=1e9?r.a.round(t/1e9,2)+"B":t>=1e6?r.a.round(t/1e6,2)+"M":t>=1e5?r.a.round(t/1e3)+"K":t>=1e3?r.a.round(t,2).toString():t>=10?r.a.round(t,3).toString():r.a.round(t,6).toString()},roundCurrency:function(e){var t,n=Math.abs(Number(e));if(n>=1){var a=Math.max(5-Math.floor(n).toString().length,2);t=r.a.round(n,a)}else{var i=Math.floor(1/(n%1)).toString().length+4;t=r.a.round(n,i)}return t.toString()},buildBurnPercent:function(e){return r.a.isNil(e)?"":-1===e?"?":e+"%"}};t.a=o},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(210),r=n(100),i=n(98),o=n(45),s=new a.a.JsonRpcProvider(o.d),c=(new r.a(o.f,i.a,s),new r.a(o.a,i.a,s),new r.a(o.b,i.c,s))},95:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAIAAAAnApehAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTItMDFUMjI6NTc6NTYrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEyLTAxVDIyOjU5OjM4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTAxVDIyOjU5OjM4KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczNGJiNTE4LWRiNTYt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"},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var a=["function getPair(address tokenA, address tokenB) external view returns (address pair)"],r=["function token0() external view returns (address)","function token1() external view returns (address)","function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)"],i=[{inputs:[{internalType:"address[]",name:"tokens",type:"address[]"}],name:"getSymbols",outputs:[{internalType:"string[]",name:"symbols",type:"string[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"tokens",type:"address[]"}],name:"getDecimals",outputs:[{internalType:"uint8[]",name:"decimals",type:"uint8[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"factory",type:"address"},{internalType:"address[2][]",name:"pairs",type:"address[2][]"}],name:"getPoolAddress",outputs:[{internalType:"address[]",name:"poolAddress",type:"address[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"factory",type:"address"},{internalType:"address[2][]",name:"pairs",type:"address[2][]"}],name:"getReversesMulti",outputs:[{internalType:"uint112[2][]",name:"reserves",type:"uint112[2][]"}],stateMutability:"view",type:"function",constant:!0}]},99:function(e,t,n){"use strict";var a=n(24),r=n(25),i=n(42),o=n(27),s=n(26),c=n(0);var u={iOS:function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}},d=n(105),l=n.n(d),p=n(2),b=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state=void 0,r.state={},r.onChange=r.onChange.bind(Object(i.a)(r)),r.onClear=r.onClear.bind(Object(i.a)(r)),r}return Object(r.a)(n,[{key:"onChange",value:function(e){this.props.onChange(e.target.value)}},{key:"onClear",value:function(){this.props.onChange("")}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.isShowClear,a=e.placeholder,r=e.value;return Object(p.jsxs)("div",{className:"position-relative",children:[Object(p.jsx)("input",{className:"fk-input"+(t?" ".concat(t):""),placeholder:a,value:r,onChange:this.onChange}),n&&!!r&&Object(p.jsx)("button",{className:"fk-button-icon "+l.a.btnIcon+(u.iOS()?" ".concat(l.a.btnIconIOS):""),onClick:this.onClear,children:Object(p.jsx)("i",{className:"bi bi-x-lg"})})]})}}]),n}(c.PureComponent);b.defaultProps={className:"",isShowClear:!1,placeholder:"",value:"",onChange:function(){}};t.a=b}}]);
//# sourceMappingURL=5.301e943d.chunk.js.map