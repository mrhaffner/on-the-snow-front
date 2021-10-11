import BurgerMenu from './BurgerMenu';
import MobileMenuLink from './MobileMenuLink';
import styles from './styles.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles.mobile_menu}>
      <div className={styles.mobile_nav}>
        <div className={styles.mobile_container}>
          <BurgerMenu />
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
