"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseBody_1 = __importDefault(require("../helpers/parseBody"));
const RouteHandler_1 = __importDefault(require("../helpers/RouteHandler"));
const sendJson_1 = __importDefault(require("../helpers/sendJson"));
(0, RouteHandler_1.default)("GET", "/", (req, res) => {
    (0, sendJson_1.default)(res, 200, {
        message: "hello it is root url requ",
        path: req.url,
    });
});
(0, RouteHandler_1.default)("GET", "/api", (req, res) => {
    (0, sendJson_1.default)(res, 200, {
        message: "hello it is api routes",
        path: req.url,
    });
});
(0, RouteHandler_1.default)("POST", "/api/users", async (req, res) => {
    const body = await (0, parseBody_1.default)(req);
    (0, sendJson_1.default)(res, 201, body);
});
