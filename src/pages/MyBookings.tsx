import React from 'react';
import { useSelector } from "react-redux";
import { InitialState } from '../store';
import { BookingInitialState } from '../store/booking/reducers'
import { UserInitialState } from '../store/user/reducers'
import { Container } from 'react-bootstrap';
import { BookingCard } from '../components/BookingCard';
import { Booking } from '../services/booking';
import { Header } from '../components/Jumbotron';


type MyBookingsProps = {}

export const MyBookings: React.FC<MyBookingsProps> = () => {
    const bookings = useSelector<InitialState, BookingInitialState>(
        (state) => state.auth
      );

    const user = useSelector<InitialState, UserInitialState>(
        (state) => state.auth
    );

    const booking: Booking = {
        id: 2,
        roomId: 1,
        userId: "a601a3cd-332f-4616-87fb-c54cce5ce16c",
        startTime: new Date(),
        stopTime: new Date()
    }

    const sendDeleteBooking = (bookingId: number ) => {
        console.log('delete booking', bookingId)
    }

    const bookingList: Booking[] = [booking,booking, booking,booking,booking, booking]
    const timeNow = new Date();

    return (
        <div>
            <Header label="My Bookings"/>

            <Container>
                {bookingList.map((booking) => {
                    return <BookingCard timeNow={timeNow} booking={booking} sendDeleteBooking={sendDeleteBooking}/>
                })}
            </Container>
        </div>
    )
}