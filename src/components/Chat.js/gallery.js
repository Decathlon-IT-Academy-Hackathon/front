import React from "react";
import Carousel from "better-react-carousel";
import senderismo from "../../assets/img.jpeg";
import mochila from "../../assets/img2.jpeg";

const Gallery = () => {
  return (
    <Carousel cols={6} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={senderismo} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={mochila} alt="imgdepo1" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=3"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=4"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=5"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=6"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=7"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=8"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=9"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=10"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=11"
          alt="imgdepo1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=12"
          alt="imgdepo1"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Gallery;
