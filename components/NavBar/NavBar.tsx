import DesktopMenuLink from './DesktopMenuLink';
import Logo from './Logo';
import styles from './style.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbox}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.container}>
          <DesktopMenuLink text="snow reports" url="/" active={false} />
          <DesktopMenuLink text="trip planning" url="/" active={false} />
          <DesktopMenuLink text="magazine" url="/" active={false} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
