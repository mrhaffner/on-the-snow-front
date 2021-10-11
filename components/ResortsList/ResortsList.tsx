import Link from 'next/link';
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
];

const title = 'All Resorts';

const link = '/';

const buttonText = 'View All resorts';

const ResortsList = () => {
  return (
    <div className={styles.hide}>
      <div className={styles.spacer}>
        <article className={styles.list_box}>
          <div className={styles.title_box}>
            <h3>{title}</h3>
          </div>
          <div className={styles.resort_list}>
            <div className={styles.column}>
              {resorts1.map((name: string) => (
                <Link href={link} key={name}>
                  <a className={styles.resort_link}>{name}</a>
                </Link>
              ))}
            </div>
            <div className={styles.column}>
              {resorts2.map((name: string) => (
                <Link href={link} key={name}>
                  <a className={styles.resort_link}>{name}</a>
                </Link>
              ))}
            </div>
          </div>
        </article>
        <button type="button" className={styles.wide_button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ResortsList;
