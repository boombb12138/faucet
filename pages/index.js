import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}
