import styles from './styles.module.scss';

interface Props {
  title: string;
  children: JSX.Element;
  button?: JSX.Element;
  hide?: boolean;
}

const InfoCardContainer = ({ title, children, button, hide }: Props) => {
  return (
    <div className={hide ? styles.hide : ''}>
      <div className={styles.spacer}>
        <article className={styles.list_box}>
          <div className={styles.title_box}>
            <h3>{title}</h3>
          </div>
          {children}
        </article>
        {button && button}
      </div>
    </div>
  );
};

export default InfoCardContainer;
