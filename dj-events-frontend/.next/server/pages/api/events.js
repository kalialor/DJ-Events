"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "(api)/./pages/api/events/index.js":
/*!***********************************!*\
  !*** ./pages/api/events/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// http://localhost:3000/api/events\nconst { events } = __webpack_require__(/*! ./data.json */ \"(api)/./pages/api/events/data.json\");\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(events);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} is not allowed`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFDN0UsbUNBQW1DO0FBRW5DLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDO0FBRVosU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUDtJQUN2QixPQUFPO1FBQ0xJLElBQUlJLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTTtRQUM5QkosSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxTQUFTLENBQUMsT0FBTyxFQUFFTixJQUFJRSxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQUE7SUFDdkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RqLWV2ZW50cy1mcm9udGVuZC8uL3BhZ2VzL2FwaS9ldmVudHMvaW5kZXguanM/MGM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ldmVudHNcblxuY29uc3QgeyBldmVudHMgfSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudHMpXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IGlzIG5vdCBhbGxvd2VkYH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJldmVudHMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/events/data.json":
/*!************************************!*\
  !*** ./pages/api/events/data.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"events":[{"id":1,"name":"DJ Night Extravaganza","slug":"dj-night-extravaganza","venue":"Club Vibes","address":"123 Main Street, Cityville","performers":["DJ Awesome","DJ MegaMix"],"date":"2023-07-15","time":"20:00","description":"Join us for a night of non-stop music and dance!","image":"/images/sample/djparty.jpeg"},{"id":2,"name":"Summer Beats Festival","slug":"summer-beats-festival","venue":"Beach Stage","address":"456 Beach Avenue, Seaside Town","performers":["DJ GrooveMaster","DJ BassDrop"],"date":"2023-08-20","time":"18:00","description":"Experience the ultimate summer party with electrifying beats!","image":"/images/sample/djparty2.jpeg"},{"id":3,"name":"Rave in the Forest","slug":"rave-in-the-forest","venue":"Enchanted Grove","address":"789 Woodland Drive, Natureville","performers":["DJ NatureLover","DJ TranceMaster"],"date":"2023-09-10","time":"22:00","description":"Immerse yourself in an enchanting rave surrounded by nature\'s beauty!","image":"/images/sample/djparty3.jpeg"},{"id":4,"name":"EDM Explosion","slug":"edm-explosion","venue":"Pulsar Arena","address":"321 Electron Avenue, Technocity","performers":["DJ ElectroFunk","DJ SynthWizard"],"date":"2023-10-05","time":"21:30","description":"Get ready for an explosive night of pulsating EDM beats!","image":"/images/sample/djparty4.jpeg"},{"id":5,"name":"Sunset Sessions","slug":"sunset-sessions","venue":"Sky Terrace","address":"987 Rooftop Road, Skyline City","performers":["DJ SunsetSpinner","DJ ChillVibes"],"date":"2023-11-15","time":"17:30","description":"Watch the sunset while grooving to laid-back tunes at this rooftop party!","image":"/images/sample/djparty5.jpeg"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/index.js"));
module.exports = __webpack_exports__;

})();