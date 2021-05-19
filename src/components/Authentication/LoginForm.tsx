import React, { ChangeEventHandler, useState } from "react";
import { Button, Form, FormControlProps } from "react-bootstrap";

type LoginFormProps = {
  toggleForm: () => void;
  dispatchLogin: (params: any) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ toggleForm, dispatchLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const create = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email,password)
    dispatchLogin({ email, password });
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
      New here?{" "}
      <Button variant="link" onClick={() => toggleForm()}>
        Register
      </Button>
    </Form>
  );
};
