export type CompletePasswordResetRequest = {
    otp: string,
    userEmail: string,
    userPassword: string
}

export const CompletePasswordResetRequestInit:CompletePasswordResetRequest = {
    otp: "",
    userEmail: "",
    userPassword: ""
}