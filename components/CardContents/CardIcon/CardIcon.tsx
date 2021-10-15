import styles from './styles.module.scss';

interface Props {
  text: string;
  bigText: string;
  SVG: JSX.Element;
  type: 'lift' | 'terrain' | 'vertical';
}

const CardIcon = ({ text, bigText, SVG, type }: Props) => {
  const styleObj = {
    terrain: styles.terrain_container,
    lift: styles.lift_container,
    vertical: styles.vertical_container,
  };
  const bigTextStyle =
    type === 'vertical' ? styles.big_text_vertical : styles.big_text;
  return (
    <div title={text} className={styleObj[type]}>
      {SVG}
      <div>
        <div className={bigTextStyle}>{bigText}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default CardIcon;
