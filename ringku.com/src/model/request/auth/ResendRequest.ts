export type ResendRequest = {
    customerPhone: string,
    countryCode: string,
}

export const ResendRequestInit:ResendRequest = {
    customerPhone: "",
    countryCode: "234",
}