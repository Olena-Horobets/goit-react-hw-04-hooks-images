(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={galleryCard:"GalleryItem_galleryCard__2xmZ6",galleryCard__img:"GalleryItem_galleryCard__img__3ChVb",info:"GalleryItem_info__1idu9",info__thumb:"GalleryItem_info__thumb__3G8nG",blur:"GalleryItem_blur__26YwX",infoItem:"GalleryItem_infoItem__2JPxr",icon:"GalleryItem_icon__aQe_h"}},function(e,t,a){e.exports={lightbox:"Modal_lightbox__3fcy6",lightbox__overlay:"Modal_lightbox__overlay__3dYKw",lightbox__content:"Modal_lightbox__content__2nMjL",lightbox__image:"Modal_lightbox__image__2l7Pn",lightbox__button:"Modal_lightbox__button__3CDBG",lightbox__buttonClose:"Modal_lightbox__buttonClose__3lgLI Modal_lightbox__button__3CDBG",icon:"Modal_icon__144Ji"}},,function(e,t,a){e.exports={loadingItem:"LoadingView_loadingItem__2LVZv",dotBox:"LoadingView_dotBox__m9md3",dot:"LoadingView_dot__XruwS",dot1:"LoadingView_dot1__3v0W2 LoadingView_dot__XruwS","dot-animation":"LoadingView_dot-animation__eDGU5",dot2:"LoadingView_dot2__m6gNf LoadingView_dot__XruwS",dot3:"LoadingView_dot3__2iCw1 LoadingView_dot__XruwS"}},,function(e,t,a){e.exports={gallery:"Gallery_gallery__2eehQ"}},function(e,t,a){e.exports={header:"Header_header__3h0ea",header__title:"Header_header__title__1mpVI",logo:"Header_logo__yHxU_"}},,,,function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1Zn0-",searchForm__input:"SearchForm_searchForm__input__DftM0"}},function(e,t,a){e.exports={footer:"Footer_footer__2mNgr",logo:"Footer_logo___RLoD"}},,function(e,t,a){e.exports={btn:"Button_btn__1f3Oe","search-form__btn":"Button_search-form__btn__2RwRP Button_btn__1f3Oe","search-form__btn--reset":"Button_search-form__btn--reset__3JSL1 Button_search-form__btn__2RwRP Button_btn__1f3Oe"}},,,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);a(21),a(22);var n,r,c,o,s,i,l,h,u=a(0),d=a.n(u),m=a(8),b=a.n(m),j=a(13),_=a(2),p=a(3),g=a(5),f=a(4),v=(a(27),a(20)),O=a(10),x=a(15),y=Object(x.a)("BASE_URL"),w=Object(x.a)("API_KEY"),M=function(){function e(t){var a=this,n=t.url,r=t.key,c=t.perPage,o=t.imageType,s=t.orientation,i=t.safesearch;Object(_.a)(this,e),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:void 0}),this.setNextPage=function(){return a.page+=1},this.resetPage=function(){a.page=1},Object(O.a)(this,y)[y]=n,Object(O.a)(this,w)[w]=r,this.page=1,this.perPage=c,this.imageType=o,this.orientation=s,this.safesearch=i}return Object(p.a)(e,[{key:"getBasicFetchUrl",value:function(e){return"".concat(Object(O.a)(this,y)[y],"?key=").concat(Object(O.a)(this,w)[w],"&q=").concat(e,"&page=").concat(this.page)}},{key:"getFetchUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="".concat(this.getBasicFetchUrl(e),"&per_page=").concat(this.perPage,"&image_type=").concat(this.imageType,"&orientation=").concat(this.orientation,"&safesearch=").concat(this.safesearch);return t}},{key:"getFetchResponse",value:function(e){return fetch(this.getFetchUrl(e)).then((function(e){if(200===e.status)return e.json();throw Error})).then((function(e){return e.hits})).catch((function(e){return e}))}}]),e}(),C=new M(Object(v.a)({},{url:"https://pixabay.com/api/",key:"22936688-6b3396d854cca2c3f8d0c7d41",perPage:12,imageType:"photo",orientation:"horizontal",safesearch:!0})),z=a(18),S=(a(28),a(12)),k=a.n(S),N=["title","titleId"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}function I(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function L(e,t){var a=e.title,d=e.titleId,m=I(e,N);return u.createElement("svg",E({"aria-hidden":"true",style:{position:"absolute",width:0,height:0,overflow:"hidden"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":d},m),a?u.createElement("title",{id:d},a):null,u.createElement("defs",null,n||(n=u.createElement("symbol",{id:"icon-close",viewBox:"0 0 32 32"},u.createElement("path",{d:"M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453 7.453-7.453z"}))),r||(r=u.createElement("symbol",{id:"icon-download",viewBox:"0 0 32 32"},u.createElement("path",{d:"M25.8 13.387c-0.907-4.6-4.947-8.053-9.8-8.053-3.853 0-7.2 2.187-8.867 5.387-4.013 0.427-7.133 3.827-7.133 7.947 0 4.413 3.587 8 8 8h17.333c3.68 0 6.667-2.987 6.667-6.667 0-3.52-2.733-6.373-6.2-6.613zM22.667 17.333l-6.667 6.667-6.667-6.667h4v-5.333h5.333v5.333h4z"}))),c||(c=u.createElement("symbol",{id:"icon-comment",viewBox:"0 0 32 32"},u.createElement("path",{d:"M26.667 2.667h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 24 5.333-5.333h18.667c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM12 14.667h-2.667v-2.667h2.667v2.667zM17.333 14.667h-2.667v-2.667h2.667v2.667zM22.667 14.667h-2.667v-2.667h2.667v2.667z"}))),o||(o=u.createElement("symbol",{id:"icon-like",viewBox:"0 0 32 32"},u.createElement("path",{d:"M16 28.467l-1.933-1.76c-6.867-6.227-11.4-10.333-11.4-15.373 0-4.107 3.227-7.333 7.333-7.333 2.32 0 4.547 1.080 6 2.787 1.453-1.707 3.68-2.787 6-2.787 4.107 0 7.333 3.227 7.333 7.333 0 5.040-4.533 9.147-11.4 15.387l-1.933 1.747z"}))),s||(s=u.createElement("symbol",{id:"icon-view",viewBox:"0 0 32 32"},u.createElement("path",{d:"M16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10s12.36-4.147 14.667-10c-2.307-5.853-8-10-14.667-10zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667c3.68 0 6.667 2.987 6.667 6.667s-2.987 6.667-6.667 6.667zM16 12c-2.213 0-4 1.787-4 4s1.787 4 4 4c2.213 0 4-1.787 4-4s-1.787-4-4-4z"}))),u.createElement("symbol",{id:"icon-logo",viewBox:"0 0 32 32"},u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M18.119 16.53v0zM18.119 16.53v0zM19.232 16.742c0-0.318 0.053-0.742 0.053-1.219-0.053 0.318-0.053 0.742-0.053 1.219z"}),u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M18.119 16.53v0.318c-0.053-0.106-0.053-0.212 0-0.318z"}),u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM19.285 15.417v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM18.119 16.53v0zM15.258 15.152c-0.371 0.159-0.954 0.265-1.377 0.212-0.212 0-0.424-0.053-0.583-0.053-0.159-0.053-0.318-0.106-0.424-0.159-0.106-0.106-0.159-0.265-0.106-0.371 0.106-0.106 0.265-0.159 0.371-0.106 0.053 0 0.106 0.053 0.265 0.106 0.159 0 0.318 0.053 0.53 0.053 0.371 0 0.848-0.053 1.113-0.159 0.159-0.053 0.318 0 0.371 0.159 0.053 0.053 0 0.265-0.159 0.318z"}),u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M31.841 29.457l-0.053-0.106-4.874-4.927c2.066-2.543 3.285-5.828 3.285-9.325 0-8.212-6.675-14.94-14.94-14.94-8.212 0-14.887 6.728-14.887 14.94s6.676 14.94 14.94 14.94c3.497 0 6.728-1.219 9.272-3.232l4.768 4.768c0.212 0.212 0.477 0.318 0.742 0.318 0.106 0 0.212 0 0.265-0.053 0.318-0.106 0.636-0.265 1.007-0.636s0.53-0.636 0.636-0.954c0-0.371-0.106-0.636-0.159-0.795zM6.464 23.364c-0.159 0.265-0.265 0.583-0.371 0.901-2.384-2.331-3.815-5.616-3.815-9.166 0-7.152 5.828-12.98 12.98-12.98s12.98 5.828 12.98 12.98c0 2.702-0.795 5.192-2.225 7.258-0.636-0.636-1.483-0.901-2.331-1.113-0.424-1.007-0.53-2.119-0.795-3.868l-0.106-1.007c-0.265-2.172-0.742-4.609-1.272-6.57-0.318-1.166-0.636-2.172-0.954-2.967-0.371-1.007-0.742-1.642-1.166-2.066-0.954-0.901-2.013-1.377-3.073-1.483-0.477-0.053-0.848 0-1.060 0.053-0.106 0-0.159 0-0.265 0.053h-0.371c-0.371 0-1.113-0.053-1.907 0.265-1.166 0.424-2.119 1.377-2.967 2.808-1.060 1.854-1.113 3.921-1.060 5.563 0 0.901 0.106 1.748 0.159 2.649v0.212c0.053 0.954 0.159 1.801 0.159 2.649 0 1.589-0.106 2.702-0.265 3.444-0.159 0.583-0.318 0.848-0.477 0.954-0.848 0.265-1.377 0.742-1.801 1.43zM10.172 14.781v-0.212l-0.159-2.543c0-1.007 0-1.854 0.159-2.596 0.106-0.689 0.318-1.325 0.53-1.854 0.053-0.159 0.159-0.265 0.212-0.424 0.636-1.166 1.43-1.907 2.225-2.225 0.159-0.053 0.318-0.106 0.477-0.106 0.106 0 0.212-0.053 0.318-0.053-0.053 0.159-0.159 0.265-0.212 0.424 0 0.053-0.053 0.053-0.053 0.106-0.053 0.106-0.106 0.212-0.159 0.265-0.053 0.106-0.106 0.159-0.106 0.212v0.053c-0.159 0-0.371 0.106-0.477 0.159-0.053 0.053-0.106 0.053-0.159 0.106-0.265 0.159-0.53 0.371-0.742 0.583-0.477 0.424-0.954 0.954-1.272 1.272l-0.053 0.106v0.106c-0.689 3.285-0.265 6.093 0.689 7.735 0.477 0.848 0.954 1.377 1.43 1.695 0.265 0.212 0.477 0.318 0.689 0.424v0.106c0 0.053 0.053 0.159 0.053 0.212 0.053 0.318 0.106 0.689 0.053 1.060-0.053 0.424-0.159 0.742-0.318 0.848-0.106 0.053-0.318 0.212-0.742 0.424-0.212 0.053-0.424 0.159-0.689 0.265-0.053 0-0.159 0.053-0.265 0.106s-0.212 0.053-0.318 0.106c-0.424 0.106-0.848 0.265-1.272 0.371 0-0.053 0-0.106 0.053-0.106 0.212-0.848 0.318-2.119 0.318-3.762-0.106-0.954-0.159-1.854-0.212-2.861zM14.040 6.728c0.583 0.106 1.325 0.265 2.013 0.583 0.954 0.424 1.695 1.007 2.013 1.907 0.318 0.954 0.371 2.384 0.265 3.921-0.053 0.53-0.053 1.113-0.106 1.642v0.106c-0.106 0.053-0.106 0.106-0.212 0.159 0 0.053-0.053 0.053-0.053 0.106l-0.053 0.053c-0.318 0.371-0.901 0.742-1.695 1.060-0.742 0.318-1.589 0.53-2.331 0.742-0.106 0-0.265-0.106-0.477-0.265-0.265-0.212-0.689-0.636-1.113-1.377-0.901-1.589-1.113-4.132-0.583-6.781 0.265-0.318 0.636-0.689 1.060-1.060 0.212-0.212 0.424-0.371 0.583-0.424 0.106-0.053 0.159-0.106 0.212-0.106h0.053c0.159-0.212 0.265-0.212 0.424-0.265zM11.762 24.106c0.053-0.636 0.212-1.325 0.371-1.854 0.053-0.106 0.053-0.212 0.106-0.318 0.106-0.053 0.212-0.053 0.318-0.106 0.159-0.053 0.265-0.106 0.424-0.159 0.424-0.159 0.795-0.371 1.060-0.583 0.477-0.371 0.689-1.060 0.742-1.642 0.053-0.424 0-0.901-0.053-1.272 0-0.106-0.053-0.159-0.053-0.265 0.106 0 0.159-0.053 0.265-0.053 0.583-0.159 1.219-0.371 1.801-0.636 0.424-0.159 0.795-0.371 1.166-0.583 0.106-0.053 0.159-0.106 0.265-0.159v1.219c0 0.318 0.053 0.636 0.053 0.954 0.053 0.583 0.159 1.166 0.265 1.642 0.053 0.212 0.106 0.477 0.212 0.636s0.212 0.371 0.424 0.477c0.053 0.053 0.106 0.053 0.212 0.106s0.212 0.106 0.318 0.106c0 0.106 0.053 0.212 0.053 0.318 0.106 0.53 0.212 1.272 0.265 1.96 0 0.477 0 0.901-0.053 1.219-0.053 0.371-0.159 0.53-0.212 0.583 0 0-0.053 0-0.106 0.053-0.053 0-0.159 0.053-0.265 0.106-0.212 0.053-0.53 0.106-0.901 0.159-0.742 0.106-1.642 0.159-2.596 0.159s-1.854 0-2.596-0.106c-0.371-0.053-0.689-0.106-0.901-0.159-0.106-0.053-0.212-0.053-0.265-0.106-0.053 0-0.053 0-0.053-0.053v-0.053s-0.053-0.053-0.053-0.106c-0.053-0.106-0.053-0.212-0.053-0.424-0.212-0.159-0.212-0.583-0.159-1.060zM19.656 20.503c-0.053-0.106-0.106-0.265-0.159-0.477-0.106-0.371-0.159-0.901-0.212-1.483-0.053-0.53-0.053-1.113-0.053-1.642v-0.212c0-0.477 0.053-0.901 0.053-1.219v-0.53c0.053-0.583 0.106-1.166 0.106-1.801 0.106-1.377 0.106-3.126-0.318-4.344-0.371-1.060-1.325-1.96-2.649-2.543-0.636-0.265-1.272-0.477-1.801-0.583 0.159-0.318 0.318-0.689 0.53-0.954 0.053 0 0.106 0 0.159-0.053 0.159 0 0.477-0.053 0.795 0 0.848 0.106 1.589 0.477 2.331 1.166 0.159 0.106 0.477 0.53 0.848 1.536 0.318 0.742 0.583 1.695 0.901 2.808 0.477 1.907 0.954 4.291 1.219 6.411 0.053 0.318 0.106 0.636 0.106 1.007 0.159 1.377 0.318 2.49 0.636 3.497h-0.159c-0.371-0.053-0.689-0.053-1.060-0.106-0.583-0.159-0.954-0.318-1.272-0.477zM15.258 28.132c-3.020 0-5.828-1.060-8.053-2.808 0.106-0.424 0.265-0.901 0.424-1.272 0.212-0.424 0.477-0.636 0.901-0.742 0.477-0.159 1.007-0.265 1.536-0.424h0.053c0.265-0.053 0.477-0.106 0.742-0.212-0.106 0.424-0.159 0.901-0.212 1.377-0.053 0.583-0.053 1.060-0.053 1.483 0 0.265 0.053 0.477 0.106 0.636 0.106 0.265 0.212 0.477 0.424 0.636 0.265 0.212 0.583 0.318 0.848 0.371s0.636 0.106 1.060 0.159c0.636 0.053 1.483 0.106 2.331 0.106h0.371c1.007 0 1.96-0.053 2.702-0.159 0.424-0.053 0.795-0.106 1.060-0.212 0.371-0.106 0.636-0.212 0.848-0.371 0.318-0.265 0.477-0.689 0.583-1.272 0.053-0.424 0.053-0.901 0.053-1.483-0.053-0.53-0.106-1.113-0.212-1.642 0.318 0.053 0.689 0.106 1.060 0.106 0.265 0 0.53 0.053 0.742 0.106 1.166 0.159 2.066 0.371 2.596 1.007-2.331 2.808-5.881 4.609-9.907 4.609zM30.358 30.199l-0.212 0.212-4.503-4.503c0.159-0.106 0.265-0.265 0.424-0.424l4.503 4.503-0.212 0.212z"}),u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M6.887 0.636c0 0.371-0.318 0.689-0.689 0.689h-4.768v4.344c0 0.371-0.318 0.689-0.689 0.689s-0.689-0.318-0.689-0.689v-5.722h6.093c0.424 0 0.742 0.318 0.742 0.689zM30.517-0.053v5.722c0 0.371-0.318 0.689-0.689 0.689s-0.689-0.318-0.689-0.689v-4.344h-4.768c-0.371 0-0.689-0.318-0.689-0.689s0.318-0.689 0.689-0.689h6.146z"}),u.createElement("path",{fill:"currentColor",style:{fill:"var(--color1, currentColor)"},d:"M6.887 29.616c0 0.371-0.318 0.689-0.689 0.689h-6.146v-5.722c0-0.371 0.318-0.689 0.689-0.689s0.689 0.318 0.689 0.689v4.344h4.715c0.424 0 0.742 0.318 0.742 0.689z"})),u.createElement("symbol",{id:"icon-pixabay",viewBox:"0 0 640 123.87"},u.createElement("g",{fill:"currentColor"},i||(i=u.createElement("path",{d:"M523.513 40.165c-3.478-2.46-6.005-4.955-6.005-8.033H498.17c0 5.539-2.527 8.033-5.645 8.033h-5.164v56.236h100.42V40.165h-64.63zm-6.006 16.067h-18.096V48.2h20.084v6.464zm33.991 31.276c-11.457 0-20.779-9.201-20.779-20.513s9.322-20.04 20.78-20.04c11.456 0 20.777 8.729 20.777 20.04s-9.32 20.513-20.778 20.513zm11.17-20.513c0 6.08-5.01 11.028-11.169 11.028-6.159 0-11.17-4.947-11.17-11.028 0-6.08 5.011-11.027 11.17-11.027 6.158 0 11.17 4.947 11.17 11.027zm77.334-34.48-25 63.735-19.185-7.693V77.695l13.323 5.452 17.592-44.844-65.92-25.205-6.11 19.034h-11L554.95-.003l85.053 32.52z"})),u.createElement("g",{style:{wordSpacing:0,letterSpacing:0},fontFamily:"VomZom",fontSize:23.686},l||(l=u.createElement("path",{d:"M33.952 28.507c16.562-.38 32.107 13.09 33.856 29.606C69.9 72.627 61.362 87.7 47.98 93.592 39.874 97.616 30.72 96.38 22 96.585h-8.518v27.29H-.011c.03-21.057-.054-42.116.042-63.174.441-15.684 13.287-29.735 28.795-31.823a34.551 34.551 0 0 1 5.126-.372zm0 54.582c9.733.244 18.861-7.35 20.314-16.992 1.94-9.706-4.252-20.135-13.717-23.046-9.141-3.244-20.14 1.027-24.604 9.66-3.464 5.897-2.233 12.87-2.463 19.369v11.01h20.47zM74.334 28.177h13.34v68.08h-13.34v-68.08zM127.764 71.16h.486l18.963 25.284h16.531l-25.77-35.008 22.853-33.063h-16.532L128.25 51.71h-.486l-16.046-23.338H95.187l22.852 33.063-25.77 35.008h16.532z"})),h||(h=u.createElement("path",{d:"M193.953 28.177c13.511-.267 26.471 8.585 31.472 21.082 2.61 5.804 2.574 12.234 2.49 18.465v28.532c-12.04-.041-24.085.083-36.124-.065-13.842-.675-26.5-10.768-30.462-24.013-3.633-11.515-.614-24.886 7.936-33.485 6.388-6.608 15.465-10.604 24.687-10.516zm20.47 54.586c-.058-7.57.121-15.147-.1-22.711-.798-10.142-10.192-18.639-20.37-18.378-9.678-.234-18.8 7.274-20.315 16.854-1.773 9.194 3.505 19.212 12.279 22.643 5.404 2.357 11.373 1.385 17.085 1.592h11.42zM268.523 28.507c15.98-.394 30.91 12.179 33.455 27.916 2.887 14.915-5.539 31.029-19.427 37.169-13.573 6.406-31.026 2.278-40.36-9.46-5.784-6.815-8.277-15.875-7.784-24.709V1.216H247.9v27.29c6.874.001 13.75-.001 20.623.002zm0 54.582c10.248.274 19.616-8.33 20.367-18.525 1.285-10.133-6.226-20.324-16.256-22.166-5.546-.759-11.18-.248-16.766-.398H247.9c.087 7.691-.184 15.397.155 23.078 1.072 10.161 10.261 18.21 20.468 18.011zM341.648 28.177c13.513-.267 26.472 8.586 31.473 21.082 2.61 5.804 2.574 12.234 2.49 18.465v28.532c-12.04-.041-24.085.083-36.124-.065-13.841-.675-26.499-10.768-30.462-24.013-3.632-11.515-.614-24.886 7.936-33.485 6.388-6.608 15.465-10.604 24.687-10.516zm20.47 54.586c-.057-7.57.122-15.147-.099-22.711-.798-10.142-10.192-18.639-20.371-18.378-9.677-.234-18.8 7.274-20.314 16.854-1.773 9.194 3.505 19.212 12.279 22.643 5.404 2.357 11.373 1.385 17.085 1.592h11.42zM449.87 28.342c-.028 21.007.055 42.017-.041 63.022-.49 16.533-14.697 31.392-31.284 32.256-3.151.166-6.308.065-9.463.093V110.22c5.758-.029 11.918.556 17.017-2.705 6.37-3.573 10.418-10.779 10.274-18.066-11.96 9.644-30.502 9.143-42.133-.811-8.474-6.841-13.105-17.846-12.45-28.675v-31.62h13.492c.062 12.019-.127 24.046.1 36.059.732 9.893 9.554 18.266 19.468 18.502 10.047.772 19.717-7.03 21.216-16.969.605-5.946.176-11.952.305-17.924V28.343h13.497z"})))))))}var V=u.forwardRef(L),P=(a.p,a(1)),B=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(P.jsxs)("header",{className:k.a.header,children:[Object(P.jsx)(V,{}),Object(P.jsx)("a",{href:"#App",className:k.a.logo,children:Object(P.jsx)("svg",{width:"60",height:"60",children:Object(P.jsx)("use",{href:"#icon-logo"})})}),Object(P.jsx)("h1",{className:k.a.header__title,children:"Perfect image finder"})]})}}]),a}(u.Component),F=a(16),R=a.n(F),G=a(19),U=a.n(G),D=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(P.jsx)("button",{className:U.a[this.props.class],type:this.props.type,disabled:this.props.disabled,onClick:this.props.onClick,children:this.props.text})}}]),a}(u.Component),A=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleInputChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleFormSubmit=function(t){if(t.preventDefault(),!e.state.value.trim().length)return e.props.notify("ENTER SOMETHING"),void e.resetInput();e.props.onSubmit(e.state.value)},e.resetInput=function(){e.setState({value:""}),e.props.onReset()},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(P.jsxs)("form",{className:R.a.searchForm,id:"search-form",onSubmit:this.handleFormSubmit,children:[Object(P.jsx)("input",{onChange:this.handleInputChange,value:this.state.value,className:R.a.searchForm__input,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search images...","aria-label":"Search images"}),Object(P.jsx)(D,{class:"search-form__btn",type:"submit",disabled:!this.state.value.length,text:"Search"}),Object(P.jsx)(D,{class:"search-form__btn--reset",type:"button",disabled:!this.state.value,text:"Reset",onClick:this.resetInput})]})}}]),a}(u.Component),T=a(11),H=a.n(T),X=a(6),J=a.n(X),q=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.image;return Object(P.jsxs)("li",{className:J.a.galleryCard,id:e.id,onClick:this.props.onCardClick,datasrc:e.largeImageURL,dataalt:e.tags,children:[Object(P.jsx)(V,{}),Object(P.jsx)("img",{className:J.a.galleryCard__img,src:e.webformatURL,alt:e.tags}),Object(P.jsxs)("div",{className:J.a.info,children:[Object(P.jsxs)("div",{className:J.a.info__thumb,children:[Object(P.jsxs)("p",{className:J.a.infoItem,children:[Object(P.jsx)("span",{children:e.likes}),Object(P.jsx)("svg",{className:J.a.icon,width:"18",height:"18",children:Object(P.jsx)("use",{href:"#icon-like"})})]}),Object(P.jsxs)("p",{className:J.a.infoItem,children:[Object(P.jsx)("span",{children:e.views}),Object(P.jsx)("svg",{className:J.a.icon,width:"18",height:"18",children:Object(P.jsx)("use",{href:"#icon-view"})})]}),Object(P.jsxs)("p",{className:J.a.infoItem,children:[Object(P.jsx)("span",{children:e.comments}),Object(P.jsx)("svg",{className:J.a.icon,width:"18",height:"18",children:Object(P.jsx)("use",{href:"#icon-comment"})})]}),Object(P.jsxs)("p",{className:J.a.infoItem,children:[Object(P.jsx)("span",{children:e.downloads}),Object(P.jsx)("svg",{className:J.a.icon,width:"18",height:"18",children:Object(P.jsx)("use",{href:"#icon-download"})})]})]}),Object(P.jsx)("div",{className:J.a.blur,style:{backgroundImage:"url(".concat(e.webformatURL,")")}})]})]})}}]),a}(u.Component),Z=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(P.jsx)("ul",{className:H.a.gallery,children:this.props.images.map((function(t){return Object(P.jsx)(q,{image:t,onCardClick:e.props.onCardClick},t.id)}))})}}]),a}(u.Component),W=a(17),Y=a.n(W),K=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(P.jsxs)("footer",{className:Y.a.footer,children:[Object(P.jsx)(V,{}),Object(P.jsx)("p",{children:"\xa9 All rights reserved. Images source"}),Object(P.jsx)("a",{href:"https://pixabay.com/",className:Y.a.logo,target:"_blank",noreferrer:"true",rel:"noreferrer",children:Object(P.jsx)("svg",{width:"150",height:"40",children:Object(P.jsx)("use",{href:"#icon-pixabay"})})})]})}}]),a}(u.Component),Q=a(7),$=a.n(Q),ee=document.querySelector("#modal-root"),te=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onEscapePress=function(t){return"Escape"!==t.code?null:e.props.onModalClose()},e.onBackdropClick=function(t){return t.target!==t.currentTarget?null:e.props.onModalClose()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscapePress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscapePress)}},{key:"render",value:function(){return Object(m.createPortal)(Object(P.jsxs)("div",{className:$.a.lightbox,children:[Object(P.jsx)(V,{}),Object(P.jsx)("div",{className:$.a.lightbox__overlay,onClick:this.onBackdropClick}),Object(P.jsxs)("div",{className:$.a.lightbox__content,children:[Object(P.jsx)("img",{className:$.a.lightbox__image,src:this.props.src,alt:this.props.alt}),Object(P.jsx)("div",{className:$.a.lightbox__info,children:Object(P.jsx)("button",{type:"button",className:$.a.lightbox__buttonClose,onClick:this.props.onModalClose,"aria-label":"close Modal Window",children:Object(P.jsx)("svg",{className:$.a.icon,width:"32",height:"32",children:Object(P.jsx)("use",{href:"#icon-close"})})})})]})]}),ee)}}]),a}(u.Component),ae=a(9),ne=a.n(ae),re=[1,2,3,4,5,6,7,8,9,10,11,12],ce=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(P.jsx)("ul",{className:H.a.gallery,children:re.map((function(e){return Object(P.jsx)("li",{className:ne.a.loadingItem,children:Object(P.jsxs)("div",{className:ne.a.dotBox,children:[Object(P.jsx)("span",{className:ne.a.dot1}),Object(P.jsx)("span",{className:ne.a.dot2}),Object(P.jsx)("span",{className:ne.a.dot3})]})},e)}))})}}]),a}(u.Component);function oe(e){document.getElementById(e).scrollIntoView({alignToTop:!0,behavior:"smooth",block:"center"})}var se=function(e){return z.b.error(e)},ie="idle",le="pending",he="resolved",ue="rejected",de=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={status:ie,searchValue:"",images:[],modal:{isShown:!1,imageUrl:"",alt:"photo"}},e.onSearchSubmit=function(t){e.setState({searchValue:t})},e.resetSearchData=function(){e.setState({searchValue:"",images:[],status:ie})},e.defineMainContent=function(){var t=e.state,a=t.status,n=t.images;return a===ie?Object(P.jsx)("h2",{className:"reqest-message",children:"...enter what are you looking for"}):a===le?Object(P.jsx)(ce,{}):a===he?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Z,{images:n,onCardClick:e.onGalleryCardClick}),!e.isLastPage()&&Object(P.jsx)(D,{type:"button",class:"btn",text:"Load more",onClick:e.onLoadMore})]}):a===ue?Object(P.jsx)("div",{className:"rejest-image"}):void 0},e.onLoadMore=function(){e.setState({status:le});var t=e.state.searchValue;C.setNextPage(),C.getFetchResponse(t).then((function(t){e.setState((function(e){var a=e.images;return{images:[].concat(Object(j.a)(a),Object(j.a)(t))}}));try{e.setState({status:he}),oe(String(t[0].id))}catch(a){throw Error}})).catch((function(t){se("Sorry, we couldn't find anything for you"),e.resetSearchData(),e.setState({status:ue})}))},e.isLastPage=function(){return e.state.images.length<C.perPage},e.onGalleryCardClick=function(t){var a=t.currentTarget.getAttribute("datasrc"),n=t.currentTarget.getAttribute("dataalt");e.toggleModal(a,n)},e.toggleModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"photo";e.setState((function(e){return{modal:{isShown:!e.modal.isShown,imageUrl:t,alt:a}}}))},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=t.searchValue,r=this.state.searchValue;if(n!==r){if(C.resetPage(),""===r)return void this.resetSearchData();this.setState({status:le}),C.getFetchResponse(r).then((function(e){a.setState({images:Object(j.a)(e)});try{a.setState({status:he}),oe(String(e[0].id))}catch(t){throw Error}})).catch((function(e){se("Sorry, we couldn't find anything for you"),a.resetSearchData(),a.setState({status:ue})}))}}},{key:"render",value:function(){var e=this.state.modal;return Object(P.jsxs)("div",{className:e.isShown?"AppFixed":"App",id:"App",children:[Object(P.jsx)(z.a,{theme:"colored",icon:!0,limit:1}),Object(P.jsx)(B,{}),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)(A,{onSubmit:this.onSearchSubmit,notify:se,onReset:this.resetSearchData}),this.defineMainContent()]}),Object(P.jsx)(K,{}),e.isShown&&Object(P.jsx)(te,{src:e.imageUrl,alt:e.alt,onModalClose:this.toggleModal})]})}}]),a}(u.Component),me=de;b.a.render(Object(P.jsx)(d.a.StrictMode,{children:Object(P.jsx)(me,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.6b2ab6c1.chunk.js.map