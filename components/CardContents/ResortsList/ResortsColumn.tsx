import styles from './styles.module.scss';
import Link from 'next/link';
import { ResortNameObj } from '../../../types';

interface Props {
  resortsList: ResortNameObj[];
}

const ResortsColumn = ({ resortsList }: Props) => (
  <div className={styles.column}>
    {resortsList.map((resort: ResortNameObj) => (
      <Link
        href={`/${resort.state_slug}/${resort.id}/ski-resort`}
        key={resort.id}
      >
        <a className={styles.resort_link}>{resort.name}</a>
      </Link>
    ))}
  </div>
);

export default ResortsColumn;
