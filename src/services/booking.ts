import axiosConfig from '../configs/axiosConfig';

export async function getBookingByUser(): Promise<any> {
    return await axiosConfig.get('/bookings');
}

export async function getBookingByRoom(roomId: number, date: Date): Promise<any> {
    return await axiosConfig.get(`/bookings/${roomId}`, { params: { date } });
}

export async function deleteBookings(bookingId: string): Promise<any> {
    return await axiosConfig.delete(`/bookings/${bookingId}`);
}

export async function createBooking(roomId: string, startTime: Date, stopTime: Date): Promise<any> {
    return await axiosConfig.post('/bookings',{roomId, startTime, stopTime});
}