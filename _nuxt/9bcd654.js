(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("3eeceb61",content,!0,{sourceMap:!1})},295:function(t,e,r){"use strict";r(287)},296:function(t,e,r){var n=r(49)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\nh1{\n  font-weight:700;\n  font-size:28px;\n  margin:20px 0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},319:function(t,e,r){"use strict";r.r(e);var n=r(18),o=r(5),c=(r(39),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,article,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,t.route,e.next=3,r("articles",o.slug).where({"author.name":{$regex:[o.author,"i"]},draft:{$ne:!0}}).without(["body"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,l=Object(n.a)(c,1),article=l[0],f=article.author,e.abrupt("return",{author:f,articles:c});case 7:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=(r(295),r(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Articles by "+t._s(t.author.name))]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"pb-6 pt-6 article-card"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("nuxt-img",{staticClass:"rounded-2xl",attrs:{format:"webp",src:article.img,alt:article.alt,width:"100vw",height:"auto",fit:"cover",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 text-sm"},[t._v("\n                        "+t._s(article.description)+"\n                    ")])])],1)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);