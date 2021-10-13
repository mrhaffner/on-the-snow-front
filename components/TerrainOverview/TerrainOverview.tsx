import InfoCardContainer from '../InfoCardContainer';
import styles from './styles.module.scss';

const TerrainOverview = () => {
  return (
    <InfoCardContainer title="Terrain Overview">
      <div className={styles.terrain_list}></div>
    </InfoCardContainer>
  );
};
export default TerrainOverview;
