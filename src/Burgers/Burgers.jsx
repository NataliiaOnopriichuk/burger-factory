import { Section } from 'components/Section/Section';
import style from './Burgers.module.scss';
import { v4 as uuidv4 } from 'uuid';
import burger from '../assets/images/png/burger.png';
import burger2x from '../assets/images/png/burger@2x.png';
import { Button } from 'components/Button/Button';

const burgers = [
  { name: '1/4 Pound Cheese', url: burger, url2x: burger2x },
  { name: 'Big Burger', url: burger, url2x: burger2x },
  { name: 'Pure Bacon', url: burger, url2x: burger2x },
];

export const Burgers = () => {
  return (
    <>
      <Section id="Burgers" title="Burgers">
        <div className={style.wrapper}>
          {burgers.map(({ name, url, url2x }) => (
            <div key={uuidv4()} className={style.inner}>
              <p className={style.subtitle}>{name}</p>
              <img
                className={style.img}
                src={url}
                srcSet={`${url} 1x, ${url2x} 2x`}
                alt={name}
              />
              <button className={style.btn}>Details</button>
            </div>
          ))}
        </div>
        <Button title="Order Now" />
      </Section>
    </>
  );
};
