import { Link } from "react-router-dom"
import styles from "./Questions.module.css"

export default function Questions({ questions }) {
	return (
		<ul className={styles.list}>
			{questions.map((question) => (
				<div key={question.id}>
					<li className={styles.question}>
						<Link className={styles.link} to={question.id}>{question.question}</Link>
					</li>
					<hr className={styles.line} />
				</div>
			))}
		</ul>
	)
}
