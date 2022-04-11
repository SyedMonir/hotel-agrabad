import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);
  useEffect(() => {
    fetch('rooms-carousel.json')
      .then((res) => res.json())
      .then((data) => setCarousel(data));
  }, []);
  console.log(carousel);
  return (
    <div className="carousel w-full h-1/2">
      {}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={carousel[0]?.picture} className="w-full h-3/4" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
          className="w-full h-1/2"
          alt=""
        />{' '}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
          className="w-full"
          alt=""
        />{' '}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
          className="w-full"
          alt=""
        />{' '}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
