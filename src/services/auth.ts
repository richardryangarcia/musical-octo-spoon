import axiosConfig from '../configs/axiosConfig';

export async function healthcheck(): Promise<void> {
    await axiosConfig.get('')
}

export async function signUp(email:string, password: string): Promise<void> {
    await axiosConfig.post('/users/signup', { email, password })
}

export async function signIn(email:string, password: string): Promise<void> {
    await axiosConfig.post('/users/signin', { email, password })
}