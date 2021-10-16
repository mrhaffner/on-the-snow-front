import Result from './Result';
import styles from './styles.module.scss';

interface Props {
  input: string;
  results: string[];
}

const SearchResults = ({ input, results }: Props) => {
  return (
    <div className={styles.columns}>
      <div className={styles.category}>
        <h2 className={styles.category}>Regions</h2>
        {results.map((result: string) => (
          <Result result={result} link1="/" link2="/" />
        ))}
      </div>
      <div className={styles.category}>
        <h2 className={styles.category}>Resorts</h2>
        {results.map((result: string) => (
          <Result result={result} link1="/" link2="/" />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
