import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  title: string;
  link?: string;
  linkText?: string;
}

const Header = ({ title, link, linkText }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.full_blurred}>
        <div className={styles.photo}></div>
      </div>
      <div className={styles.container_image}></div>
      <div className={styles.hero_gradient}></div>
      <div className={styles.hero_mountains}></div>
      <div className={styles.info_container}>
        {link && (
          <Link href={link}>
            <a className={styles.link}>{linkText}</a>
          </Link>
        )}
        <div className={styles.title}>
          <h1 className={styles.title_text}>{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
