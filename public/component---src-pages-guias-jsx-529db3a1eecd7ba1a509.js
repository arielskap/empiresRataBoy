(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BZyD:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("Kvkj"),l=a("oN15"),o=a("Cpml");t.default=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],c=Object(r.useState)(!1),d=c[0],i=c[1],m=Object(r.useState)(!1),f=m[0],u=m[1],b=function(){Object(o.a)(".Modal","fadeOut faster"),Object(o.a)(".Modal__container","slideOutUp faster",(function(){document.body.classList.contains("overflow-hidden")&&document.body.classList.remove("overflow-hidden"),i(!1)}))};return Object(r.useEffect)((function(){Object(l.a)("guias","5e8ba4cfff9c906bdf1d1275",{setOpen:i,setErrorResponse:u,setJson:a})}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"animate fadeIn faster mx-4 lg:grid lg:grid-cols-2"},n.a.createElement("div",{className:"lg:flex lg:flex-col lg:justify-center lg:items-center"},n.a.createElement("div",{className:"py-4"},n.a.createElement("h1",{className:"text-xl font-bold text-center"},"¡Todas mis Guías!")),n.a.createElement("div",{className:"w-full flex items-center justify-center"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/drive/folders/1DqpgV7wugGVlbo5TvehZ7YrBG5NpMPEA",className:"bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded"},"Ir al Drive"))),n.a.createElement("div",{className:"mt-4"},n.a.createElement("h2",{className:"text-lg font-bold"},"Listado de Guías"),n.a.createElement("ul",{className:"rounded border-2 border-pink-500 flex flex-col items-center mt-2 sm:grid sm:grid-cols-2 p-2"},t&&t.map((function(e){var t=e.id;return n.a.createElement("li",{className:"text-center mb-1",key:t},n.a.createElement(s.CardGuias,{json:e}))}))))),n.a.createElement(s.Modal,{isOpen:d,onClose:b},n.a.createElement(s.MessageErrorFetch,{errorResponse:f,handleCloseModal:b},"Traer la Lista de Guias")))}}}]);
//# sourceMappingURL=component---src-pages-guias-jsx-529db3a1eecd7ba1a509.js.map