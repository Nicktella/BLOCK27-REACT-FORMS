import { useState } from "react";
import SignUpForm from "./componets/SignUpForm";
import Authenticate from "./componets/Authenticate";
import './App.css';
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
