import NavBar from '../../components/NavBar';
import styles from './styles.module.scss';

interface Props {
  children: JSX.Element;
}

const InfoPageLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.layout}>
          <section className={styles.main}>{children}</section>
          <aside className={styles.aside}></aside>
        </div>
      </div>
    </>
  );
};

export default InfoPageLayout;
