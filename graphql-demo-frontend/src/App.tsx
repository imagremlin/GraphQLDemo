import { useState } from "react";
import { BookList } from "./components/BookList";
import { LoginForm } from "./components/LoginForm";
import { AddBookForm } from "./components/AddBook";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("token") !== null
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>GraphQL Demo</h1>

      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <AddBookForm />
        </>
      ) : (
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
      <p/>
      <p/>

      <BookList isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;