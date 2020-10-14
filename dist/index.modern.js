import e from"@ledgerhq/hw-transport";var s;!function(e){e.ExchangeRequest="THANOS_LEDGER_BRIDGE_EXCHANGE_REQUEST",e.ExchangeResponse="THANOS_LEDGER_BRIDGE_EXCHANGE_RESPONSE",e.ErrorResponse="THANOS_LEDGER_ERROR_RESPONSE"}(s||(s={}));class t extends e{constructor(e,s){super(),this.iframe=e,this.bridgeUrl=s}static async open(e){const s=document.createElement("iframe");return s.src=e,document.head.appendChild(s),new t(s,e)}exchange(e){return new Promise((t,r)=>{var n,i;const o={type:s.ExchangeRequest,apdu:e.toString(),scrambleKey:null===(n=this.scrambleKey)||void 0===n?void 0:n.toString(),exchangeTimeout:this.exchangeTimeout};null===(i=this.iframe.contentWindow)||void 0===i||i.postMessage(o,"*");const a=e=>{if(e.origin!==this.getOrigin())return;const n=e.data;switch(null==n?void 0:n.type){case s.ExchangeResponse:t(Buffer.from(n.result));break;case s.ErrorResponse:r(n.message)}window.removeEventListener("message",a)};window.addEventListener("message",a)})}setScrambleKey(e){this.scrambleKey=Buffer.from(e,"ascii")}setUnwrap(e){this.unwrap=e}async close(){document.head.removeChild(this.iframe)}getOrigin(){const e=this.bridgeUrl.split("/");return e.splice(-1,1),e.join("/")}}export{s as BridgeMessageType,t as TransportThanosBridge};
//# sourceMappingURL=index.modern.js.map