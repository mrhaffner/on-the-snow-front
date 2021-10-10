import type { NextPage } from 'next';
import Logo from './Logo';
import styles from './style.module.scss';

const NavBar: NextPage = () => {
  return (
    <nav className={styles.wrapper}>
      <div>
        <Logo />
      </div>
    </nav>
  );
};

export default NavBar;
