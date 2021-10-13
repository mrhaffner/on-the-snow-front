import CardIcon from '../CardIcon';
import InfoCardContainer from '../../InfoCardContainer';
import styles from './styles.module.scss';
import LongestRunSVG from './svg/LongestRunSVG';
import NightSkiingSVG from './svg/NightSkiingSVG';
import SkiableTerrainSVG from './svg/SkiableTerrainSVG';
import SnowMakingSVG from './svg/SnowMakingSVG';
import TotalRunsSVG from './svg/TotalRunsSVG';

type Props = any;

const TerrainOverview = ({ resortInfo }: Props) => {
  const generateMiText = (text: string) => `${text} mi`;
  const generateAcText = (text: string) => `${text} ac`;

  return (
    <InfoCardContainer title="Terrain Overview">
      <div className={styles.box}>
        <div className={styles.terrain_list}>
          {resortInfo.runs && (
            <CardIcon
              text="Runs in Total"
              bigText={resortInfo.runs}
              SVG={<TotalRunsSVG />}
            />
          )}
          {resortInfo.longest_run && (
            <CardIcon
              text="Longest Run"
              bigText={generateMiText(resortInfo.longest_run)}
              SVG={<LongestRunSVG />}
            />
          )}
          {resortInfo.skiable_terrain && (
            <CardIcon
              text="Skiable Terrain"
              bigText={generateAcText(resortInfo.skiable_terrain)}
              SVG={<SkiableTerrainSVG />}
            />
          )}
          {resortInfo.mi_night_skiing && (
            <CardIcon
              text="Night Skiing"
              bigText={generateAcText(resortInfo.mi_night_skiing)}
              SVG={<NightSkiingSVG />}
            />
          )}
          {resortInfo.snow_making && (
            <CardIcon
              text="Snow Making"
              bigText={generateAcText(resortInfo.snow_making)}
              SVG={<SnowMakingSVG />}
            />
          )}
        </div>
      </div>
    </InfoCardContainer>
  );
};
export default TerrainOverview;
