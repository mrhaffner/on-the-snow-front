import { ResortInfo } from '../../../types';
import InfoCardContainer from '../../InfoCardContainer';
import CardIcon from '../CardIcon';
import styles from './styles.module.scss';
import DoubleSVG from './svg/DoubleSVG';
import EightSVG from './svg/EightSVG';
import HSQuadSVG from './svg/HSQuadSVG';
import HSSixSVG from './svg/HSSixSVG';
import QuadSVG from './svg/QuadSVG';
import SurfaceSVG from './svg/SurfaceSVG';
import TramSVG from './svg/TramSVG';
import TripleSVG from './svg/TripleSVG';

interface Props {
  resortInfo: ResortInfo;
}

const LiftsList = ({ resortInfo }: Props) => {
  const title = `Total Lifts: ${
    (resortInfo.double || 0) +
    (resortInfo.fast_eights || 0) +
    (resortInfo.fast_quads || 0) +
    (resortInfo.fast_sixes || 0) +
    (resortInfo.quad || 0) +
    (resortInfo.surface || 0) +
    (resortInfo.trams || 0) +
    (resortInfo.triple || 0)
  }`;
  return (
    <InfoCardContainer title={title}>
      <div className={styles.lift_list}>
        {resortInfo.trams ? (
          <CardIcon
            text="Gondolas & Trams"
            bigText={resortInfo.trams.toString()}
            SVG={<TramSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.fast_eights ? (
          <CardIcon
            text="Eight Person Lifts"
            bigText={resortInfo.fast_eights.toString()}
            SVG={<EightSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.fast_sixes ? (
          <CardIcon
            text="High Speed Sixes"
            bigText={resortInfo.fast_sixes.toString()}
            SVG={<HSSixSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.fast_quads ? (
          <CardIcon
            text="High Speed Quads"
            bigText={resortInfo.fast_quads.toString()}
            SVG={<HSQuadSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.quad ? (
          <CardIcon
            text="Quad Chairs"
            bigText={resortInfo.quad.toString()}
            SVG={<QuadSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.triple ? (
          <CardIcon
            text="Triple Chairs"
            bigText={resortInfo.triple.toString()}
            SVG={<TripleSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.double ? (
          <CardIcon
            text="Double Chairs"
            bigText={resortInfo.double.toString()}
            SVG={<DoubleSVG />}
            type="lift"
          />
        ) : null}
        {resortInfo.surface ? (
          <CardIcon
            text="Surface Lifts"
            bigText={resortInfo.surface.toString()}
            SVG={<SurfaceSVG />}
            type="lift"
          />
        ) : null}
      </div>
    </InfoCardContainer>
  );
};

export default LiftsList;
