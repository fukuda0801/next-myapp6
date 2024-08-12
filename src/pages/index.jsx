import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { getPostsData } from "../../lib/post";

const inter = Inter({ subsets: ["latin"] });

// SSGの場合

export async function getStaticProps() {
  const allPostsData = getPostsData(); // id title date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={utilStyle.headingMd}>
          <p>
            とっとこ走るよ。ハムスター軍団のリーダー。ロコちゃんのペット。なのだが口癖なのだ。
          </p>
        </section>

        <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail01.jpg"
                  alt="画像"
                  className={styles.thumbnailImage}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="/" className={utilStyle.boldText}>
                ハム太郎の歴史
              </Link>
              <br />
              <small className={utilStyle.lightText}>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail01.jpg"
                  alt="画像"
                  className={styles.thumbnailImage}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="/" className={utilStyle.boldText}>
                ハム太郎の歴史
              </Link>
              <br />
              <small className={utilStyle.lightText}>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail01.jpg"
                  alt="画像"
                  className={styles.thumbnailImage}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="/" className={utilStyle.boldText}>
                ハム太郎の歴史
              </Link>
              <br />
              <small className={utilStyle.lightText}>February 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <Image
                  src="/images/thumbnail01.jpg"
                  alt="画像"
                  className={styles.thumbnailImage}
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="/" className={utilStyle.boldText}>
                ハム太郎の歴史
              </Link>
              <br />
              <small className={utilStyle.lightText}>February 23, 2020</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
