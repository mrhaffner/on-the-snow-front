import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import styles from './styles.module.scss';

interface Props {
  toggleSearchPopUp: () => void;
  resorts: string[];
  states: string[];
}

const SearchPopUp = ({ toggleSearchPopUp, resorts, states }: Props) => {
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input !== '') setShowResults(true);
  }, [input]);

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  console.log(states, resorts);

  return (
    <div
      role="dialog"
      aria-hidden="true"
      tabIndex={-1}
      className={styles.search_popup}
    >
      <div className={styles.search_bg}></div>
      <header className={styles.header}>
        <div className={styles.container}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.57 0C4.74 0 0 4.741 0 10.57c0 5.827 4.741 10.568 10.57 10.568 5.827 0 10.568-4.741 10.568-10.569C21.138 4.741 16.397 0 10.57 0zm0 19.187c-4.753 0-8.619-3.866-8.619-8.618 0-4.752 3.866-8.618 8.618-8.618 4.752 0 8.618 3.866 8.618 8.618 0 4.752-3.866 8.618-8.618 8.618z"></path>
            <path d="M23.714 22.334l-5.593-5.593a.975.975 0 10-1.38 1.38l5.593 5.593a.972.972 0 001.38 0 .975.975 0 000-1.38z"></path>
          </svg>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Search resorts, regions, pass programs, articles etc."
              onChange={handleChange}
            />
          </form>
        </div>
      </header>
      <button
        type="button"
        aria-label="close search"
        className={styles.close_button}
        onClick={toggleSearchPopUp}
      ></button>
      <section className={styles.info_text}>
        {!showResults && (
          <h2 className={styles.directions}>
            Search resorts, regions, pass programs, articles etc.
          </h2>
        )}
        {showResults && <SearchResults input={input} results={['hi']} />}
      </section>
    </div>
  );
};

export default SearchPopUp;
