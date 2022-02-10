"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const ValidationError_1 = __importDefault(require("../../error/ValidationError"));
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
function findAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield service_1.default.findAll();
            res.status(200).json({
                data: users,
            });
        }
        catch (error) {
            res.status(500).json({
                error: error.message,
                details: null,
            });
            next(error);
        }
        return null;
    });
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
function findById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body.id);
        try {
            const user = yield service_1.default.findById(req.params.id);
            res.status(200).json({
                data: user,
            });
        }
        catch (error) {
            if (error instanceof ValidationError_1.default) {
                res.status(422).json({
                    error: error.name,
                    details: error.message,
                });
            }
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
    });
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Request} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        try {
            const user = yield service_1.default.create(req.body);
            res.status(201).json({
                data: user,
            });
        }
        catch (error) {
            if (error instanceof ValidationError_1.default) {
                res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
            }
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
    });
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
function updateById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield service_1.default.updateById(req.body);
            res.status(200).json({
                data: updatedUser,
            });
        }
        catch (error) {
            if (error instanceof ValidationError_1.default) {
                res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
            }
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
        return null;
    });
}
/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
function deleteById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedUser = yield service_1.default.deleteById(req.body.id);
            return res.status(200).json({
                data: deletedUser,
            });
        }
        catch (error) {
            if (error instanceof ValidationError_1.default) {
                return res.status(422).json({
                    message: error.name,
                    details: error.message,
                });
            }
            res.status(500).json({
                message: error.name,
                details: error.message,
            });
            return next(error);
        }
    });
}
exports.default = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
};
//# sourceMappingURL=index.js.map