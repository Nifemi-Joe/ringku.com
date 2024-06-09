export type CompleteSignupRequest = {
    otp: string,
    userEmail: string
}

export const CompleteSignupRequestInit :CompleteSignupRequest= {
    otp: "",
    userEmail: ""
}