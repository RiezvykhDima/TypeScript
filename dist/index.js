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
const UserService = require('./service');
const validation_1 = __importDefault(require("./validation"));
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
            const users = yield UserService.findAll();
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
        try {
            const { error } = validation_1.default.findById(req.params);
            if (error) {
                throw new ValidationError_1.default(error.details);
            }
            const user = yield UserService.findById(req.params.id);
            return res.status(200).json({
                data: user,
            });
        }
        catch (error) {
            if (error instanceof ValidationError_1.default) {
                return res.status(422).json({
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
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { error } = validation_1.default.create(req.body);
            if (error) {
                throw new ValidationError_1.default(error.details);
            }
            const user = yield UserService.create(req.body);
            return res.status(200).json({
                data: user,
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
            const { error } = validation_1.default.updateById(req.body);
            if (error) {
                throw new ValidationError_1.default(error.details);
            }
            const updatedUser = yield UserService.updateById(req.body.id, req.body);
            return res.status(200).json({
                data: updatedUser,
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
            const { error } = validation_1.default.deleteById(req.body);
            if (error) {
                throw new ValidationError_1.default(error.details);
            }
            const deletedUser = yield UserService.deleteById(req.body.id);
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
