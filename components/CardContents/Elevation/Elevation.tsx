import { ResortInfo } from '../../../types';
import InfoCardContainer from '../../InfoCardContainer';
import CardIcon from '../CardIcon';
import styles from './styles.module.scss';
import BaseSVG from './svg/BaseSVG';
import SummitSVG from './svg/SummitSVG';
import VerticalDropSVG from './svg/VerticalDropSVG';

interface Props {
  resortInfo: ResortInfo;
}

const Elevation = ({ resortInfo }: Props) => (
  <InfoCardContainer title="Elevation">
    <div className={styles.elevation_list}>
      <CardIcon
        text="Summit"
        bigText={`${resortInfo.summit}'`}
        SVG={<SummitSVG />}
        type="vertical"
      />
      <CardIcon
        text="Vertical Drop"
        bigText={`${resortInfo.vertical_drop}'`}
        SVG={<VerticalDropSVG />}
        type="vertical"
      />
      <CardIcon
        text="Base"
        bigText={`${resortInfo.base}'`}
        SVG={<BaseSVG />}
        type="vertical"
      />
    </div>
  </InfoCardContainer>
);

export default Elevation;
