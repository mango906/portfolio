webpackJsonp([0],{"+lGx":function(t,e){},"/4Y2":function(t,e){},"21aS":function(t,e){},D7Ct:function(t,e){},E9v7:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),i=o("NYxO"),a={name:"portfolio-contacts",computed:Object(i.b)(["snsContacts"])},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"PortfolioContacts"},[o("li",[o("a",{staticClass:"icon-github",attrs:{href:t.snsContacts.githubAddress,target:"_blank"}},[o("span",{staticClass:"label"},[t._v("Github")])])]),t._v(" "),o("li",[o("a",{staticClass:"icon-facebook",attrs:{href:t.snsContacts.facebookAddress,target:"_blank"}},[o("span",{staticClass:"label"},[t._v("Facebook")])])]),t._v(" "),o("li",[o("a",{staticClass:"icon-codepen",attrs:{href:t.snsContacts.codepenAddress,target:"_blank"}},[o("span",{staticClass:"label"},[t._v("Codepen")])])]),t._v(" "),o("li",[o("a",{staticClass:"icon-mail",attrs:{href:"mailto: "+t.snsContacts.mailAddress,target:"_blank"}},[o("span",{staticClass:"label"},[t._v("Email")])])])])},staticRenderFns:[]},r=o("VU/8")(a,s,!1,function(t){o("ZMtX")},"data-v-a05df038",null).exports,l={name:"PortfolioAvatar",computed:Object(i.b)(["avatarImgUrl"])},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"PortfolioAvatar"},[e("img",{attrs:{src:this.avatarImgUrl,alt:"프로필 이미지"}})])},staticRenderFns:[]},u={name:"PortfolioMenu",methods:{navigate:function(t,e){"router"===e?this.$router.push({name:t}):"link"===e&&window.open(t,"_blank")}}},h={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"PortfolioMenu"},[o("li",{on:{click:function(e){t.navigate("PortfolioProjects","router")}}},[t._v("Projects")]),t._v(" "),o("li",{on:{click:function(e){t.navigate("PortfolioProjects","router")}}},[t._v("Career")]),t._v(" "),o("li",{on:{click:function(e){t.navigate("https://daengdaenglee.github.io","link")}}},[t._v("Blog")])])},staticRenderFns:[]},d={name:"PortfolioHeader",components:{PortfolioContacts:r,PortfolioAvatar:o("VU/8")(l,c,!1,function(t){o("E9v7")},"data-v-7cd5c2b8",null).exports,PortfolioMenu:o("VU/8")(u,h,!1,function(t){o("dRf6")},"data-v-0902bfac",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"PortfolioHeader"},[e("portfolio-avatar"),this._v(" "),this._m(0,!1,!1),this._v(" "),e("portfolio-contacts"),this._v(" "),e("portfolio-menu")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n    Hi, I'm "),e("strong",[this._v("Kunho Lee")]),this._v("."),e("br"),this._v("\n    Are you looking for a "),e("strong",[this._v("web developer")]),this._v("? PICK ME!\n  ")])}]},m=o("VU/8")(d,f,!1,function(t){o("+lGx")},"data-v-5d6bc825",null).exports,g={name:"PortfolioFooter",computed:Object(i.b)(["footerInfo"])},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"PortfolioFooter"},[e("p",[this._v("\n    Coded by "),e("a",{attrs:{href:this.footerInfo.userUrl,target:"_blank"}},[this._v("KunhoLee")]),this._v("."),e("br"),this._v("\n    You can see the code from "),e("a",{attrs:{href:this.footerInfo.codeRepo,target:"_blank"}},[this._v("here")]),this._v("!\n  ")])])},staticRenderFns:[]},b=o("VU/8")(g,p,!1,function(t){o("/4Y2")},"data-v-ac3c4c8a",null).exports,v={name:"Portfolio",computed:Object(i.b)(["footerInfo"]),components:{PortfolioHeader:m,PortfolioFooter:b}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Portfolio"},[e("portfolio-header"),this._v(" "),e("router-view"),this._v(" "),e("portfolio-footer")],1)},staticRenderFns:[]},x={name:"app",components:{Portfolio:o("VU/8")(v,_,!1,function(t){o("D7Ct")},"data-v-06a0e367",null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("portfolio")],1)},staticRenderFns:[]},C=o("VU/8")(x,T,!1,function(t){o("hl+a")},null,null).exports,P=o("/ocq"),U={name:"PortfolioThumbnail",props:{linkUrl:{type:String,default:function(){return"#"}},imgUrl:{type:String,default:function(){return"#"}},altMessage:{type:String,default:function(){return"thumbnail image"}},headingText:{type:String,default:function(){return"Heading Text"}},descripttionText:{type:String,default:function(){return"Description Text"}}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"PortfolioThumbnail",attrs:{href:this.linkUrl,target:"_blank"}},[e("article",{staticClass:"ThumbnailArticle"},[e("img",{staticClass:"ThumbnailImage",attrs:{src:this.imgUrl,alt:this.altMessage}}),this._v(" "),e("h3",{staticClass:"ThumbnailHeading"},[this._v(this._s(this.headingText))]),this._v(" "),e("p",{staticClass:"ThumbnailDesc"},[this._v(this._s(this.descripttionText))])])])},staticRenderFns:[]},w=o("VU/8")(U,k,!1,function(t){o("RJBe")},"data-v-a3604c14",null).exports,j={name:"PortfolioThumbnailColumn",props:{thumbnailsInfo:{type:Array,default:function(){return[]}}},components:{PortfolioThumbnail:w}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"PortfolioThumbnailColumn"},this._l(this.thumbnailsInfo,function(t){return e("portfolio-thumbnail",{key:t.id,attrs:{linkUrl:t.linkUrl,imgUrl:t.imgUrl,altMessage:t.altMessage,headingText:t.headingText,descripttionText:t.descripttionText}})}))},staticRenderFns:[]},M=o("VU/8")(j,R,!1,function(t){o("21aS")},"data-v-6011035b",null).exports,A={name:"PortfolioThumbnails",computed:Object(i.b)(["thumbnailsInfo"]),components:{PortfolioThumbnailColumn:M}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"PortfolioThumbnails"},this._l(this.thumbnailsInfo,function(t,o){return e("portfolio-thumbnail-column",{key:o,staticClass:"PortfolioThumbnailColumn",attrs:{"thumbnails-info":t}})}))},staticRenderFns:[]},I={name:"PortfolioProjects",components:{PortfolioThumbnails:o("VU/8")(A,E,!1,function(t){o("PRYw")},"data-v-5b6069f5",null).exports}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"PortfolioProjects"},[e("h2",{staticClass:"headingText"},[this._v("Projcets")]),this._v(" "),e("portfolio-thumbnails")],1)},staticRenderFns:[]},V=o("VU/8")(I,F,!1,function(t){o("f42b")},"data-v-a56cd9cc",null).exports;n.a.use(P.a);var y=new P.a({mode:"history",routes:[{path:"/portfolio",name:"PortfolioProjects",component:V}]});n.a.use(i.a);var H=new i.a.Store({state:{snsContacts:{githubAddress:"https://github.com/daengdaengLee",facebookAddress:"https://www.facebook.com/gunho.lee.566",codepenAddress:"https://codepen.io/daengdaengLee/",mailAddress:"gunho1020@gmail.com"},avatarImgUrl:"https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg",thumbnailsInfo:[[{id:"thumb-1",linkUrl:"https://daengdaenglee.github.io/calculator_with_vuejs/",imgUrl:"https://user-images.githubusercontent.com/30795415/33804319-b2564816-dde5-11e7-8d4a-60fc12d68898.jpg",altMessage:"web calculator thumbnail image",headingText:"Web Calculator",descripttionText:"html, css, javascript, Vue.js, Vuex"},{id:"thumb-2",linkUrl:"https://daengdaenglee.github.io/pomodoro_clock_vuejs",imgUrl:"https://user-images.githubusercontent.com/30795415/33947021-b0bd5caa-e066-11e7-809d-659e1eca5fd3.jpg",altMessage:"pomodoro clock thumbnail image",headingText:"Pomodoro Clock",descripttionText:"html, css, javascript, Vue.js, Vuex"}],[{id:"thumb-3",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804325-d055f294-dde5-11e7-8ac1-2b2a7254aa4c.jpg",altMessage:"thumbnail image 3",headingText:"Heading Text 3",descripttionText:"Description Text 3"},{id:"thumb-4",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804328-ddb39bee-dde5-11e7-886e-ee4cee2564d8.jpg",altMessage:"thumbnail image 4",headingText:"Heading Text 4",descripttionText:"Description Text 4"},{id:"thumb-5",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804330-e4957054-dde5-11e7-99bc-a524087267b6.jpg",altMessage:"thumbnail image 5",headingText:"Heading Text 5",descripttionText:"Description Text 5"}],[{id:"thumb-6",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804333-ebb5953a-dde5-11e7-902b-4cdbde57e350.jpg",altMessage:"thumbnail image 6",headingText:"Heading Text 6",descripttionText:"Description Text 6"},{id:"thumb-7",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804336-f0544e7e-dde5-11e7-9aa5-43260da215cf.jpg",altMessage:"thumbnail image 7",headingText:"Heading Text 7",descripttionText:"Description Text 7"}]],footerInfo:{codeRepo:"https://github.com/daengdaengLee/portfolio",userUrl:"https://daengdaenglee.github.io/portfolio"}}});n.a.config.productionTip=!1,new n.a({store:H,el:"#app",router:y,template:"<App/>",components:{App:C}})},PRYw:function(t,e){},RJBe:function(t,e){},ZMtX:function(t,e){},dRf6:function(t,e){},f42b:function(t,e){},"hl+a":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f6bd9aa883b9d883fbfb.js.map