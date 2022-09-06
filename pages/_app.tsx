import Layout from "../components/Layout";
import "../styles/globals.scss";
import Image from "next/image";
// import imageMain from "../public/imageMain.jpg";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image
        src={imageMain}
        width="500"
        height="500"
        alt="picture"
        placeholder="blur"
      /> */}
    </Layout>
  );
};

export default MyApp;
