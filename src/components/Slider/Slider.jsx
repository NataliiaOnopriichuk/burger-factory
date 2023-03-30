import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import style from './Slider.module.scss';
import burgerBun from '../../assets/images/png/burger-bun.png';
import burgerBun2x from '../../assets/images/png/burger-bun@2x.png';
import cheese from '../../assets/images/png/cheese.png';
import cheese2x from '../../assets/images/png/cheese@2x.png';
import meat from '../../assets/images/png/meat.png';
import meat2x from '../../assets/images/png/meat@2x.png';
import salad from '../../assets/images/png/salad.png';
import salad2x from '../../assets/images/png/salad@2x.png';
import tomato from '../../assets/images/png/tomato.png';
import tomato2x from '../../assets/images/png/tomato@2x.png';
import { settings } from 'utils/sliderSettings';

const ingredients = [
  { name: 'Buns', url: burgerBun, url2x: burgerBun2x },
  { name: 'Salad', url: salad, url2x: salad2x },
  { name: 'Tomato', url: tomato, url2x: tomato2x },
  { name: 'Cheese', url: cheese, url2x: cheese2x },
  { name: 'Bacon', url: meat, url2x: meat2x },
];

export const SliderCard = () => {
  return (
    <Slider {...settings} className={style.mySlider}>
      {ingredients.map(({ name, url, url2x }) => (
        <div key={uuidv4()} className={style.inner}>
          <img
            className={style.img}
            src={url}
            srcSet={`${url} 1x, ${url2x} 2x`}
            alt={name}
          />
          <p>{name}</p>
        </div>
      ))}
    </Slider>
  );
};
