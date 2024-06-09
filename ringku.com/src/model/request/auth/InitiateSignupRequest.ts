export type InitiateSignupRequest = {
    userEmail: string,
    userFirstName: string,
    userGender: string,
    userLastName: string,
    userPassword: string
}

export const InitiateSignupRequestInit:InitiateSignupRequest = {
    userEmail: "",
    userFirstName: "",
    userGender: "",
    userLastName: "",
    userPassword: ""
}

