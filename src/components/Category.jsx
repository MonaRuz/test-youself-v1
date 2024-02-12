import { useNavigate } from "react-router-dom"
import styles from "./Category.module.css"
import Button from "./Button"
import { useQuestions } from "..//contexts/QuestionsContext"

export default function Category() {
	const{questions}=useQuestions()
	const navigate=useNavigate()
	return (
		<div className={styles.category}>
			<h2 className={styles.title}>React</h2>
			<p>
				<span className={styles.values}>{questions.length}</span> questions
			</p>
			<p>
				Progress: <span className={styles.values}>X / {questions.length}</span>
			</p>
			<p>
				Current score <span className={styles.values}> X </span>%
			</p>
			<p>
				Highscore: <span className={styles.values}>X</span> %
			</p>
			<div className={styles.buttons}>
					
					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
						onClick={()=>navigate("test")}
						>Test
					</Button>

					<Button
						textColor='var(--menu-color)'
						bgColor='var(--main-bg-color)'
						onClick={()=>navigate("questions")}
					>
						Edit
					</Button>
			</div>
		</div>
	)
}
