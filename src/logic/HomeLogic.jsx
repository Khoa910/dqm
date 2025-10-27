import { useState } from "react";
import Intro from "../components/effects/Intro";
import Home from "../pages/Home";

const HomeLogic = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      <Home show={!showIntro} />
    </>
  );
};

export default HomeLogic;
