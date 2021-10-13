import { ResortNameObj } from '../../types';
import styles from './styles.module.scss';

interface Props {
  resorts: ResortNameObj[];
  showMoreResorts: boolean;
  setShowMoreResorts: () => void;
}

const ShowButton = ({
  resorts,
  showMoreResorts,
  setShowMoreResorts,
}: Props) => (
  <>
    {!showMoreResorts && resorts.length > 22 && (
      <button
        type="button"
        className={styles.wide_button}
        onClick={setShowMoreResorts}
      >
        View All resorts
      </button>
    )}
  </>
);

export default ShowButton;
