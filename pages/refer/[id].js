const ReferAccount = ({ data }) => {
  console.log(data);
  return (
    <div>{data.referrerEmail ? <button>Continue</button> : <p>{data}</p>}</div>
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
