import Joi, { number } from 'joi';
import { ObjectId, Types } from 'mongoose';
import User, { IUserModel } from './model';
import UserValidation from './validation';
import { IUserService } from './interface'; 
import { ObjectID } from "typeorm";

const UserService: IUserService = {

/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all users
 * @returns Promise<UserModel[]>
 */
async findAll(): Promise<IUserModel[]> {
  try{
    return await User.find({});
} catch (error) {
    throw new Error(error.message);
  }
},

/**
 * @exports
 * @method findById
 * @param {string} id
 * @summary get a user
 * @returns {Promise<UserModel>}
 */
async findById(id: ObjectId): Promise <IUserModel> {
  try {
    const validate: Joi.ValidationResult = UserValidation.findById(id);

    if (validate.error) {
      throw new Error(validate.error.message);
    }

    return await User.findById({
      _id: id
    });
  } catch (error) {
      throw new Error(error.message);
  }
},

/**
 * @exports
 * @method create
 * @param {IUserModel} body
 * @summary create a new user
 * @returns {Promise<UserModel>}
 */
async create(body: IUserModel): Promise<IUserModel> {
  try {
    const validate: Joi.ValidationResult = UserValidation.create(body);

    if (validate.error) {
      throw new Error(validate.error.message);
    }

    const user: IUserModel = await User.create(body);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }

},

/**
 * Find a user by id and update his profile
 * @exports
 * @method updateById
 * @param {IUserModel} body
 * @summary update a user's profile
 * @returns {Promise< IUserModel >}
 */
async updateById(body: IUserModel): Promise<IUserModel> {
  try {
    const validate: Joi.ValidationResult = UserValidation.updateById(body);

    if (validate.error) {
      throw new Error(validate.error.message);
    }

      const user: IUserModel = await User.findByIdAndUpdate(body);

      return user;
  } catch (error) {
      throw new Error(error.message);
    }
},

/**
 * @exports
 * @method deleteById
 * @param {string} _id
 * @summary delete a user from database
 * @returns {Promise<void>}
 */
 async deleteById (id: string): Promise<IUserModel> {
  try {
    const validate: Joi.ValidationResult = UserValidation.deleteById({
        id
    });

    if (validate.error) {
        throw new Error(validate.error.message);
    }

    const user: IUserModel = await User.findOneAndRemove({
        _id: new Types.ObjectId(id)
    });

    return user;
  } catch (error) {
      throw new Error(error.message);
  }
}
}

export default UserService;
