import Head from "next/head";
import Link from "next/link";
import YourComponent from "./YourComponent";
import Layout from '../../components/layout'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>1First Post</title>
      </Head>
      <YourComponent />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
