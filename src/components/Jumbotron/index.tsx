import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

type HeaderProps = {
    label: string;
}

export const Header: React.FC<HeaderProps> = ({label}) => {
    const subText = label === 'My Bookings' ? 'Here is where you can view and cancel conference rooms that you have booked' : 'Follow the steps to book a meeting space for you and your team' 
    return (
        <Jumbotron fluid style={{ backgroundColor: '#17a2b8', color: 'white'}}>
            <h1>{label}</h1>
            <p>
                {subText}
            </p>
            <p>
                {label === 'My Bookings' && (
                <LinkContainer to='/schedule-booking'>
                    <Button variant="primary" >Reserve a room</Button>
                </LinkContainer>
                )}
            </p>
        </Jumbotron>
    )
}