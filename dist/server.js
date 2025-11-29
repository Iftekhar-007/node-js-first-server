"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const RouteHandler_1 = require("./helpers/RouteHandler");
require("./routes");
const server = http_1.default.createServer((req, res) => {
    console.log("server is runnign.....");
    const method = req.method?.toUpperCase() || "";
    const path = req.url || "";
    const methodMap = RouteHandler_1.routes.get(method);
    const handler = methodMap?.get(path);
    if (handler) {
        handler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({
            success: false,
            message: "Not found routes for this url",
            path: path,
        }));
    }
});
server.listen(config_1.default.port, () => {
    console.log(`server is running  ${config_1.default.port}`);
});
