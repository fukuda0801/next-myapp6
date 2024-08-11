import Head from "next/head";
import Image from "next/image";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image
          src="/images/profile.jpg"
          alt="プロフィール画像"
          width={100}
          height={100}
        />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
