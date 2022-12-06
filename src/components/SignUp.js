import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [currentquestion, setCurrentQuestion] = useState(0);
    const [score , setScore]=useState(false);
    const [scoreCount , setScoreCount]=useState(0);
    const questions = [
        {
            questionText: 'What is the capital of pakistan?',
            answerOptions: [
                { answerText: 'Islamabad', isCorrect: true },
                { answerText: 'Karachi', isCorrect: false },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },
            ]
        },
        {
            questionText: 'Which is the biggest city of pakistan?',
            answerOptions: [
                { answerText: 'Faisalabad', isCorrect: false },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
                { answerText: 'Quetta', isCorrect: false },
            ]
        },
        {
            questionText: 'What is the populated of pakistan?',
            answerOptions: [
                { answerText: 'Islamabad', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },
            ]
        },
        {
            questionText: 'Where is the tomb of Quaid-e-Azam ?',
            answerOptions: [
                { answerText: 'Lahore', isCorrect: false },
                { answerText: 'Faisalabad', isCorrect: false },
                { answerText: 'Islamabad', isCorrect: false },
                { answerText: 'Karachi', isCorrect: true },
            ]
        },
        {
            questionText: 'What is the national animal of pakistan?',
            answerOptions: [
                { answerText: 'Lion', isCorrect: false },
                { answerText: 'Tiger', isCorrect: false },
                { answerText: 'Markhor', isCorrect: true },
                { answerText: 'Goat', isCorrect: false },
            ]
        },
    ]

    const handleClick = (isCorrect) => {

        const nextquestion = currentquestion + 1;
        if(isCorrect===true){
            setScoreCount(scoreCount+1)
        }
        if (nextquestion < questions.length) {
            setCurrentQuestion(nextquestion);
        } else {
            setScore(true);
        }
        
    }
    return (
              <>
            <nav style={{ position: 'static', width: '100%', height: '50px', backgroundColor: '#4e034a' }}><h1 id='heading'>QUIZ APP</h1></nav>
            
                <div className='AppBackground'>
                {score ? <div className='ScoreBoard'><h1>You Have score {scoreCount} out of 5</h1></div> :
                    <div className='MainApp'>
                        <div className='QuestionSection'>
                            <h1 style={{ fontSize: '35px' }}>Question {currentquestion+1}<span style={{ fontSize: '18px' }}>/{questions.length}</span></h1>
                            <h2>{questions[currentquestion].questionText}</h2>
                        </div>
                        <div className='AnswerSection'>
                            {questions[currentquestion].answerOptions.map(answerOption=> <button onClick={() => { handleClick(answerOption.isCorrect) }}>{answerOption.answerText}</button>)}


                        </div>

                    </div>}

                </div>

        </>
    )
}

export default SignUp;