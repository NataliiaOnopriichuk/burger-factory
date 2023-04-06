import { Link } from 'react-scroll';
import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container';
import style from './Hero.module.scss';
import burger from '../../assets/images/png/hero.png';
import burger2x from '../../assets/images/png/hero@2x.png';

export const Hero = () => {
  return (
    <div className={style.hero} id="Hero">
      <Container>
        <div className={style.content}>
          <h1 className={style.title}>Burger Factory</h1>
          <p className={style.subtitle}>
            Your dreamed burger close to your locations!
          </p>
          <Link to="Ingredients" smooth={true} duration={200} offset={-130}>
            <Button title="Discover the ingredients" type="discover" />
          </Link>

          <img
            className={style.img}
            src={burger}
            srcSet={`${burger} 1x, ${burger2x} 2x`}
            alt="burger"
          />
        </div>
      </Container>
    </div>
  );
};
