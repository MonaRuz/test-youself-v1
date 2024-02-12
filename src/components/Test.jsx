import Button from "./Button"
import styles from "./Test.module.css"
import useTest from "../hooks/useTest"
import { useQuestions } from "../contexts/QuestionsContext"

export default function Test() {

	const { questions, testQuestions } = useQuestions()
	const {
		showAnswer,
		setShowAnswer,
		progress,
		currentQuestion,
		result,
		handleWrongAnswer,
		handleCorrectAnswer,
	} = useTest()

	if (testQuestions.length !== 0)
		return (
			<div className={styles.test}>
				<div className='test-question'>
					{currentQuestion && (
						<p className={styles.question}>{currentQuestion?.question}</p>
					)}

					{showAnswer && (
						<p className={styles.answer}>{currentQuestion?.answer}</p>
					)}
				</div>
				<div className={styles.btnBox}>
					{showAnswer && (
						<Button
							textColor='var(--negation-color)'
							bgColor='var(--main-bg-color)'
							onClick={handleWrongAnswer}
						>
							✘
						</Button>
					)}
					{!showAnswer && (
						<Button
							textColor='var(--menu-color)'
							bgColor='var(--main-bg-color)'
							onClick={() => setShowAnswer(true)}
						>
							Display answer
						</Button>
					)}

					{showAnswer && (
						<Button
							textColor='var(--positive-color)'
							bgColor='var(--main-bg-color)'
							onClick={() => handleCorrectAnswer(currentQuestion?.id)}
						>
							✔
						</Button>
					)}
				</div>
				<div>
					<p className={styles.progress}>
						Progress:
						<strong>
							{" "}
							{progress} / {questions.length}
						</strong>{" "}
					</p>
				</div>
				<p className={styles.instructions}>
					Answer the question as best you can, view the answer and see if you
					answered correctly. <br /> Then click on the corresponding button.
				</p>
			</div>
		)
		
	if (testQuestions.length === 0)
		return <p className='result'>Úspěšnost testu byla {result}%</p>
}
