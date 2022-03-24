import LoginRequest from "../types/request/loginRequest";
import User from "../repositories/MySQL/User";

export default async (request: LoginRequest) => {
    const user = await User.findOne({
        where: {
            email: request.email,
            password: request.password
        },
        attributes: ['id', 'email', 'password'],
        raw: true
    }).catch(() => {
        return;
    });
    console.log(user);
    return user;
}