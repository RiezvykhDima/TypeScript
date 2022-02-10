"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const router_1 = __importDefault(require("../components/User/router"));
exports.default = {
    /**
       * @function
       * @param {express.Application} app
       * @summary init Application router
       * @returns void
       */
    init(app) {
        const router = express_1.default.Router();
        /**
             * Forwards any requests to the /v1/users URI to UserRouter.
             * @name /v1/users
             * @function
             * @inner
             * @param {string} path - Express path
             * @param {callback} middleware - Express middleware.
             */
        app.use('/v1/users', router_1.default);
        /**
             * @description No results returned mean the object is not found
             * @function
             * @inner
             * @param {callback} middleware - Express middleware.
             */
        app.use((req, res) => {
            res.status(404).send(http_1.default.STATUS_CODES[404]);
        });
        /**
             * @function
             * @inner
             * @param {express.Router}
             */
        app.use(router);
    },
};
//# sourceMappingURL=router.js.map