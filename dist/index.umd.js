!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@ledgerhq/hw-transport")):"function"==typeof define&&define.amd?define(["exports","@ledgerhq/hw-transport"],r):r((e=e||self).ledgerBridge={},e.LedgerTransport)}(this,function(e,r){var t;r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,(t=e.BridgeMessageType||(e.BridgeMessageType={})).ExchangeRequest="THANOS_LEDGER_BRIDGE_EXCHANGE_REQUEST",t.ExchangeResponse="THANOS_LEDGER_BRIDGE_EXCHANGE_RESPONSE",t.ErrorResponse="THANOS_LEDGER_ERROR_RESPONSE",e.LedgerThanosBridgeTransport=function(r){var t,n;function o(e,t){var n;return(n=r.call(this)||this).iframe=e,n.bridgeUrl=t,n}n=r,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.isSupported=function(){return Promise.resolve(!0)},o.list=function(){return Promise.resolve([])},o.listen=function(){return{unsubscribe:function(){}}},o.open=function(){try{var e="https://thanoswallet.com/ledger-bridge",r=document.createElement("iframe");return r.src=e,document.head.appendChild(r),Promise.resolve(new o(r,e))}catch(e){return Promise.reject(e)}};var i=o.prototype;return i.exchange=function(r){var t=this;return new Promise(function(n,o){var i,s,a={type:e.BridgeMessageType.ExchangeRequest,apdu:r.toString(),scrambleKey:null===(i=t.scrambleKey)||void 0===i?void 0:i.toString(),exchangeTimeout:t.exchangeTimeout};null===(s=t.iframe.contentWindow)||void 0===s||s.postMessage(a,"*"),window.addEventListener("message",function r(i){if(i.origin===t.getOrigin()){var s=i.data;switch(null==s?void 0:s.type){case e.BridgeMessageType.ExchangeResponse:n(Buffer.from(s.result));break;case e.BridgeMessageType.ErrorResponse:o(s.message)}window.removeEventListener("message",r)}})})},i.setScrambleKey=function(e){this.scrambleKey=Buffer.from(e,"ascii")},i.setUnwrap=function(e){this.unwrap=e},i.close=function(){try{return document.head.removeChild(this.iframe),Promise.resolve()}catch(e){return Promise.reject(e)}},i.getOrigin=function(){var e=this.bridgeUrl.split("/");return e.splice(-1,1),e.join("/")},o}(r)});
//# sourceMappingURL=index.umd.js.map
