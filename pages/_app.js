import firebase from "firebase/app";
import "firebase/auth";
import Head from "next/head";
import { createContext, useEffect, useState } from "react";
import { firebaseConfig } from "../src/components/firebaseConfig/firebase.config";
import "../styles/globals.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [signedUser, setSignedUser] = useState({});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      if (user) {
        setSignedUser(user);
      } else {
        setSignedUser({});
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
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
      </Head>

      <UserContext.Provider value={[signedUser, setSignedUser]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
