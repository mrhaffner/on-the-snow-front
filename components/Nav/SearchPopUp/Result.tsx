import { unslugify } from '../../../utilities/slug';
import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  result: string;
  link1: string;
  link2: string;
}

const Result = ({ result, link1, link2 }: Props) => {
  return (
    <div className={styles.result}>
      {unslugify(result)} ({' '}
      <Link href={link1}>
        <a>Snow Report</a>
      </Link>{' '}
      |{' '}
      <Link href={link2}>
        <a>Trip Planning</a>
      </Link>{' '}
      )
    </div>
  );
};

export default Result;
