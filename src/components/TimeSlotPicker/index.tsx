import React from 'react';
import {TimeSlotCard} from './TimeSlot';
import {Room, Hour, Event} from '../../services/building'
import { areTheSameDay, getTimeSlots, TimeSlot } from '../../utils/dateFormat';

type TimeSlotPickerProps = {
    room: Room;
    hours: Hour[];
    events: Event[];
    setSelectedStartTime: (date: Date) => void;
    selectedDate: Date;
    selectedStartTime: Date | undefined;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({room, hours, setSelectedStartTime, events, selectedDate, selectedStartTime}) => {
    const headerLabel = selectedStartTime ? `Time Slot: ${selectedStartTime.toTimeString()}` : "Choose Time Slot"
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

    console.log(timeSlots)

    

    // const timeSlots = [] 
    // while (dayOfWeek?.openTime.getHours)

    // get window of open hours if any 
    
    return (
        <div>
            <div style={{textAlign: 'left', color: `${labelColor}`}}>
                <h3>{headerLabel}</h3>
            </div>

            {(dayOfWeek?.openTime === null || dayOfWeek?.closeTime == null) && (
                <div style={{color: 'red'}}>Office Building closed on this day, try a different date</div>
            )}

            {/* {!selectedRoom && rooms && (<div>
                {  rooms.map((room) => {
                    return <RoomCard  room={room} setSelectedStartTime={setSelectedStartTime} fetchRoomBookings={fetchRoomBookings} selectedDate={selectedDate}/>
                })}
            </div>)} */}
        </div>
    )
}