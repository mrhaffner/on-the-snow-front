import useToggle from '../../hooks/useToggle';
import ResortsColumn from './ResortsColumn';
import styles from './styles.module.scss';

interface Props {
  resorts: string[];
}

const ResortsList = ({ resorts }: Props) => {
  const [showMoreResorts, setShowMoreResorts] = useToggle();
  const resorts1 = resorts.slice(0, resorts.length / 2);
  const resorts2 = resorts.slice(resorts.length / 2, resorts.length);
  const res1 = showMoreResorts ? resorts1 : resorts1.slice(0, 11);
  const res2 = showMoreResorts ? resorts2 : resorts1.slice(11, 22);

  return (
    <div className={styles.hide}>
      <div className={styles.spacer}>
        <article className={styles.list_box}>
          <div className={styles.title_box}>
            <h3>All Resorts</h3>
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
            View All resorts
          </button>
        )}
      </div>
    </div>
  );
};

export default ResortsList;
