import React from 'react';
import pic from '../../images/profile2.png';

const About = () => {
  return (
    <div className="row m-4 align-content-center bg-light">
      <div className="col-md-5 border">
        <img className="w-75" src={pic} alt="" />
      </div>
      <div className="col-md-7 text-justify border">
        <h2 className="text-primary">Md. Rejaur Rahman</h2>
        <p className="fs-5 ">I am a Banker from Meghna Bank Limited and I wanna switch my career. I have been learning web development for about 4-5 years. In those days I was unable to grab the skills that is required to become a web developer going through scattered resoures that I have followed. Now I am confident that if I get an oppotunity of an intern it will enrich my knowledge base to pursue my career as a web devloper. In upcoming 2-3 month, I wanna get an intern at least. To get this I wanna complete this course intime, get a chance in SCIC and ACC, and do other things it requires to become web developer.</p>
      </div>
    </div>
  );
};

export default About;
