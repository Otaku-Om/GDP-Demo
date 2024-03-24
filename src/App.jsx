import { Route, Routes } from "react-router-dom";
import {useEffect } from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TermConditions from './Components/Terms&Conditions/Terms';
import PrivacyPolicy from './Components/Return/Privacy';
import { useLocation } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  function dialogBoxHandler() {
    setIsDialogOpen(!isDialogOpen);
  }

  return (
    <div className="Main-App">
      <div className="Container-Main-App">
        <Header
          handler={dialogBoxHandler}
          state={isDialogOpen}
          setState={setIsDialogOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handler={dialogBoxHandler}
                state={isDialogOpen}
                setState={setIsDialogOpen}
              />
            }
          />
          <Route
            path="/Terms-&-Conditions"
            element={
              <TermConditions
                handler={dialogBoxHandler}
                state={isDialogOpen}
                setState={setIsDialogOpen}
              />
            }
          />
          <Route
            path="/Privacy-Policy"
            element={
              <PrivacyPolicy
                handler={dialogBoxHandler}
                state={isDialogOpen}
                setState={setIsDialogOpen}
              />
            }
          />
          <Route
            path="/Gallery"
            element={
              <Gallery
                handler={dialogBoxHandler}
                state={isDialogOpen}
                setState={setIsDialogOpen}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
