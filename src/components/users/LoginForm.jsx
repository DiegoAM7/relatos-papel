import { useState } from "react";

const LoginForm = ({ onSubmit, error }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Iniciar sesion</h1>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contrasena"
        value={form.password}
        onChange={handleChange}
        required
      />
      {error ? <p className="error">{error}</p> : null}
      <button type="submit" className="btn">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
