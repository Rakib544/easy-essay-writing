const ReferAccount = ({ id }) => {
  console.log(id);
  return <div>Test</div>;
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  //   const res = await fetch("");
  return {
    props: {
      id,
    },
  };
}

export default ReferAccount;
