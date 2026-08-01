import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { LOGIN } from "../graphql/mutations";
import type { AuthPayload } from "../types";

interface LoginData {
  login: AuthPayload;
}

interface LoginProps {
  onLoginSuccess: () => void;
}

export function LoginForm({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useMutation<LoginData>(LOGIN);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await login({ variables: { username, password } });
    const payload = result.data?.login;

    if (payload?.success && payload.token) {
      localStorage.setItem("token", payload.token);
      onLoginSuccess();
    } else {
      alert(payload?.message ?? "Login failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
}