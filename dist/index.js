(()=>{"use strict";var e={554:(e,t,r)=>{r.r(t)},523:(e,t,r)=>{r.r(t)},636:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(556));t.default=function(e){var t=e.initialCount,r=(0,i.useState)(t),n=r[0],o=r[1];return i.default.createElement("div",null,i.default.createElement("p",null,"Count: ",n),i.default.createElement("button",{onClick:function(){o(n-1)}},"-1"),i.default.createElement("button",{onClick:function(){o(n+1)}},"+1"))}},106:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(636);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},638:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(556));r(554),t.default=function(e){var t=e.autoplay,r=void 0===t||t;console.log(r);var n=(0,i.useState)(!1),o=n[0],u=n[1],l=function(){u(!0)};return i.default.createElement("div",{className:"dcomp-gort"},"Click Gort.",i.default.createElement("img",{id:"dcomp-gort-img",src:"https://ih1.redbubble.net/image.3919572071.7167/pp,504x498-pad,600x600,f8f8f8.jpg",style:{display:o?"none":"block"},onClick:l,onKeyDown:function(e){" "!==(null==e?void 0:e.key)&&"Enter"!==(null==e?void 0:e.key)||(null==e||e.preventDefault(),l())},role:"button",alt:"Gort",tabIndex:0,"aria-hidden":o,"aria-label":"Select to see something fun"}),o&&i.default.createElement("iframe",{id:"dcomp-gort-iframe",src:"https://www.youtube.com/embed/lvwZQTB4iv4?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1",title:"capybara ok i pull up",allow:r?"autoplay":""}))}},815:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(638);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},392:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(556));r(523),t.default=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.foregroundColor,u=void 0===n?"#ffffff":n,i=e.backgroundColor,l=void 0===i?"#000000":i,a=e.children,f="medium"===r?12:8,d="medium"===r?16:12;return o.default.createElement("div",{className:"Label",style:{color:u,background:l,padding:f,fontSize:d}},a)}},115:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(392);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=t.Gort=t.Counter=void 0;var o=r(106);Object.defineProperty(t,"Counter",{enumerable:!0,get:function(){return n(o).default}});var u=r(815);Object.defineProperty(t,"Gort",{enumerable:!0,get:function(){return n(u).default}});var i=r(115);Object.defineProperty(t,"Label",{enumerable:!0,get:function(){return n(i).default}})},556:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(607);module.exports=n})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Im14QkFBQSxnQkE2QkEsVUF2QmdCLFNBQUMsRyxJQUFFQSxFQUFZLGVBQ3ZCLEdBQW9CLElBQUFDLFVBQVNELEdBQTVCRSxFQUFLLEtBQUVDLEVBQVEsS0FDdEIsT0FDRSxtQ0FDRSxpQyxVQUFXRCxHQUNYLGtDQUNFRSxRQUFTLFdBQ1BELEVBQVNELEVBQVEsRUFDbkIsR0FBQyxNQUlILGtDQUNFRSxRQUFTLFdBQ1BELEVBQVNELEVBQVEsRUFDbkIsR0FBQyxNQU1ULEMsNEtDM0JBLGFBQVMsNEVBQUFHLE9BQU8sRywrc0JDQWhCLGdCQUNBLE9Bd0RBLFVBN0NBLFNBQWMsRyxJQUFFLElBQUFDLFNBQUFBLE9BQVEsSUFBRyxHQUFJLEVBQzdCQyxRQUFRQyxJQUFJRixHQUVOLE9BQXNCLElBQUFMLFdBQWtCLEdBQXZDUSxFQUFNLEtBQUVDLEVBQVMsS0FFbEJDLEVBQVcsV0FDZkQsR0FBVSxFQUNaLEVBV0EsT0FDRSwrQkFBS0UsVUFBVSxjLGNBRWIsK0JBQ0VDLEdBQUcsaUJBQ0hDLElBM0JOLG9GQTRCTUMsTUFBTyxDQUFFQyxRQUFVUCxFQUFtQixPQUFWLFNBQzVCTCxRQUFTTyxFQUNUTSxVQWpCd0MsU0FDNUNDLEdBRWUsT0FBWEEsYUFBQyxFQUFEQSxFQUFHQyxNQUEwQixXQUFYRCxhQUFDLEVBQURBLEVBQUdDLE9BQ3ZCRCxTQUFBQSxFQUFHRSxpQkFDSFQsSUFFSixFQVdNVSxLQUFLLFNBQ0xDLElBQUksT0FDSkMsU0FBVSxFQUFDLGNBQ0VkLEVBQU0sYUFDUixnQ0FFWkEsR0FDQyxrQ0FDRUksR0FBRyxvQkFDSEMsSUF0Q1Isb0dBdUNRVSxNQUFNLHdCQUNOQyxNQUFPbkIsRUFBVyxXQUFhLEtBS3pDLEMsNEtDdkRBLGFBQVMsNEVBQUFELE9BQU8sRywySkNBaEIsZ0JBQ0EsT0FxQ0EsVUF4QmMsU0FBQyxHLElBQ2IsSUFBQXFCLEtBQUFBLE9BQUksSUFBRyxXQUFRLEVBQ2YsSUFBQUMsZ0JBQUFBLE9BQWUsSUFBRyxZQUFTLEVBQzNCLElBQUFDLGdCQUFBQSxPQUFlLElBQUcsWUFBUyxFQUMzQkMsRUFBUSxXQUVGQyxFQUFtQixXQUFUSixFQUFvQixHQUFLLEVBQ25DSyxFQUFvQixXQUFUTCxFQUFvQixHQUFLLEdBRTFDLE9BQ0UsK0JBQ0VkLFVBQVUsUUFDVkcsTUFBTyxDQUNMaUIsTUFBT0wsRUFDUE0sV0FBWUwsRUFDWkUsUUFBTyxFQUNQQyxTQUFRLElBR1RGLEVBR1AsQyw0S0NwQ0EsYUFBUyw0RUFBQXhCLE9BQU8sRywyTENBaEIsYUFBUyw0RUFBQUEsT0FBTyxJQUNoQixhQUFTLHlFQUFBQSxPQUFPLElBQ2hCLGFBQVMsMEVBQUFBLE9BQU8sRyxVQ0ZoQjZCLEVBQU9DLFFBQVVDLFFBQVEsUSxHQ0NyQkMsRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhTCxRQUdyQixJQUFJRCxFQUFTRyxFQUF5QkUsR0FBWSxDQUdqREosUUFBUyxDQUFDLEdBT1gsT0FIQU8sRUFBb0JILEdBQVVJLEtBQUtULEVBQU9DLFFBQVNELEVBQVFBLEVBQU9DLFFBQVNHLEdBR3BFSixFQUFPQyxPQUNmLENDckJBRyxFQUFvQk0sRUFBS1QsSUFDSCxvQkFBWFUsUUFBMEJBLE9BQU9DLGFBQzFDQyxPQUFPQyxlQUFlYixFQUFTVSxPQUFPQyxZQUFhLENBQUVHLE1BQU8sV0FFN0RGLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFYyxPQUFPLEdBQU8sRUNGOUQsSUFBSUMsRUFBc0JaLEVBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kY29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0NvdW50ZXIvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vZGNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9Db3VudGVyL2luZGV4LnRzIiwid2VicGFjazovL2Rjb21wb25lbnRzLy4vc3JjL2NvbXBvbmVudHMvR29ydC9Hb3J0LnRzeCIsIndlYnBhY2s6Ly9kY29tcG9uZW50cy8uL3NyYy9jb21wb25lbnRzL0dvcnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9MYWJlbC9MYWJlbC50c3giLCJ3ZWJwYWNrOi8vZGNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9MYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9kY29tcG9uZW50cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9kY29tcG9uZW50cy9leHRlcm5hbCBjb21tb25qcy1tb2R1bGUgXCJyZWFjdFwiIiwid2VicGFjazovL2Rjb21wb25lbnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rjb21wb25lbnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGNvbXBvbmVudHMvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJQcm9wcyB7XG4gIGluaXRpYWxDb3VudDogbnVtYmVyO1xufVxuXG5jb25zdCBDb3VudGVyID0gKHsgaW5pdGlhbENvdW50IH06IENvdW50ZXJQcm9wcykgPT4ge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGluaXRpYWxDb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPkNvdW50OiB7Y291bnR9PC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q291bnQoY291bnQgLSAxKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgLTFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q291bnQoY291bnQgKyAxKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgKzFcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db3VudGVyXCI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgS2V5Ym9hcmRFdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0dvcnQuc2Nzc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvcnRQcm9wcyB7XG4gIGF1dG9wbGF5PzogYm9vbGVhbjtcbn1cblxuY29uc3QgZ29ydEltZyA9XG4gIFwiaHR0cHM6Ly9paDEucmVkYnViYmxlLm5ldC9pbWFnZS4zOTE5NTcyMDcxLjcxNjcvcHAsNTA0eDQ5OC1wYWQsNjAweDYwMCxmOGY4ZjguanBnXCI7XG5jb25zdCBnb3J0VmlkID1cbiAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9sdndaUVRCNGl2ND9yZWw9MD92ZXJzaW9uPTMmYXV0b3BsYXk9MSZjb250cm9scz0wJnNob3dpbmZvPTAmbG9vcD0xXCI7XG5cbmZ1bmN0aW9uIEdvcnQoeyBhdXRvcGxheSA9IHRydWUgfTogR29ydFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKGF1dG9wbGF5KTtcblxuICBjb25zdCBbcHVsbFVwLCBzZXRQdWxsVXBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHBsYXlHb3J0ID0gKCkgPT4ge1xuICAgIHNldFB1bGxVcCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBrZXlQcmVzc0hhbmRsZXI6IEtleWJvYXJkRXZlbnRIYW5kbGVyID0gKFxuICAgIGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgaWYgKGU/LmtleSA9PT0gXCIgXCIgfHwgZT8ua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGU/LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwbGF5R29ydCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGNvbXAtZ29ydFwiPlxuICAgICAgQ2xpY2sgR29ydC5cbiAgICAgIDxpbWdcbiAgICAgICAgaWQ9XCJkY29tcC1nb3J0LWltZ1wiXG4gICAgICAgIHNyYz17Z29ydEltZ31cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogIXB1bGxVcCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICAgIG9uQ2xpY2s9e3BsYXlHb3J0fVxuICAgICAgICBvbktleURvd249e2tleVByZXNzSGFuZGxlcn1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGFsdD1cIkdvcnRcIlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgYXJpYS1oaWRkZW49e3B1bGxVcH1cbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCB0byBzZWUgc29tZXRoaW5nIGZ1blwiXG4gICAgICAvPlxuICAgICAge3B1bGxVcCAmJiAoXG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICBpZD1cImRjb21wLWdvcnQtaWZyYW1lXCJcbiAgICAgICAgICBzcmM9e2dvcnRWaWR9XG4gICAgICAgICAgdGl0bGU9XCJjYXB5YmFyYSBvayBpIHB1bGwgdXBcIlxuICAgICAgICAgIGFsbG93PXthdXRvcGxheSA/IFwiYXV0b3BsYXlcIiA6IFwiXCJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHb3J0O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR29ydCdcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vTGFiZWwuc2Nzc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhYmVsUHJvcHMge1xuICAvKiogIFNldHMgdGhlIHNpemUqL1xuICBzaXplPzogXCJtZWRpdW1cIiB8IFwic21hbGxcIjtcbiAgLyoqICBTZXRzIHRoZSB0ZXh0IGNvbG9yICovXG4gIGZvcmVncm91bmRDb2xvcj86IHN0cmluZztcbiAgLyoqICBTZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgLyoqICBTZXRzIHRoZSBsYWJlbCB0ZXh0ICovXG4gIGNoaWxkcmVuOiBzdHJpbmc7XG59XG5cbmNvbnN0IExhYmVsID0gKHtcbiAgc2l6ZSA9IFwibWVkaXVtXCIsXG4gIGZvcmVncm91bmRDb2xvciA9IFwiI2ZmZmZmZlwiLFxuICBiYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIixcbiAgY2hpbGRyZW4sXG59OiBMYWJlbFByb3BzKSA9PiB7XG4gIGNvbnN0IHBhZGRpbmcgPSBzaXplID09PSBcIm1lZGl1bVwiID8gMTIgOiA4O1xuICBjb25zdCBmb250U2l6ZSA9IHNpemUgPT09IFwibWVkaXVtXCIgPyAxNiA6IDEyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiTGFiZWxcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgY29sb3I6IGZvcmVncm91bmRDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBwYWRkaW5nLFxuICAgICAgICBmb250U2l6ZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTGFiZWxcIjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ291bnRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ291bnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHb3J0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Hb3J0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExhYmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9MYWJlbFwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sIm5hbWVzIjpbImluaXRpYWxDb3VudCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsIm9uQ2xpY2siLCJkZWZhdWx0IiwiYXV0b3BsYXkiLCJjb25zb2xlIiwibG9nIiwicHVsbFVwIiwic2V0UHVsbFVwIiwicGxheUdvcnQiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsIm9uS2V5RG93biIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJvbGUiLCJhbHQiLCJ0YWJJbmRleCIsInRpdGxlIiwiYWxsb3ciLCJzaXplIiwiZm9yZWdyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hpbGRyZW4iLCJwYWRkaW5nIiwiZm9udFNpemUiLCJjb2xvciIsImJhY2tncm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9