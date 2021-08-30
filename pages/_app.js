import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { createContext, useEffect, useState } from "react";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import "../styles/globals.css";

nProgress.configure(
  { showSpinner: false },
  {
    template: "<div role='bar' className='bg-white'>...</div>",
  }
);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [signedUser, setSignedUser] = useState({});

  //showing n-progress
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  Router.events.on("routeChangeError", () => nProgress.done());

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem("info"));
    try {
      const decoded = jwt_decode(info);
      setSignedUser(decoded);
      fetch("https://essay-essay-writing.herokuapp.com/create/getCurrentUser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ _id: decoded._id }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.localStorage.getItem("info", data[0]);
          setSignedUser(data[0]);
        });
    } catch (err) {}
  }, []);

  return (
    <>
      <Head>
        <title>Easy Essay Writing | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <UserContext.Provider value={[signedUser, setSignedUser]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
