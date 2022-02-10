import { ObjectId } from "mongoose";
import { IUserModel } from "./model";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    findAll(): Promise<IUserModel[]>;

     /**
     * @param {ObjectID} id
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    findById(id: ObjectId): Promise<IUserModel>;

     /**
     * @param {IUserModel} body
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    create(body: IUserModel): Promise<IUserModel>;

     /**
     * @param {IUserModel} body
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    updateById(body: IUserModel): Promise<IUserModel>;

     /**
     * @param {string} id
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    deleteById(id: string): Promise<IUserModel>;
}