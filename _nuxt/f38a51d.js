(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{277:function(e,t,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("0971c93e",content,!0,{sourceMap:!1})},278:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0},href:{type:String,required:!0}}},o=(n(279),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md p-4 md:w-1/2 lg:w-2/5"},[n("div",{staticClass:"h-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-800"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href,"aria-label":e.title}},[n("div",{staticClass:"md:h-36 lg:h-48 bg-white"},[n("nuxt-img",{staticClass:"card-image object-cover object-center md:h-36 lg:h-48",attrs:{alt:e.title,src:e.image,decoding:"async","data-nimg":"intrinsic"}})],1)]),e._v(" "),n("div",{staticClass:"h-auto"},[n("div",{staticClass:"m-6"},[n("h2",{staticClass:"mb-3 text-2xl font-bold leading-8 tracking-tight"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href}},[e._v(e._s(e.title)+"\n                    ")])]),e._v(" "),n("p",{staticClass:"prose mb-3 max-w-none text-gray-500"},[e._v("\n                    "+e._s(e.description)+"\n                ")]),e._v(" "),n("a",{staticClass:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600",attrs:{target:"_blank",rel:"noopener noreferrer",href:e.href}},[e._v("\n                    Learn more →\n                ")])])])])])}),[],!1,null,"ec34d132",null);t.default=component.exports},279:function(e,t,n){"use strict";n(277)},280:function(e,t,n){var r=n(49)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.card-image[data-v-ec34d132]{\n  inset:0;\n  box-sizing:border-box;\n  padding:0;\n  margin:auto;\n  display:block;\n  min-width:100%;\n  max-width:100%;\n  min-height:100%;\n  max-height:100%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},316:function(e,t,n){"use strict";n.r(t);var r={components:{Card:n(278).default},data:function(){return{projects:[{title:"Kassettenbox",description:"A great german blog about radio plays.",image:"/images/links/kassettenbox.png",href:"https://www.kassettenbox.de"},{title:"Logopädie Susan Schwede",description:"Susan Schwede - Logopädin und Kommunikationspädagogin für Unterstützte Kommunikation",image:"/images/links/logopaedie-schwede.png",href:"https://logopaedie-schwede.de"}]}}},o=n(12),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"space-y-2 pt-6 pb-8 md:space-y-5"}),e._v(" "),n("div",{staticClass:"-m-4 flex flex-wrap justify-center"},[e._l(e.projects,(function(e){return[n("card",{key:e.title,attrs:{title:e.title,description:e.description,image:e.image,href:e.href}})]}))],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(278).default})}}]);