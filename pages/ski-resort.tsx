import Head from 'next/head';
import TerrainOverview from '../components/TerrainOverview';
import InfoPageLayout from '../layouts/InfoPageLayout';

interface Props {
  resort: any;
}

const SkiResort = ({ resort }: Props) => {
  return (
    <div>
      <Head>
        <title>On The Snow Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoPageLayout>
        <TerrainOverview />
      </InfoPageLayout>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   const states = await getStateNames();
//   const paths = states.map((state: string) => `/${slugify(state)}/ski-resorts`);
//   return { paths, fallback: false };
// };

// type StateParams = {
//   resort: string;
// };

// interface Props {
//   params: StateParams;
// }

// export const getStaticProps = async ({ params }: Props) => {
//   const { resort } = params;
//   const resorts = await getStateResort(resort);
//   return {
//     props: { resorts },
//   };
// };

export default SkiResort;
