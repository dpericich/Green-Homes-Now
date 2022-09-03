import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import IntroContainer from './components/IntroContainer';
import Loading from './components/Loading';
import QuizContainer from './components/QuizContainer';
import ResultsContainer from './components/ResultsContainer';

const App = () => {
  // State to conditionally render each part of the quiz process
  const [loading, setLoading] = useState(true);
  const [stage1, setStage1] = useState(false);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  // Will need to store all the quiz answer state here
  // Do I want to just store the answers as useState values for each of these? 
  // Maybe I store a data-value on each question and depending on if it's true or false or multiple
  // choice then I can decide the value


  // Methods to move through quiz
  const moveToCallToAction = () => {
    setLoading(false);
    setStage1(true);
  }

  const moveToQuiz = () => {
    setStage1(false);
    setStage2(true);
  }

  const moveToResults = () => {
    setStage2(false);
    setStage3(true);
  }

  useEffect(() => {
    setTimeout(() => moveToCallToAction(), 375)
  }, [])

  return (

    <div className="App">
      <Header />
      <div className="Body">
        { loading && <Loading />}
        { stage1 && <IntroContainer moveToQuiz={moveToQuiz} /> }
        {/* QuizContainer is going to be ugly  */}
        { stage2 && <QuizContainer moveToResults={moveToResults} /> }
        { stage3 && <ResultsContainer /> }
      </div>
    </div>
  );
}

export default App;
