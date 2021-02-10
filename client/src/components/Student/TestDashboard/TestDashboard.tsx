import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Feedback from './Feedback/Feedback';
import Question from './Question/Question';
import styles from './TestDashboard.module.scss';
import { SystemState } from '../../../types'



const TestDashboard = () => {

  const [currentQ, setCurrentQ] = useState(0);
  const quizz = useSelector((state: SystemState) => state.currentQuizz);
  const [showingFeedback, setShowingFeedback] = useState(false); // HERE
  const [quizzResults, setQuizzResults] = useState({});
  
  const nextButton = (completed: boolean) => {
    if (!completed) {
      setCurrentQ((current) => current + 1);
    } else {
      setCurrentQ(0);
      setQuizzResults(completed);
      setShowingFeedback(true);
    }
  };

  const question = quizz?.questions ? 
    (<Question 
      question={quizz.questions[currentQ]}
      quizz={quizz}
      currQuest={currentQ}
      nextButton={nextButton}
    />
  ) : (
    'Loading'
  );

  return (
    <div className={styles.TestDashboard}>
      <div className={styles.Content}>
        {showingFeedback ? (
          <Feedback quizzResults={quizzResults} confetti={showingFeedback} />
        ) : (
          question
        )}
      </div>
      <div className={styles.Contentbg} />
    </div>
  );
};

export default TestDashboard;
