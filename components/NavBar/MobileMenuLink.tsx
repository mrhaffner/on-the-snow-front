import Link from 'next/link';
import styles from './styles.module.scss';

interface Props {
  url: string;
  text: string;
  active: boolean;
}

const MobileMenuLink = ({ url, text, active }: Props) => {
  return (
    <Link href={url}>
      <a className={active ? styles.mob_menulink_current : styles.mob_menulink}>
        {text}
      </a>
    </Link>
  );
};

export default MobileMenuLink;
