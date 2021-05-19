import React from 'react';
import { Booking } from '../../services/booking'
import { Building } from '../../services/user'
import { Card, Button } from 'react-bootstrap';
import { formatDate, formatTime} from '../../utils/dateFormat';

type BookingCardProps = {
    booking: Booking;
    timeNow: Date
    sendDeleteBooking: (bookingId: number) => void
    buildings: Building[]
}

export const BookingCard: React.FC<BookingCardProps> = ({buildings, booking, timeNow, sendDeleteBooking}) => {
    const cardColor = (booking.startTime <= timeNow && booking.stopTime >= timeNow) ? 'success' : 'light'
    const textColor = cardColor === 'light' ? 'dark' : 'light';
    const formattedDay = formatDate(new Date(booking.startTime))
    const formattedStartTime = formatTime(new Date(booking.startTime))
    const formattedStopTime = formatTime(new Date(booking.stopTime))
    const building = buildings.find(b => b.id === booking.room.buildingId);

    return (
        <Card
        bg={cardColor}
        key={booking.id}
        text={textColor}
        className="mb-2"
      >
        <Card.Body style={{textAlign: 'left', paddingLeft: '15%'}}>
            <b>Building:</b> {building && building.name}<br/>
            <b>Room:</b> {booking.room.name} <br/>
            <b>Date:</b> {formattedDay} <br/>
            <b>Start Time:</b> {formattedStartTime} <br/>
            <b>Stop Time:</b> {formattedStopTime} 

            <Button variant="danger" style={{textAlign: 'right', position: 'absolute', right: 60, top: 60}} onClick={() => sendDeleteBooking(booking.id)}>Delete Booking</Button>
        </Card.Body>
      </Card>
    )
}