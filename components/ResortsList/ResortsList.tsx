import useToggle from '../../hooks/useToggle';
import { ResortNameObj } from '../../types';
import { getFirstHalf, getSecondHalf } from '../../utilities/arrays';
import ResortsColumn from './ResortsColumn';
import styles from './styles.module.scss';

interface Props {
  resorts: ResortNameObj[];
}

const ResortsList = ({ resorts }: Props) => {
  const [showMoreResorts, setShowMoreResorts] = useToggle();
  const first22 = resorts.slice(0, 22);

  const resorts1 = getFirstHalf(first22);
  const resorts2 = getSecondHalf(first22);
  const res1 = showMoreResorts ? getFirstHalf(resorts) : resorts1;
  const res2 = showMoreResorts ? getSecondHalf(resorts) : resorts2;

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
        {!showMoreResorts && resorts.length > 22 && (
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
