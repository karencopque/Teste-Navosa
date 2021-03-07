import { useState } from "react";
import { login } from "./api";
import Home from "./Home";
import LoginForm from "./LoginForm";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
    } catch (error) {
      console.error("ta aqui o erro", error);
    }
  };

  return (
    <>
      <h1>Navers</h1>
      {user ? <Home user={user} /> : <LoginForm onSubmit={handleLoginSubmit} />}
    </>
  );
}

export default App;
