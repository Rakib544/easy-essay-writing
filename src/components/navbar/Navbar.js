import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../../images/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "#0254F9", color: "white" }}>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <Image src={logo} height="50px" width="130px" alt="" />
          <div>
            {router.pathname === "/" && (
              <>
                <Link href="/signup">
                  <a className="mx-3 text-white">Sign Up</a>
                </Link>
                <Link href="/signin">
                  <a className={`${styles.navItem} text-white`}>Sing In</a>
                </Link>
              </>
            )}
            {router.pathname === "/admin/orderlist" && (
              <>
                <Link href="/orderlist">
                  <a className={`${styles.navItem} text-white`}>Order List</a>
                </Link>
              </>
            )}
            {(router.pathname === "/admin" ||
              router.pathname === "/admin/pending-orders" ||
              router.pathname === "/admin/complete-orders") && (
              <>
                <Link href="/admin/">
                  <a className={`${styles.navItem} text-white mx-2`}>
                    Home Page
                  </a>
                </Link>
                <Link href="/admin/pending-orders">
                  <a className={`${styles.navItem} text-white mx-2`}>
                    Pending Orders
                  </a>
                </Link>
                <Link href="/admin/complete-orders">
                  <a className={`${styles.navItem} text-white mx-2`}>
                    Complete Orders
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
