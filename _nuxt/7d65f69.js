(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{321:function(t,e,r){"use strict";r.r(e);var n=r(5),l=(r(39),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=n.tag,e.next=4,r("articles").only(["title","description","tags","img","slug","author","draft"]).where({draft:{$ne:!0},tags:{$contains:l}}).sortBy("createdAt","desc").fetch();case 4:return c=e.sent,e.abrupt("return",{articles:c,tag:l});case 6:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=r(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"font-bold text-4xl mb-8"},[t._v("Tag "+t._s(t.tag))]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"pb-6 pt-6 article-card"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("nuxt-img",{staticClass:"rounded-2xl",attrs:{format:"webp",src:article.img,alt:article.alt,width:"100vw",height:"auto",fit:"cover",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"pb-1 font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 text-sm"},[t._v("\n                        "+t._s(article.description)+"\n                    ")])])],1)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);