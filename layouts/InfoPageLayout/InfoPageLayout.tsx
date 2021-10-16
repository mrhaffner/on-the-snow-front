import Header from '../../components/Header';
import NavBar from '../../components/Nav/NavBar';
import styles from './styles.module.scss';

interface Props {
  link?: string;
  linkText?: string;
  title: string;
  children: JSX.Element;
}

const InfoPageLayout = ({ link, linkText, title, children }: Props) => {
  return (
    <>
      <div>
        <NavBar />
        <Header link={link} linkText={linkText} title={title} />
        <div className={styles.container}>
          <div className={styles.layout}>
            <section className={styles.main}>{children}</section>
            <aside className={styles.aside}></aside>
          </div>
        </div>
      </div>
      <div className={styles.bottom_graphic}></div>
    </>
  );
};

export default InfoPageLayout;
