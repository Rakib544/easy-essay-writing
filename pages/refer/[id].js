import { useRouter } from "next/router";

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
    <div>
      {data.referrerEmail ? (
        <button className="btn btn-primary" onClick={handleClick}>
          Continue
        </button>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await fetch(
    `https://essay-essay-writing.herokuapp.com/admin/checkURL/${id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ReferAccount;
