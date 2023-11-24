"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_HFT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HFT */ \"./src/components/HFT.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainId = ref2[0], setChainId = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainname = ref3[0], setChainName = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //get ETH balance and network info only when having currentAccount \n        if (!currentAccount || !ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.isAddress(currentAccount)) return;\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.getBalance(currentAccount).then(function(result) {\n            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(result));\n        }).catch(function(e) {\n            return console.log(e);\n        });\n        provider.getNetwork().then(function(result) {\n            setChainId(result.chainId);\n            setChainName(result.name);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    }, [\n        currentAccount\n    ]);\n    //click connect\n    var onClickConnect = function() {\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        //we can do it using ethers.js\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.send(\"eth_requestAccounts\", []).then(function(accounts) {\n            if (accounts.length > 0) setCurrentAccount(accounts[0]);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    };\n    //click disconnect\n    var onClickDisconnect = function() {\n        console.log(\"onClickDisConnect\");\n        setBalance(undefined);\n        setCurrentAccount(undefined);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                color: 'blue',\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"djt DAPP\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    as: \"h3\",\n                    my: 4,\n                    children: \"NFT Dapp \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                color: 'blue',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        my: 4,\n                        children: currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            onClick: onClickDisconnect,\n                            children: [\n                                \"账户:\",\n                                currentAccount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            onClick: onClickConnect,\n                            children: \"连接Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                textAlign: \"center\",\n                                children: \"账户信息\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"当前用户的ETH余额 : \",\n                                    balance\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"区块链信息: 区块链id \",\n                                    chainId,\n                                    \" 名字 \",\n                                    chainname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 12\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                fontSize: \"5xl\",\n                                textAlign: \"center\",\n                                color: \"red\",\n                                children: \"铸造NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                mt: 2,\n                                fontWeight: \"bold\",\n                                children: \"合约地址:  0xD362f709DEB9190DCE78669d13A71cE74E137599\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HFT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                contractAddress: \"0xD362f709DEB9190DCE78669d13A71cE74E137599\",\n                                currentAccount: currentAccount\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"Tm/U/AhNrV/wIOrE4Xq20TijZqI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztnR0FPM0NmLGtEQUFqQjt3QkFBRStDLEVBQUUsRUFBRSxDQUFDO3dCQUFFQyxDQUFDLEVBQUUsQ0FBQzs7d0dBQ2RqRCxzREFBTztnQ0FBQzZDLEVBQUUsRUFBRSxDQUFDO2dDQUFFTyxRQUFRLEVBQUMsQ0FBSztnQ0FBQ0QsU0FBUyxFQUFDLENBQVE7Z0NBQUNWLEtBQUssRUFBQyxDQUFLOzBDQUFDLENBRTlEOzs7Ozs7d0dBQ0N2QyxrREFBSTtnQ0FBQ2lELFNBQVMsRUFBQyxDQUFRO2dDQUFDRSxFQUFFLEVBQUUsQ0FBQztnQ0FBRUMsVUFBVSxFQUFDLENBQU07MENBQUMsQ0FFbEQ7Ozs7Ozt3R0FHQzlDLHVEQUFHO2dDQUNBK0MsZUFBZSxFQUFDLENBQTRDO2dDQUM1RDNDLGNBQWMsRUFBRUEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTNUMsQ0FBQztHQXJIS0gsSUFBSTtLQUFKQSxJQUFJO0FBdUhWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvaW5kZXgudHN4XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFZTdGFjaywgSGVhZGluZywgQm94LCBMaW5rT3ZlcmxheSwgTGlua0JveH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCJcclxuaW1wb3J0IHtUZXh0LCBCdXR0b24sIEZsZXh9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBIRlQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSEZUXCI7XHJcbmltcG9ydCBpbWcgZnJvbSBcIi4uL3BhZ2VzL2EucG5nXCJcclxuXHJcblxyXG5kZWNsYXJlIGxldCB3aW5kb3c6YW55XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KClcclxuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxyXG4gIGNvbnN0IFtjaGFpbklkLCBzZXRDaGFpbklkXSA9IHVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4oKVxyXG4gIGNvbnN0IFtjaGFpbm5hbWUsIHNldENoYWluTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KClcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2dldCBFVEggYmFsYW5jZSBhbmQgbmV0d29yayBpbmZvIG9ubHkgd2hlbiBoYXZpbmcgY3VycmVudEFjY291bnQgXHJcbiAgICBpZighY3VycmVudEFjY291bnQgfHwgIWV0aGVycy51dGlscy5pc0FkZHJlc3MoY3VycmVudEFjY291bnQpKSByZXR1cm5cclxuXHJcbiAgICAvL2NsaWVudCBzaWRlIGNvZGVcclxuICAgIGlmKCF3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXHJcbiAgICBwcm92aWRlci5nZXRCYWxhbmNlKGN1cnJlbnRBY2NvdW50KS50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgIHNldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3VsdCkpXHJcbiAgICB9KS5jYXRjaCgoZSk9PmNvbnNvbGUubG9nKGUpKVxyXG5cclxuICAgIHByb3ZpZGVyLmdldE5ldHdvcmsoKS50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgIHNldENoYWluSWQocmVzdWx0LmNoYWluSWQpXHJcbiAgICAgIHNldENoYWluTmFtZShyZXN1bHQubmFtZSlcclxuICAgIH0pLmNhdGNoKChlKT0+Y29uc29sZS5sb2coZSkpXHJcblxyXG4gIH0sW2N1cnJlbnRBY2NvdW50XSlcclxuXHJcbiAgLy9jbGljayBjb25uZWN0XHJcbiAgY29uc3Qgb25DbGlja0Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAvL2NsaWVudCBzaWRlIGNvZGVcclxuICAgIGlmKCF3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJwbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8vd2UgY2FuIGRvIGl0IHVzaW5nIGV0aGVycy5qc1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxyXG4gICAgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pXHJcbiAgICAudGhlbigoYWNjb3VudHMpPT57XHJcbiAgICAgIGlmKGFjY291bnRzLmxlbmd0aD4wKSBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcclxuICAgIH0pLmNhdGNoKChlKT0+Y29uc29sZS5sb2coZSkpXHJcblxyXG4gIH1cclxuXHJcbiAgLy9jbGljayBkaXNjb25uZWN0XHJcbiAgY29uc3Qgb25DbGlja0Rpc2Nvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tEaXNDb25uZWN0XCIpXHJcbiAgICBzZXRCYWxhbmNlKHVuZGVmaW5lZClcclxuICAgIHNldEN1cnJlbnRBY2NvdW50KHVuZGVmaW5lZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgXHJcblxyXG5cclxuICAgICAgPEhlYWQgY29sb3I9eydibHVlJ30+XHJcbiAgICAgICAgPHRpdGxlPmRqdCBEQVBQPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICBcclxuXHJcbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgPlxyXG4gICAgXHJcblxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBteT17NH0+TkZUIERhcHAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8VlN0YWNrIGNvbG9yPXsnYmx1ZSd9PlxyXG4gICAgICAgIDxCb3ggIG15PXs0fT5cclxuICAgICAgICB7Y3VycmVudEFjY291bnQgIFxyXG4gICAgICAgICAgPyA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrRGlzY29ubmVjdH0+XHJcbiAgICAgICAgICAgICAgICDotKbmiLc6e2N1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDogPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgIG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0fT5cclxuICAgICAgICAgICAgICAgICDov57mjqVNZXRhbWFza1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8L0JveD5cclxuICAgXHJcblxyXG4gICAgICAgIHtjdXJyZW50QWNjb3VudCAgXHJcbiAgICAgICAgICA/PEJveCBtYj17MH0gcD17NH0gICBib3JkZXJSYWRpdXM9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIG15PXs0fSAgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAg6LSm5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIOW9k+WJjeeUqOaIt+eahEVUSOS9meminSA6IHtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICDljLrlnZfpk77kv6Hmga86IOWMuuWdl+mTvmlkIHtjaGFpbklkfSDlkI3lrZcge2NoYWlubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgOjw+PC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8Qm94ICBtYj17MH0gcD17NH0gPlxyXG4gICAgICAgICAgPEhlYWRpbmcgbXk9ezR9IGZvbnRTaXplPSc1eGwnIHRleHRBbGlnbj0nY2VudGVyJyBjb2xvcj1cInJlZFwiPlxyXG4gICAgICAgICAgICDpk7jpgKBORlRcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJyBtdD17Mn0gZm9udFdlaWdodD0nYm9sZCc+XHJcbiAgICAgICAgICAgIOWQiOe6puWcsOWdgDogIDB4RDM2MmY3MDlERUI5MTkwRENFNzg2NjlkMTNBNzFjRTc0RTEzNzU5OVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG5cclxuXHJcbiAgICAgICAgICA8SEZUXHJcbiAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzPScweEQzNjJmNzA5REVCOTE5MERDRTc4NjY5ZDEzQTcxY0U3NEUxMzc1OTknXHJcbiAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ9e2N1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuXHJcblxyXG5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJWU3RhY2siLCJIZWFkaW5nIiwiQm94IiwiVGV4dCIsIkJ1dHRvbiIsIkZsZXgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIkhGVCIsIkhvbWUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjaGFpbklkIiwic2V0Q2hhaW5JZCIsImNoYWlubmFtZSIsInNldENoYWluTmFtZSIsInV0aWxzIiwiaXNBZGRyZXNzIiwid2luZG93IiwiZXRoZXJldW0iLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwidGhlbiIsInJlc3VsdCIsImZvcm1hdEV0aGVyIiwiY2F0Y2giLCJlIiwiZ2V0TmV0d29yayIsIm5hbWUiLCJvbkNsaWNrQ29ubmVjdCIsInNlbmQiLCJhY2NvdW50cyIsImxlbmd0aCIsIm9uQ2xpY2tEaXNjb25uZWN0IiwidW5kZWZpbmVkIiwiY29sb3IiLCJ0aXRsZSIsImp1c3RpZnlDb250ZW50IiwiYXMiLCJteSIsInR5cGUiLCJvbkNsaWNrIiwibWIiLCJwIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJtdCIsImZvbnRXZWlnaHQiLCJjb250cmFjdEFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});