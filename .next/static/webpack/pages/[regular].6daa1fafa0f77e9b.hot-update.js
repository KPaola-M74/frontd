"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[regular]",{

/***/ "./layouts/Contact.js":
/*!****************************!*\
  !*** ./layouts/Contact.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/Header */ \"./layouts/partials/Header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Baseof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Baseof */ \"./layouts/Baseof.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Contact = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [linkHref, setLinkHref] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#\");\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleSubmit1 = (e)=>{\n        e.preventDefault();\n        // Aquí puedes realizar la lógica para enviar los datos al backend\n        // por ejemplo, usando una función de envío o una llamada a la API\n        // utilizando el valor de 'email' y 'password'\n        console.log(\"Email:\", email);\n        console.log(\"Contrase\\xf1a:\", password);\n    };\n    const handleIncorrectCredentials = ()=>{\n        // Aquí puedes mostrar el cuadro de diálogo o realizar otras acciones necesarias\n        alert(\"Credenciales incorrectas\");\n    };\n    {}\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Validar los campos de correo electrónico y contraseña\n        if (!email || !password) {\n            alert(\"Por favor, completa todos los campos\");\n            return;\n        }\n        try {\n            const url = \"https://happy-fly-loincloth.cyclic.app/api/login\";\n            const respuesta = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(url, {\n                email,\n                password\n            });\n            const isAuthorized = respuesta.data === \"ok\";\n            if (isAuthorized) {\n                // Si la autenticación es exitosa, redirige al usuario a la página de categorías\n                window.location.href = \"/categories\";\n            } else {\n                // Si las credenciales son incorrectas, muestra un mensaje de error\n                alert(\"Credenciales incorrectas\");\n            }\n        } catch (error) {\n            console.log(error);\n            // Manejo de errores en caso de que falle la solicitud al backend\n            alert(\"Ocurri\\xf3 un error. Por favor, intenta nuevamente m\\xe1s tarde.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-full flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-1/4 left-1/10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/images/Login.jpg\",\n                                alt: \"Background\",\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                quality: 70,\n                                className: \"w-full h-full object-cover\",\n                                style: {\n                                    boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                lineNumber: 94,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full lg:w-1/2 h-full bg-[#ffffff] flex flex-col p-8 lg:p-15 justify-between space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col max-w-[550px] mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-col mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-5xl text-[#49B675] font-semibold mb-1\",\n                                    style: {\n                                        textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.5)\"\n                                    },\n                                    children: \"Bienvenidos!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-[#49B675] mb-2\",\n                                    children: \"Conoce sobre la civilizaci\\xf3n azteca.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                            lineNumber: 112,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 111,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: handleEmailChange,\n                                className: \"w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 125,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Contrase\\xf1a\",\n                                value: password,\n                                onChange: handlePasswordChange,\n                                className: \"w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 132,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 124,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2 mb-4\",\n                                children: \"Olvid\\xe9 mi contrase\\xf1a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: linkHref,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"py-2 px-2 bg-[#49B675] text-white rounded hover:bg-[#3F9256]\",\n                                        onClick: handleSubmit,\n                                        children: \"logearse\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 144,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 140,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                lineNumber: 110,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"7TSZMkqrsvP38bGC+7TqVxVkE3Y=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQVVwSDtHQWhKTWxCO0tBQUFBO0FBa0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvQ29udGFjdC5qcz8zOTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIyIH0gZnJvbSBcIi4vcGFydGlhbHMvSGVhZGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2VvZic7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbGlua0hyZWYsIHNldExpbmtIcmVmXSA9IHVzZVN0YXRlKFwiI1wiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQxID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIEFxdcOtIHB1ZWRlcyByZWFsaXphciBsYSBsw7NnaWNhIHBhcmEgZW52aWFyIGxvcyBkYXRvcyBhbCBiYWNrZW5kXHJcbiAgICAvLyBwb3IgZWplbXBsbywgdXNhbmRvIHVuYSBmdW5jacOzbiBkZSBlbnbDrW8gbyB1bmEgbGxhbWFkYSBhIGxhIEFQSVxyXG4gICAgLy8gdXRpbGl6YW5kbyBlbCB2YWxvciBkZSAnZW1haWwnIHkgJ3Bhc3N3b3JkJ1xyXG4gICAgY29uc29sZS5sb2coJ0VtYWlsOicsIGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKCdDb250cmFzZcOxYTonLCBwYXNzd29yZCk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVJbmNvcnJlY3RDcmVkZW50aWFscyA9ICgpID0+IHtcclxuICAgIC8vIEFxdcOtIHB1ZWRlcyBtb3N0cmFyIGVsIGN1YWRybyBkZSBkacOhbG9nbyBvIHJlYWxpemFyIG90cmFzIGFjY2lvbmVzIG5lY2VzYXJpYXNcclxuICAgIGFsZXJ0KFwiQ3JlZGVuY2lhbGVzIGluY29ycmVjdGFzXCIpO1xyXG4gIH07XHJcblxyXG57LyogIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9kZXNiYWNrLWJhY2tzLnZlcmNlbC5hcHAvbG9naW4nLCB7XHJcbiAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIH0sXHJcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSlcclxufSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KVxyXG4gIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhdGVnb3JpZXNcIjtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbiBsYSBzb2xpY2l0dWQ6JywgZXJyb3IpO1xyXG4gICAgaGFuZGxlSW5jb3JyZWN0Q3JlZGVudGlhbHMoKTtcclxuICB9KTtcclxufVxyXG4qL31cclxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vIFZhbGlkYXIgbG9zIGNhbXBvcyBkZSBjb3JyZW8gZWxlY3Ryw7NuaWNvIHkgY29udHJhc2XDsWFcclxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgYWxlcnQoXCJQb3IgZmF2b3IsIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3NcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2hhcHB5LWZseS1sb2luY2xvdGguY3ljbGljLmFwcC9hcGkvbG9naW5cIjtcclxuICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgIGNvbnN0IGlzQXV0aG9yaXplZCA9IHJlc3B1ZXN0YS5kYXRhID09PSBcIm9rXCI7XHJcblxyXG4gICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAvLyBTaSBsYSBhdXRlbnRpY2FjacOzbiBlcyBleGl0b3NhLCByZWRpcmlnZSBhbCB1c3VhcmlvIGEgbGEgcMOhZ2luYSBkZSBjYXRlZ29yw61hc1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NhdGVnb3JpZXNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNpIGxhcyBjcmVkZW5jaWFsZXMgc29uIGluY29ycmVjdGFzLCBtdWVzdHJhIHVuIG1lbnNhamUgZGUgZXJyb3JcclxuICAgICAgYWxlcnQoXCJDcmVkZW5jaWFsZXMgaW5jb3JyZWN0YXNcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIE1hbmVqbyBkZSBlcnJvcmVzIGVuIGNhc28gZGUgcXVlIGZhbGxlIGxhIHNvbGljaXR1ZCBhbCBiYWNrZW5kXHJcbiAgICBhbGVydChcIk9jdXJyacOzIHVuIGVycm9yLiBQb3IgZmF2b3IsIGludGVudGEgbnVldmFtZW50ZSBtw6FzIHRhcmRlLlwiKTtcclxuwqDCoMKgwqB9XHJcbsKgwqB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgbGVmdC0xLzEwXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvTG9naW4uanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIHF1YWxpdHk9ezcwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCIwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMiBoLWZ1bGwgYmctWyNmZmZmZmZdIGZsZXggZmxleC1jb2wgcC04IGxnOnAtMTUganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1heC13LVs1NTBweF0gbWItNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgbWItNFwiPlxyXG4gICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtWyM0OUI2NzVdIGZvbnQtc2VtaWJvbGQgbWItMVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6IFwiMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQmllbnZlbmlkb3MhXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjNDlCNjc1XSBtYi0yXCI+XHJcbiAgICAgICAgICAgIENvbm9jZSBzb2JyZSBsYSBjaXZpbGl6YWNpw7NuIGF6dGVjYS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ibGFjayBweS00IGJnLXRyYW5zcGFyZW50IGJvcmRlci1iIGJvcmRlci1ibGFjayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtYmxhY2sgcHktNCBiZy10cmFuc3BhcmVudCBib3JkZXItYiBib3JkZXItYmxhY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1bIzQ5QjY3NV0gd2hpdGVzcGFjZS1ub3dyYXAgY3Vyc29yLXBvaW50ZXIgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMiBtYi00XCI+XHJcbiAgICAgICAgICBPbHZpZMOpIG1pIGNvbnRyYXNlw7FhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtsaW5rSHJlZn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC0yIGJnLVsjNDlCNjc1XSB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctWyMzRjkyNTZdXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICBsb2dlYXJzZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIyIiwiSW1hZ2UiLCJheGlvcyIsIkxpbmsiLCJCYXNlIiwiQ29udGFjdCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibGlua0hyZWYiLCJzZXRMaW5rSHJlZiIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQxIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5jb3JyZWN0Q3JlZGVudGlhbHMiLCJhbGVydCIsImhhbmRsZVN1Ym1pdCIsInVybCIsInJlc3B1ZXN0YSIsInBvc3QiLCJpc0F1dGhvcml6ZWQiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJxdWFsaXR5Iiwic3R5bGUiLCJib3hTaGFkb3ciLCJoMyIsInRleHRTaGFkb3ciLCJwIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/Contact.js\n"));

/***/ })

});