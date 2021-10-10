import DesktopMenuLink from './DesktopMenuLink';
import LanguagePicker from './LanguagePicker';
import Logo from './Logo';
import SearchBar from './SearchBar';
import styles from './styles.module.scss';

//eventually needs state to control what links are active
//there will never be a working Magazine

const NavBar = () => {
  return (
    <nav className={styles.navbox}>
      <div className={styles.container}>
        <div className={styles.nav_group}>
          <Logo />
          <div className={styles.link_group}>
            <DesktopMenuLink text="snow reports" url="/" active={false} />
            <DesktopMenuLink text="trip planning" url="/" active={true} />
            <DesktopMenuLink text="magazine" url="/" active={false} />
          </div>
        </div>
        <div className={styles.nav_group}>
          <SearchBar />
          <div className={styles.lang_pick_spacer}>
            <LanguagePicker />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
