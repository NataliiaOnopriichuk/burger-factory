import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import style from './Slider.module.scss';
import { settings } from 'utils/sliderSettings';
import { ingredientsSlider } from 'utils/ingredientsSlider';

export const SliderCard = () => {
  return (
    <Slider {...settings} className={style.mySlider}>
      {ingredientsSlider.map(({ name, url, url2x }) => (
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
