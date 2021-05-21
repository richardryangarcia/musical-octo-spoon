import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Container } from 'react-bootstrap';
import { BookingCard } from '../components/BookingCard';
import { Header } from '../components/Jumbotron';
import { useBookingState, useUserState } from '../store/hooks';
import { userBooking, deleteBooking } from '../store/booking/actions';


type MyBookingsProps = {}

export const MyBookings: React.FC<MyBookingsProps> = () => {
    const timeNow = new Date();
    const dispatch = useDispatch();
    const bookings = useBookingState();
    const user = useUserState();
    const buildings = user.buildings || [];

    useEffect(() => {
        dispatch(userBooking())
    }, [dispatch])

    const sendDeleteBooking = (id: number) => dispatch(deleteBooking(id))

    return (
        <div>
            <Header label="My Bookings"/>

            <Container>
                {bookings && bookings.userBookings.length == 0 && (
                    <div style={{color: "#17a2b8"}}>You have no schedule bookings. Click Reserve a room to book a space.</div>
                )}
                {bookings.userBookings.map((booking) => {
                    return (new Date(booking.stopTime) <  new Date(timeNow)) ? <div/> : (
                        <BookingCard buildings={buildings} timeNow={timeNow} booking={booking} sendDeleteBooking={sendDeleteBooking}/>
                    )
                })}
            </Container>
        </div>
    )
}