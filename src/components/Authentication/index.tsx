import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import {LoginForm} from './LoginForm';
import {SignUpForm} from './SignUpForm';

type AuthenticationProps = {}

export const Authentication: React.FC<AuthenticationProps> = () => {
    const [signUp, setSignUp] = useState<boolean>(false)
    const toggleForm = () => setSignUp(!signUp)
    const label = signUp ? "Sign Up" : "Sign In";

    const dispatchLogin = (params: any) => {console.log(params)}
    const dispatchSignUp = (params: any) => {console.log(params)}

    return (
    <Card className="bg-dark text-white">
        <Card.Header>Employee Conference Room Bookings</Card.Header>
        <Card.Body>
            <Card.Title>{label}</Card.Title>

            {signUp && <SignUpForm dispatchSignUp={dispatchSignUp} toggleForm={toggleForm}/>}

            {!signUp && <LoginForm dispatchLogin={dispatchLogin} toggleForm={toggleForm}/>}

        </Card.Body>
    </Card>
  )
}