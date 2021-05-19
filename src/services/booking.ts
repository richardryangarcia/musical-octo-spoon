import axiosConfig from '../configs/axiosConfig';
import { Room } from '../services/building';

export type Booking = {
    id: number;
    roomId: number;
    userId: string;
    startTime: Date;
    stopTime: Date;
    room: Room
}

export type CreateBookingDto = {
    roomId: string;
    startTime: Date;
    stopTime: Date;
}

export async function getBookingsByUser(): Promise<Booking[]> {
    const response = await axiosConfig.get('/bookings');
    return response.data
}

export async function getBookingsByRoom(roomId: number, date: Date): Promise<Booking[]> {
    const response = await axiosConfig.get(`/bookings/${roomId}`, { params: { date } });
    return response.data
}

export async function deleteBooking(bookingId: number): Promise<void> {
    const response = await axiosConfig.delete(`/bookings/${bookingId}`);
    return response.data
}

export async function createBooking(createBookingDto: CreateBookingDto): Promise<void> {
    const response = await axiosConfig.post('/bookings', createBookingDto);
    return response.data
}