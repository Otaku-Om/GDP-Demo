import "./Styles/Home.css";
import KeepYourDanceFitness from "./Components/KeepYourDanceFitness";
import Services from "./Components/Services";
import Benefits from "./Components/Benefits";
import JoinInstagram from "./Components/JoinInstagram";
import Reviews from "./Components/Reviews";
import FAQ from "./Components/FAQ";
import LetsCatchUp from "./Components/LetsCatchUp";
import Dailog from "./Components/Dailog";

const Home = ({ handler, state, setState }) => {
  return (
    <div>
      <KeepYourDanceFitness />
      <Services />
      <Benefits />
      <JoinInstagram />
      <Reviews />
      <FAQ />
      <LetsCatchUp />
      {state && <Dailog handler={handler} />} 
    </div>
  );
};

export default Home;
