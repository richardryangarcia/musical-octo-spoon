import axiosConfig from '../configs/axiosConfig';

export async function getUserDetails(): Promise<any> {
    return await axiosConfig.get('/users')
}