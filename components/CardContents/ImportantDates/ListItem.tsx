import styles from './styles.module.scss';

interface Props {
  bigText: string;
  text: string;
}

const ListItem = ({ bigText, text }: Props) => (
  <div className={styles.list_item}>
    <h3 className={styles.big_text}>{bigText}</h3>
    <div>{text}</div>
  </div>
);

export default ListItem;
