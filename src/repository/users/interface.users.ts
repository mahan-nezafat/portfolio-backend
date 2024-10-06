export enum role {
    guest = "GUEST",
    customer = "CUSTOMER",
    admin = "ADMIN",
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    username: string;
    role: role;
    otp: number;
    email: string;
    request: string;
    phoneNumber: string

}
