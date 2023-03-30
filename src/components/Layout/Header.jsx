import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import style from './Header.module.scss';

export const Header = () => {
  const titleList = ['Ingredients', 'Story', 'Burgers', 'Location'];
  return (
    <header className={style.header}>
      <Logo type="header">
        <nav>
          <ul className={style.list}>
            {titleList.map(el => (
              <li key={uuidv4()}>
                <Link to={el} smooth={true} duration={200} offset={-130}>
                  {el}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.button}>
          <Button title="Order Now" type="order" />
        </div>
      </Logo>
    </header>
  );
};
