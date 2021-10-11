import useToggle from '../../hooks/useToggle';
import SearchPopUp from '../SearchPopUp';
import BurgerMenu from './BurgerMenu';
import DesktopMenuLink from './DesktopMenuLink';
import LanguagePicker from './LanguagePicker';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import SearchToggle from './SearchToggle';
import styles from './styles.module.scss';

//eventually needs state to control what links are active
//there will never be a working Magazine

const NavBar = () => {
  const [showMobileMenu, toggleMobileMenu] = useToggle();
  const [showSearchPopUp, toggleSearchPopUp] = useToggle();

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
          <SearchBar toggleSearchPopUp={toggleSearchPopUp} />
          <div className={styles.lang_pick_spacer}>
            <LanguagePicker />
          </div>
          <SearchToggle />
          <BurgerMenu toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showSearchPopUp && <SearchPopUp toggleSearchPopUp={toggleSearchPopUp} />}
    </nav>
  );
};

export default NavBar;
