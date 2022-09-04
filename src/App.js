import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import Loading from './components/Loading';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { calculateQuizScore } from './utils/helperFunctions';

const App = () => {
  // State to conditionally render each part of the quiz process
  const [loading, setLoading] = useState(true);
  const [stage1, setStage1] = useState(false);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  // Question - Answer State
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState(null);
  const [question4, setQuestion4] = useState(null);
  const [question5, setQuestion5] = useState(null);
  const [question6, setQuestion6] = useState(null);
  const [question7, setQuestion7] = useState(null);
  const [question8, setQuestion8] = useState(null);
  const [question9, setQuestion9] = useState(null);

  // const [selectedIndex1, setSelectedIndex1] = useState(false);
  // const [selectedIndex2, setSelectedIndex2] = useState(false);
  // const [selectedIndex3, setSelectedIndex3] = useState(false);
  // const [selectedIndex4, setSelectedIndex4] = useState(false);
  // const [selectedIndex5, setSelectedIndex5] = useState(false);
  // const [selectedIndex6, setSelectedIndex6] = useState(false);
  // const [selectedIndex7, setSelectedIndex7] = useState(false);
  // const [selectedIndex8, setSelectedIndex8] = useState(false);
  // const [selectedIndex9, setSelectedIndex9] = useState(false);
  
  const [selectedIndex1, setSelectedIndex1] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex2, setSelectedIndex2] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex3, setSelectedIndex3] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex4, setSelectedIndex4] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex5, setSelectedIndex5] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex6, setSelectedIndex6] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex7, setSelectedIndex7] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex8, setSelectedIndex8] = useState({0: false, 1: false, 2: false, 3: false});
  const [selectedIndex9, setSelectedIndex9] = useState({0: false, 1: false, 2: false, 3: false});

  const selectedIndexValues = [selectedIndex1, selectedIndex2, selectedIndex3, selectedIndex4, selectedIndex5, selectedIndex6, selectedIndex7, selectedIndex8, selectedIndex9];
  console.log(selectedIndexValues)

  const questionSetters = {
    0: function(value) { setQuestion1(value) },
    1: function(value) { setQuestion2(value) },
    2: function(value) { setQuestion3(value) },
    3: function(value) { setQuestion4(value) },
    4: function(value) { setQuestion5(value) },
    5: function(value) { setQuestion6(value) },
    6: function(value) { setQuestion7(value) },
    7: function(value) { setQuestion8(value) },
    8: function(value) { setQuestion9(value) },
  }

  const selectedIndexSetters = { 
    0: function(value) { setSelectedIndex1(value) },
    1: function(value) { setSelectedIndex2(value) },
    2: function(value) { setSelectedIndex3(value) },
    3: function(value) { setSelectedIndex4(value) },
    4: function(value) { setSelectedIndex5(value) },
    5: function(value) { setSelectedIndex6(value) },
    6: function(value) { setSelectedIndex7(value) },
    7: function(value) { setSelectedIndex8(value) },
    8: function(value) { setSelectedIndex9(value) },
  }

  console.log([question1, question2, question3, question4, question5, question6, question7, question8, question9])

  const [score, setScore] = useState(0);
  const [disableQuizSubmit, setDisableQuizSubmit] = useState(true);


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
    setTimeout(() => moveToCallToAction(), 850)
  }, [])

  useEffect(() => {
    // remove null values, only set the score if the lenght === 9
    const questionsAnswered = [question1, question2, question3, question4, question5, question6, question7, question8, question9].filter(item => item != null).length;
    
    if (questionsAnswered === 9) {
      setScore(calculateQuizScore([question1, question2, question3, question4, question5, question6, question7, question8, question9]));
    };

    // Determine whether to enable the submit button
    setDisableQuizSubmit([question1, question2, question3, question4, question5, question6, question7, question8, question9].includes(null))
  }, [question1, question2, question3, question4, question5, question6, question7, question8, question9])

  return (

    <div className="App">
      <Header scrollToTop={stage3} />
      <div className="Body">
        { loading && <Loading />}
        { stage1 && <IntroPage moveToQuiz={moveToQuiz} /> }
        { stage2 && <QuizPage 
                      moveToResults={moveToResults} 
                      disableQuizSubmit={disableQuizSubmit} 
                      questionSetters={questionSetters} 
                      selectedIndexValues={selectedIndexValues} 
                      selectedIndexSetters={selectedIndexSetters} /> }
        { stage3 && <ResultsPage score={score} /> }
      </div>
    </div>
  );
}

export default App;
