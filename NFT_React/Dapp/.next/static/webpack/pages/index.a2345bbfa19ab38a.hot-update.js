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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_HFT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HFT */ \"./src/components/HFT.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref1[0], setCurrentAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainId = ref2[0], setChainId = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), chainname = ref3[0], setChainName = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        //get ETH balance and network info only when having currentAccount \n        if (!currentAccount || !ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.isAddress(currentAccount)) return;\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.getBalance(currentAccount).then(function(result) {\n            setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(result));\n        }).catch(function(e) {\n            return console.log(e);\n        });\n        provider.getNetwork().then(function(result) {\n            setChainId(result.chainId);\n            setChainName(result.name);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    }, [\n        currentAccount\n    ]);\n    //click connect\n    var onClickConnect = function() {\n        //client side code\n        if (!window.ethereum) {\n            console.log(\"please install MetaMask\");\n            return;\n        }\n        //we can do it using ethers.js\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);\n        provider.send(\"eth_requestAccounts\", []).then(function(accounts) {\n            if (accounts.length > 0) setCurrentAccount(accounts[0]);\n        }).catch(function(e) {\n            return console.log(e);\n        });\n    };\n    //click disconnect\n    var onClickDisconnect = function() {\n        console.log(\"onClickDisConnect\");\n        setBalance(undefined);\n        setCurrentAccount(undefined);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"djt DAPP\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    as: \"h3\",\n                    my: 4,\n                    children: \"NFT Dapp \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        w: \"100%\",\n                        my: 4,\n                        children: currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            w: \"100%\",\n                            onClick: onClickDisconnect,\n                            children: [\n                                \"账户:\",\n                                currentAccount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            type: \"button\",\n                            w: \"100%\",\n                            onClick: onClickConnect,\n                            children: \"连接Metamask\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        w: \"100%\",\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                fontSize: \"3xl\",\n                                textAlign: \"center\",\n                                children: \"账户信息\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"当前用户的ETH余额 : \",\n                                    balance\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                children: [\n                                    \"区块链信息: 区块链id \",\n                                    chainId,\n                                    \" 名字 \",\n                                    chainname\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 12\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mb: 0,\n                        p: 4,\n                        w: \"100%\",\n                        borderWidth: \"30px\",\n                        borderRadius: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                my: 4,\n                                fontSize: \"5xl\",\n                                textAlign: \"center\",\n                                color: \"red\",\n                                children: \"铸造NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                textAlign: \"center\",\n                                mt: 2,\n                                fontWeight: \"bold\",\n                                children: \"合约地址：0x5F1B515fEeFbce416143CaA579fc0cd4942fa7FF\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HFT__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                contractAddress: \"0xD362f709DEB9190DCE78669d13A71cE74E137599\",\n                                currentAccount: currentAccount\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HuaWei\\\\Desktop\\\\NFT期末\\\\NFT\\\\NFT-Dapp\\\\webapp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"Tm/U/AhNrV/wIOrE4Xq20TijZqI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QlIsa0RBQVY7Z0NBQUNtRCxTQUFTLEVBQUMsQ0FBUTs7b0NBQUMsQ0FDVjtvQ0FBaUJ2QyxPQUFPO29DQUFDLENBQUk7b0NBQUtFLFNBQVM7Ozs7Ozs7Ozs7Ozs7Z0dBTzNDZixrREFBakI7d0JBQUUrQyxFQUFFLEVBQUUsQ0FBQzt3QkFBRUMsQ0FBQyxFQUFFLENBQUM7d0JBQUVKLENBQUMsRUFBQyxDQUFNO3dCQUFDSyxXQUFXLEVBQUMsQ0FBTTt3QkFBQ0MsWUFBWSxFQUFDLENBQUk7O3dHQUM3RG5ELHNEQUFPO2dDQUFDNEMsRUFBRSxFQUFFLENBQUM7Z0NBQUVRLFFBQVEsRUFBQyxDQUFLO2dDQUFDQyxTQUFTLEVBQUMsQ0FBUTtnQ0FBQ0MsS0FBSyxFQUFDLENBQUs7MENBQUMsQ0FFOUQ7Ozs7Ozt3R0FDQ3BELGtEQUFJO2dDQUFDbUQsU0FBUyxFQUFDLENBQVE7Z0NBQUNFLEVBQUUsRUFBRSxDQUFDO2dDQUFFQyxVQUFVLEVBQUMsQ0FBTTswQ0FBQyxDQUVsRDs7Ozs7O3dHQUdDaEQsdURBQUc7Z0NBQ0FpRCxlQUFlLEVBQUMsQ0FBNEM7Z0NBQzVEN0MsY0FBYyxFQUFFQSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QyxDQUFDO0dBckhLSCxJQUFJO0tBQUpBLElBQUk7QUF1SFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9pbmRleC50c3hcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgVlN0YWNrLCBIZWFkaW5nLCBCb3gsIExpbmtPdmVybGF5LCBMaW5rQm94fSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIlxyXG5pbXBvcnQge1RleHQsIEJ1dHRvbiwgRmxleH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IEhGVCBmcm9tIFwiLi4vY29tcG9uZW50cy9IRlRcIjtcclxuXHJcblxyXG5cclxuZGVjbGFyZSBsZXQgd2luZG93OmFueVxyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpXHJcbiAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KClcclxuICBjb25zdCBbY2hhaW5JZCwgc2V0Q2hhaW5JZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KClcclxuICBjb25zdCBbY2hhaW5uYW1lLCBzZXRDaGFpbk5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9nZXQgRVRIIGJhbGFuY2UgYW5kIG5ldHdvcmsgaW5mbyBvbmx5IHdoZW4gaGF2aW5nIGN1cnJlbnRBY2NvdW50IFxyXG4gICAgaWYoIWN1cnJlbnRBY2NvdW50IHx8ICFldGhlcnMudXRpbHMuaXNBZGRyZXNzKGN1cnJlbnRBY2NvdW50KSkgcmV0dXJuXHJcblxyXG4gICAgLy9jbGllbnQgc2lkZSBjb2RlXHJcbiAgICBpZighd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIilcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxyXG4gICAgcHJvdmlkZXIuZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudCkudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihyZXN1bHQpKVxyXG4gICAgfSkuY2F0Y2goKGUpPT5jb25zb2xlLmxvZyhlKSlcclxuXHJcbiAgICBwcm92aWRlci5nZXROZXR3b3JrKCkudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBzZXRDaGFpbklkKHJlc3VsdC5jaGFpbklkKVxyXG4gICAgICBzZXRDaGFpbk5hbWUocmVzdWx0Lm5hbWUpXHJcbiAgICB9KS5jYXRjaCgoZSk9PmNvbnNvbGUubG9nKGUpKVxyXG5cclxuICB9LFtjdXJyZW50QWNjb3VudF0pXHJcblxyXG4gIC8vY2xpY2sgY29ubmVjdFxyXG4gIGNvbnN0IG9uQ2xpY2tDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgLy9jbGllbnQgc2lkZSBjb2RlXHJcbiAgICBpZighd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIilcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICAvL3dlIGNhbiBkbyBpdCB1c2luZyBldGhlcnMuanNcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcclxuICAgIHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKVxyXG4gICAgLnRoZW4oKGFjY291bnRzKT0+e1xyXG4gICAgICBpZihhY2NvdW50cy5sZW5ndGg+MCkgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pXHJcbiAgICB9KS5jYXRjaCgoZSk9PmNvbnNvbGUubG9nKGUpKVxyXG5cclxuICB9XHJcblxyXG4gIC8vY2xpY2sgZGlzY29ubmVjdFxyXG4gIGNvbnN0IG9uQ2xpY2tEaXNjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbkNsaWNrRGlzQ29ubmVjdFwiKVxyXG4gICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXHJcbiAgICBzZXRDdXJyZW50QWNjb3VudCh1bmRlZmluZWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIFxyXG5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5kanQgREFQUDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgXHJcblxyXG4gICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgXHJcblxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBteT17NH0+TkZUIERhcHAgPC9IZWFkaW5nPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8VlN0YWNrPlxyXG4gICAgICAgIDxCb3ggdz0nMTAwJScgbXk9ezR9PlxyXG4gICAgICAgIHtjdXJyZW50QWNjb3VudCAgXHJcbiAgICAgICAgICA/IDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHc9JzEwMCUnIG9uQ2xpY2s9e29uQ2xpY2tEaXNjb25uZWN0fT5cclxuICAgICAgICAgICAgICAgIOi0puaItzp7Y3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgOiA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB3PScxMDAlJyBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdH0+XHJcbiAgICAgICAgICAgICAgICAg6L+e5o6lTWV0YW1hc2tcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgIFxyXG5cclxuICAgICAgICB7Y3VycmVudEFjY291bnQgIFxyXG4gICAgICAgICAgPzxCb3ggbWI9ezB9IHA9ezR9IHc9JzEwMCUnIGJvcmRlcldpZHRoPVwiMXB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIj5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBteT17NH0gZm9udFNpemU9JzN4bCcgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAg6LSm5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIOW9k+WJjeeUqOaIt+eahEVUSOS9meminSA6IHtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICDljLrlnZfpk77kv6Hmga86IOWMuuWdl+mTvmlkIHtjaGFpbklkfSDlkI3lrZcge2NoYWlubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgOjw+PC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8Qm94ICBtYj17MH0gcD17NH0gdz0nMTAwJScgYm9yZGVyV2lkdGg9XCIzMHB4XCIgYm9yZGVyUmFkaXVzPVwibGdcIj5cclxuICAgICAgICAgIDxIZWFkaW5nIG15PXs0fSBmb250U2l6ZT0nNXhsJyB0ZXh0QWxpZ249J2NlbnRlcicgY29sb3I9XCJyZWRcIj5cclxuICAgICAgICAgICAg6ZO46YCgTkZUXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249J2NlbnRlcicgbXQ9ezJ9IGZvbnRXZWlnaHQ9J2JvbGQnPlxyXG4gICAgICAgICAgICDlkIjnuqblnLDlnYDvvJoweDVGMUI1MTVmRWVGYmNlNDE2MTQzQ2FBNTc5ZmMwY2Q0OTQyZmE3RkZcclxuICAgICAgICAgIDwvVGV4dD5cclxuXHJcblxyXG4gICAgICAgICAgPEhGVFxyXG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzcz0nMHhEMzYyZjcwOURFQjkxOTBEQ0U3ODY2OWQxM0E3MWNFNzRFMTM3NTk5J1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG5cclxuXHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVlN0YWNrIiwiSGVhZGluZyIsIkJveCIsIlRleHQiLCJCdXR0b24iLCJGbGV4IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJIRlQiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwiY2hhaW5JZCIsInNldENoYWluSWQiLCJjaGFpbm5hbWUiLCJzZXRDaGFpbk5hbWUiLCJ1dGlscyIsImlzQWRkcmVzcyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJyZXN1bHQiLCJmb3JtYXRFdGhlciIsImNhdGNoIiwiZSIsImdldE5ldHdvcmsiLCJuYW1lIiwib25DbGlja0Nvbm5lY3QiLCJzZW5kIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJvbkNsaWNrRGlzY29ubmVjdCIsInVuZGVmaW5lZCIsInRpdGxlIiwianVzdGlmeUNvbnRlbnQiLCJhcyIsIm15IiwidyIsInR5cGUiLCJvbkNsaWNrIiwibWIiLCJwIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNvbG9yIiwibXQiLCJmb250V2VpZ2h0IiwiY29udHJhY3RBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});