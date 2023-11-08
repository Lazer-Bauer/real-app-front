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
import SignOut from "./components/signout";
import { getUser } from "./services/userServices";
import { useState } from "react";
import httpService from "./services/httpService";
import usersService from "./services/userServices";
import { useAuth } from "./contexts/auth.context";
import SignUpBiz from "./components/signUpBiz";
import MyCards from "./components/myCards";
import ProtectedRout from "./common/protectedRoute";
import cardsService from "./services/cardService";
import Card from "./components/card";
import CardCreate from "./components/cardCreate";
import CardDelete from "./components/cardDelete";
import CardEdit from "./components/cardEdit";

function App() {
  const { user, login, logout, signUp } = useAuth();

  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="pb-3">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route
            path="/sign-Up"
            element={<SignUp onSubmit={signUp} redirect="/sign-in" />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/create-card"
            element={
              <ProtectedRout onlyBiz>
                <CardCreate />
              </ProtectedRout>
            }
          />
          <Route
            path="/my-cards/delete/:id"
            element={
              <ProtectedRout onlyBiz>
                <CardDelete />
              </ProtectedRout>
            }
          />
          <Route
            path="/my-cards/edit/:id"
            element={
              <ProtectedRout onlyBiz>
                <CardEdit />
              </ProtectedRout>
            }
          />
          <Route
            path="/sign-in"
            element={<SignIn onSubmit={login} redirect="/" />}
          />
          <Route path="/sign-out" element={<SignOut />} redirect="/" />
          <Route
            path="/sign-up-biz"
            element={<SignUpBiz redirect="/my-cards" />}
          />
          <Route
            path="/my-cards"
            element={
              <ProtectedRout onlyBiz>
                <MyCards />
              </ProtectedRout>
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
