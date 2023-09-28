import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="pb-3">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/sign-Up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
