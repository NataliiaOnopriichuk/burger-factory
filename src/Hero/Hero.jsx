import { Section } from 'components/Section/Section';
import style from './Hero.module.scss';
import svg from '../assets/svg/bgnHero.svg';
import { Button } from 'components/Button/Button';

export const Hero = () => {
  return (
    <>
      <Section id="Hero" title="">
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className={style.title}>Burger Factory</h1>
            <p className={style.subtitle}>
              Your dreamed burger close to your locations!
            </p>
            <Button title="Discover the ingredients" type="discover" />
          </div>
          <img className={style.svg} src={svg} alt="bgn" />
        </div>
      </Section>
    </>
  );
};
