(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,5],{305:function(t,e,n){"use strict";n.r(e);var r={},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog-item"},[n("h2",[t._v("123123")])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);n(46),n(31),n(45),n(12),n(69),n(35),n(70);var r=n(33),l=n(85);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var o={data:function(){return{animeList:[]}},mounted:function(){this.animeList=this.fetchAnime(),console.log(this.animeList)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({fetchAnime:"anime/fetchAnime"}))},v=o,f=n(30),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog"},[n("h1",[t._v("123")]),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem"),t._v(" "),n("CatalogItem")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CatalogItem:n(305).default})},309:function(t,e,n){"use strict";n.r(e);var r={components:{Catalog:n(306).default}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog-page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"page-title"},[t._v("Аниме")]),t._v(" "),n("div",{staticClass:"page-subtitle"},[t._v("Ну тупа топ")]),t._v(" "),n("Catalog")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);