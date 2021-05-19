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
import { TimeSlotPicker } from '../components/TimeSlotPicker';
import { buildingInitialState } from '../store/building/reducers';

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
    const details = selectedBuilding && building && building.details && building.details[selectedBuilding.id]

    const ensureDateAndSetSelected = (arg: Date | [Date,Date] | null) => {
        if (arg instanceof Date && dateNotInThePast(arg,timeNow)) {
            setSelectedDate(arg)
        }
    }

    return (
        <div>
            <Header label="Schedule Bookings"/>
            <Container>

                <DateSelector selectedDate={selectedDate} 
                    ensureDateAndSetSelected={ensureDateAndSetSelected} 
                />

                <BuildingPicker buildings={user.buildings} 
                    selectedBuilding={selectedBuilding} 
                    setSelectedBuilding={setSelectedBuilding} 
                    fetchBuildingDetails={fetchBuildingDetails} 
                />
                
                {selectedBuilding && details && (
                    <RoomPicker rooms={details.rooms} 
                        selectedRoom={selectedRoom} 
                        setSelectedRoom={setSelectedRoom} 
                        selectedDate={selectedDate} 
                        fetchRoomBookings={fetchRoomBookings} 
                    />
                    )
                }

                {selectedRoom && details && (
                    <TimeSlotPicker room={selectedRoom} hours={details.hours} events={details.events} setSelectedStartTime={setSelectedStartTime} selectedDate={selectedDate} selectedStartTime={selectedStartTime} />
                )}
            
            </Container>
        </div>
    )
}