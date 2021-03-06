import styles from '../styles.module.scss';

const BaseSVG = () => (
  <svg
    width="42"
    height="42"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svg}
  >
    <path d="M41.838 39.493L24.363 2.071C23.775.811 22.456 0 21 0s-2.775.812-3.363 2.071L.161 39.493a1.698 1.698 0 00.148 1.698c.349.505.947.809 1.587.809h38.205c.64 0 1.238-.302 1.588-.81a1.689 1.689 0 00.149-1.697zm-7.877-5.117c-.336.253-.842.298-1.16.023-.9-.786-5.825-1.834-6.49-1.834-.968 0-4.945 2.995-5.943 2.995-.627 0-8.54-2.573-8.54-2.573a.991.991 0 00-1.252-.104l-1.698 1.18a.996.996 0 01-1.16-.025.867.867 0 01-.275-1.063L20.048 5.04c.18-.385.52-.765.95-.765.431 0 .773.38.95.765l12.288 28.274a.867.867 0 01-.275 1.062z"></path>
  </svg>
);

export default BaseSVG;
