import style from './Details.module.scss';

export const Details = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>Ingredient</li>
      <li className={style.item}>Lorem ipsum</li>
      <li className={style.item}>Lorem ipsum</li>
      <li className={style.item}>Lorem ipsum</li>
    </ul>
  );
};
