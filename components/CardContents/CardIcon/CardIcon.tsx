import styles from './styles.module.scss';

interface Props {
  text: string;
  bigText: string;
  SVG: JSX.Element;
}

const CardIcon = ({ text, bigText, SVG }: Props) => {
  return (
    <div title={text} className={styles.icon_container}>
      {SVG}
      <div>
        <div className={styles.big_text}>{bigText}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default CardIcon;
