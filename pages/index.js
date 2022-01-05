import Head from "next/head";
import Image from "next/image";

import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Big Bowl</title>
        <meta
          name="description"
          content="Food Ordering App created with Next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </div>
  );
}
