(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{300:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(41),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,n=t.route,l="/?draft=1"!==n.fullPath,e.next=4,r("articles").only(["title","description","img","slug","author","draft"]).where({draft:{$ne:l}}).sortBy("createdAt","desc").fetch();case 4:return c=e.sent,e.abrupt("return",{articles:c});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"font-bold text-4xl mb-8"},[t._v("Blog Posts")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap divide-y divide-gray-200 dark:divide-gray-700"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"pb-6 pt-6 article-card"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("img",{staticClass:"rounded-2xl",attrs:{src:article.img,alt:article.alt}}),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"text-gray-600 text-sm"},[t._v("\n                        "+t._s(article.description)+"\n                    ")])])])],1)})),0)])}),[],!1,null,"45cf089e",null);e.default=component.exports}}]);