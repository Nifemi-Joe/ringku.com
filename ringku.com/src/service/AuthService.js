import {BaseService} from "./BaseService";
import {CompletePasswordResetRequest} from "../model/request/auth/CompletePasswordResetRequest.ts";
import {InitiatePasswordResetRequest} from "../model/request/auth/InitiatePasswordResetRequest.ts";
import {LoginRequest} from "../model/request/auth/LoginRequest.ts";
import {ChangePasswordRequest} from "../model/request/auth/ChangePasswordRequest.ts";
import {InitiateSignupRequest} from "../model/request/auth/InitiateSignupRequest.ts";
import {CompleteSignupRequest} from "../model/request/auth/CompleteSignupRequest.ts";

export class AuthService {
    static initiatePasswordReset = (others: any, data: InitiatePasswordResetRequest) =>{
        return BaseService.apiClient(others).post("/authentication/initiate-password-reset", data)
    }
    static completePasswordReset = (others: any, data: CompletePasswordResetRequest) =>{
        return BaseService.apiClient(others).post("/authentication/complete-password-reset", data)
    }
    static changePassword = (others: any, data: ChangePasswordRequest) =>{
        return BaseService.apiClient(others).post("/authentication/change-password", data)
    }
    static initiateEnrollment = (others: any, data: InitiateSignupRequest) =>{
        return BaseService.apiClient(others).post("/authentication/initiate-enrollment", data)
    }
    static completeEnrollment = (others: any, data: CompleteSignupRequest) =>{
        return BaseService.apiClient(others).post("/authentication/complete-enrollment", data)
    }

    static login = (others: any, data: LoginRequest) =>{
        return BaseService.apiClient(others).post("/authentication/login", data)
    }
}
