webpackJsonp([3],{180:function(e,t,n){n(299);var r=n(15)(n(279),n(350),"data-v-425ce2c6",null);r.options.__file="E:\\vue-components-web\\src\\views\\businessTypeTreeTest\\Index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),r.options.functional,e.exports=r.exports},189:function(e,t,n){"use strict";t.__esModule=!0;var r=n(193),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},190:function(e,t){t.f={}.propertyIsEnumerable},191:function(e,t,n){e.exports={default:n(194),__esModule:!0}},192:function(e,t){t.f=Object.getOwnPropertySymbols},193:function(e,t,n){e.exports={default:n(195),__esModule:!0}},194:function(e,t,n){n(73),n(72),e.exports=n(198)},195:function(e,t,n){n(199);var r=n(5).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},196:function(e,t,n){var r=n(2),o=n(5),i=n(24),d=n(197),c=n(17).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:d.f(e)})}},197:function(e,t,n){t.f=n(4)},198:function(e,t,n){var r=n(6),o=n(78);e.exports=n(5).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},199:function(e,t,n){var r=n(16);r(r.S+r.F*!n(12),"Object",{defineProperty:n(17).f})},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(216),i=r(o),d=n(215),c=r(d),l="function"==typeof c.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof c.default&&e.constructor===c.default&&e!==c.default.prototype?"symbol":typeof e};t.default="function"==typeof c.default&&"symbol"===l(i.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof c.default&&e.constructor===c.default&&e!==c.default.prototype?"symbol":void 0===e?"undefined":l(e)}},201:function(e,t,n){var r=n(190),o=n(37),i=n(23),d=n(77),c=n(18),l=n(80),a=Object.getOwnPropertyDescriptor;t.f=n(12)?a:function(e,t){if(e=i(e),t=d(t,!0),l)try{return a(e,t)}catch(e){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},202:function(e,t,n){var r=n(82),o=n(40).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(191),i=r(o),d=n(70),c=r(d),l=n(69),a=r(l),s=n(189),u=r(s);({env:"sit",baseURL:"mams-rest",biz:"biz-m-rest",claimURL:"ems-claim",emsAdminURL:"ems-admin",emsPaymentUrl:"ems-payment",emsBaseDataURL:"ems-base-data",pscURL:"ems-process-service",browse:"http://myd.crc.com.cn/mams-rest/",emsAccountingUrl:"ems-accountant-job-pool",key:"h1k2#3s4f5d6%7d8s9@0s1f2",devtools:!0}).mock&&n(39);var p=function(){function e(t){(0,a.default)(this,e)}return(0,u.default)(e,[{key:"QueryValueSetByCode",value:function(e){return new c.default(function(e){$axios.get({env:"sit",baseURL:"mams-rest",biz:"biz-m-rest",claimURL:"ems-claim",emsAdminURL:"ems-admin",emsPaymentUrl:"ems-payment",emsBaseDataURL:"ems-base-data",pscURL:"ems-process-service",browse:"http://myd.crc.com.cn/mams-rest/",emsAccountingUrl:"ems-accountant-job-pool",key:"h1k2#3s4f5d6%7d8s9@0s1f2",devtools:!0}.baseURL+"/sys/valueset/item/list/VEHICLE").then(function(t){if("0"==t.data.statusCode){var n=[],r=!0,o=!1,d=void 0;try{for(var c,l=(0,i.default)(t.data.dataResult);!(r=(c=l.next()).done);r=!0){var a=c.value;n.push({label:a.vsiValue,value:a.vsiKey})}}catch(e){o=!0,d=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw d}}e(n)}else{var s={dataResult:[],extra:"",msg:t.data.msg||"服务异常，请联系管理员",statusCode:"-1"};e(s)}}).catch(function(t){var n={dataResult:[],extra:"",msg:t.response.data.message||"服务异常，请联系管理员",statusCode:"-1"};e(n)})})}},{key:"QueryValueSetByCodeAndParentKey",value:function(e){return new c.default(function(t){$axios.get({env:"sit",baseURL:"mams-rest",biz:"biz-m-rest",claimURL:"ems-claim",emsAdminURL:"ems-admin",emsPaymentUrl:"ems-payment",emsBaseDataURL:"ems-base-data",pscURL:"ems-process-service",browse:"http://myd.crc.com.cn/mams-rest/",emsAccountingUrl:"ems-accountant-job-pool",key:"h1k2#3s4f5d6%7d8s9@0s1f2",devtools:!0}.baseURL+"/sys/valueset/item/list/"+e.code+"/"+e.parentKey).then(function(e){if("-1"!=e.data.statusCode){var n=[],r=!0,o=!1,d=void 0;try{for(var c,l=(0,i.default)(e.data.dataResult);!(r=(c=l.next()).done);r=!0){var a=c.value;n.push({label:a.vsiValue,value:a.vsiKey})}}catch(e){o=!0,d=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw d}}t(n)}else{var s={dataResult:[],extra:"",msg:e.data.msg||"服务异常，请联系管理员",statusCode:"-1"};t(s)}}).catch(function(e){var n={dataResult:[],extra:"",msg:e.response.data.message||"服务异常，请联系管理员",statusCode:"-1"};t(n)})})}}]),e}();t.default=p},204:function(e,t,n){e.exports={default:n(218),__esModule:!0}},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(214),i=r(o),d=n(213),c=r(d),l=n(200),a=r(l);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,a.default)(t)));e.prototype=(0,c.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},206:function(e,t,n){"use strict";t.__esModule=!0;var r=n(200),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,o.default)(t))&&"function"!=typeof t?e:t}},213:function(e,t,n){e.exports={default:n(217),__esModule:!0}},214:function(e,t,n){e.exports={default:n(219),__esModule:!0}},215:function(e,t,n){e.exports={default:n(220),__esModule:!0}},216:function(e,t,n){e.exports={default:n(221),__esModule:!0}},217:function(e,t,n){n(228);var r=n(5).Object;e.exports=function(e,t){return r.create(e,t)}},218:function(e,t,n){n(229),e.exports=n(5).Object.getPrototypeOf},219:function(e,t,n){n(230),e.exports=n(5).Object.setPrototypeOf},220:function(e,t,n){n(231),n(84),n(232),n(233),e.exports=n(5).Symbol},221:function(e,t,n){n(72),n(73),e.exports=n(197).f("iterator")},222:function(e,t,n){var r=n(71),o=n(192),i=n(190);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var d,c=n(e),l=i.f,a=0;c.length>a;)l.call(e,d=c[a++])&&t.push(d);return t}},223:function(e,t,n){var r=n(19);e.exports=Array.isArray||function(e){return"Array"==r(e)}},224:function(e,t,n){var r=n(38)("meta"),o=n(13),i=n(18),d=n(17).f,c=0,l=Object.isExtensible||function(){return!0},a=!n(36)(function(){return l(Object.preventExtensions({}))}),s=function(e){d(e,r,{value:{i:"O"+ ++c,w:{}}})},u=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!l(e))return"F";if(!t)return"E";s(e)}return e[r].i},p=function(e,t){if(!i(e,r)){if(!l(e))return!0;if(!t)return!1;s(e)}return e[r].w},h=function(e){return a&&f.NEED&&l(e)&&!i(e,r)&&s(e),e},f=e.exports={KEY:r,NEED:!1,fastKey:u,getWeak:p,onFreeze:h}},225:function(e,t,n){var r=n(23),o=n(202).f,i={}.toString,d="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(e){return d.slice()}};e.exports.f=function(e){return d&&"[object Window]"==i.call(e)?c(e):o(r(e))}},226:function(e,t,n){var r=n(16),o=n(5),i=n(36);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],d={};d[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",d)}},227:function(e,t,n){var r=n(13),o=n(6),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n(20)(Function.call,n(201).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},228:function(e,t,n){var r=n(16);r(r.S,"Object",{create:n(76)})},229:function(e,t,n){var r=n(75),o=n(81);n(226)("getPrototypeOf",function(){return function(e){return o(r(e))}})},230:function(e,t,n){var r=n(16);r(r.S,"Object",{setPrototypeOf:n(227).set})},231:function(e,t,n){"use strict";var r=n(2),o=n(18),i=n(12),d=n(16),c=n(83),l=n(224).KEY,a=n(36),s=n(41),u=n(25),p=n(38),h=n(4),f=n(197),C=n(196),m=n(222),y=n(223),v=n(6),b=n(13),_=n(23),g=n(77),x=n(37),w=n(76),S=n(225),O=n(201),k=n(17),R=n(71),M=O.f,U=k.f,j=S.f,P=r.Symbol,L=r.JSON,E=L&&L.stringify,T=h("_hidden"),A=h("toPrimitive"),B={}.propertyIsEnumerable,I=s("symbol-registry"),D=s("symbols"),$=s("op-symbols"),N=Object.prototype,V="function"==typeof P,z=r.QObject,F=!z||!z.prototype||!z.prototype.findChild,W=i&&a(function(){return 7!=w(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=M(N,t);r&&delete N[t],U(e,t,n),r&&e!==N&&U(N,t,r)}:U,K=function(e){var t=D[e]=w(P.prototype);return t._k=e,t},q=V&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},H=function(e,t,n){return e===N&&H($,t,n),v(e),t=g(t,!0),v(n),o(D,t)?(n.enumerable?(o(e,T)&&e[T][t]&&(e[T][t]=!1),n=w(n,{enumerable:x(0,!1)})):(o(e,T)||U(e,T,x(1,{})),e[T][t]=!0),W(e,t,n)):U(e,t,n)},J=function(e,t){v(e);for(var n,r=m(t=_(t)),o=0,i=r.length;i>o;)H(e,n=r[o++],t[n]);return e},Q=function(e,t){return void 0===t?w(e):J(w(e),t)},Y=function(e){var t=B.call(this,e=g(e,!0));return!(this===N&&o(D,e)&&!o($,e))&&(!(t||!o(this,e)||!o(D,e)||o(this,T)&&this[T][e])||t)},G=function(e,t){if(e=_(e),t=g(t,!0),e!==N||!o(D,t)||o($,t)){var n=M(e,t);return!n||!o(D,t)||o(e,T)&&e[T][t]||(n.enumerable=!0),n}},X=function(e){for(var t,n=j(_(e)),r=[],i=0;n.length>i;)o(D,t=n[i++])||t==T||t==l||r.push(t);return r},Z=function(e){for(var t,n=e===N,r=j(n?$:_(e)),i=[],d=0;r.length>d;)!o(D,t=r[d++])||n&&!o(N,t)||i.push(D[t]);return i};V||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===N&&t.call($,n),o(this,T)&&o(this[T],e)&&(this[T][e]=!1),W(this,e,x(1,n))};return i&&F&&W(N,e,{configurable:!0,set:t}),K(e)},c(P.prototype,"toString",function(){return this._k}),O.f=G,k.f=H,n(202).f=S.f=X,n(190).f=Y,n(192).f=Z,i&&!n(24)&&c(N,"propertyIsEnumerable",Y,!0),f.f=function(e){return K(h(e))}),d(d.G+d.W+d.F*!V,{Symbol:P});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)h(ee[te++]);for(var ne=R(h.store),re=0;ne.length>re;)C(ne[re++]);d(d.S+d.F*!V,"Symbol",{for:function(e){return o(I,e+="")?I[e]:I[e]=P(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in I)if(I[t]===e)return t},useSetter:function(){F=!0},useSimple:function(){F=!1}}),d(d.S+d.F*!V,"Object",{create:Q,defineProperty:H,defineProperties:J,getOwnPropertyDescriptor:G,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),L&&d(d.S+d.F*(!V||a(function(){var e=P();return"[null]"!=E([e])||"{}"!=E({a:e})||"{}"!=E(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(b(t)||void 0!==e)&&!q(e))return y(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!q(t))return t}),r[1]=t,E.apply(L,r)}}),P.prototype[A]||n(8)(P.prototype,A,P.prototype.valueOf),u(P,"Symbol"),u(Math,"Math",!0),u(r.JSON,"JSON",!0)},232:function(e,t,n){n(196)("asyncIterator")},233:function(e,t,n){n(196)("observable")},250:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(251),i=r(o),d=n(252),c=r(d),l=new i.default;t.default={name:"BusinessTypeTree",props:{title:{type:String,default:"标题"},searchInputPlaceholder:{type:String,default:"请输入检索内容"},len:{type:[String,Number],default:99999},isShowCheckbox:{type:Boolean,default:!0},isMultiple:{type:Boolean,default:!0}},data:function(){return{server:l,isShowLoading:!0,treeModal:!1,selectedItem:null,curSearchVal:"",formSearch:{searchVal:""},treeData:[]}},created:function(){this.queryAllBusinessType(),this.$emit("SetTitle",this.title),this.$emit("SetPageActions",[{text:"确定",theme:"primary",icon:"add",handle:this.saveSelect},{text:"关闭",theme:"primary",icon:"close",handle:this.cancel}])},methods:{queryAllBusinessType:function(){this.treeHandle(c.default),this.treeData=c.default,this.isShowLoading=!1},checkChange:function(e){this.ismultiple,this.selectedItem=e,this.$emit("selectedItem",this.selectedItem)},treeHandle:function(e){if(!(e.length<=0))for(var t=0;t<e.length;t++){var n=e[t];n||(n={}),n["show-checkbox"]=!1,n.children&&n.children.length>0?(n.expand=!1,this.treeHandle(n.children)):(n.children=[],delete n.children)}},openModal:function(){this.treeModal=!0},cancel:function(){this.$emit("Close")},orgSearch:function(){var e=this;this.server.queryBusinessCategorys({categoryName:this.formSearch.searchVal}).then(function(t){if(t&&"-1"==t.statusCode)return e.$Message.error({content:"查询失败！",duration:3}),t;var n=t;e.treeHandle(n),e.treeData=n,e.isShowLoading=!1})},saveSelect:function(){var e=this.selectedItem||[];if(this.len<e.length)return void this.$Message.error("最多选择"+this.len+"项");this.$emit("Close",this.categorysRecombine(e))},categorysRecombine:function(e){var t={names:[],codes:[],cates:[]};return function e(n){n.map(function(n){n.children&&n.children.length>0?e(n.children):-1===t.codes.indexOf(n.code)&&(t.names.push(n.title),t.codes.push(n.code),t.cates.push({name:n.title,code:n.code}))})}(e),t}}}},251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(70),i=r(o),d=n(204),c=r(d),l=n(69),a=r(l),s=n(189),u=r(s),p=n(206),h=r(p),f=n(205),C=r(f),m=n(203),y=r(m),v=function(e){function t(e){return(0,a.default)(this,t),(0,h.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e))}return(0,C.default)(t,e),(0,u.default)(t,[{key:"queryAllBusinessType",value:function(){return new i.default(function(e){$axios.post({env:"sit",baseURL:"mams-rest",biz:"biz-m-rest",claimURL:"ems-claim",emsAdminURL:"ems-admin",emsPaymentUrl:"ems-payment",emsBaseDataURL:"ems-base-data",pscURL:"ems-process-service",browse:"http://myd.crc.com.cn/mams-rest/",emsAccountingUrl:"ems-accountant-job-pool",key:"h1k2#3s4f5d6%7d8s9@0s1f2",devtools:!0}.emsBaseDataURL+"/category/buildCategoryTree",{}).then(function(t){e(t.data)}).catch(function(t){e({dataResult:[],extra:"",msg:"服务异常，请联系管理员",statusCode:"-1"})})})}},{key:"queryBusinessCategorys",value:function(e){return new i.default(function(t){$axios.post({env:"sit",baseURL:"mams-rest",biz:"biz-m-rest",claimURL:"ems-claim",emsAdminURL:"ems-admin",emsPaymentUrl:"ems-payment",emsBaseDataURL:"ems-base-data",pscURL:"ems-process-service",browse:"http://myd.crc.com.cn/mams-rest/",emsAccountingUrl:"ems-accountant-job-pool",key:"h1k2#3s4f5d6%7d8s9@0s1f2",devtools:!0}.emsBaseDataURL+"/category/buildCategoryTreeByCondition/",e).then(function(e){t(e.data)}).catch(function(e){t({dataResult:[],extra:"",msg:"服务异常，请联系管理员",statusCode:"-1"})})})}}]),t}(y.default);t.default=v},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{code:"10",parentCode:null,title:"事前申请111",children:[]},{code:"80",parentCode:null,title:"付款申请",children:[{code:"8015",parentCode:"80",title:"借/还款",children:[{code:"8015002",parentCode:"8015",title:"偿还内部借款",children:[]},{code:"8015001",parentCode:"8015",title:"发放内部借款",children:[]},{code:"8015003",parentCode:"8015",title:"支付内部借款利息",children:[]},{code:"8015004",parentCode:"8015",title:"支付外部借款利息",children:[]}]},{code:"8016",parentCode:"80",title:"内部往来",children:[{code:"8016002",parentCode:"8016",title:"内部代垫费用",children:[]},{code:"8016001",parentCode:"8016",title:"资金归集-下拨",children:[]}]},{code:"8013",parentCode:"80",title:"可供出售金融资产",children:[{code:"8013002",parentCode:"8013",title:"发放股利",children:[]},{code:"8013001",parentCode:"8013",title:"购买",children:[]}]},{code:"8012",parentCode:"80",title:"投资",children:[{code:"8012002",parentCode:"8012",title:"支付股息",children:[]},{code:"8012001",parentCode:"8012",title:"购买",children:[]}]},{code:"8011",parentCode:"80",title:"税费支付",children:[{code:"8011001",parentCode:"8011",title:"缴纳企业所得税",children:[]},{code:"8011013",parentCode:"8011",title:"缴纳其他税费",children:[]},{code:"8011011",parentCode:"8011",title:"缴纳印花税",children:[]},{code:"8011008",parentCode:"8011",title:"缴纳土地使用税",children:[]},{code:"8011006",parentCode:"8011",title:"缴纳土地增值税",children:[]},{code:"8011005",parentCode:"8011",title:"缴纳地方教育费附加",children:[]},{code:"8011003",parentCode:"8011",title:"缴纳城建税",children:[]},{code:"8011002",parentCode:"8011",title:"缴纳增值税",children:[]},{code:"8011007",parentCode:"8011",title:"缴纳房产税",children:[]},{code:"8011004",parentCode:"8011",title:"缴纳教育费附加",children:[]},{code:"8011010",parentCode:"8011",title:"缴纳消费税",children:[]},{code:"8011012",parentCode:"8011",title:"缴纳资源税",children:[]},{code:"8011009",parentCode:"8011",title:"缴纳车船税",children:[]}]},{code:"8010",parentCode:"80",title:"经营性付款申请",children:[{code:"8010001",parentCode:"8010",title:"经营性应付付款申请",children:[]},{code:"8010002",parentCode:"8010",title:"经营性预付款申请",children:[]}]},{code:"8014",parentCode:"80",title:"营业外收支",children:[{code:"8014004",parentCode:"8014",title:"其他营业外支出",children:[]},{code:"8014003",parentCode:"8014",title:"奖励支出",children:[]},{code:"8014001",parentCode:"8014",title:"捐赠支出",children:[]},{code:"8014002",parentCode:"8014",title:"罚赔款支出",children:[]}]},{code:"8017",parentCode:"80",title:"财务费用",children:[{code:"8017004",parentCode:"8017",title:"支付现金折扣",children:[]},{code:"8017003",parentCode:"8017",title:"支付资金池存款利息",children:[]},{code:"8017001",parentCode:"8017",title:"购汇",children:[]},{code:"8017002",parentCode:"8017",title:"银行手续费",children:[]}]},{code:"8020",parentCode:"80",title:"非经营性付款申请",children:[{code:"8020001",parentCode:"8020",title:"非经营性应付付款申请",children:[]},{code:"8020002",parentCode:"8020",title:"非经营性预付款申请",children:[]}]}]},{code:"30",parentCode:null,title:"供应商费用报账",children:[{code:"3030",parentCode:"30",title:"供应商费用预付款",children:[{code:"3030001",parentCode:"3030",title:"供应商费用预付款",children:[]}]},{code:"3090",parentCode:"30",title:"其他费用",children:[{code:"3090008",parentCode:"3090",title:"专业机构费用-审计费用",children:[]},{code:"3090010",parentCode:"3090",title:"专业机构费用-社团费用",children:[]},{code:"3090009",parentCode:"3090",title:"专业机构费用-非审计费用",children:[]},{code:"3090007",parentCode:"3090",title:"代理费",children:[]},{code:"3090006",parentCode:"3090",title:"商检费",children:[]},{code:"3090004",parentCode:"3090",title:"报关费",children:[]},{code:"3090005",parentCode:"3090",title:"招标费",children:[]},{code:"3090003",parentCode:"3090",title:"污水处理费",children:[]},{code:"3090002",parentCode:"3090",title:"试验检验费",children:[]}]},{code:"3010",parentCode:"30",title:"员工成本",children:[{code:"3010005",parentCode:"3010",title:"劳动保护费",children:[]},{code:"3010004",parentCode:"3010",title:"培训费",children:[]},{code:"3010002",parentCode:"3010",title:"社保公积金",children:[]},{code:"3010001",parentCode:"3010",title:"福利费",children:[]},{code:"3010003",parentCode:"3010",title:"职工教育经费",children:[]}]},{code:"3020",parentCode:"30",title:"日常费用",children:[{code:"3020003",parentCode:"3020",title:"业务招待费",children:[]},{code:"3020002",parentCode:"3020",title:"交通费",children:[]},{code:"3020014",parentCode:"3020",title:"仓储费",children:[]},{code:"3020007",parentCode:"3020",title:"会议费",children:[]},{code:"3020020",parentCode:"3020",title:"促销费",children:[]},{code:"3020017",parentCode:"3020",title:"保险费",children:[]},{code:"3020099",parentCode:"3020",title:"其他日常费用",children:[]},{code:"3020004",parentCode:"3020",title:"办公行政费",children:[]},{code:"3020001",parentCode:"3020",title:"差旅费",children:[]},{code:"3020021",parentCode:"3020",title:"市场推广费",children:[]},{code:"3020022",parentCode:"3020",title:"广告宣传费",children:[]},{code:"3020019",parentCode:"3020",title:"样品费",children:[]},{code:"3020009",parentCode:"3020",title:"租赁费用",children:[]},{code:"3020015",parentCode:"3020",title:"维修及保养费",children:[]},{code:"3020018",parentCode:"3020",title:"绿化费",children:[]},{code:"3020005",parentCode:"3020",title:"耗用品费用",children:[]},{code:"3020008",parentCode:"3020",title:"能源费",children:[]},{code:"3020016",parentCode:"3020",title:"行政收费",children:[]},{code:"3020013",parentCode:"3020",title:"装卸驳运费",children:[]},{code:"3020011",parentCode:"3020",title:"车辆费用",children:[]},{code:"3020012",parentCode:"3020",title:"软件服务费",children:[]},{code:"3020010",parentCode:"3020",title:"运输费用",children:[]},{code:"3020006",parentCode:"3020",title:"通讯费",children:[]}]}]},{code:"20",parentCode:null,title:"员工费用报账",children:[{code:"2030",parentCode:"20",title:"个人费用",children:[{code:"2030002",parentCode:"2030",title:"交通费",children:[]},{code:"2030001",parentCode:"2030",title:"差旅费",children:[]},{code:"2030003",parentCode:"2030",title:"移动通讯费",children:[]}]},{code:"2090",parentCode:"20",title:"其他费用",children:[{code:"2090002",parentCode:"2090",title:"招标费",children:[]},{code:"2090001",parentCode:"2090",title:"试验检验费",children:[]}]},{code:"2010",parentCode:"20",title:"员工借/还款",children:[{code:"2010003",parentCode:"2010",title:"员工其他借款",children:[]},{code:"2010002",parentCode:"2010",title:"员工差旅借款",children:[]},{code:"2010004",parentCode:"2010",title:"员工现金还款",children:[]},{code:"2010005",parentCode:"2010",title:"员工转账还款",children:[]}]},{code:"2020",parentCode:"20",title:"员工成本",children:[{code:"2020005",parentCode:"2020",title:"劳动保护费",children:[]},{code:"2020004",parentCode:"2020",title:"培训费",children:[]},{code:"2020003",parentCode:"2020",title:"津贴或补贴",children:[]},{code:"2020001",parentCode:"2020",title:"福利费",children:[]},{code:"2020002",parentCode:"2020",title:"职工教育经费",children:[]}]},{code:"2040",parentCode:"20",title:"日常费用",children:[{code:"2040001",parentCode:"2040",title:"业务招待费",children:[]},{code:"2040004",parentCode:"2040",title:"会议费",children:[]},{code:"2040099",parentCode:"2040",title:"其他日常费用",children:[]},{code:"2040002",parentCode:"2040",title:"办公行政费",children:[]},{code:"2040012",parentCode:"2040",title:"市场推广费",children:[]},{code:"2040013",parentCode:"2040",title:"广告宣传费",children:[]},{code:"2040006",parentCode:"2040",title:"租赁费用",children:[]},{code:"2040011",parentCode:"2040",title:"绿化费",children:[]},{code:"2040003",parentCode:"2040",title:"耗用品费用",children:[]},{code:"2040005",parentCode:"2040",title:"能源费",children:[]},{code:"2040010",parentCode:"2040",title:"行政收费",children:[]},{code:"2040009",parentCode:"2040",title:"装卸驳运费",children:[]},{code:"2040008",parentCode:"2040",title:"车辆费用",children:[]},{code:"2040007",parentCode:"2040",title:"运输费用",children:[]}]}]},{code:"70",parentCode:null,title:"总账及其他报账",children:[{code:"7010",parentCode:"70",title:"一般费用",children:[{code:"7010005",parentCode:"7010",title:"公积金及其他计提",children:[]},{code:"7010002",parentCode:"7010",title:"应付职工薪酬计提",children:[]},{code:"7010004",parentCode:"7010",title:"社保计提",children:[]},{code:"7010003",parentCode:"7010",title:"福利费计提",children:[]},{code:"7010001",parentCode:"7010",title:"银行托收费用",children:[]}]},{code:"7012",parentCode:"70",title:"保证金押金",children:[{code:"7012001",parentCode:"7012",title:"收到保证金及押金",children:[]}]},{code:"7017",parentCode:"70",title:"借/还款",children:[{code:"7017005",parentCode:"7017",title:"偿还短期借款-银行自动扣款",children:[]},{code:"7017006",parentCode:"7017",title:"偿还长期借款-银行自动扣款",children:[]},{code:"7017013",parentCode:"7017",title:"内部借款收息",children:[]},{code:"7017009",parentCode:"7017",title:"内部借款计息-债务方",children:[]},{code:"7017012",parentCode:"7017",title:"内部借款计息-债权方",children:[]},{code:"7017007",parentCode:"7017",title:"取得内部借款",children:[]},{code:"7017003",parentCode:"7017",title:"外部借款计息",children:[]},{code:"7017011",parentCode:"7017",title:"收回内部借款",children:[]},{code:"7017001",parentCode:"7017",title:"短期借款",children:[]},{code:"7017002",parentCode:"7017",title:"长期借款",children:[]}]},{code:"7020",parentCode:"70",title:"其他",children:[{code:"7020005",parentCode:"7020",title:"其他调整",children:[]},{code:"7020003",parentCode:"7020",title:"内部费用分摊",children:[]},{code:"7020004",parentCode:"7020",title:"内部银行账户划转",children:[]},{code:"7020002",parentCode:"7020",title:"存货盘点 盘亏",children:[]},{code:"7020001",parentCode:"7020",title:"存货盘点 盘盈",children:[]}]},{code:"7018",parentCode:"70",title:"内部往来",children:[{code:"7018003",parentCode:"7018",title:"内部往来挂账",children:[]},{code:"7018002",parentCode:"7018",title:"计提资金归集利息支出",children:[]},{code:"7018001",parentCode:"7018",title:"计提资金归集利息收入",children:[]}]},{code:"7015",parentCode:"70",title:"可供出售金融资产",children:[{code:"7015005",parentCode:"7015",title:"公允价值调整",children:[]},{code:"7015006",parentCode:"7015",title:"出售",children:[]},{code:"7015002",parentCode:"7015",title:"宣告分配股利",children:[]},{code:"7015003",parentCode:"7015",title:"收到股利",children:[]},{code:"7015004",parentCode:"7015",title:"计提股利所得税",children:[]}]},{code:"7013",parentCode:"70",title:"税费计提",children:[{code:"7013016",parentCode:"7013",title:"其他",children:[]},{code:"7013015",parentCode:"7013",title:"增值税进项税转出",children:[]},{code:"7013001",parentCode:"7013",title:"计提企业所得税",children:[]},{code:"7013011",parentCode:"7013",title:"计提印花税",children:[]},{code:"7013008",parentCode:"7013",title:"计提土地使用税",children:[]},{code:"7013006",parentCode:"7013",title:"计提土地增值税",children:[]},{code:"7013005",parentCode:"7013",title:"计提地方教育费附加",children:[]},{code:"7013003",parentCode:"7013",title:"计提城建税",children:[]},{code:"7013002",parentCode:"7013",title:"计提增值税",children:[]},{code:"7013007",parentCode:"7013",title:"计提房产税",children:[]},{code:"7013004",parentCode:"7013",title:"计提教育费附加",children:[]},{code:"7013010",parentCode:"7013",title:"计提消费税",children:[]},{code:"7013012",parentCode:"7013",title:"计提资源税",children:[]},{code:"7013009",parentCode:"7013",title:"计提车船税",children:[]}]},{code:"7016",parentCode:"70",title:"营业外收/支",children:[{code:"7016008",parentCode:"7016",title:"保险赔款收入",children:[]},{code:"7016009",parentCode:"7016",title:"其他营业外收入",children:[]},{code:"7016006",parentCode:"7016",title:"奖励收入",children:[]},{code:"7016005",parentCode:"7016",title:"手续费返还",children:[]},{code:"7016007",parentCode:"7016",title:"搬迁补偿",children:[]},{code:"7016004",parentCode:"7016",title:"滞纳金收入",children:[]},{code:"7016001",parentCode:"7016",title:"经营性政府补助",children:[]},{code:"7016002",parentCode:"7016",title:"资本性政府补助",children:[]},{code:"7016003",parentCode:"7016",title:"违约赔偿收入",children:[]}]},{code:"7019",parentCode:"70",title:"财务费用",children:[{code:"7019002",parentCode:"7019",title:"内部借款利息收入",children:[]},{code:"7019004",parentCode:"7019",title:"结汇",children:[]},{code:"7019001",parentCode:"7019",title:"银行存款利息收入",children:[]},{code:"7019005",parentCode:"7019",title:"银行手续费",children:[]}]},{code:"7011",parentCode:"70",title:"费用计提及摊销",children:[{code:"7011001",parentCode:"7011",title:"坏账准备",children:[]},{code:"7011004",parentCode:"7011",title:"存货跌价准备",children:[]},{code:"7011005",parentCode:"7011",title:"存货跌价准备转回",children:[]},{code:"7011003",parentCode:"7011",title:"收回坏账",children:[]},{code:"7011002",parentCode:"7011",title:"确认坏账",children:[]}]},{code:"7014",parentCode:"70",title:"长期股权投资",children:[{code:"7014005",parentCode:"7014",title:"出售",children:[]},{code:"7014002",parentCode:"7014",title:"宣告派息",children:[]},{code:"7014003",parentCode:"7014",title:"收到股息",children:[]},{code:"7014004",parentCode:"7014",title:"计提减值",children:[]}]}]},{code:"60",parentCode:null,title:"资产报账",children:[{code:"6020",parentCode:"60",title:"在建工程转固",children:[{code:"6020001",parentCode:"6020",title:"在建工程支出",children:[]},{code:"6020003",parentCode:"6020",title:"在建工程转固",children:[]},{code:"6020002",parentCode:"6020",title:"工程待摊支出",children:[]}]},{code:"6040",parentCode:"60",title:"资产其他业务",children:[{code:"6040004",parentCode:"6040",title:"资产减值",children:[]},{code:"6040003",parentCode:"6040",title:"资产出售/报废/盘亏",children:[]},{code:"6040002",parentCode:"6040",title:"资产改良",children:[]},{code:"6040001",parentCode:"6040",title:"资产调拨",children:[]}]},{code:"6030",parentCode:"60",title:"资产其他新增",children:[{code:"6030001",parentCode:"6030",title:"固定资产盘盈",children:[]},{code:"6030002",parentCode:"6030",title:"无形资产盘盈",children:[]},{code:"6030003",parentCode:"6030",title:"生物资产盘盈",children:[]}]},{code:"6050",parentCode:"60",title:"资产盘点",children:[{code:"6050001",parentCode:"6050",title:"资产盘点",children:[]}]},{code:"6010",parentCode:"60",title:"资产采购新增",children:[{code:"6010001",parentCode:"6010",title:"固定资产采购",children:[]},{code:"6010002",parentCode:"6010",title:"无形资产采购",children:[]},{code:"6010003",parentCode:"6010",title:"生物资产采购",children:[]},{code:"6010004",parentCode:"6010",title:"资产其他新增",children:[]}]}]}]},253:function(e,t){},254:function(e,t,n){n(253);var r=n(15)(n(250),n(255),"data-v-0349922e",null);r.options.__file="E:\\vue-components-web\\src\\components\\businessTypeTree\\BusinessTypeTree.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),r.options.functional,e.exports=r.exports},255:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.orgSearch(t):null}}},[n("Input",{attrs:{placeholder:e.searchInputPlaceholder},model:{value:e.formSearch.searchVal,callback:function(t){e.$set(e.formSearch,"searchVal",t)},expression:"formSearch.searchVal"}},[n("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:function(t){e.orgSearch()}},slot:"append"})],1),e._v(" "),n("Tree",{ref:"treeData",attrs:{data:e.treeData,"show-checkbox":e.isShowCheckbox,multiple:e.isMultiple},on:{"on-check-change":e.checkChange,"on-select-change":e.checkChange}}),e._v(" "),n("Spin",{directives:[{name:"show",rawName:"v-show",value:e.isShowLoading,expression:"isShowLoading"}],attrs:{fix:""}},[n("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"18"}}),e._v(" "),n("div",[e._v("正在加载...")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(74),i=(r(o),n(254)),d=r(i);t.default={data:function(){return{propsColumns:[{title:"属性",key:"prop",width:120},{title:"说明",key:"description",minWidth:250},{title:"类型",key:"type",minWidth:80},{title:"默认值",key:"defaultVal",minWidth:80}],propsData:[{prop:"datas",description:'DataSelect 组件数据源。注意,格式必须为类似 [{label: "转账", value: "1"}] 格式的数组',type:"Array",defaultVal:"-"}],eventsColumns:[{title:"事件名",key:"eventName",width:120},{title:"说明",key:"description",minWidth:250},{title:"返回值",key:"returnVal",minWidth:180}],eventsData:[{eventName:"",description:"",returnVal:""}]}},components:{BusinessTypeTree:d.default},methods:{selectedItem:function(e){}}}},299:function(e,t){},350:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("BusinessTypeTree组件")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("业务大类(费用类别)树组件")]),e._v(" "),e._m(1),e._v(" "),n("Row",{staticClass:"example"},[n("Col",{staticClass:"example-demo",attrs:{span:"24"}},[n("div",{staticClass:"example-case"},[n("BusinessTypeTree",{attrs:{isShowCheckbox:!1,isMultiple:!1},on:{selectedItem:e.selectedItem}})],1),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n        基础用法\n        "),n("a",{attrs:{href:"#基础用法"}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[n("p",[e._v("基本用法。可以使用 code 传入值集code进行查询。")])])])],1),e._v(" "),n("div",{staticClass:"api"},[e._m(2),e._v(" "),e._m(3),e._v(" "),n("Table",{attrs:{columns:e.propsColumns,data:e.propsData}})],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[n("h2",{attrs:{id:"概述"}},[e._v("概述")]),e._v(" "),n("a",{attrs:{href:"#概述"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[n("h2",{attrs:{id:"代码示例"}},[e._v("代码示例")]),e._v(" "),n("a",{attrs:{href:"#代码示例"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[n("h2",{attrs:{id:"API"}},[e._v("API")]),e._v(" "),n("a",{attrs:{href:"#API"}},[e._v("#")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[n("h3",{attrs:{id:"props"}},[e._v("props")]),e._v(" "),n("a",{attrs:{href:"#props"}},[e._v("#")])])}]},e.exports.render._withStripped=!0}});