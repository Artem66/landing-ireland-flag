/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Carousel.scss';
import { useState } from 'react';
import slider1 from './img/slider-1.png';
import slider2 from './img/slider-2.png';
import slider3 from './img/slider-3.png';
import arrowRight from './img/arrow-right.svg';
import arrowLeft from './img/arrow-left.svg';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const mod = (n:number, m:number) => {
    const result = n % m;

    return result >= 0 ? result : result + m;
  };

  const cards = [
    {
      id: '1',
      image: slider1,
      title: 'The ireland flag Timeline',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
    {
      id: '2',
      image: slider2,
      title: 'History of the flags used in Ireland',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
    {
      id: '3',
      image: slider3,
      title: 'What the Irish flag means to me',
      // eslint-disable-next-line max-len
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.',
    },
  ];

  return (
    <div className="carousel">
      <div className="header">
        <h1 className="header--title">Welcome to the Ireland flag Institute</h1>
      </div>
      {cards.map((item, i) => {
        const indexLeft = mod(index - 1, cards.length);
        const indexRight = mod(index + 1, cards.length);

        let className = 'card';

        if (i === index) {
          className = 'card card--active';
        } else if (i === indexRight) {
          className = 'card card--right';
        } else if (i === indexLeft) {
          className = 'card card--left';
        } else {
          className = 'card';
        }

        return (
          <div key={item.id}>
            <div className={className}>
              <img
                className="card--image"
                src={item.image}
                alt="Comic"
              />
              <div className="card--caption">
                <h3 className="card--caption--title">{item.title}</h3>
                <p className="card--caption--subtitle">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <span
        onClick={() => setIndex(mod(index - 1, cards.length) % cards.length)}
        className="nav nav--prev"
      >
        <img src={arrowLeft} alt="" className="nav--icon" />
        Previous
      </span>
      <span
        onClick={() => setIndex((index + 1) % cards.length)}
        className="nav nav--next"
      >
        Next
        <img src={arrowRight} alt="" className="nav--icon" />
      </span>
    </div>
  );
};

export default Carousel;
