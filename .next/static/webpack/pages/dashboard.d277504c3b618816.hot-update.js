"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ \"./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/sortable */ \"./node_modules/@dnd-kit/sortable/dist/sortable.esm.js\");\n/* harmony import */ var _dnd_kit_modifiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/modifiers */ \"./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst DraggableHeaderCell = (param)=>{\n    let { column , onDragStart  } = param;\n    _s();\n    const { listeners , setNodeRef , isDragging  } = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable)({\n        id: column.id\n    });\n    const style = {\n        cursor: \"grab\",\n        backgroundColor: \"#C0E3E5\",\n        height: \"53px\",\n        borderRight: \"2px solid #EFEFEF\",\n        fontWeight: \"bold\",\n        boxShadow: isDragging ? \"5px 5px 10px rgba(0, 0, 0, 0.2)\" : \"none\",\n        transform: isDragging ? \"rotate(-5deg)\" : \"none\",\n        transition: \"transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n        ref: setNodeRef,\n        ...listeners,\n        style: style,\n        onDragStart: onDragStart,\n        draggable: \"true\",\n        children: column.name\n    }, void 0, false, {\n        fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableHeaderCell, \"x3KWb334Qm3SIYD7I4YFWWdQ7M0=\", false, function() {\n    return [\n        _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable\n    ];\n});\n_c = DraggableHeaderCell;\nfunction createData(name, calories, fat, carbs, protein) {\n    return {\n        name,\n        calories,\n        fat,\n        carbs,\n        protein\n    };\n}\nconst columnsData = [\n    {\n        id: \"name\",\n        name: \"name\"\n    },\n    {\n        id: \"calories\",\n        name: \"Calories\"\n    },\n    {\n        id: \"fat\",\n        name: \"Fat (g)\"\n    },\n    {\n        id: \"carbs\",\n        name: \"Carbs (g)\"\n    },\n    {\n        id: \"protein\",\n        name: \"Protein (g)\"\n    }\n];\nconst rows = [\n    createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n    createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n    createData(\"Eclair\", 262, 16.0, 24, 6.0),\n    createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n    createData(\"Gingerbread\", 356, 16.0, 49, 3.9)\n];\nconst Dashboard = ()=>{\n    _s1();\n    const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(columnsData);\n    const sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.PointerSensor));\n    const handleDragEnd = (event)=>{\n        const { active , over  } = event;\n        if (!over) return;\n        if (active.id !== over.id) {\n            setColumns((data)=>{\n                const oldIndex = data.findIndex((item)=>item.id === active.id);\n                const newIndex = data.findIndex((item)=>item.id === over.id);\n                return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(data, oldIndex, newIndex);\n            });\n        }\n    };\n    const onDragStart = (event)=>{\n        // Prevent the browser's default behavior when dragging a cell\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"Dashboard\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Laravel - Dashboard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, {\n                sensors: sensors,\n                onDragEnd: handleDragEnd,\n                collisionDetection: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter,\n                modifiers: [\n                    _dnd_kit_modifiers__WEBPACK_IMPORTED_MODULE_4__.restrictToHorizontalAxis\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableContainer, {\n                    component: _mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Table, {\n                        sx: {\n                            minWidth: 650\n                        },\n                        size: \"small\",\n                        \"aria-label\": \"a dense table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableHead, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableRow, {\n                                    children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DraggableHeaderCell, {\n                                            column: column,\n                                            onDragStart: onDragStart\n                                        }, column.id, false, {\n                                            fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 13\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 120,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableBody, {\n                                children: rows.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableRow, {\n                                        sx: {\n                                            \"&:last-child td, &:last-child th\": {\n                                                border: 0\n                                            }\n                                        },\n                                        children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                                                style: {\n                                                    height: \"53px\",\n                                                    border: \"2px solid #EFEFEF\"\n                                                },\n                                                children: row[column.id]\n                                            }, column.id, false, {\n                                                fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                lineNumber: 138,\n                                                columnNumber: 15\n                                            }, undefined))\n                                    }, row.name, false, {\n                                        fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 11\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 131,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                        lineNumber: 119,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 118,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 112,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Astudio\\\\Nexvel\\\\Front\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Dashboard, \"b93QLvUjdjppIYbO6GlMyLcpdJY=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensors\n    ];\n});\n_c1 = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableHeaderCell\");\n$RefreshReg$(_c1, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsU0FBU0E7Z0JBQ1RlLFdBQVdkO2dCQUNYZSxvQkFBb0I1RCx3REFBYUE7Z0JBQ2pDNkQsV0FBVztvQkFBQ3hELHdFQUF3QkE7aUJBQUM7MEJBRXJDLDRFQUFDSyx5REFBY0E7b0JBQUNvRCxXQUFXeEQsZ0RBQUtBOzhCQUM5Qiw0RUFBQ0MsZ0RBQUtBO3dCQUFDd0QsSUFBSTs0QkFBRUMsVUFBVTt3QkFBSTt3QkFBR0MsTUFBSzt3QkFBUUMsY0FBVzs7MENBQ3BELDhEQUFDdkQsb0RBQVNBOzBDQUNSLDRFQUFDQyxtREFBUUE7OENBQ044QixRQUFReUIsR0FBRyxDQUFDLENBQUNuRCx1QkFDWiw4REFBQ0Q7NENBRUNDLFFBQVFBOzRDQUNSQyxhQUFhQTsyQ0FGUkQsT0FBT0ssRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzBDQU90Qiw4REFBQ2Isb0RBQVNBOzBDQUNQZ0MsS0FBSzJCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ3hELG1EQUFRQTt3Q0FFUG1ELElBQUk7NENBQUUsb0NBQW9DO2dEQUFFTSxRQUFROzRDQUFFO3dDQUFFO2tEQUV2RDNCLFFBQVF5QixHQUFHLENBQUMsQ0FBQ25ELHVCQUNaLDhEQUFDUCxvREFBU0E7Z0RBQUNhLE9BQU87b0RBQUNHLFFBQVE7b0RBQU80QyxRQUFRO2dEQUFvQjswREFDM0RELEdBQUcsQ0FBQ3BELE9BQU9LLEVBQUUsQ0FBQzsrQ0FEcURMLE9BQU9LLEVBQUU7Ozs7O3VDQUo1RStDLElBQUluQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCekI7SUF4RU1ROztRQUVZMUMscURBQVVBOzs7TUFGdEIwQztBQTBFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzPzM2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBEbmRDb250ZXh0LFxuICBQb2ludGVyU2Vuc29yLFxuICB1c2VTZW5zb3IsXG4gIHVzZVNlbnNvcnMsXG4gIGNsb3Nlc3RDZW50ZXIsXG59IGZyb20gXCJAZG5kLWtpdC9jb3JlXCI7XG5pbXBvcnQge1xuICBhcnJheU1vdmUsXG4gIHVzZVNvcnRhYmxlLFxuICBTb3J0YWJsZUNvbnRleHQsXG4gIGhvcml6b250YWxMaXN0U29ydGluZ1N0cmF0ZWd5LFxufSBmcm9tIFwiQGRuZC1raXQvc29ydGFibGVcIjtcbmltcG9ydCB7IHJlc3RyaWN0VG9Ib3Jpem9udGFsQXhpcyB9IGZyb20gXCJAZG5kLWtpdC9tb2RpZmllcnNcIjtcbmltcG9ydCB7XG4gIFBhcGVyLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0cy9BcHBMYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IERyYWdnYWJsZUhlYWRlckNlbGwgPSAoeyBjb2x1bW4sIG9uRHJhZ1N0YXJ0IH0pID0+IHtcbiAgY29uc3QgeyBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIGlzRHJhZ2dpbmcgfSA9IHVzZVNvcnRhYmxlKHtcbiAgICBpZDogY29sdW1uLmlkLFxuICB9KTtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBjdXJzb3I6IFwiZ3JhYlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjQzBFM0U1XCIsXG4gICAgaGVpZ2h0OiBcIjUzcHhcIiwgXG4gICAgYm9yZGVyUmlnaHQ6IFwiMnB4IHNvbGlkICNFRkVGRUZcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgYm94U2hhZG93OiBpc0RyYWdnaW5nID8gXCI1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpXCIgOiBcIm5vbmVcIixcbiAgICB0cmFuc2Zvcm06IGlzRHJhZ2dpbmcgPyBcInJvdGF0ZSgtNWRlZylcIiA6IFwibm9uZVwiLFxuICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dFwiLFxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDZWxsXG4gICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgb25EcmFnU3RhcnQ9e29uRHJhZ1N0YXJ0fVxuICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgPlxuICAgICAge2NvbHVtbi5uYW1lfVxuICAgIDwvVGFibGVDZWxsPlxuICApO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbikge1xuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbiB9O1xufVxuXG5jb25zdCBjb2x1bW5zRGF0YSA9IFtcbiAgeyBpZDogXCJuYW1lXCIsIG5hbWU6IFwibmFtZVwiIH0sXG4gIHsgaWQ6IFwiY2Fsb3JpZXNcIiwgbmFtZTogXCJDYWxvcmllc1wiIH0sXG4gIHsgaWQ6IFwiZmF0XCIsIG5hbWU6IFwiRmF0IChnKVwiIH0sXG4gIHsgaWQ6IFwiY2FyYnNcIiwgbmFtZTogXCJDYXJicyAoZylcIiB9LFxuICB7IGlkOiBcInByb3RlaW5cIiwgbmFtZTogXCJQcm90ZWluIChnKVwiIH0sXG5dO1xuXG5jb25zdCByb3dzID0gW1xuICBjcmVhdGVEYXRhKFwiRnJvemVuIHlvZ2h1cnRcIiwgMTU5LCA2LjAsIDI0LCA0LjApLFxuICBjcmVhdGVEYXRhKFwiSWNlIGNyZWFtIHNhbmR3aWNoXCIsIDIzNywgOS4wLCAzNywgNC4zKSxcbiAgY3JlYXRlRGF0YShcIkVjbGFpclwiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICBjcmVhdGVEYXRhKFwiQ3VwY2FrZVwiLCAzMDUsIDMuNywgNjcsIDQuMyksXG4gIGNyZWF0ZURhdGEoXCJHaW5nZXJicmVhZFwiLCAzNTYsIDE2LjAsIDQ5LCAzLjkpLFxuXTtcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZShjb2x1bW5zRGF0YSk7XG4gIGNvbnN0IHNlbnNvcnMgPSB1c2VTZW5zb3JzKHVzZVNlbnNvcihQb2ludGVyU2Vuc29yKSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBvdmVyIH0gPSBldmVudDtcbiAgICBpZiAoIW92ZXIpIHJldHVybjtcblxuICAgIGlmIChhY3RpdmUuaWQgIT09IG92ZXIuaWQpIHtcbiAgICAgIHNldENvbHVtbnMoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkSW5kZXggPSBkYXRhLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aXZlLmlkKTtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBkYXRhLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gb3Zlci5pZCk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5TW92ZShkYXRhLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgYnJvd3NlcidzIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBkcmFnZ2luZyBhIGNlbGxcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcExheW91dFxuICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LWdyYXktODAwIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgIH0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkxhcmF2ZWwgLSBEYXNoYm9hcmQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgIDxEbmRDb250ZXh0XG4gIHNlbnNvcnM9e3NlbnNvcnN9XG4gIG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH1cbiAgY29sbGlzaW9uRGV0ZWN0aW9uPXtjbG9zZXN0Q2VudGVyfVxuICBtb2RpZmllcnM9e1tyZXN0cmljdFRvSG9yaXpvbnRhbEF4aXNdfVxuPlxuICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cbiAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgPERyYWdnYWJsZUhlYWRlckNlbGxcbiAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XG4gICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxuICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICA8VGFibGVCb2R5PlxuICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAga2V5PXtyb3cubmFtZX1cbiAgICAgICAgICAgIHN4PXt7IFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3toZWlnaHQ6IFwiNTNweFwiLGJvcmRlcjogXCIycHggc29saWQgI0VGRUZFRlwiLH19IGtleT17Y29sdW1uLmlkfT5cbiAgICAgICAgICAgICAgICB7cm93W2NvbHVtbi5pZF19XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgKSl9XG4gICAgICA8L1RhYmxlQm9keT5cbiAgICA8L1RhYmxlPlxuICA8L1RhYmxlQ29udGFpbmVyPlxuPC9EbmRDb250ZXh0PlxuICAgIDwvQXBwTGF5b3V0PlxuKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEbmRDb250ZXh0IiwiUG9pbnRlclNlbnNvciIsInVzZVNlbnNvciIsInVzZVNlbnNvcnMiLCJjbG9zZXN0Q2VudGVyIiwiYXJyYXlNb3ZlIiwidXNlU29ydGFibGUiLCJTb3J0YWJsZUNvbnRleHQiLCJob3Jpem9udGFsTGlzdFNvcnRpbmdTdHJhdGVneSIsInJlc3RyaWN0VG9Ib3Jpem9udGFsQXhpcyIsIlBhcGVyIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQXBwTGF5b3V0IiwiSGVhZCIsIkRyYWdnYWJsZUhlYWRlckNlbGwiLCJjb2x1bW4iLCJvbkRyYWdTdGFydCIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJpc0RyYWdnaW5nIiwiaWQiLCJzdHlsZSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwiZm9udFdlaWdodCIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJyZWYiLCJkcmFnZ2FibGUiLCJuYW1lIiwiY3JlYXRlRGF0YSIsImNhbG9yaWVzIiwiZmF0IiwiY2FyYnMiLCJwcm90ZWluIiwiY29sdW1uc0RhdGEiLCJyb3dzIiwiRGFzaGJvYXJkIiwiY29sdW1ucyIsInNldENvbHVtbnMiLCJzZW5zb3JzIiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsImRhdGEiLCJvbGRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJuZXdJbmRleCIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVyIiwiaDIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm9uRHJhZ0VuZCIsImNvbGxpc2lvbkRldGVjdGlvbiIsIm1vZGlmaWVycyIsImNvbXBvbmVudCIsInN4IiwibWluV2lkdGgiLCJzaXplIiwiYXJpYS1sYWJlbCIsIm1hcCIsInJvdyIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});