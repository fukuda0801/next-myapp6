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

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops

//     },
//   }
// }

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
          <h2>🐹ハムスターのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map((post) => (
              <article key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <Image
                    src={`${post.thumbnail}`}
                    alt="画像"
                    className={styles.thumbnailImage}
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="/" className={utilStyle.boldText}>
                  {post.title}
                </Link>
                <br />
                <small className={utilStyle.lightText}>{post.date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
