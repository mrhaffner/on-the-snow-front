import useToggle from '../../hooks/useToggle';
import { ResortNameObj } from '../../types';
import { getFirstHalf, getSecondHalf } from '../../utilities/arrays';
import InfoCardContainer from '../InfoCardContainer';
import ResortsColumn from './ResortsColumn';
import ShowButton from './ShowButton';
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

  const Button = ShowButton({ resorts, showMoreResorts, setShowMoreResorts });

  return (
    <InfoCardContainer title="All Resorts" button={Button}>
      <div className={styles.resort_list}>
        <ResortsColumn resortsList={res1} />
        <ResortsColumn resortsList={res2} />
      </div>
    </InfoCardContainer>
  );
};

export default ResortsList;
