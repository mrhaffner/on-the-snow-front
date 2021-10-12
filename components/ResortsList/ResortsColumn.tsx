import styles from './styles.module.scss';
import { slugify } from '../../utilities/slug';
import Link from 'next/link';

interface Props {
  resortsList: string[];
}

const ResortsColumn = ({ resortsList }: Props) => (
  <div className={styles.column}>
    {resortsList.map((name: string) => (
      <Link href={`/${slugify(name)}`} key={name}>
        <a className={styles.resort_link}>{name}</a>
      </Link>
    ))}
  </div>
);

export default ResortsColumn;
