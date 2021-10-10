import styles from './styles.module.scss';

const LanguagePicker = () => {
  return (
    <div className={styles.lang_picker}>
      <button>
        <img src="/us_flag.png" alt="US" height="18" width="18" title="US" />
        <span>US</span>
      </button>
    </div>
  );
};

export default LanguagePicker;
