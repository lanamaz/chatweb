import { useState } from "react";
import { Link } from "react-router-dom";
export default function Welcome() {
  const [userName, setUserName] = useState("Lana");

  return (
    <div className="card">
      <h1>home page</h1>
      <form>
        <input
          required
          type="text"
          name="userName"
          placeholder="enter your name"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <Link to={`/chat/${userName}`}>
          <button type="button">Enter to chating</button>
        </Link>
      </form>
    </div>
  );
}
