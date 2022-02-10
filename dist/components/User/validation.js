"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const validation_1 = __importDefault(require("../validation"));
/**
 * @exports
 * @class
 * @extends Validation
 */
class UserValidation extends validation_1.default {
    /**
     * @param {String} data.id - objectId
     * @returns {Joi.ValidationResult<{ObjectId}>}
     * @memberof UserValidation
     */
    findById(data) {
        const schema = Joi.object().keys({
            id: this.customJoi.ObjectId().required()
        });
        return schema.validate(data);
    }
    /**
     * @param {IUserModel} profile
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
    create(profile) {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            fullName: Joi.string().required()
        });
        return schema.validate(profile);
    }
    /**
     * @param {IUserModel} data
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
    updateById(data) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
            fullName: Joi.string().required()
        });
        return schema.validate(data);
    }
    /**
     * @param {String} data.id - objectId
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
    deleteById(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });
        return schema.validate(body);
    }
}
exports.default = new UserValidation();
//# sourceMappingURL=validation.js.map