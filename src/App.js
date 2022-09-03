import { useState } from 'react';
import { styled } from 'styled-components'
import './App.css';
import Header from './components/Header';
import IntroContainer from './components/IntroContainer';

const App = () => {
  // State to conditionally render each part of the quiz process
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);
  return (
    <div className="App">
      <Header />
      {stage1 && <IntroContainer />}
      {/* Will need a CTA / Intro component */}
      {/* Will need a quiz page component set */}
      {/* Will need a quiz results component set */}
    </div>
  );
}

export default App;
