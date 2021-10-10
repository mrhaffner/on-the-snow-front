import Link from 'next/link';
import styles from './styles.module.scss';

interface Props {
  url: string;
  text: string;
  active: boolean;
}

const DesktopMenuLink = ({ url, text, active }: Props) => {
  return (
    <Link href={url}>
      <a className={active ? styles.menulink_current : styles.menulink}>
        {text}
      </a>
    </Link>
  );
};

export default DesktopMenuLink;
