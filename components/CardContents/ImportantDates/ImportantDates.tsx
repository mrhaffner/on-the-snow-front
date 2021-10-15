import { ResortInfo } from '../../../types';
import InfoCardContainer from '../../InfoCardContainer';
import ListItem from './ListItem';
import styles from './styles.module.scss';

interface Props {
  resortInfo: ResortInfo;
}

const ImportantDates = ({ resortInfo }: Props) => (
  <InfoCardContainer title="Important Dates">
    <div className={styles.list_container}>
      <div className={styles.row}>
        <ListItem
          bigText={resortInfo.days_open_last_year?.toString() || '?'}
          text="Days Open Last Year"
        />
        <ListItem
          bigText={resortInfo.years_open?.toString() || '?'}
          text="Years Open"
        />
        <ListItem
          bigText={`${resortInfo.average_snowfall}"`}
          text="AverageSnowfall"
        />
      </div>
    </div>
  </InfoCardContainer>
);

export default ImportantDates;
