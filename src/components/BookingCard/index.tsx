import React from 'react';
import { Booking } from '../../services/booking'
import { Card, Button } from 'react-bootstrap';
import { formatDate, formatTime} from '../../utils/dateFormat';

type BookingCardProps = {
    booking: Booking;
    timeNow: Date
    sendDeleteBooking: (bookingId: number) => void
}

export const BookingCard: React.FC<BookingCardProps> = ({booking, timeNow, sendDeleteBooking}) => {
    const cardColor = (booking.startTime <= timeNow && booking.stopTime >= timeNow) ? 'light' : 'light'
    const textColor = cardColor === 'light' ? 'dark' : 'light';
    const formattedDay = formatDate(booking.startTime)
    const formattedStartTime = formatTime(booking.startTime)
    const formattedStopTime = formatTime(booking.stopTime)
    return (
        <Card
        bg={cardColor}
        key={booking.id}
        text={textColor}
        className="mb-2"
      >
        <Card.Body style={{textAlign: 'left', paddingLeft: '15%'}}>
            <b>Building:</b> need to get <br/>
            <b>Room</b>: {booking.roomId} <br/>
            <b>Date:</b> {formattedDay} <br/>
            <b>Start Time:</b> {formattedStartTime} <br/>
            <b>Stop Time:</b> {formattedStopTime} 

            <Button variant="danger" style={{textAlign: 'right', position: 'absolute', right: 60, top: 60}} onClick={() => sendDeleteBooking(booking.id)}>Delete Booking</Button>
        </Card.Body>
      </Card>
    )
}