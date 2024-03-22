import React, { useState } from 'react'
import QUESTIONS from "../questions"
import quizCompleteImg from "../assets/quiz-complete.png"

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([])
    //derive the state
    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length
    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => {
        Math.random() - 0.5
    })



    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]

        })
    }
    return (
        <div id="quiz">
            <div id="question">
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id="answers">
                    {
                        shuffledAnswers.map((answer) => {
                            return <li key={answer} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz
