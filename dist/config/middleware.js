"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
exports.default = {
    /**
       * @function
       * @description express middleware
       * @param {express.Application} app
       * @returns void
       */
    init(app) {
        app.use(body_parser_1.default.urlencoded({
            extended: true,
        }));
        app.use(body_parser_1.default.json());
        // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
        app.use((0, cookie_parser_1.default)());
        // returns the compression middleware
        app.use((0, compression_1.default)());
        // helps you secure your Express apps by setting various HTTP headers
        app.use((0, helmet_1.default)());
        // providing a Connect/Express middleware that
        // can be used to enable CORS with various options
        app.use((0, cors_1.default)());
        // cors
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header('Access-Control-Allow-Credentials', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,'
                + ' Content-Type, Accept,'
                + ' Authorization,'
                + ' Access-Control-Allow-Credentials');
            next();
        });
    },
};
//# sourceMappingURL=middleware.js.map