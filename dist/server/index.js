"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const events_1 = __importDefault(require("./events"));
const server_1 = __importDefault(require("./server"));
const port = server_1.default.get('port');
events_1.default.bind(http_1.default.createServer(server_1.default).listen(port), port);
//# sourceMappingURL=index.js.map