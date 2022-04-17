import React, { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef('');
  const passwordRef = useRef('');
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user]);

  if (error) {
    errorElement = <p className="text-danger text-start">Error:{error.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-25 mx-auto mt-3">
      <h2 className="text-primary py-2">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" className="w-100" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="btn btn-link text-danger text-decoration-none" onClick={() => navigate('/signup')}>
        Don't have an account?
      </p>
    </div>
  );
};

export default Login;
