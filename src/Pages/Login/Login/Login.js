import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-25 mx-auto mt-3">
      <h2 className="text-primary py-2">Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" className="w-100" type="submit">
          Sign Up
        </Button>
      </Form>
      <p className="btn btn-link text-danger text-decoration-none" onClick={() => navigate('/signup')}>
        Don't have an account?
      </p>
    </div>
  );
};

export default Login;
