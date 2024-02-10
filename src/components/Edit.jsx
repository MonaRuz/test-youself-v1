import { useNavigate, useParams } from "react-router-dom"
import styles from "./Edit.module.css"
import Button from "./Button"

export default function Edit({ questions }) {
	const { id } = useParams()
	const navigate=useNavigate()

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
			<Button bgColor="var(--main-bg-color)" textColor="var(--menu-color) " onClick={()=>navigate(-1)}>Back</Button>
		</div>
	)
}
