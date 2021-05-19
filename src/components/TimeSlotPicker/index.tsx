import React from 'react';
import {TimeSlotCard} from './TimeSlotCard';
import {Room, Hour, Event} from '../../services/building'
import { areTheSameDay, getTimeSlots, getHourFromNum } from '../../utils/dateFormat';

type TimeSlotPickerProps = {
    room: Room;
    hours: Hour[];
    events: Event[];
    setSelectedStartTime: (date: Date) => void;
    setSelectedStopTime: (date: Date) => void;    
    selectedDate: Date;
    selectedStartTime: Date | undefined;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({room, hours, setSelectedStartTime, setSelectedStopTime, events, selectedDate, selectedStartTime}) => {
    const headerLabel = selectedStartTime ? `Time Slot: ${getHourFromNum(selectedStartTime.getHours())}` : "Choose Time Slot"
    const labelColor = selectedStartTime ? 'Green' : ""
    let allowedRoles: number[] = events.filter((e) => {
        return areTheSameDay(e.eventDate, selectedDate)
    }).map(event => event.guestRoleId);
    allowedRoles.push(room.primaryRoleId)

    let dayOfWeek = hours.find(hour => hour.dayOfWeek === selectedDate.getDay())
    let timeSlots;
    if (dayOfWeek){
        timeSlots = getTimeSlots(selectedDate, dayOfWeek.openTime.toString(), dayOfWeek.closeTime.toString());
    }
    
    return (
        <div>
            <div style={{textAlign: 'left', color: `${labelColor}`}}>
                <h3>{headerLabel}</h3>
            </div>

            {(dayOfWeek?.openTime === null || dayOfWeek?.closeTime == null) && (
                <div style={{color: 'red'}}>Office Building closed on this day, try a different date</div>
            )}

            {!selectedStartTime && timeSlots && (<div>
                {  timeSlots.map((timeSlot) => {
                    return <TimeSlotCard timeSlot={timeSlot} setSelectedStartTime={setSelectedStartTime} setSelectedStopTime={setSelectedStopTime} />
                })}
            </div>)}
        </div>
    )
}