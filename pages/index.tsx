import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>On The Snow Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
};

export default Home;
