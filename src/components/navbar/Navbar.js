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
                <Link href="/">
                  <a className="mx-3 text-white">Sign Up</a>
                </Link>
                <Link href="/">
                  <a className={`${styles.navItem} text-white`}>Log In</a>
                </Link>
              </>
            )}
            {router.pathname === "/orderlist" && (
              <>
                <Link href="/">
                  <a className={`${styles.navItem} text-white`}>Order List</a>
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
