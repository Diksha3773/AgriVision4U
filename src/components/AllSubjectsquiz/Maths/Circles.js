import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../SubjectsMenu'
function Circles() {
    let navigate = useNavigate();
    const questions = [
        {
            questionText: 'Number of tangents drawn at a point of the , circle is/are',
            answerOptions: [
                { answerText: 'One', isCorrect: true },
                { answerText: 'Two', isCorrect: false },
                { answerText: 'None', isCorrect: false },
                { answerText: 'Infinite', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone is created by ?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
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

                        <button className={"bg-blue-600 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mb-3 "} onClick={() => { navigate("/Circles") }}>Circles</button>
                        <button className={" bg-blue-600 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mx-3 "}>Triangles</button>
                        <button className={"bg-blue-600 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mx-3 "}>Quadrilaterals</button>
                        <button className={"bg-blue-600 text-lg shadow-md   p-2 m-0  text-white rounded-lg hover:bg-orange-600 hover:text-base focus:ring-4 focus:ring-red-300 mx-3 "}>Similarity</button>


                    </div>

                </span>

                <div className=' flex flex-col w-full h-full mt-12'>
                    {showScore ? (
                        <div className='flex text-red-600 m-36 '>
                            <b>You scored {score} out of {questions.length}</b>
                            <div className='  mt-5'><button className='text-blue-800 underline' onClick={() => { navigate("/Geometry") }} >Restart </button></div>
                        </div>

                    ) : (
                        <>
                            <p className='underline  text-center'>Answer These Questions </p> <p className='text-center'>*Your Current Score={score} </p>
                            <div >
                                <div className='text-md md:text-xl mb-2 '>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <p className=' text-sm text-justify justify-center sm: text-xl md:text-xl lg:text-3xl text-green-900  ' ><b><i>{questions[currentQuestion].questionText}</i></b></p>
                            </div>


                            <div className='answer-section' >

                                {questions[currentQuestion].answerOptions.map((answerOption) => (

                                    <button className=' text-md w-full flex rounded-10 p-3 justify-start items-center cursor-pointer border-b-2  border-yellow-100 hover:bg-yellow-500' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} </button>
                                ))}
                            </div>
                        </>
                    )}
                </div></div>
        </div>

    );
}
export default Circles