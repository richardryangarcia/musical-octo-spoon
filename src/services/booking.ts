import axiosConfig from '../configs/axiosConfig';

export type Booking = {
    id: number;
    roomId: number;
    userId: string;
    startTime: Date;
    stopTime: Date;
}

export type CreateBookingDto = {
    roomId: string;
    startTime: Date;
    stopTime: Date;
}

export async function getBookingByUser(): Promise<Booking[]> {
    const response = await axiosConfig.get('/bookings');
    return response.data
}

export async function getBookingByRoom(roomId: number, date: Date): Promise<Booking[]> {
    const response = await axiosConfig.get(`/bookings/${roomId}`, { params: { date } });
    return response.data
}

export async function deleteBookings(bookingId: string): Promise<void> {
    const response = await axiosConfig.delete(`/bookings/${bookingId}`);
    return response.data
}

export async function createBooking(createBookingDto: CreateBookingDto): Promise<void> {
    const response = await axiosConfig.post('/bookings', createBookingDto);
    return response.data
}