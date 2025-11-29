"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function parsedBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            }
            catch (err) {
                reject(err);
            }
        });
        req.on("error", reject);
    });
}
exports.default = parsedBody;
