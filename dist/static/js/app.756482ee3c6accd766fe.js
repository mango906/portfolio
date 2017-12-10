webpackJsonp([0],{"+a7+":function(t,e){},"/6I+":function(t,e){},"21aS":function(t,e){},"9YUs":function(t,e){},G2OV:function(t,e){},J01t:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("NYxO"),o={name:"portfolio-contacts",props:{githubAddress:{type:String,default:function(){return"#"}},facebookAddress:{type:String,default:function(){return"#"}},codepenAddress:{type:String,default:function(){return"#"}},mailAddress:{type:String,default:function(){return"#"}}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"PortfolioContacts"},[n("li",[n("a",{staticClass:"icon-github",attrs:{href:t.githubAddress,target:"_blank"}},[n("span",{staticClass:"label"},[t._v("Github")])])]),t._v(" "),n("li",[n("a",{staticClass:"icon-facebook",attrs:{href:t.facebookAddress,target:"_blank"}},[n("span",{staticClass:"label"},[t._v("Facebook")])])]),t._v(" "),n("li",[n("a",{staticClass:"icon-codepen",attrs:{href:t.codepenAddress,target:"_blank"}},[n("span",{staticClass:"label"},[t._v("Codepen")])])]),t._v(" "),n("li",[n("a",{staticClass:"icon-mail",attrs:{href:"mailto: "+t.mailAddress,target:"_blank"}},[n("span",{staticClass:"label"},[t._v("Email")])])])])},staticRenderFns:[]},r=n("VU/8")(o,a,!1,function(t){n("zIkx")},"data-v-2ba82e46",null).exports,l={name:"PortfolioAvatar",props:{imgUrl:{type:String,default:function(){return"#"}}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"PortfolioAvatar"},[e("img",{attrs:{src:this.imgUrl,alt:"프로필 이미지"}})])},staticRenderFns:[]},u=n("VU/8")(l,c,!1,function(t){n("9YUs")},"data-v-2f619e6d",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"PortfolioMenu"},[n("li",{on:{click:function(e){t.navigate("PortfolioProjects")}}},[t._v("Projects")]),t._v(" "),n("li",{on:{click:function(e){t.navigate("PortfolioProjects")}}},[t._v("Career")]),t._v(" "),n("li",{on:{click:function(e){t.navigate("PortfolioProjects")}}},[t._v("Blog")])])},staticRenderFns:[]},h=n("VU/8")({name:"PortfolioMenu",methods:{navigate:function(t){var e={name:t};this.$router.push(e)}}},d,!1,function(t){n("/6I+")},"data-v-37ed5ce4",null).exports,f={name:"PortfolioHeader",computed:Object(s.b)(["snsContacts","avatarImgUrl"]),components:{PortfolioContacts:r,PortfolioAvatar:u,PortfolioMenu:h}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"PortfolioHeader"},[e("portfolio-avatar",{attrs:{"img-url":this.avatarImgUrl}}),this._v(" "),this._m(0,!1,!1),this._v(" "),e("portfolio-contacts",{attrs:{githubAddress:this.snsContacts.githubAddress,facebookAddress:this.snsContacts.facebookAddress,codepenAddress:this.snsContacts.codepenAddress,mailAddress:this.snsContacts.mailAddress}}),this._v(" "),e("portfolio-menu")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n    Hi, I'm "),e("strong",[this._v("Kunho Lee")]),this._v("."),e("br"),this._v("\n    Are you looking for a "),e("strong",[this._v("web developer")]),this._v("? PICK ME!\n  ")])}]},g=n("VU/8")(f,m,!1,function(t){n("fv61")},"data-v-52b40918",null).exports,p={name:"PortfolioFooter",props:{userUrl:{type:String,default:function(){return"#"}},codeRepoUrl:{type:String,default:function(){return"#"}}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"PortfolioFooter"},[e("p",[this._v("\n    Coded by "),e("a",{attrs:{href:this.userUrl,target:"_blank"}},[this._v("KunhoLee")]),this._v(".\n    You can see the code from "),e("a",{attrs:{href:this.codeRepoUrl,target:"_blank"}},[this._v("here")]),this._v("!\n  ")])])},staticRenderFns:[]},v=n("VU/8")(p,b,!1,function(t){n("J01t")},"data-v-29a93837",null).exports,_={name:"Portfolio",computed:Object(s.b)(["footerInfo"]),components:{PortfolioHeader:g,PortfolioFooter:v}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Portfolio"},[e("portfolio-header"),this._v(" "),e("router-view"),this._v(" "),e("portfolio-footer",{attrs:{"code-repo-url":this.footerInfo.codeRepo}})],1)},staticRenderFns:[]},x={name:"app",components:{Portfolio:n("VU/8")(_,T,!1,function(t){n("+a7+")},null,null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("portfolio")],1)},staticRenderFns:[]},P=n("VU/8")(x,U,!1,function(t){n("hVie")},null,null).exports,C=n("/ocq"),k={name:"PortfolioThumbnail",props:{linkUrl:{type:String,default:function(){return"#"}},imgUrl:{type:String,default:function(){return"#"}},altMessage:{type:String,default:function(){return"thumbnail image"}},headingText:{type:String,default:function(){return"Heading Text"}},descripttionText:{type:String,default:function(){return"Description Text"}}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"PortfolioThumbnail",attrs:{href:this.linkUrl,target:"_blank"}},[e("article",{staticClass:"ThumbnailArticle"},[e("img",{staticClass:"ThumbnailImage",attrs:{src:this.imgUrl,alt:this.altMessage}}),this._v(" "),e("h3",{staticClass:"ThumbnailHeading"},[this._v(this._s(this.headingText))]),this._v(" "),e("p",{staticClass:"ThumbnailDesc"},[this._v(this._s(this.descripttionText))])])])},staticRenderFns:[]},A=n("VU/8")(k,w,!1,function(t){n("RJBe")},"data-v-a3604c14",null).exports,j={name:"PortfolioThumbnailColumn",props:{thumbnailsInfo:{type:Array,default:function(){return[]}}},components:{PortfolioThumbnail:A}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"PortfolioThumbnailColumn"},this._l(this.thumbnailsInfo,function(t){return e("portfolio-thumbnail",{key:t.id,attrs:{linkUrl:t.linkUrl,imgUrl:t.imgUrl,altMessage:t.altMessage,headingText:t.headingText,descripttionText:t.descripttionText}})}))},staticRenderFns:[]},I=n("VU/8")(j,y,!1,function(t){n("21aS")},"data-v-6011035b",null).exports,R={name:"PortfolioThumbnails",computed:Object(s.b)(["thumbnailsInfo"]),components:{PortfolioThumbnailColumn:I}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"PortfolioThumbnails"},this._l(this.thumbnailsInfo,function(t,n){return e("portfolio-thumbnail-column",{key:n,staticClass:"PortfolioThumbnailColumn",attrs:{"thumbnails-info":t}})}))},staticRenderFns:[]},F={name:"PortfolioProjects",components:{PortfolioThumbnails:n("VU/8")(R,M,!1,function(t){n("G2OV")},"data-v-7b9fc2e0",null).exports}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"PortfolioProjects"},[e("h2",{staticClass:"headingText"},[this._v("Projcets")]),this._v(" "),e("portfolio-thumbnails")],1)},staticRenderFns:[]},V=n("VU/8")(F,S,!1,function(t){n("f42b")},"data-v-a56cd9cc",null).exports;i.a.use(C.a);var E=new C.a({mode:"history",routes:[{path:"/",name:"PortfolioProjects",component:V}]});i.a.use(s.a);var H=new s.a.Store({state:{snsContacts:{githubAddress:"https://github.com/daengdaengLee",facebookAddress:"https://www.facebook.com/gunho.lee.566",codepenAddress:"https://codepen.io/daengdaengLee/",mailAddress:"gunho1020@gmail.com"},avatarImgUrl:"https://user-images.githubusercontent.com/30795415/33804339-036ace2a-dde6-11e7-9b25-84e6c60be326.jpg",thumbnailsInfo:[[{id:"thumb-1",linkUrl:"https://daengdaenglee.github.io/calculator_with_vuejs/",imgUrl:"https://user-images.githubusercontent.com/30795415/33804319-b2564816-dde5-11e7-8d4a-60fc12d68898.jpg",altMessage:"web calculator thumbnail image",headingText:"Web Calculator",descripttionText:"html, css, javascript, vue.js"},{id:"thumb-2",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804322-c73d3500-dde5-11e7-9349-e821c9d76c40.jpg",altMessage:"thumbnail image 2",headingText:"Heading Text 2",descripttionText:"Description Text 2"}],[{id:"thumb-3",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804325-d055f294-dde5-11e7-8ac1-2b2a7254aa4c.jpg",altMessage:"thumbnail image 3",headingText:"Heading Text 3",descripttionText:"Description Text 3"},{id:"thumb-4",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804328-ddb39bee-dde5-11e7-886e-ee4cee2564d8.jpg",altMessage:"thumbnail image 4",headingText:"Heading Text 4",descripttionText:"Description Text 4"},{id:"thumb-5",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804330-e4957054-dde5-11e7-99bc-a524087267b6.jpg",altMessage:"thumbnail image 5",headingText:"Heading Text 5",descripttionText:"Description Text 5"}],[{id:"thumb-6",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804333-ebb5953a-dde5-11e7-902b-4cdbde57e350.jpg",altMessage:"thumbnail image 6",headingText:"Heading Text 6",descripttionText:"Description Text 6"},{id:"thumb-7",linkUrl:"https://www.google.com",imgUrl:"https://user-images.githubusercontent.com/30795415/33804336-f0544e7e-dde5-11e7-9aa5-43260da215cf.jpg",altMessage:"thumbnail image 7",headingText:"Heading Text 7",descripttionText:"Description Text 7"}]],footerInfo:{codeRepo:"https://github.com/daengdaengLee/portfolio"}}});i.a.config.productionTip=!1,new i.a({store:H,el:"#app",router:E,template:"<App/>",components:{App:P}})},RJBe:function(t,e){},f42b:function(t,e){},fv61:function(t,e){},hVie:function(t,e){},zIkx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.756482ee3c6accd766fe.js.map