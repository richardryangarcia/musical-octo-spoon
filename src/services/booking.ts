import axiosConfig from '../configs/axiosConfig';

export async function getBookingByUser(): Promise<any> {
    const response = await axiosConfig.get('/bookings');
    return response.data
}

export async function getBookingByRoom(roomId: number, date: Date): Promise<any> {
    const response = await axiosConfig.get(`/bookings/${roomId}`, { params: { date } });
    return response.data
}

export async function deleteBookings(bookingId: string): Promise<any> {
    const response = await axiosConfig.delete(`/bookings/${bookingId}`);
    return response.data
}

export async function createBooking(roomId: string, startTime: Date, stopTime: Date): Promise<any> {
    const response = await axiosConfig.post('/bookings',{roomId, startTime, stopTime});
    return response.data
}