import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import SocialLogin from './../SocialLogin/SocialLogin';

const SignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  let errorElement;

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user]);

  if (error) {
    errorElement = <p className="text-danger text-start">Error:{error.message}</p>;
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-25 mx-auto mt-3">
      <h2 className="text-primary py-2">Please Sign Up</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" ref={nameRef} placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
        </Form.Group>

        <Button variant="dark" className="w-100" type="submit">
          Sign Up
        </Button>
      </Form>
      {errorElement}
      <p className="btn btn-link text-danger text-decoration-none" onClick={() => navigate('/login')}>
        Already have an account?
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
