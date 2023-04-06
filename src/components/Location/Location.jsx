import { Section } from 'components/Section/Section';
import style from './Location.module.scss';
import map from '../../assets/images/jpeg/map.jpg';
import map2x from '../../assets/images/jpeg/map@2x.jpg';
import logo from '../../assets/images/png/burger.png';
import logo2x from '../../assets/images/png/burger@2x.png';

export const Location = () => {
  return (
    <>
      <Section id="Location" title="Location">
        <div className={style.wrapper}>
          <ul className={style.list}>
            <li className={style.item}>Burger Factory</li>
            <li className={style.item}>Pl. de la Riponne 10</li>
            <li className={style.item}>1005 Lausanne</li>
            <li className={style.item}>021 800 00 00</li>
          </ul>
          <div className={style.thumb}>
            <img
              className={style.image}
              src={map}
              srcSet={`${map} 1x, ${map2x} 2x`}
              alt="map"
            />
            <div className={style.map}>
              <img
                src={logo}
                srcSet={`${logo} 1x, ${logo2x} 2x`}
                alt="burger"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
