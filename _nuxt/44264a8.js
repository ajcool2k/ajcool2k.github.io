(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(t,e,r){var content=r(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("b421d33e",content,!0,{sourceMap:!1})},176:function(t,e,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("105ee3ca",content,!0,{sourceMap:!1})},193:function(t,e,r){"use strict";var n=r(16),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"},[r("div",{staticClass:"m-4 flex h-screen flex-col justify-between"},[r("HeaderNav",{staticClass:"mb-8 mt-8"}),t._v(" "),r("div",{staticClass:"mb-auto"},[r("Nuxt")],1),t._v(" "),r("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{HeaderNav:r(263).default,Footer:r(266).default})},196:function(t,e,r){r(197),t.exports=r(198)},246:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("9d54a558",content,!0,{sourceMap:!1})},247:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\n\n:root{\n  --color:#243746;\n  --color-primary:#2563eb;\n  --color-secondary:#0e2233;\n  --bg:#f3f5f4;\n  --bg-secondary:#fff;\n  --border-color:#ddd\n}\n\n.dark-mode{\n  --color:#ebf4f1;\n  --color-primary:#60a5fa;\n  --color-secondary:#fdf9f3;\n  --bg:#091a28;\n  --bg-secondary:#071521;\n  --border-color:#0d2538\n}\n\nbody{\n  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;\n  background-color:#f3f5f4;\n  background-color:var(--bg);\n  transition:background-color .3s\n}\n\na,body{\n  color:#243746;\n  color:var(--color)\n}\n\na:hover{\n  color:#2563eb;\n  color:var(--color-primary)\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},250:function(t,e,r){"use strict";r(175)},251:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.header-nav[data-v-3f607f2d]{\n  display:flex;\n  justify-content:space-between;\n  align-items:center\n}\n.header-nav .sections[data-v-3f607f2d]{\n  justify-self:left\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},252:function(t,e,r){"use strict";r(176)},253:function(t,e,r){var n=r(43)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.app-search[data-v-48eb1932]{\n  display:inline\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},263:function(t,e,r){"use strict";r.r(e);var n={props:{}},o=(r(250),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-nav"},[r("div",{staticClass:"sections"},[r("NuxtLink",{staticClass:"p-1 font-medium sm:p-4",attrs:{to:"/"}},[t._v("\n        Blog\n        ")]),t._v(" "),r("NuxtLink",{staticClass:"p-1 font-medium sm:p-4",attrs:{to:"/tags"}},[t._v("\n        Tags\n        ")]),t._v(" "),r("NuxtLink",{staticClass:"p-1 font-medium sm:p-4",attrs:{to:"/projects"}},[t._v("\n        Projects\n        ")]),t._v(" "),r("NuxtLink",{staticClass:"p-1 font-medium sm:p-4",attrs:{to:"/about"}},[t._v("\n        About\n        ")]),t._v(" "),r("NuxtLink",{staticClass:"p-1 font-medium sm:p-4",attrs:{to:"/links"}},[t._v("\n        Links\n        ")])],1),t._v(" "),r("AppSearchInput"),t._v(" "),r("ColorModePicker")],1)}),[],!1,null,"3f607f2d",null);e.default=component.exports;installComponents(component,{AppSearchInput:r(264).default,ColorModePicker:r(265).default})},264:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(41),r(25),r(134),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),l=(r(252),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-3 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-300 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n                "+t._s(article.title)+"\n            ")])],1)})),0):t._e()])}),[],!1,null,"48eb1932",null);e.default=component.exports},265:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["light"===t.$colorMode.preference?r("button",{staticClass:"lg:block w-12 h-12 rounded d-icon",attrs:{slot:"placeholder","aria-label":"Color Mode"},on:{click:function(e){t.$colorMode.preference="dark"}},slot:"placeholder"},[r("svg",{staticClass:"w-6 h-6 m-auto",attrs:{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M21 16.1529C19.1593 16.9855 17.1086 17.2374 15.1211 16.8751C13.1336 16.5128 11.3036 15.5535 9.87509 14.1249C8.44655 12.6964 7.48723 10.8665 7.12493 8.87894C6.76263 6.89144 7.01455 4.84072 7.84714 3C6.38172 3.66225 5.09883 4.67013 4.10854 5.93716C3.11824 7.2042 2.45011 8.69256 2.16146 10.2746C1.87281 11.8566 1.97225 13.485 2.45126 15.0201C2.93028 16.5552 3.77456 17.9512 4.91167 19.0883C6.04878 20.2254 7.44478 21.0697 8.9799 21.5487C10.515 22.0277 12.1434 22.1272 13.7254 21.8385C15.3074 21.5499 16.7958 20.8818 18.0628 19.8915C19.3299 18.9012 20.3377 17.6183 21 16.1529Z",fill:"currentColor"}})])]):t._e(),t._v(" "),"light"!==t.$colorMode.preference?r("button",{staticClass:"lg:block w-12 h-12 rounded d-icon",attrs:{slot:"placeholder","aria-label":"Color Mode"},on:{click:function(e){t.$colorMode.preference="light"}},slot:"placeholder"},[r("svg",{staticClass:"w-6 h-6 m-auto",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V4.5C13.25 4.83152 13.1183 5.14946 12.8839 5.38388C12.6495 5.6183 12.3315 5.75 12 5.75C11.6685 5.75 11.3505 5.6183 11.1161 5.38388C10.8817 5.14946 10.75 4.83152 10.75 4.5V3.25C10.75 2.91848 10.8817 2.60054 11.1161 2.36612C11.3505 2.1317 11.6685 2 12 2V2ZM17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12V12ZM16.42 18.1875L17.3038 19.0712C17.5395 19.2989 17.8553 19.4249 18.183 19.4221C18.5107 19.4192 18.8243 19.2878 19.056 19.056C19.2878 18.8243 19.4192 18.5107 19.4221 18.183C19.4249 17.8553 19.2989 17.5395 19.0712 17.3038L18.1875 16.42C17.9517 16.1923 17.636 16.0663 17.3082 16.0692C16.9805 16.072 16.667 16.2035 16.4352 16.4352C16.2035 16.667 16.072 16.9805 16.0692 17.3082C16.0663 17.636 16.1923 17.9517 16.42 18.1875V18.1875ZM19.07 4.92875C19.3043 5.16316 19.436 5.48105 19.436 5.8125C19.436 6.14396 19.3043 6.46184 19.07 6.69625L18.1875 7.58C18.0722 7.69939 17.9343 7.79462 17.7818 7.86013C17.6293 7.92564 17.4652 7.96012 17.2993 7.96156C17.1333 7.96301 16.9687 7.93138 16.8151 7.86853C16.6614 7.80568 16.5219 7.71286 16.4045 7.59549C16.2871 7.47813 16.1943 7.33856 16.1315 7.18494C16.0686 7.03132 16.037 6.86672 16.0384 6.70075C16.0399 6.53477 16.0744 6.37075 16.1399 6.21824C16.2054 6.06574 16.3006 5.92781 16.42 5.8125L17.3038 4.92875C17.5382 4.69441 17.856 4.56277 18.1875 4.56277C18.519 4.56277 18.8368 4.69441 19.0712 4.92875H19.07ZM20.75 13.25C21.0815 13.25 21.3995 13.1183 21.6339 12.8839C21.8683 12.6495 22 12.3315 22 12C22 11.6685 21.8683 11.3505 21.6339 11.1161C21.3995 10.8817 21.0815 10.75 20.75 10.75H19.5C19.1685 10.75 18.8505 10.8817 18.6161 11.1161C18.3817 11.3505 18.25 11.6685 18.25 12C18.25 12.3315 18.3817 12.6495 18.6161 12.8839C18.8505 13.1183 19.1685 13.25 19.5 13.25H20.75ZM12 18.25C12.3315 18.25 12.6495 18.3817 12.8839 18.6161C13.1183 18.8505 13.25 19.1685 13.25 19.5V20.75C13.25 21.0815 13.1183 21.3995 12.8839 21.6339C12.6495 21.8683 12.3315 22 12 22C11.6685 22 11.3505 21.8683 11.1161 21.6339C10.8817 21.3995 10.75 21.0815 10.75 20.75V19.5C10.75 19.1685 10.8817 18.8505 11.1161 18.6161C11.3505 18.3817 11.6685 18.25 12 18.25V18.25ZM5.8125 7.58C5.92856 7.69614 6.06635 7.78828 6.21802 7.85116C6.36968 7.91405 6.53225 7.94645 6.69643 7.9465C6.86062 7.94656 7.02321 7.91428 7.17492 7.8515C7.32663 7.78872 7.46449 7.69668 7.58062 7.58062C7.69676 7.46457 7.7889 7.32678 7.85179 7.17511C7.91467 7.02344 7.94707 6.86088 7.94713 6.69669C7.94719 6.53251 7.91491 6.36992 7.85213 6.21821C7.78935 6.0665 7.69731 5.92864 7.58125 5.8125L6.69625 4.92875C6.4605 4.70105 6.14474 4.57506 5.817 4.57791C5.48925 4.58076 5.17574 4.71222 4.94398 4.94398C4.71222 5.17574 4.58076 5.48925 4.57791 5.817C4.57506 6.14474 4.70105 6.4605 4.92875 6.69625L5.8125 7.58V7.58ZM7.58 18.1875L6.69625 19.0712C6.4605 19.2989 6.14474 19.4249 5.817 19.4221C5.48925 19.4192 5.17574 19.2878 4.94398 19.056C4.71222 18.8243 4.58076 18.5107 4.57791 18.183C4.57506 17.8553 4.70105 17.5395 4.92875 17.3038L5.8125 16.42C6.04825 16.1923 6.36401 16.0663 6.69175 16.0692C7.0195 16.072 7.33301 16.2035 7.56477 16.4352C7.79653 16.667 7.92799 16.9805 7.93084 17.3082C7.93369 17.636 7.8077 17.9517 7.58 18.1875V18.1875ZM4.5 13.25C4.83152 13.25 5.14946 13.1183 5.38388 12.8839C5.6183 12.6495 5.75 12.3315 5.75 12C5.75 11.6685 5.6183 11.3505 5.38388 11.1161C5.14946 10.8817 4.83152 10.75 4.5 10.75H3.25C2.91848 10.75 2.60054 10.8817 2.36612 11.1161C2.1317 11.3505 2 11.6685 2 12C2 12.3315 2.1317 12.6495 2.36612 12.8839C2.60054 13.1183 2.91848 13.25 3.25 13.25H4.5Z",fill:"currentColor"}})])]):t._e()])}),[],!1,null,"80b99872",null);e.default=component.exports},266:function(t,e,r){"use strict";r.r(e);var n={props:{}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer mt-16 flex flex-col items-center"},[r("div",{staticClass:"mb-3 flex space-x-4"},[r("a",{staticClass:"text-sm text-gray-500 transition hover:text-gray-600",attrs:{target:"_blank",rel:"noopener noreferrer",href:"mailto:address@yoursite.com"}},[r("span",{staticClass:"sr-only"},[t._v("mail")]),r("svg",{staticClass:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"}}),t._v(" "),r("path",{attrs:{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"}})])]),r("a",{staticClass:"text-sm text-gray-500 transition hover:text-gray-600",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com"}},[r("span",{staticClass:"sr-only"},[t._v("github")]),r("svg",{staticClass:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),r("a",{staticClass:"text-sm text-gray-500 transition hover:text-gray-600",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/Twitter"}},[r("span",{staticClass:"sr-only"},[t._v("twitter")]),r("svg",{staticClass:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"}})])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"},[r("div",[t._v("Jens Auerswald")]),t._v(" "),r("div",[t._v("•")]),t._v(" "),r("div",[t._v("© 2022")]),t._v(" "),r("div",[t._v("•")]),t._v(" "),r("a",{staticClass:"text-sm text-gray-500 dark:text-gray-400",attrs:{href:"https://gist.github.com/ajcool2k/422d8ddba7cdc713192c80ad7ff32c76"}},[t._v("Impressum")])])}],!1,null,"34f99602",null);e.default=component.exports}},[[196,14,1,15]]]);