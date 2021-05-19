import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../components/Jumbotron';
import { Container } from 'react-bootstrap';
import { Building } from '../services/user';
import { BuildingPicker } from '../components/BuildingPicker';
import { DateSelector } from '../components/DatePicker';
import { dateNotInThePast} from '../utils/dateFormat';
import "react-datepicker/dist/react-datepicker.css";
import {InitialState} from '../store/index';
import { userDetails} from '../store/user/actions';
import { useBuildingState, useUserState } from '../store/hooks';
import { buildingDetails } from '../store/building/actions';
import { RoomPicker } from '../components/RoomPicker';
import {Room} from '../services/building';
import { roomBooking } from '../store/booking/actions';

type ScheduleBookingsProps = {}

export const ScheduleBookings: React.FC<ScheduleBookingsProps> = () => {
    const user = useUserState()
    const building = useBuildingState()
    const dispatch = useDispatch();
    const fetchBuildingDetails = (buildingId:number) => dispatch(buildingDetails(buildingId))
    const fetchRoomBookings = (roomId:number, date: Date) => dispatch(roomBooking(roomId, date))

    const timeNow = new Date()
    const [selectedBuilding, setSelectedBuilding] = useState<Building>();
    const [selectedDate, setSelectedDate] = useState<Date>(timeNow);
    const [selectedRoom, setSelectedRoom] = useState<Room>();
    const [selectedStartTime, setSelectedStartTime] = useState<Date>()

    const ensureDateAndSetSelected = (arg: Date | [Date,Date] | null) => {
        if (arg instanceof Date && dateNotInThePast(arg,timeNow)) {
            setSelectedDate(arg)
        }
    }

    return (
        <div>
            <Header label="Schedule Bookings"/>
            <Container>
                <DateSelector selectedDate={selectedDate} ensureDateAndSetSelected={ensureDateAndSetSelected} />
                <BuildingPicker buildings={user.buildings} selectedBuilding={selectedBuilding} setSelectedBuilding={setSelectedBuilding} fetchBuildingDetails={fetchBuildingDetails} />
                {selectedBuilding && building.details[selectedBuilding.id] && (<RoomPicker rooms={building.details[selectedBuilding.id].rooms} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedDate={selectedDate} fetchRoomBookings={fetchRoomBookings} />)}
            
            </Container>
        </div>
    )
}