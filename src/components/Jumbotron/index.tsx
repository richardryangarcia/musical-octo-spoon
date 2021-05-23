import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

type HeaderProps = {
    label: string;
}

export const Header: React.FC<HeaderProps> = ({label}) => {
    const subText = label === 'My Bookings' ? 'Here is where you can view and cancel conference rooms that you have booked' : 'Follow the steps to book a meeting space for you and your team' 
    return (
        <Jumbotron fluid className='jumbo-tron'>
            <h1>{label}</h1>
            <p>
                {subText}
            </p>
            <p>
                {label === 'My Bookings' ? (
                <LinkContainer to='/schedule-bookings'>
                    <Button variant="primary" >Reserve a room</Button>
                </LinkContainer> 
                ) : (
                <LinkContainer to='/my-bookings'>
                    <Button variant="primary" >View Reservations</Button>
                </LinkContainer> 
                )}
            </p>
        </Jumbotron>
    )
}