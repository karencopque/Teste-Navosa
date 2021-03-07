export const Home = ({ user }) => {
  return (
    <>
      <p>bem vindo, {user.email}</p>
      <p>seu id é: {user.id}</p>
      <p>seu token é: {user.token}</p>
    </>
  );
};

export default Home;
