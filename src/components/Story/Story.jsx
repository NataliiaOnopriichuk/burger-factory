import { Section } from 'components/Section/Section';
import style from './Story.module.scss';
import burger from '../../assets/images/jpeg/burger-on-board.jpg';
import burger2x from '../../assets/images/jpeg/burger-on-board@2x.jpg';

export const Story = () => {
  return (
    <>
      <Section id="Story" title="">
        <div className={style.wrapper}>
          <div className={style.inner}>
            <h2 className={style.title}>The story</h2>
            <p className={style.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis id arcu vel maximus.
            </p>
            <p className={style.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus
              augue, non commodo elit. Integer risus orci, ultricies ac dapibus
              sed, dignissim interdum quam. Proin quis dignissim diam. Donec id
              magna placerat, fringilla odio et, efficitur lacus. Vivamus eu
              ultricies erat, eu lobortis nunc. Sed nec dignissim libero.
              Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper
              turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.
            </p>
          </div>
          <div className={style.thumb}>
            <img
              className={style.image}
              src={burger}
              srcSet={`${burger} 1x, ${burger2x} 2x`}
              alt="burger"
            />
          </div>
        </div>
      </Section>
    </>
  );
};
