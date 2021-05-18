import React, {useState} from 'react';
import { Header } from '../components/Jumbotron';
import { Container } from 'react-bootstrap';
import { Building } from '../services/user';
import { BuildingPicker } from '../components/BuildingPicker';
import { DateSelector } from '../components/DatePicker';
import { dateNotInThePast} from '../utils/dateFormat';
import "react-datepicker/dist/react-datepicker.css";

type ScheduleBookingsProps = {}

export const ScheduleBookings: React.FC<ScheduleBookingsProps> = () => {
    const timeNow = new Date()
    const [selectedBuilding, setSelectedBuilding] = useState<Building>();
    const [selectedDate, setSelectedDate] = useState<Date>(timeNow);
    const [selectedRoomId, setSelectedRoomId] = useState<number>(0);
    const [selectedStartTime, setSelectedStartTime] = useState<Date>()

    const ensureDateAndSetSelected = (arg: Date | [Date,Date] | null) => {
        if (arg instanceof Date && dateNotInThePast(arg,timeNow)) {
            setSelectedDate(arg)
        }
    }

    const fetchBuildingDetails = (buildingId: number) => {
        console.log("fetching building details", buildingId)
    }


    const building: Building = {id:4,name: "P0"}
    const buildings: Building[] = [building,building, building]
    console.log(selectedBuilding);
    console.log(selectedDate);

    return (
        <div>
            <Header label="Schedule Bookings"/>
            <Container>
                <DateSelector selectedDate={selectedDate} ensureDateAndSetSelected={ensureDateAndSetSelected} />
                <BuildingPicker buildings={buildings} selectedBuilding={selectedBuilding} setSelectedBuilding={setSelectedBuilding} fetchBuildingDetails={fetchBuildingDetails} />

            </Container>
        </div>
    )
}