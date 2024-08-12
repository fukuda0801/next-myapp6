import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../src/styles/utils.module.css";

const name = "ハム太郎";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/profile.jpg"
          alt="プロフィール画像"
          width={100}
          height={100}
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
