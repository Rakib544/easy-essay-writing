import firebase from "firebase/app";
import "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import logo from "../../../images/logo.png";
import { UserContext } from "../../../pages/_app";
import { firebaseConfig } from "../firebaseConfig/firebase.config";
import styles from "./navbar.module.css";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Navbar = () => {
  const [signedUser] = useContext(UserContext);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setSignedUser({});
      })
      .catch((error) => {});
  };
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#0254F9", color: "white" }}
    >
      <div className="container py-3">
        <Link href="/">
          <a>
            <Image src={logo} height="50px" width="130px" alt="logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto navbar-nav mt-3 mt-md-0">
            {router.pathname === "/" && (
              <>
                {signedUser.email ? (
                  <>
                    <li className="nav-item mx-md-3 my-2 my-md-0">
                      <Link
                        href={`${
                          signedUser.userType === "admin"
                            ? "/admin"
                            : "/orderlist"
                        }`}
                      >
                        <a
                          className={`${styles.navItem} mx-3 mx-md-0 text-white nav-link px-3`}
                        >
                          Dashboard
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="">
                        <a
                          onClick={logout}
                          className={`${styles.navItem} mx-3 mx-md-0 text-white nav-link px-3`}
                        >
                          Sign Out
                        </a>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link href="/signup">
                        <a className="mx-3 mx-md-0 text-white nav-link px-2">
                          Sign Up
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/signin">
                        <a
                          className={`${styles.navItem} mx-3 mx-md-1 text-white nav-link px-2`}
                        >
                          Sing In
                        </a>
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
            {router.pathname === "/orderlist" && (
              <>
                <li className="nav-item">
                  <Link href="/orderlist">
                    <a
                      className={`${
                        currentPath === "/order-list" ? `${styles.navItem}` : ""
                      } text-white nav-link px-2`}
                    >
                      Order List
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${styles.navItem} mx-md-2 my-2 my-md-0 cursor-pointer`}
                  onClick={logout}
                >
                  Logout
                </li>
              </>
            )}
            {(router.pathname === "/admin" ||
              router.pathname === "/admin/pending-orders" ||
              router.pathname === "/admin/complete-orders") && (
              <>
                <li className="nav-item">
                  <Link href="/admin/">
                    <a
                      className={`${
                        currentPath === "/admin" ? `${styles.navItem}` : ""
                      } text-white nav-link px-2`}
                    >
                      Home Page
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/admin/pending-orders">
                    <a
                      className={`${
                        currentPath === "/admin/pending-orders"
                          ? `${styles.navItem}`
                          : ""
                      } text-white nav-link px-2`}
                    >
                      Pending Orders
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/admin/complete-orders">
                    <a
                      className={`${
                        currentPath === "/admin/complete-orders"
                          ? `${styles.navItem}`
                          : ""
                      } text-white nav-link px-2`}
                    >
                      Complete Orders
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${styles.navItem} mx-md-2 my-2 my-md-0 cursor-pointer`}
                  onClick={logout}
                >
                  Logout
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
