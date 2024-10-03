import { User } from "../../entities/User";

export const getOneUser = async (id: number) => {
    try {
        const user = await User.findOne({
            where: {
                id,
            },
        });
        return user
    } catch (error) {
        console.log(error);
    }
};
