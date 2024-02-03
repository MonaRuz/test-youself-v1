import { useParams } from "react-router-dom"
import styles from "./Edit.module.css"

export default function Edit({ questions }) {
	const { id } = useParams()

	const selectedQuestion = questions
		.filter((question) => {
			return question.id === id
		})
const[{question,answer}]=selectedQuestion

	return (
		<div className={styles.edit}>
			<p className={styles.question}>{question}</p>
            <hr className={styles.line}/>
            <p className={styles.answer}>{answer}</p>
		</div>
	)
}
