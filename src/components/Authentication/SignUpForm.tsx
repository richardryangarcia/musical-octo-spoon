import React, { ChangeEventHandler, useState } from "react";
import { Button, Form, FormControlProps } from "react-bootstrap";
import { AuthenticateDto } from '../../services/auth';

type SignUpFormProps = {
  toggleForm: () => void;
  dispatchSignUp: (params: AuthenticateDto) => void;
};

export const SignUpForm: React.FC<SignUpFormProps> = ({ toggleForm, dispatchSignUp }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const create = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchSignUp({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={create}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(event) => {
            setEmail(
              event.currentTarget.value ? event.currentTarget.value.toString() : ""
            );
          }}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(
              event.currentTarget.value ? event.currentTarget.value.toString() : ""
            );
          }}
        />
      </Form.Group>
      <Button
        className="submit-btn"
        style={{ width:'100%' }}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      
      Already have a account?{" "}
      <Button variant="link" onClick={() => toggleForm()}>
        Log In
      </Button>
    </Form>
  );
};
