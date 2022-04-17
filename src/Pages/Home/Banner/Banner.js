import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
// import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={400} className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="display-2 text-uppercase ">
            Keep Your Body Fit & <span className="text-danger font-weight-bold">Strong</span>
          </h1>
          <p className="ms-5 fs-3">with Niobe Thomson</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={400} className="d-block w-100" src={banner2} alt="Second slide" />
        <Carousel.Caption>
          <h1 className="display-2 text-uppercase">
            Exercise <span className="text-danger">Smarter</span>. <br /> Feel <span className="text-danger">Better</span>. Live <span className="text-danger">Longer</span>
          </h1>
          <p className="ms-5 fs-3">with Niobe Thomson</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img height={400} className="d-block w-100" src={banner3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Banner;
