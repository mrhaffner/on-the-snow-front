import type { NextPage } from 'next';
import Head from 'next/head';
import ResortsList from '../components/ResortsList';
import InfoPageLayout from '../layouts/InfoPageLayout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>On The Snow Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoPageLayout>
        <ResortsList />
      </InfoPageLayout>
    </div>
  );
};

export default Home;
