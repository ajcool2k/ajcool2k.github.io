(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{277:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("0971c93e",content,!0,{sourceMap:!1})},278:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0},href:{type:String,required:!0}}},l=(r(279),r(12)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md p-4 md:w-1/2 lg:w-2/5"},[r("div",{staticClass:"h-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href,"aria-label":e.title}},[r("div",{staticClass:"md:h-36 lg:h-48 bg-white"},[r("nuxt-img",{staticClass:"card-image object-cover object-center md:h-36 lg:h-48",attrs:{alt:e.title,src:e.image,decoding:"async","data-nimg":"intrinsic"}})],1)]),e._v(" "),r("div",{staticClass:"h-auto"},[r("div",{staticClass:"m-6"},[r("h2",{staticClass:"mb-3 text-2xl font-bold leading-8 tracking-tight"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href}},[e._v(e._s(e.title)+"\n                    ")])]),e._v(" "),r("p",{staticClass:"prose mb-3 max-w-none text-gray-500"},[e._v("\n                    "+e._s(e.description)+"\n                ")]),e._v(" "),r("a",{staticClass:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600",attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href}},[e._v("\n                    Learn more →\n                ")])])])])])}),[],!1,null,"ec34d132",null);t.default=component.exports},279:function(e,t,r){"use strict";r(277)},280:function(e,t,r){var n=r(49)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n.card-image[data-v-ec34d132]{\n  inset:0;\n  box-sizing:border-box;\n  padding:0;\n  margin:auto;\n  display:block;\n  min-width:100%;\n  max-width:100%;\n  min-height:100%;\n  max-height:100%\n}\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},317:function(e,t,r){"use strict";r.r(t);var n={components:{Card:r(278).default},data:function(){return{projects:[]}}},l=r(12),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"-m-4 flex flex-wrap"},[e._l(e.projects,(function(e){return[r("card",{key:e.title,attrs:{title:e.title,description:e.description,image:e.image,href:e.href}})]}))],2)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"space-y-2 pt-6 pb-8 md:space-y-5"},[r("h2",[e._v("More to come here ...")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:r(278).default})}}]);