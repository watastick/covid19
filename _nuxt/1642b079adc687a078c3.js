(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{306:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("790a7675",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(306);n.n(r).a},309:function(t,e,n){(e=n(14)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},310:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(308),n(5)),l=n(39),c=n.n(l),d=n(299),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:d.a})},320:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2110844c",content,!0,{sourceMap:!1})},321:function(t,e,n){var content=n(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f0f4320",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";var r=n(320);n.n(r).a},361:function(t,e,n){(e=n(14)(!1)).push([t.i,".alert{padding:8px;color:red;font-size:12px}.alert a:link,.alert a:visited,.alert a:hover,.alert a:active{color:red}.WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},362:function(t,e,n){"use strict";var r=n(321);n.n(r).a},363:function(t,e,n){(e=n(14)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},367:function(t,e,n){var content=n(508);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7730958c",content,!0,{sourceMap:!1})},376:function(t,e,n){var content=n(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("321a15d8",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("52197b41",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";var r=n(1).a.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),o=(n(362),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},416:function(t,e,n){"use strict";var r=n(1),o=n(108),l=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.b)(t)},formattedDateForDisplay:function(t){return Object(o.a)(t,this.$i18n.locale)}}}),c=(n(360),n(5)),d=n(39),f=n.n(d),h=n(299),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n    "),t._m(0)],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"alert"},[this._v("※\n      "),e("a",{attrs:{href:"https://twitter.com/ngs_ken_iryou",target:"_blank"}},[this._v("長崎県医療政策課のTwitter情報を表示しています。")])])}],!1,null,null,null);e.a=component.exports;f()(component,{VIcon:h.a})},496:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/07","url":"https://www.metro.tokyo.lg.jp/tosei/governor/governor/kishakaiken/2020/04/07.html","text":"知事記者会見（令和2年4月7日）"},{"date":"2020/04/07","url":"https://www.fukushihoken.metro.tokyo.lg.jp/oshirase/corona_0401.html","text":"新型コロナウイルス感染症でこれから入院される方へ"}]}')},507:function(t,e,n){"use strict";var r=n(367),o=n.n(r);e.default=o.a},508:function(t,e,n){(e=n(14)(!1)).push([t.i,".note_1AtEN{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_1AtEN"},t.exports=e},566:function(t,e,n){"use strict";var r=n(376),o=n.n(r);e.default=o.a},567:function(t,e,n){(e=n(14)(!1)).push([t.i,".GraphDesc_o77VL{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.DataViewDesc_wvmsK{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_o77VL",DataViewDesc:"DataViewDesc_wvmsK"},t.exports=e},574:function(t,e,n){"use strict";var r=n(381);n.n(r).a},575:function(t,e,n){(e=n(14)(!1)).push([t.i,".MainPage .Header[data-v-3b16d7f3]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-3b16d7f3]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-3b16d7f3]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-3b16d7f3]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-3b16d7f3]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-3b16d7f3]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-3b16d7f3]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-3b16d7f3]{padding:4px 8px}}",""]),t.exports=e},576:function(t,e,n){"use strict";n(24),n(11);var r=n(3),o=(n(62),n(178),n(37),n(7),n(6),n(16),n(36),n(40),n(180),n(1)),l=n(133),c=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.z)(r)]=e(),n}),{})}var v=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:v}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=m("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(C)},D={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){var r=D[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},x,{justify:{type:String,default:null,validator:y}},_,{alignContent:{type:String,default:null,validator:w}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var d in n)c+=String(n[d]);var f=$.get(c);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(c,f)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},633:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(310),l=n(416),c=n(415),d=n(107),f=n(496),h=n(364),m=n(311),v=n(414),x={components:{DataView:m.a,ConfirmedCasesDetailsTable:v.a},data:function(){var t=Object(h.a)(d.main_summary),data={Data:d,confirmedCases:t};return data}},y=n(507),_=n(5),w=n(39),C=n.n(w),k=n(628);var component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.Data.patients.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{class:t.$style.note},[t._v("\n        "+t._s(t.$t("（注）チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n      ")])]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1)],1)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null),D=component.exports;C()(component,{VCol:k.a});var j=n(438),$=n(322),S={components:{TimeBarChart:n(327).a},data:function(){var t=Object($.a)(d.patients_summary.data),data={Data:d,patientsGraph:t};return data}},O=Object(_.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068"}})],1)}),[],!1,null,null,null),I=O.exports;C()(O,{VCol:k.a});n(50),n(11),n(7);var N=n(374),T={components:{DataTable:n(413).a},data:function(){var t=Object($.a)(d.patients_summary.data),e=Object(N.a)(d.patients.data),n={lText:t[t.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:t[t.length-1].label}),unit:this.$t("人")},r=!0,o=!1,l=void 0;try{for(var c,f=e.headers[Symbol.iterator]();!(r=(c=f.next()).done);r=!0){var header=c.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){o=!0,l=t}finally{try{r||null==f.return||f.return()}finally{if(o)throw l}}var h=!0,m=!1,v=void 0;try{for(var x,y=e.datasets[Symbol.iterator]();!(h=(x=y.next()).done);h=!0){var _=x.value;if(_["居住地"]=this.getTranslatedWording(_["居住地"]),_["性別"]=this.getTranslatedWording(_["性別"]),_["退院"]=this.getTranslatedWording(_["退院"]),"10歳未満"===_["年代"])_["年代"]=this.$t("10歳未満");else if("不明"===_["年代"])_["年代"]=this.$t("不明");else{var w=_["年代"].substring(0,2);_["年代"]=this.$t("{age}代",{age:w})}}}catch(t){m=!0,v=t}finally{try{h||null==y.return||y.return()}finally{if(m)throw v}}var data={Data:d,patientsTable:e,sumInfoOfPatients:n};return data},methods:{getTranslatedWording:function(t){return"-"===t||"‐"===t||null==t?t:this.$t(t)}}},W=Object(_.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Data.patients.date,info:this.sumInfoOfPatients,url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068",source:this.$t("オープンデータを入手")}})],1)}),[],!1,null,null,null),L=W.exports;C()(W,{VCol:k.a});n(31);var A=n(3),z=n(132),P=n(333),M=n(329),E=n(326),V={created:function(){this.canvas=!0},components:{DataView:m.a,DataSelector:P.a,DataViewBasicInfoPanel:M.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=Object(E.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(z.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(z.a)(t.items.map((function(e,n){return Object(A.a)({},n,t.displayData.datasets[n].data[i])})))))}))},options:function(){var t=this,e=this.unit,n=this.eachArraySum(this.chartData),data=this.chartData,r=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(r),l={tooltips:{displayColors:!1,callbacks:{label:function(l){var c,d;return"transition"===t.dataKind?(c=n[l.index].toLocaleString(),d=data[l.datasetIndex][l.index].toLocaleString()):(c=o[l.index].toLocaleString(),d=r[l.datasetIndex][l.index].toLocaleString()),"".concat(t.dataLabels[l.datasetIndex],": ").concat(d," ").concat(e," (").concat(t.$t("合計"),": ").concat(c," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(l,{animation:{duration:0}}),l}},methods:{cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},B=r.a.extend(V),G=n(566),K=n(631);var H=Object(_.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("li",[t._v("\n        "+t._s(t.$t("（注）医療機関が保険適用で行った検査は含まれていない"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("bar",{ref:"barChart",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),n("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=G.default.locals||G.default}),null,null),R=H.exports;C()(H,{VDataTable:K.a});var U={components:{TimeStackedBarChart:R},data:function(){var t=[d.inspections_summary.data["都内"],d.inspections_summary.data["その他"]],e=[this.$t("都内発生（※1）"),this.$t("その他（※2）")],n=d.inspections_summary.labels,r=[this.$t("都内"),this.$t("その他.graph")],data={Data:d,inspectionsGraph:t,inspectionsItems:e,inspectionsLabels:n,inspectionsDataLabels:r};return data}},F=Object(_.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections_summary.date,items:t.inspectionsItems,labels:t.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.inspectionsDataLabels},scopedSlots:t._u(["ja-basic"!==t.$i18n.locale?{key:"additionalNotes",fn:function(){return[t._v("\n      "+t._s(t.$t("※1: 疑い例・接触者調査"))+"\n      "),n("br"),t._v("\n      "+t._s(t.$t("※2: チャーター便・クルーズ船"))+"\n    ")]},proxy:!0}:null],null,!0)})],1)}),[],!1,null,null,null),J=F.exports;C()(F,{VCol:k.a});var Q=n(442),X=n(441),Y=n(440),Z=n(437),tt=n(439),at=n(108),et=r.a.extend({components:{PageHeader:o.a,WhatsNew:l.a,StaticInfo:c.a,ConfirmedCasesDetailsCard:D,TestedCasesDetailsCard:j.a,ConfirmedCasesNumberCard:I,ConfirmedCasesAttributesCard:L,TestedNumberCard:J,InspectionPersonsNumberCard:Q.a,TelephoneAdvisoryReportsNumberCard:X.a,ConsultationDeskReportsNumberCard:Y.a,MetroCard:Z.a,AgencyCard:tt.a},data:function(){var data={Data:d,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("都内の最新感染動向")},newsItems:f.newsItems};return data},computed:{updatedAt:function(){return Object(at.d)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("都内の最新感染動向")}}}),nt=(n(574),n(434)),it=n(576),st=Object(_.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("tested-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card"),t._v(" "),n("metro-card"),t._v(" "),n("agency-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"3b16d7f3",null);e.default=st.exports;C()(st,{VDivider:nt.a,VRow:it.a})}}]);