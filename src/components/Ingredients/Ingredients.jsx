import { SliderCard } from 'components/Slider/Slider';
import { Section } from 'components/Section/Section';
import style from './Ingredients.module.scss';

export const Ingredients = () => {
  return (
    <>
      <Section id="Ingredients" title="Ingredients">
        <p className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          id arcu vel maximus.
        </p>
        <SliderCard />
        <p className={style.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue,
          non commodo elit. Integer risus orci, ultricies ac dapibus sed,
          dignissim interdum quam. Proin quis dignissim diam. Donec id magna
          placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies
          erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo
          nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem,
          mollis ut feugiat ac, ultricies eu dolor.
        </p>
      </Section>
    </>
  );
};
