import { Link } from 'react-scroll';
import clsx from 'clsx';
import { Container } from 'components/Container/Container';
import style from './Logo.module.scss';
import logo from '../../assets/logo/logo.png';
import logo2x from '../../assets/logo/logo@2x.png';

export const Logo = ({ children, type }) => {
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
        >
          <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
        </Link>
        {children}
      </div>
    </Container>
  );
};
