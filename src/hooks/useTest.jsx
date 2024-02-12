import { useEffect, useState } from "react"
import { useQuestions } from "..//contexts/QuestionsContext"

function useTest() {
    const{questions, testQuestions, setTestQuestions}=useQuestions()
	const [showAnswer, setShowAnswer] = useState(false)
	const [percentCouter, setpercentCouter] = useState(0)
	const [progress, setProgress] = useState(1)
	const [currentQuestion, setCurrentQuestion] = useState(null)


	const result = Math.ceil(
		100 - (percentCouter / (questions.length + percentCouter)) * 100
	)

	function getRandomQuestion(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min)
	}

	function handleWrongAnswer() {
		setCurrentQuestion(
			testQuestions[getRandomQuestion(0, testQuestions.length)]
		)
		setShowAnswer(false)
		setpercentCouter(percentCouter + 1)
	}

	function handleCorrectAnswer(id) {
		let updatedQuestions = testQuestions.filter((question) => {
			return question.id !== id
		})
		setTestQuestions(updatedQuestions)

		setShowAnswer(false)
		setCurrentQuestion(
			updatedQuestions[getRandomQuestion(0, updatedQuestions.length)]
		)
		setProgress(progress + 1)
	}

	useEffect(
		function () {
			setCurrentQuestion(
				testQuestions[getRandomQuestion(0, testQuestions.length)]
			)
		},
		[testQuestions]
	)
    return{showAnswer,setShowAnswer,progress,currentQuestion,result,handleWrongAnswer,handleCorrectAnswer}

}

export default useTest