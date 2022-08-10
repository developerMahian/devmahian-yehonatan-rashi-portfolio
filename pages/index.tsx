import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>yehonatan rashi portfolio</title>
        <meta name="description" content="yehonatan rashi portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Reviews />
    </div>
  );
};

export default Home;
