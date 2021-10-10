import styles from './styles.module.scss';

const BurgerMenu = () => {
  return (
    <button type="button" title="Menu" tabIndex={-1} className={styles.burger}>
      <svg viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="3.333" rx="1.667"></rect>
        <rect y="8.334" width="25" height="3.333" rx="1.667"></rect>
        <rect y="16.666" width="25" height="3.333" rx="1.667"></rect>
      </svg>
    </button>
  );
};

export default BurgerMenu;
