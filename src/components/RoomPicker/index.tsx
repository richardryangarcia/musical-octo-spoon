import React from 'react';
import {RoomCard} from './RoomCard';
import {Room} from '../../services/building'

type RoomPickerProps = {
    rooms: Room[];
    selectedRoom: Room | undefined;
    setSelectedRoom: (room: Room) => void;
    fetchRoomBookings: (roomId:number, date: Date) => void;
    selectedDate: Date 
}

export const BuildingPicker: React.FC<RoomPickerProps> = ({rooms, selectedRoom, setSelectedRoom, fetchRoomBookings, selectedDate}) => {
    const headerLabel = selectedRoom ? `Room: ${selectedRoom.name}` : "Choose Room"
    const labelColor = selectedRoom ? 'Green' : ""
    return (
        <div>
            <div style={{textAlign: 'left', color: `${labelColor}`}}>
                <h3>{headerLabel}</h3>
            </div>
            {!selectedRoom && (<div>
                { rooms.map((room) => {
                    return <RoomCard  room={room} setSelectedRoom={setSelectedRoom} fetchRoomBookings={fetchRoomBookings} selectedDate={selectedDate}/>
                })}
            </div>)}
        </div>
    )
}