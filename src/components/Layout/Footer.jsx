import { v4 as uuidv4 } from 'uuid';
import { Logo } from 'components/Logo/Logo';
import style from './Footer.module.scss';

export const Footer = () => {
  const address = [
    'Burger Factory',
    'Pl. de la Riponne 10',
    '1005 Lausanne',
    '021 800 00 00',
  ];
  return (
    <footer className={style.footer}>
      <Logo type="footer">
        <ul className={style.list}>
          {address.map((el, index) => (
            <li key={uuidv4()} style={index === 0 ? { fontWeight: 700 } : {}}>
              {el}
            </li>
          ))}
        </ul>
      </Logo>
    </footer>
  );
};
