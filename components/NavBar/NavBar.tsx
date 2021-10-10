import DesktopMenuLink from './DesktopMenuLink';
import Logo from './Logo';
import SearchBar from './SearchBar';
import styles from './styles.module.scss';

//eventually needs state to control what links are active
//there will never be a working Magazine

const NavBar = () => {
  return (
    <nav className={styles.navbox}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.container}>
          <DesktopMenuLink text="snow reports" url="/" active={false} />
          <DesktopMenuLink text="trip planning" url="/" active={true} />
          <DesktopMenuLink text="magazine" url="/" active={false} />
        </div>
        <div className={styles.container}>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
