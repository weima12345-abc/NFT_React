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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_HFT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HFT */ \"./src/components/HFT.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainId = ref2[0], setChainId = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainname = ref3[0], setChainName = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //get ETH balance and network info only when having currentAccount \n        if (!currentAccount || !ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.isAddress(currentAccount)) return;\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.getBalance(currentAccount).then(function(result) {\n            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(result));\n        }).catch(function(e) {\n            return console.log(e);\n        });\n        provider.getNetwork().then(function(result) {\n            setChainId(result.chainId);\n            setChainName(result.name);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    }, [\n        currentAccount\n    ]);\n    //click connect\n    var onClickConnect = function() {\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        //we can do it using ethers.js\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.send(\"eth_requestAccounts\", []).then(function(accounts) {\n            if (accounts.length > 0) setCurrentAccount(accounts[0]);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    };\n    //click disconnect\n    var onClickDisconnect = function() {\n        console.log(\"onClickDisConnect\");\n        setBalance(undefined);\n        setCurrentAccount(undefined);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                color: 'blue',\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"djt DAPP\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    as: \"h3\",\n                    my: 4,\n                    children: \"NFT Dapp \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                color: 'blue',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        my: 4,\n                        children: currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            onClick: onClickDisconnect,\n                            children: [\n                                \"账户:\",\n                                currentAccount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            w: \"100%\",\n                            onClick: onClickConnect,\n                            children: \"连接Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        w: \"100%\",\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                fontSize: \"3xl\",\n                                textAlign: \"center\",\n                                children: \"账户信息\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"当前用户的ETH余额 : \",\n                                    balance\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"区块链信息: 区块链id \",\n                                    chainId,\n                                    \" 名字 \",\n                                    chainname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 12\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        w: \"100%\",\n                        borderWidth: \"30px\",\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                fontSize: \"5xl\",\n                                textAlign: \"center\",\n                                color: \"red\",\n                                children: \"铸造NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                mt: 2,\n                                fontWeight: \"bold\",\n                                children: \"合约地址:  0xD362f709DEB9190DCE78669d13A71cE74E137599\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HFT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                contractAddress: \"0xD362f709DEB9190DCE78669d13A71cE74E137599\",\n                                currentAccount: currentAccount\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"Tm/U/AhNrV/wIOrE4Xq20TijZqI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV0QlIsa0RBQVY7Z0NBQUNvRCxTQUFTLEVBQUMsQ0FBUTs7b0NBQUMsQ0FDVjtvQ0FBaUJ4QyxPQUFPO29DQUFDLENBQUk7b0NBQUtFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Z0dBTzNDZixrREFBakI7d0JBQUVnRCxFQUFFLEVBQUUsQ0FBQzt3QkFBRUMsQ0FBQyxFQUFFLENBQUM7d0JBQUVGLENBQUMsRUFBQyxDQUFNO3dCQUFDRyxXQUFXLEVBQUMsQ0FBTTt3QkFBQ0MsWUFBWSxFQUFDLENBQUk7O3dHQUM3RHBELHNEQUFPO2dDQUFDNkMsRUFBRSxFQUFFLENBQUM7Z0NBQUVRLFFBQVEsRUFBQyxDQUFLO2dDQUFDQyxTQUFTLEVBQUMsQ0FBUTtnQ0FBQ2IsS0FBSyxFQUFDLENBQUs7MENBQUMsQ0FFOUQ7Ozs7Ozt3R0FDQ3ZDLGtEQUFJO2dDQUFDb0QsU0FBUyxFQUFDLENBQVE7Z0NBQUNDLEVBQUUsRUFBRSxDQUFDO2dDQUFFQyxVQUFVLEVBQUMsQ0FBTTswQ0FBQyxDQUVsRDs7Ozs7O3dHQUdDaEQsdURBQUc7Z0NBQ0FpRCxlQUFlLEVBQUMsQ0FBNEM7Z0NBQzVEN0MsY0FBYyxFQUFFQSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QyxDQUFDO0dBckhLSCxJQUFJO0tBQUpBLElBQUk7QUF1SFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9pbmRleC50c3hcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgVlN0YWNrLCBIZWFkaW5nLCBCb3gsIExpbmtPdmVybGF5LCBMaW5rQm94fSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIlxyXG5pbXBvcnQge1RleHQsIEJ1dHRvbiwgRmxleH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IEhGVCBmcm9tIFwiLi4vY29tcG9uZW50cy9IRlRcIjtcclxuaW1wb3J0IGltZyBmcm9tIFwiLi4vcGFnZXMvYS5wbmdcIlxyXG5cclxuXHJcbmRlY2xhcmUgbGV0IHdpbmRvdzphbnlcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxyXG4gIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpXHJcbiAgY29uc3QgW2NoYWluSWQsIHNldENoYWluSWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPigpXHJcbiAgY29uc3QgW2NoYWlubmFtZSwgc2V0Q2hhaW5OYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vZ2V0IEVUSCBiYWxhbmNlIGFuZCBuZXR3b3JrIGluZm8gb25seSB3aGVuIGhhdmluZyBjdXJyZW50QWNjb3VudCBcclxuICAgIGlmKCFjdXJyZW50QWNjb3VudCB8fCAhZXRoZXJzLnV0aWxzLmlzQWRkcmVzcyhjdXJyZW50QWNjb3VudCkpIHJldHVyblxyXG5cclxuICAgIC8vY2xpZW50IHNpZGUgY29kZVxyXG4gICAgaWYoIXdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcclxuICAgIHByb3ZpZGVyLmdldEJhbGFuY2UoY3VycmVudEFjY291bnQpLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgc2V0QmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0KSlcclxuICAgIH0pLmNhdGNoKChlKT0+Y29uc29sZS5sb2coZSkpXHJcblxyXG4gICAgcHJvdmlkZXIuZ2V0TmV0d29yaygpLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgc2V0Q2hhaW5JZChyZXN1bHQuY2hhaW5JZClcclxuICAgICAgc2V0Q2hhaW5OYW1lKHJlc3VsdC5uYW1lKVxyXG4gICAgfSkuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhlKSlcclxuXHJcbiAgfSxbY3VycmVudEFjY291bnRdKVxyXG5cclxuICAvL2NsaWNrIGNvbm5lY3RcclxuICBjb25zdCBvbkNsaWNrQ29ubmVjdCA9ICgpID0+IHtcclxuICAgIC8vY2xpZW50IHNpZGUgY29kZVxyXG4gICAgaWYoIXdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgLy93ZSBjYW4gZG8gaXQgdXNpbmcgZXRoZXJzLmpzXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXHJcbiAgICBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSlcclxuICAgIC50aGVuKChhY2NvdW50cyk9PntcclxuICAgICAgaWYoYWNjb3VudHMubGVuZ3RoPjApIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxyXG4gICAgfSkuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhlKSlcclxuXHJcbiAgfVxyXG5cclxuICAvL2NsaWNrIGRpc2Nvbm5lY3RcclxuICBjb25zdCBvbkNsaWNrRGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25DbGlja0Rpc0Nvbm5lY3RcIilcclxuICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxyXG4gICAgc2V0Q3VycmVudEFjY291bnQodW5kZWZpbmVkKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICBcclxuXHJcblxyXG4gICAgICA8SGVhZCBjb2xvcj17J2JsdWUnfT5cclxuICAgICAgICA8dGl0bGU+ZGp0IERBUFA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgIFxyXG5cclxuICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiA+XHJcbiAgICBcclxuXHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIG15PXs0fT5ORlQgRGFwcCA8L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxWU3RhY2sgY29sb3I9eydibHVlJ30+XHJcbiAgICAgICAgPEJveCAgbXk9ezR9PlxyXG4gICAgICAgIHtjdXJyZW50QWNjb3VudCAgXHJcbiAgICAgICAgICA/IDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tEaXNjb25uZWN0fT5cclxuICAgICAgICAgICAgICAgIOi0puaItzp7Y3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgOiA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB3PScxMDAlJyBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdH0+XHJcbiAgICAgICAgICAgICAgICAg6L+e5o6lTWV0YW1hc2tcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgIFxyXG5cclxuICAgICAgICB7Y3VycmVudEFjY291bnQgIFxyXG4gICAgICAgICAgPzxCb3ggbWI9ezB9IHA9ezR9IHc9JzEwMCUnIGJvcmRlcldpZHRoPVwiMXB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIj5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBteT17NH0gZm9udFNpemU9JzN4bCcgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAg6LSm5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIOW9k+WJjeeUqOaIt+eahEVUSOS9meminSA6IHtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICDljLrlnZfpk77kv6Hmga86IOWMuuWdl+mTvmlkIHtjaGFpbklkfSDlkI3lrZcge2NoYWlubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgOjw+PC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8Qm94ICBtYj17MH0gcD17NH0gdz0nMTAwJScgYm9yZGVyV2lkdGg9XCIzMHB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIj5cclxuICAgICAgICAgIDxIZWFkaW5nIG15PXs0fSBmb250U2l6ZT0nNXhsJyB0ZXh0QWxpZ249J2NlbnRlcicgY29sb3I9XCJyZWRcIj5cclxuICAgICAgICAgICAg6ZO46YCgTkZUXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249J2NlbnRlcicgbXQ9ezJ9IGZvbnRXZWlnaHQ9J2JvbGQnPlxyXG4gICAgICAgICAgICDlkIjnuqblnLDlnYA6ICAweEQzNjJmNzA5REVCOTE5MERDRTc4NjY5ZDEzQTcxY0U3NEUxMzc1OTlcclxuICAgICAgICAgIDwvVGV4dD5cclxuXHJcblxyXG4gICAgICAgICAgPEhGVFxyXG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcz0nMHhEMzYyZjcwOURFQjkxOTBEQ0U3ODY2OWQxM0E3MWNFNzRFMTM3NTk5J1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG5cclxuXHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVlN0YWNrIiwiSGVhZGluZyIsIkJveCIsIlRleHQiLCJCdXR0b24iLCJGbGV4IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJIRlQiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY2hhaW5JZCIsInNldENoYWluSWQiLCJjaGFpbm5hbWUiLCJzZXRDaGFpbk5hbWUiLCJ1dGlscyIsImlzQWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJyZXN1bHQiLCJmb3JtYXRFdGhlciIsImNhdGNoIiwiZSIsImdldE5ldHdvcmsiLCJuYW1lIiwib25DbGlja0Nvbm5lY3QiLCJzZW5kIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJvbkNsaWNrRGlzY29ubmVjdCIsInVuZGVmaW5lZCIsImNvbG9yIiwidGl0bGUiLCJqdXN0aWZ5Q29udGVudCIsImFzIiwibXkiLCJ0eXBlIiwib25DbGljayIsInciLCJtYiIsInAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibXQiLCJmb250V2VpZ2h0IiwiY29udHJhY3RBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});