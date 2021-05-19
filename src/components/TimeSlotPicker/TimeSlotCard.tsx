import React from 'react';
import { Room } from '../../services/building'
import { Card, Button } from 'react-bootstrap';
import { TimeSlot } from '../../utils/dateFormat';

type TimeSlotCardProps = {
    setSelectedStartTime: (startTime: Date) => void;
    setSelectedStopTime: (startTime: Date) => void;
    timeSlot: TimeSlot;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = ({timeSlot, setSelectedStartTime, setSelectedStopTime }) => {
    return (
        <Card
        bg='light'
        text='dark'
        className="mb-2"
      > 
        <Button variant="light" onClick={() => {
          setSelectedStartTime(timeSlot.actualStartTime)
          setSelectedStopTime(timeSlot.actualEndTime)
        } 
        }>
            <Card.Body style={{textAlign: 'left', paddingLeft: '15%'}}>
                    <b>Time:</b> {timeSlot.displayStartTime} <br/>
            </Card.Body>
        </Button>
      </Card>
    )
}