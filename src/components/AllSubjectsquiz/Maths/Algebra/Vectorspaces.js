import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../../SubjectsMenu';
function Vectorspaces() {
    let navigate = useNavigate();
    const questions = [
      
        {
            questionText: ' If a pair of linear equations is consistent, then the lines are:',
            answerOptions: [
                { answerText: ' Always intersecting', isCorrect: false },
                { answerText: 'Always intersecting', isCorrect: true },
                { answerText: 'Always coincident', isCorrect: false },
                { answerText: 'Intersecting or coincident', isCorrect: false },
            ],
        },
        {
            questionText: 'The pairs of equations x+2y-5 = 0 and -4x-8y+20=0 have:',
            answerOptions: [
                { answerText: ' Infinitely many solutions', isCorrect: true },
                { answerText: 'Two', isCorrect: false },
                { answerText: 'None', isCorrect: false },
                { answerText: 'Unique solution', isCorrect: false },
            ],
        },
        {
            questionText: ' If one equation of a pair of dependent linear equations is -3x+5y-2=0. The second equation will be:',
            answerOptions: [
                { answerText: '-6x+10y-4=0', isCorrect: true },
                { answerText: '6x-10y-4=0', isCorrect: false },
                { answerText: ' -6x+10y+4=0', isCorrect: false },
                { answerText: ' -6x+10y+4=0', isCorrect: false },
            ],
        },
       
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {

        if (isCorrect) {
            alert('Correct answer ')
            setScore(score + 1);
        }
        else {
            alert('incorrect answer')
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className=' flex flex-col sm:flex-col md:flex-row '>
            <div className='flex flex-row'> <Menu /></div>


            <div className='flex flex-col '>
                <span className=' mt-20 flex flex-row   h-12'><b>Topics:</b>
                    <div  >

                        <button className={"bg-blue-400 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mb-3 "} onClick={() => { navigate("/Linearequations") }}>Linearequations</button>
                        <button className={" bg-blue-400 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mx-3  "}onClick={() => { navigate("/Relations") }}>Relations</button>
                        <button className={"bg-blue-400 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mx-3"}onClick={() => { navigate("/Vectorspaces") }}>VectorSpaces</button>
                       


                    </div>

                </span>

                <div className=' flex flex-col p-10 mt-36 w-full h-full sm:mt-20 lg:mt-12  '>
                    {showScore ? (
                        <div className='flex text-red-600 m-36 '>
                            <b>You scored {score} out of {questions.length}</b>
                            <div className='mt-20 '><button className='text-blue-800 underline' onClick={() => { navigate("/Circles") }} >Restart </button></div>
                        </div>

                    ) : (
                        <>
                            <p className='underline  text-center'>Answer These Questions </p> <p className='text-center'>*Your Current Score={score} </p>
                            <div >
                                <div className='text-md md:text-xl mb-2 '>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <p className=' text-sm text-justify justify-center sm: text-xl md:text-xl lg:text-3xl text-green-900  ' ><b>{questions[currentQuestion].questionText}</b></p>
                            </div>


                            <div className='answer-section' >

                                {questions[currentQuestion].answerOptions.map((answerOption) => (

                                    <button className=' text-md w-full flex rounded-10 p-3 justify-start items-center cursor-pointer border-b-2  border-yellow-100 hover:bg-yellow-500' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} </button>
                                ))}
                            </div>
                        <button className={" w-36 bg-blue-600 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mb-3 "} >Save for later</button>


                        </>
                    )}
                </div></div>
        </div>

    );
}
export default Vectorspaces