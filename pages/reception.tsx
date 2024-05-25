import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Reception: NextPage = () => {
  return (
    <div className={styles.container}>

      <div>
        <Head>
          <title>Reception Page</title>
          <meta name="description" content="Reception page for Mafia Game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className = {styles.title}>Welcome to the Reception Page</h1>
          <p className = {styles.description}>You have successfully connected your wallet and navigated to the reception.</p>
        </main>
      </div>
    </div>
  );
};

export default Reception;
