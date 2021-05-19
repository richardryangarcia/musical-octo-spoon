import React from 'react';
import { Room } from '../../services/building'
import { Card, Button } from 'react-bootstrap';

type TimeSlotCardProps = {
    setSelectedStartTime: (startTime: Date) => void;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = ({setSelectedStartTime }) => {
    return (
        <Card
        bg='light'
        text='dark'
        className="mb-2"
      > 
        <Button variant="light" onClick={() => {
        //   setSelectedStartTime(room)
        } 
        }>
            <Card.Body style={{textAlign: 'left', paddingLeft: '15%'}}>
                    {/* <b>Name:</b> {room.name} <br/> */}
            </Card.Body>
        </Button>
      </Card>
    )
}