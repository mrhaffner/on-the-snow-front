import { unslugify } from '../../../utilities/slug';
import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  result: string;
  link: string;
}

const Result = ({ result, link }: Props) => {
  return (
    <div className={styles.result}>
      {unslugify(result)} ({' '}
      <Link href={link}>
        <a>Snow Report</a>
      </Link>{' '}
      |{' '}
      <Link href={link}>
        <a>Trip Planning</a>
      </Link>{' '}
      )
    </div>
  );
};

export default Result;
