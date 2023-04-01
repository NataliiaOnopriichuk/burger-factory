import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import clsx from 'clsx';
import { Container } from 'components/Container/Container';
import style from './Logo.module.scss';
import logo from '../../assets/logo/logo.png';
import logo2x from '../../assets/logo/logo@2x.png';
import { navList } from 'utils/navList';

export const Logo = ({ children, type, active }) => {
  const wrapperClass = clsx({
    [style.wrapper]: true,
    [style.inner]: type === 'footer',
  });

  const linkClass = clsx({
    [style.link]: true,
    [style.padding]: type === 'footer',
  });

  return (
    <Container>
      <div className={wrapperClass}>
        <Link
          className={linkClass}
          to="Hero"
          smooth={true}
          duration={200}
          offset={-130}
          onClick={() => active(navList[0])}
        >
          <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
        </Link>
        {children}
      </div>
    </Container>
  );
};

Logo.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
