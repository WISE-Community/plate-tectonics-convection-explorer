import React, { useState, useEffect } from 'react';
import './App.css';
import { AppWrapper } from './components/StyledComponents';
import Background from './components/Background';
import ControlPanel from './components/ControlPanel';
import {
  BOUNDARY_STATES,
  INIT_PLATE_STATES,
  SCREEN_STATES,
  END_PLATE_STATES
} from './State';
import Retry from './components/backgrounds/retry.svg';
import Start from './components/backgrounds/start.svg';

function App() {
  const [selectedExample, selectExample] = useState('');
  const [plateState, setPlateState] = useState('cc');
  const [boundaryState, setBoundaryState] = useState('');
  const [screenState, setScreenState] = useState('');
  const [animationFrame, setAnimationFrame] = useState(1);
  const queryParams = new URLSearchParams(window.location.search);
  const widthParam = Number(queryParams.get('maxWidth'));
  const maxWidth = widthParam ? widthParam : 1200;
  const maxHeight = maxWidth * 2/3;

  useEffect(() => {
    if (!END_PLATE_STATES.includes(plateState))
      //start countdown when results are showing
      return;
    if (animationFrame !== 4) setTimeout(() => setAnimationFrame(animationFrame + 1), 500);
  });

  function onExampleButtonClicked(type) {
    selectExample(type);
    setScreenState(SCREEN_STATES.plateSelection);
    setPlateState('');
    setBoundaryState('');
  }

  function onControlButtonClicked(type) {
    let canStart;
    setPlateState('cc');
    if (INIT_PLATE_STATES.includes(type)) {
      setPlateState(type);
      canStart = boundaryState !== '';
    } else if (BOUNDARY_STATES.includes(type)) {
      setBoundaryState(type);
      canStart = plateState !== '';
    }

    //can start
    if (canStart) {
      setScreenState(SCREEN_STATES.canStart);
    }
  }

  function onStartRetryClicked() {
    switch (screenState) {
      case SCREEN_STATES.canStart:
        const endState = plateState + boundaryState;
        setPlateState(endState);
        setScreenState(SCREEN_STATES.canRestart);
        break;
      case SCREEN_STATES.canRetry:
        onExampleButtonClicked(selectedExample);
        break;
      default:
        console.log('StartRestartButton clicked in invalid state');
    }
    setAnimationFrame(1);
  }

  function showDefaultMode() {
    let startRetryButton = null;
    if (screenState === SCREEN_STATES.canStart) startRetryButton = Start;
    else if (screenState === SCREEN_STATES.canRetry) startRetryButton = Retry;
    return (
      <AppWrapper maxWidth={maxWidth} maxHeight={maxHeight} className="App">
        <ControlPanel
          onClick={onControlButtonClicked}
          boundaryState={boundaryState}
          maxWidth={maxWidth}
        />
        <div className="ControlButtons" hidden={screenState === SCREEN_STATES.realExampleSelection}>
          <button
            onClick={onStartRetryClicked}
            aria-label="Play"
            hidden={
              screenState !== SCREEN_STATES.canStart && screenState !== SCREEN_STATES.canRetry
            }
          >
            <img className="ResizingButtons" src={startRetryButton} alt="Play" />
          </button>
        </div>
        <Background
          plateState={plateState}
          boundaryState={boundaryState}
          frame={animationFrame}
          maxWidth={maxWidth}
        />
      </AppWrapper>
    );
  }

  return showDefaultMode();
}

export default App;
