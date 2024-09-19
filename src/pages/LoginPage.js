import { useState } from 'react';
import { login } from '../lib/auth';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(email, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input is-fullwidth" type="email" required value={email}
              onChange={(event) => setEmail(event.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input is-fullwidth" type="password" required value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>
        {error && (
          <div className="notification is-danger">
            <p>Login failed</p>
          </div>
        )}
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link is-fullwidth">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;