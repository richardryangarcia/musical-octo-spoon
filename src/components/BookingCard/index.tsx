import React, {useState} from 'react';
import { Booking } from '../../services/booking'
import { Building } from '../../services/user'
import { Card, Button } from 'react-bootstrap';
import { formatDate, formatTime, parseDate} from '../../utils/dateFormat';
import { WhiteBoard } from '../Whiteboard';
import web3 from 'web3';

type BookingCardProps = {
    booking: Booking;
    timeNow: Date
    sendDeleteBooking: (bookingId: number) => void
    buildings: Building[]
}

export const BookingCard: React.FC<BookingCardProps> = ({buildings, booking, timeNow, sendDeleteBooking}) => {
    const [showWhiteBoard, setShowWhiteBoard] = useState<boolean>(false);
    const formattedDay = formatDate(new Date(booking.startTime))
    const formattedStartTime = formatTime(new Date(booking.startTime))
    const formattedStopTime = formatTime(new Date(booking.stopTime))
    const building = buildings.find(b => b.id === booking.room.buildingId);
    const current = (new Date(booking.startTime) <= timeNow && timeNow <= new Date(booking.stopTime))  ? true : false;
    const cardColor = current ? 'success' : 'light'
    const textColor = current ? 'light' : 'dark';
    const web3Found = web3?.givenProvider && web3.givenProvider.isMetaMask

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
            <br/>

            {current && web3Found &&  (
              <Button variant="secondary" size="sm" style={{textAlign: 'right', position: 'absolute', right: 60, top: 100}} onClick={() => setShowWhiteBoard(true)}>Show White Board</Button>
            )}

            {current && !web3Found && (
              <div style={{color:'red', fontSize: '14px', marginTop:'10px'}}><b>NOTE:</b>Please make sure you're using Google Chrome and have MetaMask installed to access White Board ;) </div>
            )}

            {showWhiteBoard && (
              <WhiteBoard />
            )}

        </Card.Body>
      </Card>
    )
}