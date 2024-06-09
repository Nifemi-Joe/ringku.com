export type ChangePasswordRequest = {
    oldPassword: string,
    userPassword: string,
    username: string
}

export const ChangePasswordRequestInit:ChangePasswordRequest = {
    oldPassword: "",
    userPassword: "",
    username: ""
}