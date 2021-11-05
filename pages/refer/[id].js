import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import bannerImg from "../../images/login-img.png";
import logo from "../../images/logo.png";

const ReferAccount = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    window.localStorage.setItem(
      "referrerEmail",
      JSON.stringify(data.referrerEmail)
    );
    router.push("/signup");
  };

  return (
    <>
      <Head>
        <title>Easy Essay Writing | Refer Link</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="overflow-hidden position-relative">
        <div className="row d-flex align-items-center overflow-hidden vh-100">
          <div
            className="position-absolute top-0 left-0 m-5 d-none d-md-block"
            style={{ zIndex: "999999" }}
          >
            <Link href="/">
              <a>
                <Image src={logo} alt="logo" height="50px" width="130px" />
              </a>
            </Link>
          </div>
          <div className="col-md-6 d-none d-md-block vh-100 position-relative">
            <Image src={bannerImg} alt="banner-img" />
          </div>
          <div className="col-12 col-md-6">
            {data.referrerEmail ? (
              <>
                <p className="text-center fw-bold fs-44">
                  Welcome to Easy Essay Writing
                </p>
                <button
                  className="btn btn-primary d-block mx-auto"
                  onClick={handleClick}
                >
                  Continue To Create Account
                </button>
              </>
            ) : (
              <p className="text-center text-danger fs-48 text-capitalize">
                {data}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await fetch(
    `https://api.easyessaywriting.com/admin/checkURL/${id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ReferAccount;
