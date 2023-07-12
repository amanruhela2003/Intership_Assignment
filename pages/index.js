import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Far Far Away</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Your page content goes here */}
    </div>
  );
}
