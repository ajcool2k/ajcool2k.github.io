(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3eeceb61",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(284)},293:function(t,e,n){var r=n(49)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nh1{\n  font-weight:700;\n  font-size:28px;\n  margin:20px 0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},316:function(t,e,n){"use strict";n.r(e);var r=n(18),l=n(5),c=(n(39),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,c,o,article,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,t.route,e.next=3,n("articles",l.slug).where({"author.name":{$regex:[l.author,"i"]},draft:{$ne:!0}}).without(["body"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,o=Object(r.a)(c,1),article=o[0],f=article.author,e.abrupt("return",{author:f,articles:c});case 7:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=(n(292),n(12)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Articles by "+t._s(t.author.name))]),t._v(" "),n("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"pb-6 pt-6 article-card"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("nuxt-img",{staticClass:"rounded-2xl",attrs:{src:article.img,alt:article.alt,sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),n("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),n("p",{staticClass:"text-gray-600 dark:text-gray-400 text-sm"},[t._v("\n                        "+t._s(article.description)+"\n                    ")])])],1)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);