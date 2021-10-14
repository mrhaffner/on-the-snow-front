import styles from './styles.module.scss';

interface Props {
  text: string;
  bigText: string;
  SVG: JSX.Element;
  type: 'lift' | 'terrain';
}

const CardIcon = ({ text, bigText, SVG, type }: Props) => {
  const styleObj = {
    terrain: styles.terrain_container,
    lift: styles.lift_container,
  };
  return (
    <div title={text} className={styleObj[type]}>
      {SVG}
      <div>
        <div className={styles.big_text}>{bigText}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default CardIcon;
