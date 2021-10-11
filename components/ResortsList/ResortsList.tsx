import useToggle from '../../hooks/useToggle';
import ResortsColumn from './ResortsColumn';
import styles from './styles.module.scss';

const resorts1 = [
  '49 Degrees North',
  'Afton Alps',
  'Alpental',
  'Alpine Valley',
  'Alpine Valley Resort',
  'Alpine Valley Ski Area',
  'Alta Ski Area',
  'Alyeska Resort',
  'Andes Tower Hills Ski Area',
  'Angel Fire Resort',
  'Anthony Lakes Mountain Resort',
  '49 Degrees North',
  'Afton Alps',
  'Alpental',
  'Alpine Valley',
  'Alpine Valley Resort',
  'Alpine Valley Ski Area',
  'Alta Ski Area',
  'Alyeska Resort',
  'Andes Tower Hills Ski Area',
  'Angel Fire Resort',
  'Anthony Lakes Mountain Resort',
  '49 Degrees North',
  'Afton Alps',
  'Alpental',
  'Alpine Valley',
  'Alpine Valley Resort',
  'Alpine Valley Ski Area',
  'Alta Ski Area',
  'Alyeska Resort',
  'Andes Tower Hills Ski Area',
  'Angel Fire Resort',
  'Anthony Lakes Mountain Resort',
  '49 Degrees North',
  'Afton Alps',
  'Alpental',
  'Alpine Valley',
  'Alpine Valley Resort',
  'Alpine Valley Ski Area',
  'Alta Ski Area',
  'Alyeska Resort',
  'Andes Tower Hills Ski Area',
  'Angel Fire Resort',
  'Anthony Lakes Mountain Resort',
];

const resorts2 = [
  'Appalachian Ski Mountain',
  'Apple Mountain',
  'Arapahoe Basin Ski Area',
  'Arizona Snowbowl',
  'Aspen Snowmass',
  'Attitash',
  'Bear Creek Mountain Resort',
  'Bear Mountain',
  'Bear Valley',
  'Beaver Creek',
  'Beaver Mountain',
  'Appalachian Ski Mountain',
  'Apple Mountain',
  'Arapahoe Basin Ski Area',
  'Arizona Snowbowl',
  'Aspen Snowmass',
  'Attitash',
  'Bear Creek Mountain Resort',
  'Bear Mountain',
  'Bear Valley',
  'Beaver Creek',
  'Beaver Mountain',
  'Appalachian Ski Mountain',
  'Apple Mountain',
  'Arapahoe Basin Ski Area',
  'Arizona Snowbowl',
  'Aspen Snowmass',
  'Attitash',
  'Bear Creek Mountain Resort',
  'Bear Mountain',
  'Bear Valley',
  'Beaver Creek',
  'Beaver Mountain',
  'Appalachian Ski Mountain',
  'Apple Mountain',
  'Arapahoe Basin Ski Area',
  'Arizona Snowbowl',
  'Aspen Snowmass',
  'Attitash',
  'Bear Creek Mountain Resort',
  'Bear Mountain',
  'Bear Valley',
  'Beaver Creek',
  'Beaver Mountain',
];

const title = 'All Resorts';

const buttonText = 'View All resorts';

const ResortsList = () => {
  const [showMoreResorts, setShowMoreResorts] = useToggle();
  const res1 = showMoreResorts ? resorts1 : resorts1.slice(0, 11);
  const res2 = showMoreResorts ? resorts2 : resorts2.slice(0, 11);

  return (
    <div className={styles.hide}>
      <div className={styles.spacer}>
        <article className={styles.list_box}>
          <div className={styles.title_box}>
            <h3>{title}</h3>
          </div>
          <div className={styles.resort_list}>
            <ResortsColumn resortsList={res1} />
            <ResortsColumn resortsList={res2} />
          </div>
        </article>
        {!showMoreResorts && (
          <button
            type="button"
            className={styles.wide_button}
            onClick={setShowMoreResorts}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ResortsList;
