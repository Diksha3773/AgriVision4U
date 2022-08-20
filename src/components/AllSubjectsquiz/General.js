import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Menu from '../../SubjectsMenu'
import Menu from '../SubjectsMenu';
function General() {
let navigate=useNavigate();
        const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
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
        else{
    alert('incorrect answer')}
   
   

 
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
            <div className=' flex flex-col sm:flex-col md:flex-row '>
             <div className='flex flex-row'> <Menu/></div>
				
				
					<div className='flex flex-col '>
                        
		<div className=' flex flex-col w-[800px] h-full mt-12 border-2 border-blue-50'>
			{showScore ? (
				<div className='flex text-red-600 m-36 '>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
                <h1 className='text-center'><strong>Test your General knowledge</strong></h1>
				<p className='underline  sm:text-sm lg:text-lg'>Answer These Questions </p> <p className='float-left underline  sm:text-sm lg:text-lg'>*Your Current Score={score} </p>
					<div className='question-section'>
						<div className='text-md md:text-xl mb-2 '>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<p className=' text-sm text-justify justify-center sm: text-xl md:text-xl lg:text-3xl text-green-900  ' ><b>{questions[currentQuestion].questionText}</b></p>
					</div>
					

					<div className='answer-section' >
					
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							
							<button className=' text-md w-full flex rounded-10 p-3 justify-start items-center cursor-pointer border-2 border-yellow-200 hover:bg-yellow-500' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} </button>
						))}
					</div>
				</>
			)}
		</div></div>
		</div>

	);
}
export default General