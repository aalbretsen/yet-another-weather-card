const e="yet-another-weather-card",t="0.1.0",i=["temperature","apparent_temperature","precipitation","precipitation_probability","wind_speed","wind_gust_speed","uv_index","humidity","pressure","cloud_coverage","dew_point"];function s(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const r=globalThis,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let l=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new l(i,e,o)},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new l("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,m=globalThis,_=m.trustedTypes,v=_?_.emptyScript:"",b=m.reactiveElementPolyfillSupport,x=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!p(e,t),k={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=s?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...f(e),...g(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),s=r.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=s;const n=r.fromAttribute(t,e.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(void 0!==e){const n=this.constructor;if(!1===s&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??w)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,b?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,E=e=>e,M=S.trustedTypes,C=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,N="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+P,T=`<${j}>`,D=document,R=()=>D.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,z="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,I=/>/g,F=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,Z=/"/g,V=/^(?:script|style|textarea|title)$/i,B=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),q=B(1),G=B(2),K=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),J=new WeakMap,Q=D.createTreeWalker(D,129);function X(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const ee=(e,t)=>{const i=e.length-1,s=[];let r,n=2===t?"<svg>":3===t?"<math>":"",o=H;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===H?"!--"===l[1]?o=L:void 0!==l[1]?o=I:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=F):void 0!==l[3]&&(o=F):o===F?">"===l[0]?(o=r??H,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?F:'"'===l[3]?Z:W):o===Z||o===W?o=F:o===L||o===I?o=H:(o=F,r=void 0);const p=o===F&&e[t+1].startsWith("/>")?" ":"";n+=o===H?i+T:c>=0?(s.push(a),i.slice(0,c)+N+i.slice(c)+P+p):i+P+(-2===c?t:p)}return[X(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class te{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const o=e.length-1,a=this.parts,[l,c]=ee(e,t);if(this.el=te.createElement(l,i),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(N)){const t=c[n++],i=s.getAttribute(e).split(P),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?oe:"?"===o[1]?ae:"@"===o[1]?le:ne}),s.removeAttribute(e)}else e.startsWith(P)&&(a.push({type:6,index:r}),s.removeAttribute(e));if(V.test(s.tagName)){const e=s.textContent.split(P),t=e.length-1;if(t>0){s.textContent=M?M.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],R()),Q.nextNode(),a.push({type:2,index:++r});s.append(e[t],R())}}}else if(8===s.nodeType)if(s.data===j)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(P,e+1));)a.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function ie(e,t,i=e,s){if(t===K)return t;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=ie(e,r._$AS(e,t.values),r,s)),t}class se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??D).importNode(t,!0);Q.currentNode=s;let r=Q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new re(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ce(r,this,e)),this._$AV.push(t),a=i[++o]}n!==a?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=D,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),O(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=te.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new se(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new te(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new re(this.O(R()),this.O(R()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ne{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(void 0===r)e=ie(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==K,n&&(this._$AH=e);else{const s=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=ie(this,s[i+o],t,o),a===K&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===Y?e=Y:e!==Y&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ae extends ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class le extends ne{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??Y)===K)return;const i=this._$AH,s=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Y&&(i===Y||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const de=S.litHtmlPolyfillSupport;de?.(te,re),(S.litHtmlVersions??=[]).push("3.3.2");const pe=globalThis;class he extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=i?.renderBefore??null;s._$litPart$=r=new re(t.insertBefore(R(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}he._$litElement$=!0,he.finalized=!0,pe.litElementHydrateSupport?.({LitElement:he});const ue=pe.litElementPolyfillSupport;ue?.({LitElement:he}),(pe.litElementVersions??=[]).push("4.2.2");const fe={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:w},ge=(e=fe,t,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,r,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];t.call(this,i),this.requestUpdate(s,r,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ye(e){return(t,i)=>"object"==typeof i?ge(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return ye({...e,state:!0,attribute:!1})}const _e={show_location:!0,show_condition:!0,show_feels_like:!0,show_wind_block:!1,show_wind_gust:!0,show_time_block:!0,show_date:!0},ve={enabled:!1,style:"full",show_labels:!0,items:["humidity","wind_speed","pressure","uv_index"]},be={enabled:!0,type:"daily",count:5,rows:["precipitation"]};function xe(e){return{type:e.type??"custom:yet-another-weather-card",entity:e.entity??"",sun_entity:e.sun_entity,language:e.language??"auto",icon_style:e.icon_style??"line",header:{..._e,...e.header??{}},grid:{...ve,...e.grid??{},items:e.grid?.items??ve.items},forecast:{...be,...e.forecast??{},rows:e.forecast?.rows??be.rows}}}function $e(e){return"string"==typeof e?e:"attribute"in e?e.attribute:void 0}function we(e){if("string"!=typeof e)return e.entity}function ke(e){if("string"!=typeof e)return e.label}const Ae={en:{labels:{temperature:"Temperature",apparent_temperature:"Feels like",humidity:"Humidity",pressure:"Pressure",wind_speed:"Wind",wind_gust_speed:"Gust",wind_bearing:"Direction",cloud_coverage:"Cloud cover",visibility:"Visibility",dew_point:"Dew point",uv_index:"UV index",ozone:"Ozone",sunrise:"Sunrise",sunset:"Sunset",precipitation:"Precipitation",precipitation_probability:"Chance of rain"},captions:{feels_like:"feels like",gust:"gust"},editor:{section_entities:"Entities",section_header:"Header",section_grid:"Grid",section_forecast:"Forecast",section_appearance:"Appearance",entity:"Weather entity",sun_entity:"Sun entity (optional)",language:"Language",language_auto:"Auto (follow Home Assistant)",icon_style:"Icon style",icon_style_line:"Line",icon_style_fill:"Filled",show_location:"Show location",show_condition:"Show condition",show_feels_like:"Show feels like",show_wind_block:"Show wind block",show_wind_gust:"Show wind gust",show_time_block:"Show time block",show_date:"Show date",grid_enabled:"Show grid section",grid_style:"Grid style",grid_style_full:"Full (boxed cells)",grid_style_compact:"Compact (inline)",grid_show_labels:"Show labels",grid_items:"Grid items",grid_items_help:"Reorder with the arrows. Toggle to show or hide. Remove with the trash icon.",add_item:"Add item…",add:"Add",custom_option:"Custom…",custom_entity:"Entity",custom_entity_help:"Pick any Home Assistant sensor.",custom_label:"Label",custom_icon:"Icon (optional)",label_override:"Label",label_default:"Default: {default}",label_help:"Leave empty to use the default.",icon_default:"Defaults to a generic icon if empty.",cancel:"Cancel",save:"Save",forecast_enabled:"Show forecast section",forecast_type:"Forecast type",forecast_type_daily:"Daily",forecast_type_hourly:"Hourly",forecast_type_twice_daily:"Twice daily",forecast_count:"Number of forecast steps",forecast_rows:"Rows under each forecast",already_added:"(already added)",from_weather:"From weather entity",from_sun:"From sun integration"}},nb:{labels:{temperature:"Temperatur",apparent_temperature:"Føles som",humidity:"Luftfuktighet",pressure:"Trykk",wind_speed:"Vind",wind_gust_speed:"Vindkast",wind_bearing:"Retning",cloud_coverage:"Skydekke",visibility:"Sikt",dew_point:"Duggpunkt",uv_index:"UV-indeks",ozone:"Ozon",sunrise:"Soloppgang",sunset:"Solnedgang",precipitation:"Nedbør",precipitation_probability:"Sannsynlighet for nedbør"},captions:{feels_like:"føles som",gust:"vindkast"},editor:{section_entities:"Enheter",section_header:"Topptekst",section_grid:"Rutenett",section_forecast:"Værvarsel",section_appearance:"Utseende",entity:"Værentitet",sun_entity:"Solentitet (valgfritt)",language:"Språk",language_auto:"Automatisk (følg Home Assistant)",icon_style:"Ikonstil",icon_style_line:"Strek",icon_style_fill:"Fylt",show_location:"Vis sted",show_condition:"Vis værforhold",show_feels_like:"Vis føles som",show_wind_block:"Vis vindblokk",show_wind_gust:"Vis vindkast",show_time_block:"Vis klokkeblokk",show_date:"Vis dato",grid_enabled:"Vis rutenettseksjon",grid_style:"Rutenettstil",grid_style_full:"Full (rammet)",grid_style_compact:"Kompakt (på linje)",grid_show_labels:"Vis etiketter",grid_items:"Rutenettelementer",grid_items_help:"Endre rekkefølge med pilene. Slå av/på for å vise eller skjule. Fjern med søppelbøtteikonet.",add_item:"Legg til element…",add:"Legg til",custom_option:"Egendefinert…",custom_entity:"Entitet",custom_entity_help:"Velg en hvilken som helst Home Assistant-sensor.",custom_label:"Etikett",custom_icon:"Ikon (valgfritt)",label_override:"Etikett",label_default:"Standard: {default}",label_help:"La stå tom for å bruke standardverdien.",icon_default:"Bruker et generisk ikon hvis tomt.",cancel:"Avbryt",save:"Lagre",forecast_enabled:"Vis værvarsel",forecast_type:"Varseltype",forecast_type_daily:"Daglig",forecast_type_hourly:"Time for time",forecast_type_twice_daily:"To ganger daglig",forecast_count:"Antall varselsteg",forecast_rows:"Rader under hvert varsel",already_added:"(allerede lagt til)",from_weather:"Fra værentitet",from_sun:"Fra solintegrasjon"}}};class Se{constructor(e){this.bundle=Ae[e]??Ae.en}static resolveLanguage(e,t){if(e&&"auto"!==e)return e;const i=(t??"en").toLowerCase();return i.startsWith("nb")||i.startsWith("no")||i.startsWith("nn")?"nb":"en"}label(e){return this.bundle.labels[e]??e}caption(e){return this.bundle.captions[e]??e}editor(e){return this.bundle.editor[e]??e}format(e,t){let i=this.editor(e);for(const[e,s]of Object.entries(t))i=i.replace(`{${e}}`,s);return i}}function Ee(e,t){if(e)return e.attributes?.[t]}function Me(e,t){if(!e)return;const i=e.attributes??{};switch(t){case"temperature":case"apparent_temperature":case"dew_point":return i.temperature_unit;case"pressure":return i.pressure_unit;case"wind_speed":case"wind_gust_speed":return i.wind_speed_unit;case"visibility":return i.visibility_unit;case"humidity":case"cloud_coverage":return"%";case"ozone":return"DU";default:return}}function Ce(e,t,i){if(null==e||""===e)return"—";const s="number"==typeof e?e:Number(e);if(Number.isNaN(s))return String(e);const r=t.locale?.language??t.language??"en";return new Intl.NumberFormat(r,{minimumFractionDigits:i,maximumFractionDigits:i}).format(s)}function Ne(e,t){const i=t.locale?.language??t.language??"en",s="12"===t.locale?.time_format;return new Intl.DateTimeFormat(i,{hour:"2-digit",minute:"2-digit",hour12:s}).format(e)}function Pe(e){if(null==e)return;if("number"==typeof e)return e;const t=String(e).toUpperCase(),i={N:0,NNE:22.5,NE:45,ENE:67.5,E:90,ESE:112.5,SE:135,SSE:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,WNW:292.5,NW:315,NNW:337.5};if(t in i)return i[t];const s=Number(e);return Number.isNaN(s)?void 0:s}const je=G`
  <circle cx="16" cy="16" r="6" stroke="#f5b342" fill="none"/>
  <g stroke="#f5b342" stroke-linecap="round">
    <line x1="16" y1="3" x2="16" y2="6"/>
    <line x1="16" y1="26" x2="16" y2="29"/>
    <line x1="3" y1="16" x2="6" y2="16"/>
    <line x1="26" y1="16" x2="29" y2="16"/>
    <line x1="6.5" y1="6.5" x2="8.6" y2="8.6"/>
    <line x1="23.4" y1="23.4" x2="25.5" y2="25.5"/>
    <line x1="6.5" y1="25.5" x2="8.6" y2="23.4"/>
    <line x1="23.4" y1="8.6" x2="25.5" y2="6.5"/>
  </g>`,Te=G`
  <g stroke="#f5b342" fill="none">
    <circle cx="11" cy="12" r="4"/>
    <line x1="11" y1="4" x2="11" y2="6" stroke-linecap="round"/>
    <line x1="4" y1="12" x2="6" y2="12" stroke-linecap="round"/>
    <line x1="6" y1="7" x2="7.4" y2="8.4" stroke-linecap="round"/>
    <line x1="6" y1="17" x2="7.4" y2="15.6" stroke-linecap="round"/>
  </g>
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,De=G`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 22 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -12 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,Re=G`
  <path stroke="#5fa8e0" fill="none" stroke-linejoin="round"
        d="M22 18 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="11" y1="22" x2="9" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="16" y1="22" x2="14" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="21" y1="22" x2="19" y2="26"/>`,Oe=G`
  <path stroke="#3f7fb0" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#3f7fb0" stroke-linecap="round" stroke-width="2">
    <line x1="9" y1="20" x2="7" y2="26"/>
    <line x1="13" y1="20" x2="11" y2="26"/>
    <line x1="17" y1="20" x2="15" y2="26"/>
    <line x1="21" y1="20" x2="19" y2="26"/>
  </g>`,Ue=G`
  <path stroke="#7a8597" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <path fill="#f5b342" stroke="none" d="M14 18 l-3 6 h3 l-2 5 l5 -7 h-3 l2 -4 Z"/>`,ze=G`
  ${Ue}
  <line stroke="#5fa8e0" stroke-linecap="round" x1="9" y1="22" x2="7" y2="26"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="20" y1="22" x2="18" y2="26"/>`,He=G`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#dfe7f2" stroke-linecap="round">
    <line x1="9" y1="22" x2="9" y2="26"/>
    <line x1="7" y1="24" x2="11" y2="24"/>
    <line x1="16" y1="22" x2="16" y2="26"/>
    <line x1="14" y1="24" x2="18" y2="24"/>
    <line x1="22" y1="22" x2="22" y2="26"/>
    <line x1="20" y1="24" x2="24" y2="24"/>
  </g>`,Le=G`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <line stroke="#5fa8e0" stroke-linecap="round" x1="11" y1="20" x2="9" y2="26"/>
  <g stroke="#dfe7f2" stroke-linecap="round">
    <line x1="17" y1="22" x2="17" y2="26"/>
    <line x1="15" y1="24" x2="19" y2="24"/>
  </g>`,Ie=G`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g stroke="#9aa6b8" stroke-linecap="round">
    <line x1="6" y1="22" x2="22" y2="22"/>
    <line x1="9" y1="26" x2="25" y2="26"/>
  </g>`,Fe=G`
  <g stroke="#9aa6b8" fill="none" stroke-linecap="round">
    <path d="M4 11 h12 a3 3 0 1 0 -3 -3"/>
    <path d="M4 17 h16 a3 3 0 1 1 -3 3"/>
    <path d="M4 23 h8"/>
  </g>`,We=G`
  <path stroke="#c5cbd6" fill="none" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7"/>
  <g fill="#dfe7f2" stroke="none">
    <circle cx="10" cy="24" r="1.5"/>
    <circle cx="16" cy="25" r="1.5"/>
    <circle cx="22" cy="24" r="1.5"/>
  </g>`,Ze=G`
  <path fill="none" stroke="#c5cbd6" stroke-linejoin="round"
        d="M20 19 a8 8 0 1 1 -8 -15 a 6 6 0 0 0 8 15 Z"/>`,Ve=G`
  <path fill="none" stroke="#c5cbd6" stroke-linejoin="round"
        d="M14 13 a6 6 0 1 1 -6 -10 a 4.5 4.5 0 0 0 6 10 Z"/>
  <path stroke="#9aa6b8" fill="none" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,Be=G`
  <circle cx="16" cy="16" r="9" stroke="#d99" fill="none"/>
  <line stroke="#d99" stroke-linecap="round" x1="16" y1="11" x2="16" y2="17"/>
  <circle cx="16" cy="20" r="1.2" fill="#d99" stroke="none"/>`,qe=e=>G`
  <svg viewBox="0 0 32 32" stroke-width="1.8" fill="none">${e}</svg>`,Ge={sunny:qe(je),clear:qe(je),"clear-night":qe(Ze),partlycloudy:qe(Te),"partly-cloudy":qe(Te),"partly-cloudy-night":qe(Ve),cloudy:qe(De),rainy:qe(Re),pouring:qe(Oe),lightning:qe(Ue),"lightning-rainy":qe(ze),snowy:qe(He),"snowy-rainy":qe(Le),fog:qe(Ie),hail:qe(We),windy:qe(Fe),"windy-variant":qe(Fe),exceptional:qe(Be)},Ke=G`
  <circle cx="16" cy="16" r="7" fill="#fbc02d"/>
  <g stroke="#fbc02d" stroke-width="2.4" stroke-linecap="round">
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="16" y1="26" x2="16" y2="30"/>
    <line x1="2" y1="16" x2="6" y2="16"/>
    <line x1="26" y1="16" x2="30" y2="16"/>
    <line x1="6" y1="6" x2="9" y2="9"/>
    <line x1="23" y1="23" x2="26" y2="26"/>
    <line x1="6" y1="26" x2="9" y2="23"/>
    <line x1="23" y1="9" x2="26" y2="6"/>
  </g>`,Ye=G`
  <circle cx="11" cy="11" r="5" fill="#fbc02d"/>
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.4" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,Je=G`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.4" stroke-linejoin="round"
        d="M22 22 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -12 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,Qe=G`
  <path fill="#90a4ae" stroke-linejoin="round"
        d="M22 18 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#5fa8e0">
    <ellipse cx="11" cy="25" rx="1.4" ry="2.4"/>
    <ellipse cx="16" cy="26" rx="1.4" ry="2.4"/>
    <ellipse cx="21" cy="25" rx="1.4" ry="2.4"/>
  </g>`,Xe=G`
  <path fill="#7a8597" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#3f7fb0">
    <ellipse cx="9" cy="23" rx="1.3" ry="2.2"/>
    <ellipse cx="13" cy="24" rx="1.3" ry="2.2"/>
    <ellipse cx="17" cy="23" rx="1.3" ry="2.2"/>
    <ellipse cx="21" cy="24" rx="1.3" ry="2.2"/>
    <ellipse cx="11" cy="28" rx="1.3" ry="2.2"/>
    <ellipse cx="19" cy="28" rx="1.3" ry="2.2"/>
  </g>`,et=G`
  <path fill="#7a8597" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <path fill="#fbc02d" d="M14 18 l-3 6 h3 l-2 5 l5 -7 h-3 l2 -4 Z"/>`,tt=G`
  ${et}
  <ellipse cx="9" cy="25" rx="1.2" ry="2" fill="#5fa8e0"/>
  <ellipse cx="20" cy="25" rx="1.2" ry="2" fill="#5fa8e0"/>`,it=G`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#dfe7f2">
    <circle cx="9" cy="24" r="1.5"/>
    <circle cx="16" cy="25" r="1.5"/>
    <circle cx="23" cy="24" r="1.5"/>
    <circle cx="12" cy="28" r="1.3"/>
    <circle cx="20" cy="28" r="1.3"/>
  </g>`,st=G`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <ellipse cx="11" cy="25" rx="1.3" ry="2" fill="#5fa8e0"/>
  <circle cx="17" cy="25" r="1.4" fill="#dfe7f2"/>
  <circle cx="22" cy="26" r="1.4" fill="#dfe7f2"/>`,rt=G`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g stroke="#9aa6b8" stroke-width="1.6" stroke-linecap="round">
    <line x1="6" y1="22" x2="22" y2="22"/>
    <line x1="9" y1="26" x2="25" y2="26"/>
  </g>`,nt=G`
  <g stroke="#9aa6b8" stroke-width="2" fill="none" stroke-linecap="round">
    <path d="M4 11 h12 a3 3 0 1 0 -3 -3"/>
    <path d="M4 17 h16 a3 3 0 1 1 -3 3"/>
    <path d="M4 23 h8"/>
  </g>`,ot=G`
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 16 a5 5 0 0 0 -.7 -10 a6 6 0 0 0 -12 1 a4 4 0 0 0 -.5 8.7 Z"/>
  <g fill="#dfe7f2">
    <circle cx="10" cy="24" r="2"/>
    <circle cx="16" cy="25" r="2"/>
    <circle cx="22" cy="24" r="2"/>
  </g>`,at=G`
  <path fill="#dfe7f2" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 21 a9 9 0 1 1 -9 -17 a 7 7 0 0 0 9 17 Z"/>`,lt=G`
  <path fill="#dfe7f2" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M14 13 a6 6 0 1 1 -6 -10 a 4.5 4.5 0 0 0 6 10 Z"/>
  <path fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.2" stroke-linejoin="round"
        d="M22 25 a5 5 0 1 0 -.7 -10 a6 6 0 0 0 -11.3 1.3 a4 4 0 0 0 .5 8.7 Z"/>`,ct=G`
  <circle cx="16" cy="16" r="9" fill="#e57373"/>
  <line stroke="#fff" stroke-width="2" stroke-linecap="round" x1="16" y1="11" x2="16" y2="17"/>
  <circle cx="16" cy="20" r="1.4" fill="#fff"/>`,dt=e=>G`
  <svg viewBox="0 0 32 32">${e}</svg>`,pt={sunny:dt(Ke),clear:dt(Ke),"clear-night":dt(at),partlycloudy:dt(Ye),"partly-cloudy":dt(Ye),"partly-cloudy-night":dt(lt),cloudy:dt(Je),rainy:dt(Qe),pouring:dt(Xe),lightning:dt(et),"lightning-rainy":dt(tt),snowy:dt(it),"snowy-rainy":dt(st),fog:dt(rt),hail:dt(ot),windy:dt(nt),"windy-variant":dt(nt),exceptional:dt(ct)},ht=G`
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="16" cy="16" r="9"/>
    <line x1="16" y1="11" x2="16" y2="17"/>
    <circle cx="16" cy="20" r="1.4" fill="currentColor"/>
  </svg>`;function ut(e,t){if(!e)return ht;return("fill"===t?pt:Ge)[e]??ht}function ft(e,t,i,s,r,n){if(!t)return q`<div class="header"><div class="missing">Weather entity not found</div></div>`;const o=t.state,a=e.localize?.(`component.weather.entity_component._.state.${o}`)||o,l=Me(t,"temperature")??"°",c=Me(t,"wind_speed")??"m/s",d=t.attributes?.temperature,p=t.attributes?.apparent_temperature,h=t.attributes?.wind_speed,u=t.attributes?.wind_gust_speed,f=t.attributes?.friendly_name;return q`
    <div class="header">
      <div class="header-icon">${ut(o,s)}</div>

      <div class="header-info">
        ${i.show_location&&f?q`<div class="header-location">${f}</div>`:Y}
        ${i.show_condition?q`<div class="header-condition">${a}</div>`:Y}
      </div>

      <div class="header-block">
        <div class="header-big">
          ${Ce(void 0!==d?Math.round(Number(d)):void 0,e)}<span class="header-unit-deg"
            >°${l&&l.length>1?l.slice(-1):""}</span
          >
        </div>
        ${i.show_feels_like&&void 0!==p?q`<div class="header-cap">
              ${r.caption("feels_like")} ${function(e,t){if(null==e||""===e)return"—";const i="number"==typeof e?e:Number(e);return Number.isNaN(i)?String(e):`${Ce(Math.round(i),t)}°`}(p,e)}
            </div>`:Y}
      </div>

      ${i.show_wind_block?q`
            <div class="header-block">
              <div class="header-big">
                ${Ce(h,e)}<span class="header-unit"> ${c}</span>
              </div>
              ${i.show_wind_gust&&void 0!==u?q`<div class="header-cap">
                    ${r.caption("gust")} ${Ce(u,e)} ${c}
                  </div>`:Y}
            </div>
          `:Y}
      ${i.show_time_block?q`
            <div class="header-block">
              <div class="header-big">${Ne(n,e)}</div>
              ${i.show_date?q`<div class="header-cap">${function(e,t){const i=t.locale?.language??t.language??"en";return new Intl.DateTimeFormat(i,{weekday:"short",day:"numeric",month:"short",year:"numeric"}).format(e)}(n,e)}</div>`:Y}
            </div>
          `:Y}
    </div>
  `}const gt=e=>G`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">${e}</svg>`,yt={temperature:gt(G`<path d="M14 14V5a2 2 0 1 0 -4 0v9a4 4 0 1 0 4 0Z"/>`),apparent_temperature:gt(G`<path d="M14 14V5a2 2 0 1 0 -4 0v9a4 4 0 1 0 4 0Z"/><path d="M18 8a4 4 0 0 1 0 8"/>`),humidity:gt(G`<path d="M12 3 c -4 5 -7 9 -7 13 a 7 7 0 0 0 14 0 c 0 -4 -3 -8 -7 -13Z"/>`),pressure:gt(G`<circle cx="12" cy="12" r="9"/><path d="M12 7 v5 l3 2"/>`),wind_speed:gt(G`<path d="M3 9 h13 a3 3 0 1 0 -3 -3"/><path d="M3 15 h16 a3 3 0 1 1 -3 3"/>`),wind_gust_speed:gt(G`<path d="M3 8 h12 a3 3 0 1 0 -3 -3"/><path d="M3 13 h16 a3 3 0 1 1 -3 3"/><path d="M3 18 h6"/>`),wind_bearing:gt(G`<circle cx="12" cy="12" r="9"/><path d="M12 5 L14 10 L12 8.5 L10 10 Z" fill="currentColor" stroke="none"/>`),cloud_coverage:gt(G`<path d="M17 18 a4 4 0 0 0 0 -8 a6 6 0 0 0 -11 1 a4 4 0 0 0 0 7 Z"/>`),visibility:gt(G`<path d="M2 12 s 4 -7 10 -7 s 10 7 10 7 s -4 7 -10 7 s -10 -7 -10 -7Z"/><circle cx="12" cy="12" r="3"/>`),dew_point:gt(G`<path d="M12 4 c -4 5 -6 8 -6 11 a6 6 0 0 0 12 0 c 0 -3 -2 -6 -6 -11Z"/><path d="M14 16 a2 2 0 0 1 -2 2"/>`),uv_index:gt(G`<circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21"/><line x1="3" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21" y2="12"/><line x1="5.6" y1="5.6" x2="7" y2="7"/><line x1="17" y1="17" x2="18.4" y2="18.4"/><line x1="5.6" y1="18.4" x2="7" y2="17"/><line x1="17" y1="7" x2="18.4" y2="5.6"/>`),ozone:gt(G`<circle cx="12" cy="12" r="2"/><circle cx="6" cy="9" r="2"/><circle cx="18" cy="9" r="2"/><circle cx="9" cy="17" r="2"/><circle cx="15" cy="17" r="2"/>`),sunrise:gt(G`<path d="M3 18 h18"/><path d="M7 18 a5 5 0 0 1 10 0"/><path d="M12 7 v-3"/><path d="M9 6 l3 -3 l3 3"/>`),sunset:gt(G`<path d="M3 18 h18"/><path d="M7 18 a5 5 0 0 1 10 0"/><path d="M12 4 v3"/><path d="M9 5 l3 3 l3 -3"/>`),precipitation:gt(G`<path d="M12 3 c -4 5 -7 9 -7 13 a 7 7 0 0 0 14 0 c 0 -4 -3 -8 -7 -13Z"/>`),precipitation_probability:gt(G`<path d="M3 10 c 3 -3 6 -3 9 0 s 6 3 9 0"/><path d="M3 16 c 3 -3 6 -3 9 0 s 6 3 9 0"/>`),generic:gt(G`<circle cx="12" cy="12" r="9"/><line x1="12" y1="6" x2="12" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`)};function mt(e){return e&&e in yt?yt[e]:yt.generic}function _t(e,t,i,s,r){if(!s.enabled)return Y;if(0===s.items.length)return Y;const n=s.items.map(s=>function(e,t,i,s,r){const n=$e(s),o=we(s),a=ke(s),l=function(e){if("string"!=typeof e)return e.icon}(s),c=function(e,t,i,s){const r=$e(s),n=we(s);if(n){const t=e.states[n];return{value:t?.state,unit:t?.attributes?.unit_of_measurement,entity:t}}if(!r)return{value:void 0};if("sunrise"===r||"sunset"===r){const t=i??e.states["sun.sun"],s="sunrise"===r?"next_rising":"next_setting",n=t?.attributes?.[s];return{value:n,entity:t}}return{value:Ee(t,r),unit:Me(t,r)}}(e,t,i,s),d=l??n??"generic",p=a??function(e,t,i){return e?i.label(e):t?.attributes?.friendly_name?t.attributes.friendly_name:t?.entity_id?t.entity_id:""}(n,c.entity,r),h=function(e,t,i,s,r,n){if(null==t||""===t)return"—";if("sunrise"===e||"sunset"===e){const e=new Date(t);return Number.isNaN(e.getTime())?"—":Ne(e,s)}if("wind_bearing"===e){const e=Pe(t);return void 0===e?"—":null==(o=e)||Number.isNaN(o)?"—":["N","NE","E","SE","S","SW","W","NW"][Math.round(o%360/45)%8]}var o;if("temperature"===e||"apparent_temperature"===e||"dew_point"===e){const n=i??Me(r,e??"temperature")??"°";return`${Ce(Math.round(Number(t)),s)}°${n&&n.length>1?n.slice(-1):""}`}if("humidity"===e||"cloud_coverage"===e)return`${Ce(Math.round(Number(t)),s)} %`;if("uv_index"===e)return Ce(Number(t),s,1);if("wind_speed"===e||"wind_gust_speed"===e){const n=i??Me(r,e)??"m/s";return`${Ce(Number(t),s)} ${n}`}if("pressure"===e){const e=i??Me(r,"pressure")??"hPa";return`${Ce(Math.round(Number(t)),s)} ${e}`}if("visibility"===e){const e=i??Me(r,"visibility")??"km";return`${Ce(Number(t),s,1)} ${e}`}if("ozone"===e)return`${Ce(Math.round(Number(t)),s)} DU`;if(n){const e=i??"";return e?`${t} ${e}`:String(t)}return String(t)}(n,c.value,c.unit,e,t,o);return{iconKey:d,value:h,label:p}}(e,t,i,s,r)),o="compact"===s.style?"grid-compact":"grid-full",a=s.show_labels?"labels-on":"labels-off";return q`
    <div class="grid ${o} ${a}">
      ${n.map(e=>q`
          <div class="grid-cell">
            <span class="grid-icon">${mt(e.iconKey)}</span>
            <span class="grid-value">${e.value}</span>
            ${s.show_labels&&e.label?q`<span class="grid-label">${e.label}</span>`:Y}
          </div>
        `)}
    </div>
  `}function vt(e,t,i,s,r){if(!i.enabled)return Y;if(0===t.length)return q`<div class="forecast forecast-empty">No forecast data</div>`;const n=t.slice(0,i.count),o="hourly"===i.type;return q`
    <div class="forecast" style="--forecast-cols: ${n.length}">
      ${n.map(t=>function(e,t,i,s,r){const n=new Date(e.datetime),o=s?function(e,t){const i=t.locale?.language??t.language??"en",s="12"===t.locale?.time_format;return new Intl.DateTimeFormat(i,{hour:"2-digit",minute:"2-digit",hour12:s}).format(e)}(n,r):function(e,t){const i=t.locale?.language??t.language??"en";return new Intl.DateTimeFormat(i,{weekday:"short"}).format(e)}(n,r),a=void 0!==e.temperature?q`<span>${Math.round(e.temperature)}°</span>${void 0!==e.templow?q`<span class="lo"> / ${Math.round(e.templow)}°</span>`:Y}`:Y;return q`
    <div class="forecast-col">
      <span class="forecast-heading">${o}</span>
      <span class="forecast-icon">${ut(e.condition,i)}</span>
      ${a?q`<div class="forecast-temps">${a}</div>`:Y}
      ${t.rows.map(t=>function(e,t,i){const s=t[e];if(null==s)return Y;if("wind_speed"===e){const e=Pe(t.wind_bearing)??0;return q`<div class="forecast-row">
      <span class="dial">${r=e,G`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="12" cy="12" r="9"/>
    <g transform="rotate(${r} 12 12)">
      <path d="M12 4 L14.5 9 L12 7.5 L9.5 9 Z" fill="currentColor" stroke="none"/>
    </g>
  </svg>`}</span>
      <span>${Ce(s,i)}</span>
    </div>`}var r;let n;n="precipitation"===e?`${Ce(s,i,1)}`:"precipitation_probability"===e?`${Ce(Math.round(s),i)} %`:"temperature"===e||"apparent_temperature"===e||"dew_point"===e?`${Math.round(s)}°`:"humidity"===e||"cloud_coverage"===e?`${Math.round(s)} %`:String(s);return q`<div class="forecast-row">
    <span>${mt(e)}</span>
    <span>${n}</span>
  </div>`}(t,e,r))}
    </div>
  `}(t,i,s,o,e))}
    </div>
  `}const bt=c`
  :host {
    --yawc-cell-min-full: 94px;
    --yawc-cell-min-full-tight: 72px;
    --yawc-cell-min-compact: 110px;
    --yawc-cell-min-compact-tight: 80px;
    --yawc-divider: var(--divider-color, rgba(0, 0, 0, 0.12));
    --yawc-cell-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
    --yawc-text-primary: var(--primary-text-color, #212121);
    --yawc-text-secondary: var(--secondary-text-color, #6f6f6f);
    --yawc-accent: var(--primary-color, #03a9f4);
  }

  ha-card {
    padding: 16px;
    color: var(--yawc-text-primary);
  }

  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 18px;
  }

  @media (min-width: 480px) {
    .header {
      grid-template-columns: auto 1fr auto auto auto;
      gap: 24px;
    }
  }

  .header-icon {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-icon svg {
    width: 100%;
    height: 100%;
  }

  .header-info {
    min-width: 0;
  }

  .header-location {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--yawc-text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-condition {
    font-size: 12px;
    color: var(--yawc-text-secondary);
    margin-top: 3px;
  }

  .header-block {
    text-align: right;
  }

  .header-big {
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.5px;
    font-variant-numeric: tabular-nums;
    color: var(--yawc-text-primary);
    white-space: nowrap;
  }

  .header-unit,
  .header-unit-deg {
    font-size: 14px;
    font-weight: 400;
    color: var(--yawc-text-secondary);
    letter-spacing: 0;
  }

  .header-unit-deg {
    font-size: 26px;
    line-height: 1;
    margin-left: 1px;
    vertical-align: top;
  }

  .header-cap {
    font-size: 11px;
    color: var(--yawc-text-secondary);
    margin-top: 5px;
    letter-spacing: 0.2px;
  }

  .section-divider {
    margin: 14px 0;
    border-top: 1px solid var(--yawc-divider);
  }

  .grid {
    display: grid;
    gap: 8px;
  }

  .grid-full.labels-on {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-full), 1fr));
  }

  .grid-full.labels-off {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-full-tight), 1fr));
  }

  .grid-compact.labels-on {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-compact), 1fr));
    gap: 14px 8px;
  }

  .grid-compact.labels-off {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-compact-tight), 1fr));
    gap: 12px 8px;
  }

  .grid-cell {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .grid-full .grid-cell {
    background: var(--yawc-cell-bg);
    border-radius: 8px;
    padding: 10px 6px;
  }

  .grid-full.labels-off .grid-cell {
    padding: 8px 4px;
  }

  .grid-compact .grid-cell {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    gap: 6px;
    padding: 4px 2px;
  }

  .grid-icon {
    width: 22px;
    height: 22px;
    color: var(--yawc-accent);
    margin-bottom: 4px;
    display: inline-flex;
  }

  .grid-icon svg {
    width: 100%;
    height: 100%;
  }

  .grid-compact .grid-icon {
    width: 18px;
    height: 18px;
    margin-bottom: 0;
  }

  .grid-value {
    font-size: 13px;
    font-weight: 500;
    color: var(--yawc-text-primary);
    white-space: nowrap;
  }

  .grid-label {
    font-size: 10px;
    color: var(--yawc-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  .grid-compact .grid-label {
    font-size: 11px;
    text-transform: none;
    letter-spacing: 0;
    margin-top: 0;
    margin-left: 1px;
  }

  .forecast {
    display: grid;
    grid-template-columns: repeat(var(--forecast-cols, 5), 1fr);
    gap: 4px;
  }

  .forecast-empty {
    color: var(--yawc-text-secondary);
    font-size: 12px;
    text-align: center;
    padding: 12px;
  }

  .forecast-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 4px 2px;
  }

  .forecast-heading {
    font-size: 11px;
    color: var(--yawc-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-variant-numeric: tabular-nums;
  }

  .forecast-icon {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .forecast-icon svg {
    width: 100%;
    height: 100%;
  }

  .forecast-temps {
    font-size: 13px;
    color: var(--yawc-text-primary);
    font-variant-numeric: tabular-nums;
  }

  .forecast-temps .lo {
    color: var(--yawc-text-secondary);
    font-size: 12px;
  }

  .forecast-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: var(--yawc-text-primary);
    font-variant-numeric: tabular-nums;
  }

  .forecast-row svg,
  .forecast-row .dial {
    width: 13px;
    height: 13px;
    color: var(--yawc-text-secondary);
    flex-shrink: 0;
    display: inline-flex;
  }

  .forecast-row .dial svg {
    width: 100%;
    height: 100%;
  }

  .missing {
    color: var(--error-color, #db4437);
    padding: 8px;
    font-size: 13px;
  }
`;class xt extends he{constructor(){super(...arguments),this.forecast=[],this.now=new Date}static{this.styles=bt}setConfig(e){if(!e.entity)throw new Error("Entity is required");this.config=xe(e)}getCardSize(){let e=2;return this.config?.grid?.enabled&&(e+=2),this.config?.forecast?.enabled&&(e+=2),e}static getStubConfig(t,i){const s=i.find(e=>e.startsWith("weather."));return{type:`custom:${e}`,entity:s??""}}connectedCallback(){super.connectedCallback(),this.startClock(),this.scheduleForecast()}disconnectedCallback(){super.disconnectedCallback(),this.stopClock(),this.stopForecastPolling()}updated(e){(e.has("hass")||e.has("config"))&&this.refreshForecastIfNeeded()}startClock(){this.now=new Date,this.clockTimer=window.setInterval(()=>{this.now=new Date},3e4)}stopClock(){this.clockTimer&&(window.clearInterval(this.clockTimer),this.clockTimer=void 0)}scheduleForecast(){this.stopForecastPolling(),this.forecastTimer=window.setInterval(()=>{this.refreshForecast()},3e5)}stopForecastPolling(){this.forecastTimer&&(window.clearInterval(this.forecastTimer),this.forecastTimer=void 0)}refreshForecastIfNeeded(){if(!this.hass||!this.config?.entity)return;const e=this.lastForecastEntity===this.config.entity,t=this.lastForecastType===this.config.forecast.type;e&&t&&0!==this.forecast.length||this.refreshForecast()}async refreshForecast(){this.hass&&this.config?.entity&&(this.config.forecast.enabled?(this.lastForecastEntity=this.config.entity,this.lastForecastType=this.config.forecast.type,this.forecast=await async function(e,t,i){try{const s=await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:i},target:{entity_id:t},return_response:!0});return s?.response?.[t]?.forecast??[]}catch{return[]}}(this.hass,this.config.entity,this.config.forecast.type)):this.forecast=[])}render(){if(!this.hass||!this.config)return Y;const e=Se.resolveLanguage(this.config.language,this.hass.language),t=new Se(e),{weatherEntity:i,sunEntity:s,iconStyle:r}=(n=this.hass,o=this.config,{weatherEntity:n.states[o.entity],sunEntity:o.sun_entity?n.states[o.sun_entity]:n.states["sun.sun"],iconStyle:o.icon_style});var n,o;const a=ft(this.hass,i,this.config.header,r,t,this.now),l=_t(this.hass,i,s,this.config.grid,t),c=vt(this.hass,this.forecast,this.config.forecast,r);return q`
      <ha-card>
        ${a}
        ${l!==Y?q`<div class="section-divider"></div>
              ${l}`:Y}
        ${c!==Y?q`<div class="section-divider"></div>
              ${c}`:Y}
      </ha-card>
    `}static async getConfigElement(){return await Promise.resolve().then(function(){return St}),document.createElement(`${e}-editor`)}}s([ye({attribute:!1})],xt.prototype,"hass",void 0),s([me()],xt.prototype,"config",void 0),s([me()],xt.prototype,"forecast",void 0),s([me()],xt.prototype,"now",void 0),console.info(`%c YET-ANOTHER-WEATHER-CARD %c v${t} `,"color: white; background: #03a9f4; font-weight: 700;","color: #03a9f4; background: white; font-weight: 700;"),customElements.get(e)||customElements.define(e,xt),window.customCards=window.customCards??[],window.customCards.push({type:e,name:"Yet Another Weather Card",description:"Three-section weather card with configurable header, grid and forecast.",preview:!0,documentationURL:"https://github.com/your-username/yet-another-weather-card"});const $t=t,wt=new Set(["sunrise","sunset"]),kt=["temperature","apparent_temperature","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","cloud_coverage","visibility","dew_point","uv_index","ozone","sunrise","sunset"].filter(e=>!wt.has(e));class At extends he{constructor(){super(...arguments),this.openSection="entities",this.addingCustom=!1,this.customDraft={entity:"",label:"",icon:""}}static{this.styles=c`
    :host {
      display: block;
      --ed-bg: var(--card-background-color, #fff);
      --ed-bg-alt: var(--secondary-background-color, #f4f4f4);
      --ed-border: var(--divider-color, rgba(0, 0, 0, 0.12));
      --ed-text: var(--primary-text-color, #212121);
      --ed-text-secondary: var(--secondary-text-color, #6f6f6f);
      --ed-accent: var(--primary-color, #03a9f4);
    }

    .section {
      border: 1px solid var(--ed-border);
      border-radius: 8px;
      margin-bottom: 8px;
      background: var(--ed-bg);
      overflow: hidden;
    }

    .section-header {
      padding: 12px 14px;
      font-weight: 500;
      font-size: 14px;
      color: var(--ed-text);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
    }

    .section-header:hover {
      background: var(--ed-bg-alt);
    }

    .chev {
      transition: transform 150ms ease;
      color: var(--ed-text-secondary);
    }

    .open .chev {
      transform: rotate(90deg);
    }

    .section-body {
      padding: 6px 14px 14px;
      border-top: 1px solid var(--ed-border);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 10px 0;
    }

    .field-label {
      font-size: 11px;
      color: var(--ed-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .field-help {
      font-size: 11px;
      color: var(--ed-text-secondary);
      margin-top: 2px;
    }

    input[type="text"],
    select {
      padding: 8px 10px;
      border: 1px solid var(--ed-border);
      border-radius: 6px;
      background: var(--ed-bg);
      color: var(--ed-text);
      font-size: 13px;
      font-family: inherit;
    }

    .toggles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 14px;
      margin-top: 6px;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      padding: 4px 0;
    }

    .switch {
      position: relative;
      width: 32px;
      height: 18px;
      background: var(--ed-border);
      border-radius: 10px;
      cursor: pointer;
      transition: background 120ms ease;
      flex-shrink: 0;
    }

    .switch.on {
      background: var(--ed-accent);
    }

    .switch::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      transition: left 120ms ease;
    }

    .switch.on::after {
      left: 16px;
    }

    .item-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin: 8px 0;
    }

    .item {
      display: grid;
      grid-template-columns: auto 1fr auto auto auto auto;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      background: var(--ed-bg-alt);
      border: 1px solid var(--ed-border);
      border-radius: 6px;
    }

    .item-name {
      font-size: 13px;
      color: var(--ed-text);
    }

    .item-meta {
      font-size: 11px;
      color: var(--ed-text-secondary);
      margin-left: 6px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }

    .icon-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      color: var(--ed-text-secondary);
      font-size: 14px;
      line-height: 1;
      width: 26px;
      height: 26px;
    }

    .icon-btn:hover {
      background: var(--ed-bg);
      color: var(--ed-text);
    }

    .icon-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .icon-btn.danger:hover {
      color: #d32f2f;
    }

    .add-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: center;
      padding-top: 10px;
      border-top: 1px dashed var(--ed-border);
      margin-top: 8px;
    }

    .btn {
      padding: 8px 14px;
      border-radius: 6px;
      background: var(--ed-accent);
      color: #fff;
      border: none;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .btn-secondary {
      padding: 7px 12px;
      border-radius: 6px;
      background: transparent;
      color: var(--ed-text-secondary);
      border: 1px solid var(--ed-border);
      font-size: 12px;
      cursor: pointer;
    }

    .custom-panel {
      margin-top: 10px;
      padding: 12px;
      background: var(--ed-bg-alt);
      border: 1px solid var(--ed-border);
      border-radius: 6px;
      display: grid;
      gap: 10px;
    }

    .actions-row {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .row-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 13px;
    }
  `}setConfig(e){this.config=xe(e)}fire(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}updateRoot(e){this.config={...this.config,...e},this.fire()}updateNested(e,t){this.config={...this.config,[e]:{...this.config[e],...t}},this.fire()}toggleSection(e){this.openSection=this.openSection===e?"":e}render(){if(!this.hass||!this.config)return Y;const e=Se.resolveLanguage(this.config.language,this.hass.language),t=new Se(e);return q`
      ${this.section("entities",t.editor("section_entities"),this.renderEntities(t))}
      ${this.section("header",t.editor("section_header"),this.renderHeader(t))}
      ${this.section("grid",t.editor("section_grid"),this.renderGrid(t))}
      ${this.section("forecast",t.editor("section_forecast"),this.renderForecast(t))}
      ${this.section("appearance",t.editor("section_appearance"),this.renderAppearance(t))}
    `}section(e,t,i){const s=this.openSection===e;return q`
      <div class="section ${s?"open":""}">
        <div class="section-header" @click=${()=>this.toggleSection(e)}>
          <span>${t}</span>
          <span class="chev">▶</span>
        </div>
        ${s?q`<div class="section-body">${i}</div>`:Y}
      </div>
    `}renderEntities(e){const t=Object.keys(this.hass?.states??{}).filter(e=>e.startsWith("weather.")),i=Object.keys(this.hass?.states??{}).filter(e=>e.startsWith("sun."));return q`
      <div class="field">
        <span class="field-label">${e.editor("entity")}</span>
        <select
          .value=${this.config.entity}
          @change=${e=>this.updateRoot({entity:e.target.value})}
        >
          <option value="" ?selected=${!this.config.entity}>—</option>
          ${t.map(e=>q`<option value=${e} ?selected=${e===this.config.entity}>${e}</option>`)}
        </select>
      </div>
      <div class="field">
        <span class="field-label">${e.editor("sun_entity")}</span>
        <select
          .value=${this.config.sun_entity??""}
          @change=${e=>{const t=e.target.value;this.updateRoot({sun_entity:t||void 0})}}
        >
          <option value="" ?selected=${!this.config.sun_entity}>sun.sun (default)</option>
          ${i.map(e=>q`<option value=${e} ?selected=${e===this.config.sun_entity}>${e}</option>`)}
        </select>
      </div>
    `}renderHeader(e){const t=this.config.header,i=(i,s)=>this.toggleRow(e.editor(s),t[i],e=>this.updateNested("header",{[i]:e}));return q`
      <div class="toggles">
        ${i("show_location","show_location")} ${i("show_condition","show_condition")}
        ${i("show_feels_like","show_feels_like")} ${i("show_wind_block","show_wind_block")}
        ${i("show_wind_gust","show_wind_gust")} ${i("show_time_block","show_time_block")}
        ${i("show_date","show_date")}
      </div>
    `}toggleRow(e,t,i){return q`
      <div class="toggle-row">
        <span>${e}</span>
        <span class="switch ${t?"on":""}" @click=${()=>i(!t)}></span>
      </div>
    `}renderGrid(e){const t=this.config.grid;return q`
      <div class="row-toggle">
        <span>${e.editor("grid_enabled")}</span>
        <span
          class="switch ${t.enabled?"on":""}"
          @click=${()=>this.updateNested("grid",{enabled:!t.enabled})}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${e.editor("grid_style")}</span>
        <select
          .value=${t.style}
          @change=${e=>this.updateNested("grid",{style:e.target.value})}
        >
          <option value="full" ?selected=${"full"===t.style}>
            ${e.editor("grid_style_full")}
          </option>
          <option value="compact" ?selected=${"compact"===t.style}>
            ${e.editor("grid_style_compact")}
          </option>
        </select>
      </div>

      <div class="row-toggle">
        <span>${e.editor("grid_show_labels")}</span>
        <span
          class="switch ${t.show_labels?"on":""}"
          @click=${()=>this.updateNested("grid",{show_labels:!t.show_labels})}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${e.editor("grid_items")}</span>
        <span class="field-help">${e.editor("grid_items_help")}</span>
      </div>

      ${this.renderItemList(e)} ${this.renderItemAdder(e)}
    `}renderItemList(e){return q`
      <div class="item-list">
        ${this.config.grid.items.map((t,i)=>this.renderItem(t,i,e))}
      </div>
    `}renderItem(e,t,i){const s=$e(e),r=we(e),n=ke(e),o=this.config.grid.items,a=n||(s?i.label(s):r&&this.hass?.states[r]?.attributes?.friendly_name?this.hass.states[r].attributes.friendly_name:r??"?");return q`
      <div class="item">
        <span class="item-name">${a}</span>
        <span class="item-meta">${s?"weather attr":r??""}</span>
        <button
          class="icon-btn"
          ?disabled=${0===t}
          @click=${()=>this.moveItem(t,-1)}
          title="Move up"
        >
          ▲
        </button>
        <button
          class="icon-btn"
          ?disabled=${t===o.length-1}
          @click=${()=>this.moveItem(t,1)}
          title="Move down"
        >
          ▼
        </button>
        <button class="icon-btn" @click=${()=>this.editLabel(t,i)} title="Edit label">
          ✎
        </button>
        <button class="icon-btn danger" @click=${()=>this.removeItem(t)} title="Remove">
          ✕
        </button>
      </div>
    `}moveItem(e,t){const i=[...this.config.grid.items],s=e+t;s<0||s>=i.length||([i[e],i[s]]=[i[s],i[e]],this.updateNested("grid",{items:i}))}removeItem(e){const t=this.config.grid.items.filter((t,i)=>i!==e);this.updateNested("grid",{items:t})}editLabel(e,t){const i=this.config.grid.items[e],s=$e(i),r=we(i),n=ke(i)??"",o=s?t.label(s):r&&this.hass?.states[r]?.attributes?.friendly_name?this.hass.states[r].attributes.friendly_name:r??"",a=window.prompt(`${t.editor("label_override")}\n${t.format("label_default",{default:o})}\n${t.editor("label_help")}`,n);if(null===a)return;const l=[...this.config.grid.items];if(""===a){if("string"==typeof i)return;const t={...i};delete t.label,l[e]=1===Object.keys(t).length&&"attribute"in t?t.attribute:t}else l[e]="string"==typeof i?{attribute:i,label:a}:{...i,label:a};this.updateNested("grid",{items:l})}renderItemAdder(e){const t=new Set(this.config.grid.items.map(e=>$e(e)).filter(Boolean));return q`
      <div class="add-row">
        <select id="add-select">
          <option value="">${e.editor("add_item")}</option>
          <optgroup label=${e.editor("from_weather")}>
            ${kt.map(i=>q`<option value=${i} ?disabled=${t.has(i)}>
                  ${e.label(i)}${t.has(i)?` ${e.editor("already_added")}`:""}
                </option>`)}
          </optgroup>
          <optgroup label=${e.editor("from_sun")}>
            ${["sunrise","sunset"].map(i=>q`<option value=${i} ?disabled=${t.has(i)}>
                  ${e.label(i)}${t.has(i)?` ${e.editor("already_added")}`:""}
                </option>`)}
          </optgroup>
          <option value="__custom__">${e.editor("custom_option")}</option>
        </select>
        <button class="btn" @click=${()=>this.handleAdd()}>${e.editor("add")}</button>
      </div>

      ${this.addingCustom?this.renderCustomPanel(e):Y}
    `}handleAdd(){const e=this.renderRoot.querySelector("#add-select");if(!e)return;const t=e.value;if(t){if("__custom__"===t)this.addingCustom=!0,this.customDraft={entity:"",label:"",icon:""};else{const e=[...this.config.grid.items,t];this.updateNested("grid",{items:e})}e.value=""}}renderCustomPanel(e){const t=Object.keys(this.hass?.states??{}).filter(e=>e.startsWith("sensor.")).sort(),i=this.customDraft.entity&&this.hass?.states[this.customDraft.entity]?.attributes?.friendly_name;return q`
      <div class="custom-panel">
        <div class="field">
          <span class="field-label">${e.editor("custom_entity")}</span>
          <select
            .value=${this.customDraft.entity}
            @change=${e=>this.customDraft={...this.customDraft,entity:e.target.value}}
          >
            <option value="">—</option>
            ${t.map(e=>q`<option value=${e} ?selected=${e===this.customDraft.entity}>
                  ${e}
                </option>`)}
          </select>
          <span class="field-help">${e.editor("custom_entity_help")}</span>
        </div>

        <div class="field">
          <span class="field-label">${e.editor("custom_label")}</span>
          <input
            type="text"
            .value=${this.customDraft.label}
            placeholder=${i?e.format("label_default",{default:i}):""}
            @input=${e=>this.customDraft={...this.customDraft,label:e.target.value}}
          />
          <span class="field-help">${e.editor("label_help")}</span>
        </div>

        <div class="field">
          <span class="field-label">${e.editor("custom_icon")}</span>
          <input
            type="text"
            .value=${this.customDraft.icon}
            placeholder="humidity, wind_speed, …"
            @input=${e=>this.customDraft={...this.customDraft,icon:e.target.value}}
          />
          <span class="field-help">${e.editor("icon_default")}</span>
        </div>

        <div class="actions-row">
          <button class="btn-secondary" @click=${()=>this.addingCustom=!1}>
            ${e.editor("cancel")}
          </button>
          <button
            class="btn"
            ?disabled=${!this.customDraft.entity}
            @click=${()=>this.commitCustom()}
          >
            ${e.editor("add")}
          </button>
        </div>
      </div>
    `}commitCustom(){const e=this.customDraft;if(!e.entity)return;const t={entity:e.entity};e.label&&(t.label=e.label),e.icon&&(t.icon=e.icon);const i=[...this.config.grid.items,t];this.updateNested("grid",{items:i}),this.addingCustom=!1,this.customDraft={entity:"",label:"",icon:""}}renderForecast(e){const t=this.config.forecast;return q`
      <div class="row-toggle">
        <span>${e.editor("forecast_enabled")}</span>
        <span
          class="switch ${t.enabled?"on":""}"
          @click=${()=>this.updateNested("forecast",{enabled:!t.enabled})}
        ></span>
      </div>

      <div class="field">
        <span class="field-label">${e.editor("forecast_type")}</span>
        <select
          .value=${t.type}
          @change=${e=>this.updateNested("forecast",{type:e.target.value})}
        >
          <option value="daily" ?selected=${"daily"===t.type}>
            ${e.editor("forecast_type_daily")}
          </option>
          <option value="hourly" ?selected=${"hourly"===t.type}>
            ${e.editor("forecast_type_hourly")}
          </option>
          <option value="twice_daily" ?selected=${"twice_daily"===t.type}>
            ${e.editor("forecast_type_twice_daily")}
          </option>
        </select>
      </div>

      <div class="field">
        <span class="field-label">${e.editor("forecast_count")}</span>
        <input
          type="text"
          .value=${String(t.count)}
          @change=${e=>{const t=parseInt(e.target.value,10);!Number.isNaN(t)&&t>0&&this.updateNested("forecast",{count:t})}}
        />
      </div>

      <div class="field">
        <span class="field-label">${e.editor("forecast_rows")}</span>
      </div>

      ${i.map(i=>{const s=t.rows.includes(i);return q`
          <div class="row-toggle">
            <span>${e.label(i)}</span>
            <span
              class="switch ${s?"on":""}"
              @click=${()=>{const e=s?t.rows.filter(e=>e!==i):[...t.rows,i];this.updateNested("forecast",{rows:e})}}
            ></span>
          </div>
        `})}
    `}renderAppearance(e){return q`
      <div class="field">
        <span class="field-label">${e.editor("icon_style")}</span>
        <select
          .value=${this.config.icon_style}
          @change=${e=>this.updateRoot({icon_style:e.target.value})}
        >
          <option value="line" ?selected=${"line"===this.config.icon_style}>
            ${e.editor("icon_style_line")}
          </option>
          <option value="fill" ?selected=${"fill"===this.config.icon_style}>
            ${e.editor("icon_style_fill")}
          </option>
        </select>
      </div>
      <div class="field">
        <span class="field-label">${e.editor("language")}</span>
        <select
          .value=${this.config.language??"auto"}
          @change=${e=>this.updateRoot({language:e.target.value})}
        >
          <option value="auto" ?selected=${"auto"===this.config.language}>
            ${e.editor("language_auto")}
          </option>
          <option value="en" ?selected=${"en"===this.config.language}>English</option>
          <option value="nb" ?selected=${"nb"===this.config.language}>Norsk (bokmål)</option>
        </select>
      </div>
    `}}s([ye({attribute:!1})],At.prototype,"hass",void 0),s([me()],At.prototype,"config",void 0),s([me()],At.prototype,"openSection",void 0),s([me()],At.prototype,"addingCustom",void 0),s([me()],At.prototype,"customDraft",void 0),customElements.define("yet-another-weather-card-editor",At);var St=Object.freeze({__proto__:null,YawcEditor:At});export{$t as VERSION,xt as YetAnotherWeatherCard};
