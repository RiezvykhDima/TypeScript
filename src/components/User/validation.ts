import * as Joi from 'joi';
import { ObjectId } from 'mongoose';
import Validation from '../validation';
import { IUserModel } from './model';

/**
 * @exports
 * @class
 * @extends Validation
 */
class UserValidation extends Validation {
  
    /**
     * @param {String} data.id - objectId
     * @returns {Joi.ValidationResult<{ObjectId}>}
     * @memberof UserValidation
     */
    findById(data: ObjectId): Joi.ValidationResult {
      const schema: Joi.Schema = Joi.object().keys({
        id: this.customJoi.ObjectId().required()
      });

      return schema.validate(data);
    }

    /**
     * @param {IUserModel} profile
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
     create(profile: IUserModel): Joi.ValidationResult {
      const schema: Joi.Schema = Joi.object().keys({
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
     updateById(data: IUserModel): Joi.ValidationResult {
      const schema: Joi.Schema = Joi.object().keys({
        id: this.customJoi.objectId().required(),
        fullName: Joi.string().required()
      })
  
      return schema.validate(data)
    }

    /**
     * @param {String} data.id - objectId
     * @returns {Joi.ValidationResult}
     * @memberof UserValidation
     */
     deleteById(body: {id: string}): Joi.ValidationResult {
      const schema: Joi.Schema = Joi.object().keys({
        id: this.customJoi.objectId().required()
    });
  
    return schema.validate(body);
    }
}

export default new UserValidation();
