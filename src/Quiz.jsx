import Question from './Question';
import './styles.css';
import Option from './Option';
import { useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
 import ProgressBar from './ProgressBar';


export default function Quiz(props) {
	let history = useHistory();

	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Jaipur', isCorrect: false },
				{ answerText: 'New-Delhi', isCorrect: true },
				{ answerText: 'Pune', isCorrect: false },
			],
			ans: 'New-Delhi'
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
			ans: 'Elon Musk'
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
			ans: 'Apple'
		},
		{
			questionText: 'How many rings are there in the Audi logo?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
			],
			ans: '4'
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	//const [scores, setScore] = useState(0);
	const [selectOption, setSelcted] = useState(null);
	const [playerChoices, setplayerChoices] = useState([]);
	const [completed, setCompleted] = useState(0);

	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


	var choice = [];
	let timer =100;
	
	
	



	const handleAnswerOptionClick = (isCorrect, index, val, question, correctAns) => {
		

		choice = [...playerChoices];
		let obj = {
			choice: val,
			question: question,
			correct: correctAns
		}

		choice.push(obj);

		if (selectOption == null) {
			setSelcted(index);
		}

		//alert(isCorrect)
		if (isCorrect) {
			setScore(score + 1);
			
			
		}
		const nextQuestion = currentQuestion + 1;
	 

		if (nextQuestion <= questions.length) {

			setTimeout(() => {
				//console.log("   playerChoice    : " + JSON.stringify(choice));
				setplayerChoices(choice);
				
				setSelcted(null);
				setCurrentQuestion(nextQuestion);
				setCompleted(0);
				 timer =100;
				
			}, 1000) 
	


		}
		else{
			setShowScore(true);
		    setSelcted(null);
			setScore(score);
			console.log("   playerChoice    : " + JSON.stringify(choice) + "total  " +  score );
		
			setplayerChoices(choice);	

			history.push({
				pathname: "/Result",
				state: { scores: score, finalOutput: choice },

			});
		}
		return;

	};

	useEffect(() => {
	
		 let timeInt =setInterval(() => {
			setCompleted((timer * 100)/100 ) 
			if(timer>0){
				timer= timer-10

			}
			
			
			
		},1000);


	   return () => {
      clearInterval(timeInt);
    };
  }, []);
	
	


	return (

		
		<div className='container'>
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (<>
				
				
         



			<div className="App">
				<ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
			</div>

			<div className='question-section'>
				<div className='question-count'>
					<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<Question question={questions[currentQuestion].questionText}></Question>
			</div>
			<div >
				<div className='answer-section'>
					{questions[currentQuestion].answerOptions.map((answerOption, idx) => (
						<Option value={answerOption.answerText}
							isCorrect={answerOption.isCorrect}
							selected={selectOption === idx}
							clickHandler={handleAnswerOptionClick}
							index={idx}
							question={questions[currentQuestion].questionText}
							correct={questions[currentQuestion].ans}



						></Option>
					))}
				</div>
			</div>

			</>
			)}

		</div>
	);
}
