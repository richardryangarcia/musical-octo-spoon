import axiosConfig from '../configs/axiosConfig';

export async function getBuildingDetails(buildingId: number): Promise<any> {
    return await axiosConfig.get(`/building/${buildingId}`);
}