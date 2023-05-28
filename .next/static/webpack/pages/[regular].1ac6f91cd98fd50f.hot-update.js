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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/Header */ \"./layouts/partials/Header.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Contact = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [linkHref, setLinkHref] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#\");\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleSubmit1 = (e)=>{\n        e.preventDefault();\n        // Aquí puedes realizar la lógica para enviar los datos al backend\n        // por ejemplo, usando una función de envío o una llamada a la API\n        // utilizando el valor de 'email' y 'password'\n        console.log(\"Email:\", email);\n        console.log(\"Contrase\\xf1a:\", password);\n    };\n    const handleIncorrectCredentials = ()=>{\n        // Aquí puedes mostrar el cuadro de diálogo o realizar otras acciones necesarias\n        alert(\"Credenciales incorrectas\");\n    };\n    {}\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Validar los campos de correo electrónico y contraseña\n        if (!email || !password) {\n            alert(\"Por favor, completa todos los campos\");\n            return;\n        }\n        try {\n            const url = \"https://happy-fly-loincloth.cyclic.app/api/login\";\n            const respuesta = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(url, {\n                email,\n                password\n            });\n            const isAuthorized = respuesta.data === \"ok\";\n            if (isAuthorized) {\n                // Si la autenticación es exitosa, redirige al usuario a la página de categorías\n                window.location.href = \"/categories\";\n            } else {\n                // Si las credenciales son incorrectas, muestra un mensaje de error\n                alert(\"Credenciales incorrectas\");\n            }\n        } catch (error) {\n            console.log(error);\n            // Manejo de errores en caso de que falle la solicitud al backend\n            alert(\"Ocurri\\xf3 un error. Por favor, intenta nuevamente m\\xe1s tarde.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex items-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-full flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-1/4 left-1/10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 94,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full h-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/images/Login.jpg\",\n                                alt: \"Background\",\n                                layout: \"fill\",\n                                objectFit: \"cover\",\n                                quality: 70,\n                                className: \"w-full h-full object-cover\",\n                                style: {\n                                    boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 95,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                lineNumber: 93,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full lg:w-1/2 h-full bg-[#ffffff] flex flex-col p-8 lg:p-15 justify-between space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col max-w-[550px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex flex-col mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-5xl text-[#49B675] font-semibold mb-4\",\n                                    style: {\n                                        textShadow: \"2px 2px 4px rgba(0, 0, 0, 0.5)\"\n                                    },\n                                    children: \"Bienvenidos!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-[#49B675] mb-2\",\n                                    children: \"Conoce sobre la civilizaci\\xf3n azteca.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                            lineNumber: 111,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 110,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: handleEmailChange,\n                                className: \"w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 124,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                placeholder: \"Contrase\\xf1a\",\n                                value: password,\n                                onChange: handlePasswordChange,\n                                className: \"w-full text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 131,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 123,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-[#49B675] whitespace-nowrap cursor-pointer underline underline-offset-2\",\n                                children: \"Olvid\\xe9 mi contrase\\xf1a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 140,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: linkHref,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"py-2 px-4 bg-[#49B675] text-white rounded hover:bg-[#3F9256]\",\n                                        onClick: handleSubmit,\n                                        children: \"logearse\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                                lineNumber: 143,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                        lineNumber: 139,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n                lineNumber: 109,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kampa\\\\Documents\\\\6-Semestre\\\\Proyecto integrador\\\\P-I-final\\\\frontend\\\\layouts\\\\Contact.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"7TSZMkqrsvP38bGC+7TqVxVkE3Y=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQVNwSDtHQS9JTWxCO0tBQUFBO0FBaUpOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvQ29udGFjdC5qcz8zOTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIyIH0gZnJvbSBcIi4vcGFydGlhbHMvSGVhZGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xpbmtIcmVmLCBzZXRMaW5rSHJlZl0gPSB1c2VTdGF0ZShcIiNcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0MSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBBcXXDrSBwdWVkZXMgcmVhbGl6YXIgbGEgbMOzZ2ljYSBwYXJhIGVudmlhciBsb3MgZGF0b3MgYWwgYmFja2VuZFxyXG4gICAgLy8gcG9yIGVqZW1wbG8sIHVzYW5kbyB1bmEgZnVuY2nDs24gZGUgZW52w61vIG8gdW5hIGxsYW1hZGEgYSBsYSBBUElcclxuICAgIC8vIHV0aWxpemFuZG8gZWwgdmFsb3IgZGUgJ2VtYWlsJyB5ICdwYXNzd29yZCdcclxuICAgIGNvbnNvbGUubG9nKCdFbWFpbDonLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZygnQ29udHJhc2XDsWE6JywgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jb3JyZWN0Q3JlZGVudGlhbHMgPSAoKSA9PiB7XHJcbiAgICAvLyBBcXXDrSBwdWVkZXMgbW9zdHJhciBlbCBjdWFkcm8gZGUgZGnDoWxvZ28gbyByZWFsaXphciBvdHJhcyBhY2Npb25lcyBuZWNlc2FyaWFzXHJcbiAgICBhbGVydChcIkNyZWRlbmNpYWxlcyBpbmNvcnJlY3Rhc1wiKTtcclxuICB9O1xyXG5cclxuey8qICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZmV0Y2goJ2h0dHBzOi8vZGVzYmFjay1iYWNrcy52ZXJjZWwuYXBwL2xvZ2luJywge1xyXG4gIG1ldGhvZDogJ1BPU1QnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICB9LFxyXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbn0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXRlZ29yaWVzXCI7XHJcbiAgfSlcclxuICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZW4gbGEgc29saWNpdHVkOicsIGVycm9yKTtcclxuICAgIGhhbmRsZUluY29ycmVjdENyZWRlbnRpYWxzKCk7XHJcbiAgfSk7XHJcbn1cclxuKi99XHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyBWYWxpZGFyIGxvcyBjYW1wb3MgZGUgY29ycmVvIGVsZWN0csOzbmljbyB5IGNvbnRyYXNlw7FhXHJcbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgIGFsZXJ0KFwiUG9yIGZhdm9yLCBjb21wbGV0YSB0b2RvcyBsb3MgY2FtcG9zXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9oYXBweS1mbHktbG9pbmNsb3RoLmN5Y2xpYy5hcHAvYXBpL2xvZ2luXCI7XHJcbiAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgICBjb25zdCBpc0F1dGhvcml6ZWQgPSByZXNwdWVzdGEuZGF0YSA9PT0gXCJva1wiO1xyXG5cclxuICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgLy8gU2kgbGEgYXV0ZW50aWNhY2nDs24gZXMgZXhpdG9zYSwgcmVkaXJpZ2UgYWwgdXN1YXJpbyBhIGxhIHDDoWdpbmEgZGUgY2F0ZWdvcsOtYXNcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXRlZ29yaWVzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTaSBsYXMgY3JlZGVuY2lhbGVzIHNvbiBpbmNvcnJlY3RhcywgbXVlc3RyYSB1biBtZW5zYWplIGRlIGVycm9yXHJcbiAgICAgIGFsZXJ0KFwiQ3JlZGVuY2lhbGVzIGluY29ycmVjdGFzXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAvLyBNYW5lam8gZGUgZXJyb3JlcyBlbiBjYXNvIGRlIHF1ZSBmYWxsZSBsYSBzb2xpY2l0dWQgYWwgYmFja2VuZFxyXG4gICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvci4gUG9yIGZhdm9yLCBpbnRlbnRhIG51ZXZhbWVudGUgbcOhcyB0YXJkZS5cIik7XHJcbsKgwqDCoMKgfVxyXG7CoMKgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBpdGVtcy1zdGFydFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMS8xMFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0xvZ2luLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICBxdWFsaXR5PXs3MH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKVwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgaC1mdWxsIGJnLVsjZmZmZmZmXSBmbGV4IGZsZXgtY29sIHAtOCBsZzpwLTE1IGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBtYXgtdy1bNTUwcHhdXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBtYi00XCI+XHJcbiAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1bIzQ5QjY3NV0gZm9udC1zZW1pYm9sZCBtYi00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dFNoYWRvdzogXCIycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSlcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCaWVudmVuaWRvcyFcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyM0OUI2NzVdIG1iLTJcIj5cclxuICAgICAgICAgICAgQ29ub2NlIHNvYnJlIGxhIGNpdmlsaXphY2nDs24gYXp0ZWNhLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWJsYWNrIHB5LTQgYmctdHJhbnNwYXJlbnQgYm9yZGVyLWIgYm9yZGVyLWJsYWNrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ibGFjayBweS00IGJnLXRyYW5zcGFyZW50IGJvcmRlci1iIGJvcmRlci1ibGFjayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LVsjNDlCNjc1XSB3aGl0ZXNwYWNlLW5vd3JhcCBjdXJzb3ItcG9pbnRlciB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICBPbHZpZMOpIG1pIGNvbnRyYXNlw7FhXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtsaW5rSHJlZn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHktMiBweC00IGJnLVsjNDlCNjc1XSB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctWyMzRjkyNTZdXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICBsb2dlYXJzZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIyIiwiSW1hZ2UiLCJheGlvcyIsIkxpbmsiLCJDb250YWN0IiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsaW5rSHJlZiIsInNldExpbmtIcmVmIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdDEiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbmNvcnJlY3RDcmVkZW50aWFscyIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwidXJsIiwicmVzcHVlc3RhIiwicG9zdCIsImlzQXV0aG9yaXplZCIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInF1YWxpdHkiLCJzdHlsZSIsImJveFNoYWRvdyIsImgzIiwidGV4dFNoYWRvdyIsInAiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/Contact.js\n"));

/***/ })

});