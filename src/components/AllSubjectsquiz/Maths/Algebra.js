import React from 'react'
import  { useState } from 'react';
import Menu from '../../SubjectsMenu'
function Algebra() {


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
			questionText: 'The iPhone was created by which company?',
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
   
   

 
	// 	const nextQuestion = currentQuestion + 1;
	// 	if (nextQuestion < questions.length) {
	// 		setCurrentQuestion(nextQuestion);
	// 	} else {
	// 		setShowScore(true);
	// 	}
	};
	return (
            <div className='flex flex-row '>
                <div ><Menu/></div>
              
		<div className='w-[800px] h-full mt-12 border-2 border-blue-50'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
               
					<div className='question-section'>
						<div className='question-count'>
                            
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div >{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section' >
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText} </button>
						))}
					</div>
				</>
			)}
		</div>
		</div>

	);
}
       
   

export default Algebra