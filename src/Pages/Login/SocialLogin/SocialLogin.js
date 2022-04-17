import React from 'react';
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../../images/google.png';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let erorrElement;

  if (error) {
    erorrElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate('/home');
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: '1px' }} className="bg-primary w-50"></div>
      </div>
      {erorrElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-dark d-block mx-auto w-100 ">
          <img style={{ width: '30px' }} src={google} alt="" />
          <span className="px-3">Google SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
