import React from 'react';
import {BuildingCard} from './BuildingCard';
import {Building} from '../../services/user'
import {Card } from 'react-bootstrap';

type BuildingPickerProps = {
    buildings: Building[] | undefined;
    selectedBuilding: Building | undefined;
    setSelectedBuilding: (building: Building) => void;
    fetchBuildingDetails: (buildingId:number) => void;
}

export const BuildingPicker: React.FC<BuildingPickerProps> = ({buildings, selectedBuilding, setSelectedBuilding, fetchBuildingDetails}) => {
    const headerLabel = selectedBuilding ? `Building: ${selectedBuilding.name}` : "Choose Building"
    const labelColor = selectedBuilding ? 'Green' : ""
    return (
        <div>
            <div style={{textAlign: 'left', color: `${labelColor}`}}>
                <h3>{headerLabel}</h3>
            </div>
            {!selectedBuilding && buildings && (<div>
                { buildings.map((building) => {
                    return <BuildingCard  building={building} setSelectedBuilding={setSelectedBuilding} fetchBuildingDetails={fetchBuildingDetails}/>
                })}
            </div>)}
        </div>
    )
}