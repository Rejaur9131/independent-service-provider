import React, { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from './../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './../SocialLogin/SocialLogin';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger text-start">Error:{error.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    } else {
      toast('Enter your email address');
    }
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

        <Button variant="dark" className="w-100" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p className="btn btn-link text-danger text-decoration-none" onClick={() => navigate('/signup')}>
        Don't have an account?
      </p>
      <p>
        Forget Password?{' '}
        <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}>
          Reset Password
        </button>{' '}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
