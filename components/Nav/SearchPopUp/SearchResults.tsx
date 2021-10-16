import { ResortNameObj } from '../../../types';
import { slugify } from '../../../utilities/slug';
import Result from './Result';
import styles from './styles.module.scss';

interface Props {
  stateResults: string[];
  resortResults: ResortNameObj[];
}

const SearchResults = ({ stateResults, resortResults }: Props) => {
  return (
    <div className={styles.columns}>
      <div className={styles.category}>
        <h2 className={styles.category_text}>Regions</h2>
        {stateResults.map((result: string) => (
          <Result result={result} link={`/${slugify(result)}/ski-resorts`} />
        ))}
      </div>
      <div className={styles.category}>
        <h2 className={styles.category_text}>Resorts</h2>
        {resortResults.map((result: ResortNameObj) => (
          <Result
            result={result.name}
            link={`/${result.state_slug}/${slugify(result.name)}/ski-resort`}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
