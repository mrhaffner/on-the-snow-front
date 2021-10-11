import BurgerMenu from './BurgerMenu';
import MobileMenuLink from './MobileMenuLink';
import styles from './styles.module.scss';

interface Props {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenu = ({ showMobileMenu, toggleMobileMenu }: Props) => {
  return (
    <div
      className={
        showMobileMenu ? styles.mobile_menu : styles.mobile_menu_hidden
      }
    >
      <div className={styles.mobile_nav}>
        <div className={styles.mobile_container}>
          <BurgerMenu toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
      <div className={styles.mobile_links}>
        <MobileMenuLink text="snow reports" url="/" active={false} />
        <MobileMenuLink text="trip planning" url="/" active={true} />
        <MobileMenuLink text="magazine" url="/" active={false} />
      </div>
    </div>
  );
};

export default MobileMenu;
