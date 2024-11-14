import { User } from "../../entities/User";
import { role } from "./interface.users";

// find one user

export const getOneUser = async (phoneNumber: string, id?: number) => {
    try {
        const user = await User.findOne({
            where: {
                id,
                phone_number: phoneNumber
            },
        });
        return user;
    } catch (error) {
        console.log(error);
    }
};

// add one user customer or guest
export const addOneUser = async (userData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: role;
}): Promise<object> => {
    try {
        const newUser = await User.save({
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone_number: userData.phoneNumber,
            role: userData.role,
        });
        return newUser;
    } catch (error) {
        console.log(error);
    }
};
// add admin user
export const addAdminUser = async (userData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}): Promise<object> => {
    try {
        const newUser = await User.save({
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone_number: userData.phoneNumber,
            role: role.admin,
        });
        return newUser;
    } catch (error) {
        console.log(error);
    }
};
// check if a user exist
export const isUserExist = async (id: number): Promise<boolean> => {
    try {
        const result = await User.existsBy({ id });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};
// update a user info except otp and role
export const updateOneUser = async (
    id: number,
    updateData: {
        firstName?: string;
        lastName?: string;
        age?: number;
        username?: string;
        email?: string;
        request?: string;
        phoneNumber?: string;
    }
): Promise<object> => {
    try {
        const updatedUser = await User.update(id, {
            first_name: updateData.firstName,
            last_name: updateData.lastName,
            age: updateData.age,
            username: updateData.username,
            email: updateData.email,
            request: updateData.request,
            phone_number: updateData.phoneNumber,
        });
        console.log(updatedUser);
        return updatedUser;
    } catch (error) {
        console.log(error);
    }
};

// update otp code

export const updateOtpCode = async (
    id: number,
    otp: number
): Promise<object> => {
    try {
        const result = await User.update(id, { otp });
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
};

// update role 
export const updateUserRole = async (
    id: number,
    role: role
): Promise<object> => {
    try {
        const result = await User.update(id, { role });
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
};
// delete a user info

export const deleteOneUser = async (id: number) => {
    try {
        const result = await User.delete(id);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};
