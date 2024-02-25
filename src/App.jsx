import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Film from './pages/Film';
import Photo from './pages/Photo';
import Home from './pages/Home';
import About from './pages/About';

import FollowCursor from './components/Animation/FollowCursor';
import NoiseAnimation from './components/Animation/NoiseAnimation';
import Rain from './components/Animation/Rain';

import { AnimationContext } from './contexts/AnimationContext.jsx';

function App() {
  const [isRainControlActive, setIsRainControlActive] = useState(false);

  const handleRainControl = () => {
    setIsRainControlActive((prevState) => !prevState);
  };

  return (
    <HashRouter>
      <AnimationContext.Provider
        value={{ handleRainControl, isRainControlActive }}
      >
        <div className="App">
          {isRainControlActive && <Rain />}
          <FollowCursor />
          <NoiseAnimation />

          <Routes>
            <Route path={'/'} exact Component={Home} />
            <Route path={'/photo'} Component={Photo} />
            <Route path={'/film'} Component={Film} />
            <Route path={'/about'} Component={About} />
          </Routes>
        </div>
      </AnimationContext.Provider>
    </HashRouter>
  );
}

export default App;
