import NavBar from '../../components/NavBar';
import styles from './styles.module.scss';

interface Props {
  children: JSX.Element;
}

const InfoPageLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default InfoPageLayout;
