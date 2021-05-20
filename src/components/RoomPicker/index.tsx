import React from 'react';
import {RoomCard} from './RoomCard';
import { Room, Event } from '../../services/building'
import { areTheSameDay } from '../../utils/dateFormat';


type RoomPickerProps = {
    rooms: Room[] | undefined;
    selectedRoom: Room | undefined;
    setSelectedRoom: (room: Room) => void;
    fetchRoomBookings: (roomId:number, date: Date) => void;
    selectedDate: Date;
    userRoleIds: number[];
    events: Event[];

}

export const RoomPicker: React.FC<RoomPickerProps> = ({userRoleIds, rooms, events, selectedRoom, setSelectedRoom, fetchRoomBookings, selectedDate}) => {
    const headerLabel = selectedRoom ? `Room: ${selectedRoom.name}` : "Choose Room"
    const labelColor = selectedRoom ? 'Green' : ""

    const userCanAccess = (userRoleIds: number[], primaryRoleId: number) => {
        let allowed = false;
        let allowedRoles: number[] = events.filter((e) => {
            return areTheSameDay(e.eventDate, selectedDate)
        }).map(event => event.guestRoleId);

        allowedRoles.push(primaryRoleId)

        for (let i = 0; i < userRoleIds.length; i++){
            if (allowedRoles.includes(userRoleIds[i])) {
                allowed = true;
                break;
            } 
        }

        return allowed;
    }

    return (
        <div>
            <div style={{textAlign: 'left', color: `${labelColor}`}}>
                <h3>{headerLabel}</h3>
            </div>
            {!selectedRoom && rooms && (<div>
                {  rooms.map((room) => {
                    const isUserAllowed = userCanAccess(userRoleIds, room.primaryRoleId)
                    {return !isUserAllowed ? <div/> : (
                        <RoomCard  room={room} setSelectedRoom={setSelectedRoom} fetchRoomBookings={fetchRoomBookings} selectedDate={selectedDate}/>
                    )}
                })}
            </div>)}
        </div>
    )
}