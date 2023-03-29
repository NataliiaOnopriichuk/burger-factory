import PropTypes from 'prop-types';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header type="header" />
      <main>{children}</main>
      <Footer type="footer" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
