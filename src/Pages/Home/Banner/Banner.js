import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={550} className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="display-2 text-uppercase ">
            Keep Your Body Fit &{' '}
            <span className="text-danger">
              <strong>Strong</strong>
            </span>
          </h1>
          <p className="ms-5 fs-3">with Niobe Thomson</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={550} className="d-block w-100" src={banner2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="display-2 text-uppercase">
            Exercise{' '}
            <span className="text-danger">
              <strong>Smarter</strong>
            </span>
            . <br /> Feel{' '}
            <span className="text-danger">
              <strong>Better</strong>
            </span>
            . Live{' '}
            <span className="text-danger">
              <strong>Longer</strong>
            </span>
          </h1>
          <p className="ms-5 fs-3">with Niobe Thomson</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
