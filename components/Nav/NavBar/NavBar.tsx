import useToggle from '../../../hooks/useToggle';
import SearchPopUp from '../SearchPopUp';
import BurgerMenu from '../BurgerMenu';
import DesktopMenuLink from './DesktopMenuLink';
import LanguagePicker from './LanguagePicker';
import Logo from './Logo';
import MobileMenu from '../MobileMenu';
import SearchBar from './SearchBar';
import SearchToggle from './SearchToggle';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import {
  getAllResortNames,
  getStateNames,
} from '../../../services/resortsService';
import { ResortNameObj } from '../../../types';
import { unslugify } from '../../../utilities/slug';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [showMobileMenu, toggleMobileMenu] = useToggle();
  const [showSearchPopUp, setShowSearchPopUp] = useState(false);

  const [states, setStates] = useState<string[]>([]);
  const [resorts, setResorts] = useState<ResortNameObj[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resortsData = await getAllResortNames();
      setResorts(resortsData);

      const statesData = await getStateNames();
      const cleanedState = statesData.map((x: string) => unslugify(x));
      setStates(cleanedState);
    };
    fetchData();
  }, []);

  const router = useRouter();

  useEffect(() => {
    setShowSearchPopUp(false);
  }, [router]);

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
          <SearchBar setShowSearchPopUp={setShowSearchPopUp} />
          <div className={styles.lang_pick_spacer}>
            <LanguagePicker />
          </div>
          <SearchToggle setShowSearchPopUp={setShowSearchPopUp} />
          <BurgerMenu toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showSearchPopUp && (
        <SearchPopUp
          setShowSearchPopUp={setShowSearchPopUp}
          resorts={resorts}
          states={states}
        />
      )}
    </nav>
  );
};

export default NavBar;
