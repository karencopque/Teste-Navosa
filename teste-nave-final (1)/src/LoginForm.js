import "./LoginForm.css";
import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("testing-user@nave.rs");
  const [password, setPassword] = useState("nave1234");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <div>
      <img src="logo.png" alt="logo nave" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Senha
          <input
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default LoginForm;
