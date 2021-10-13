import styles from './styles.module.scss';
import Link from 'next/link';
import { ResortNameObj } from '../../../types';

interface Props {
  resortsList: ResortNameObj[];
}

const ResortsColumn = ({ resortsList }: Props) => (
  <div className={styles.column}>
    {resortsList.map((resort: ResortNameObj) => (
      <Link href={`/${resort.id}`} key={resort.id}>
        <a className={styles.resort_link}>{resort.name}</a>
      </Link>
    ))}
  </div>
);

export default ResortsColumn;
