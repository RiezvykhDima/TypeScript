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
const mongoose_1 = require("mongoose");
const model_1 = __importDefault(require("./model"));
const validation_1 = __importDefault(require("./validation"));
const UserService = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.find({});
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @exports
     * @method findById
     * @param {ObjectId} id
     * @summary get a user
     * @returns {Promise<UserModel>}
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.findById(id);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                return yield model_1.default.findById({
                    _id: id
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @exports
     * @method create
     * @param {IUserModel} body
     * @summary create a new user
     * @returns {Promise<UserModel>}
     */
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.create(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const user = yield model_1.default.create(body);
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * Find a user by id and update his profile
     * @exports
     * @method updateById
     * @param {IUserModel} body
     * @summary update a user's profile
     * @returns {Promise< IUserModel >}
     */
    updateById(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.updateById(body);
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const user = yield model_1.default.findByIdAndUpdate(body);
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
    /**
     * @exports
     * @method deleteById
     * @param {string} _id
     * @summary delete a user from database
     * @returns {Promise<void>}
     */
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validate = validation_1.default.deleteById({
                    id
                });
                if (validate.error) {
                    throw new Error(validate.error.message);
                }
                const user = yield model_1.default.findOneAndRemove({
                    _id: new mongoose_1.Types.ObjectId(id)
                });
                return user;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
};
exports.default = UserService;
//# sourceMappingURL=service.js.map