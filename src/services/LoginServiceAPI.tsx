import axios, { AxiosError } from "axios";
import { ACTIVAR_CUENTA_PATH, CHECK_TOKEN_PATH, LOGIN_PATH, REGISTRO_PATH } from "../constants/PathsConstants";
import { IToken } from "../request/Token";
import { ILogin } from "../request/Login"
import { IRegistro } from "../request/Registro";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BOVEDA_API_URL,
});

export const sendLoginDataWS = async (loginRequest: ILogin) => {
    try {
        const result = await instance.post(LOGIN_PATH, loginRequest)
        return result
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.message)   
    }
}

export const sendRegistroDataWS = async (registroRequest: IRegistro) => {
    try {
        const result = await instance.post(REGISTRO_PATH, registroRequest)
        console.log('RESULT',result)
        return result
    } catch (error: any) {
        const e: AxiosError = error
        console.log('ERROR',e)
        throw new Error(e.message)   
    }
}

export const activarCuentaWS = async (tokenRequest: IToken) => {
    try {
        const result = await instance.post(ACTIVAR_CUENTA_PATH, tokenRequest)
        return result
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.message)   
    }
}

export const checkTokenWS = async (tokenRequest: IToken) => {
    try {
        const result = await instance.post(CHECK_TOKEN_PATH, tokenRequest)
        return result
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.message)   
    }
}

