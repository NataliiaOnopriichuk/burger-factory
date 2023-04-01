import PropTypes from 'prop-types';
import { Container } from 'components/Container/Container';
import style from './Section.module.scss';

export const Section = ({ children, title, id }) => {
  return (
    <section className={style.section} id={id}>
      <Container>
        <h2 className={style.title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
