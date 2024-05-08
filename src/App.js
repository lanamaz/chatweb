import "./App.css";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Chat from "./components/Chat";
import LifeChatPage from "./components/LifeChatPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Chat/:from/:to" element={<LifeChatPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
