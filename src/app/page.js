import React from 'react';
import WorkflowWhiteboard from '../WorkflowWhiteboard';
import LandingPage from '../Landing-Page.jsx';
import HyperspeedWrapper from './../HyperSpeedWrapper';
import NavBar from '../NavBar.jsx';

function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* <WorkflowWhiteboard /> */}
      {/* <NavBar /> */}
      <LandingPage />

      {/* <HyperspeedWrapper /> */}
    </div>
  );
}

export default Home;