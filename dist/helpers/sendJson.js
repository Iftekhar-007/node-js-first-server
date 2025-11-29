"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendJson(res, status, data) {
    res.writeHead(status, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
}
exports.default = sendJson;
