import axiosConfig from '../configs/axiosConfig';

export type AuthenticateDto = {
    email: string;
    password: string;
}

export async function healthcheck(): Promise<void> {
    return await axiosConfig.get('')
}

export async function signUp(authentiateDto: AuthenticateDto): Promise<void> {
    return await axiosConfig.post('/users/signup', authentiateDto)
}

export async function signIn(authentiateDto: AuthenticateDto): Promise<void> {
    return await axiosConfig.post('/users/signin', authentiateDto)
}