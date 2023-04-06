import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from 'components/Section/Section';
import { Button } from 'components/Button/Button';
import { Details } from 'components/Details/Details.jsx';
import { burgers } from '../../utils/burgers.js';
import style from './Burgers.module.scss';

export const Burgers = memo(() => {
  const [selectedBurger, setSelectedBurger] = useState(null);

  const handleDetailsClick = index => {
    if (selectedBurger === index) {
      setSelectedBurger(null);
    } else {
      setSelectedBurger(index);
    }
  };

  return (
    <>
      <Section id="Burgers" title="Burgers">
        <div className={style.wrapper}>
          {burgers.map(({ name, url, url2x }, index) => (
            <div
              key={uuidv4()}
              className={`${style.inner} ${
                selectedBurger === index ? style.details : ''
              }`}
              onClick={() => handleDetailsClick(index)}
            >
              <p className={style.subtitle}>{name}</p>
              <img
                className={style.img}
                src={url}
                srcSet={`${url} 1x, ${url2x} 2x`}
                alt={name}
              />
              {selectedBurger === index ? (
                <>
                  <Details />
                  <button className={style.btn}>Reduce</button>
                </>
              ) : (
                <button className={style.btn}>Details</button>
              )}
            </div>
          ))}
        </div>
        <Button title="Order Now" type="order" />
      </Section>
    </>
  );
});
