"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperButton = void 0;
/* eslint-disable no-alert */
var react_1 = __importDefault(require("react"));
var SuperButton = function () { return (react_1.default.createElement("button", { type: "button", onClick: function () { return alert("Hi"); } }, "Click me")); };
exports.SuperButton = SuperButton;
//# sourceMappingURL=SuperButton.js.map