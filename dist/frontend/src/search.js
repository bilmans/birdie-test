"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./css/search.css");
const Search = ({ searchQuery, setSearchQuery }) => {
    return (0, jsx_runtime_1.jsxs)("form", Object.assign({ action: "/", method: "get" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "header-search" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "visually-hidden" }, { children: "Search Events" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("input", { className: "input", value: searchQuery, onInput: e => setSearchQuery(e.target.value), type: "text", id: "header-search", placeholder: "Filter", name: "s" }, void 0)] }), void 0);
};
exports.default = Search;
//# sourceMappingURL=search.js.map