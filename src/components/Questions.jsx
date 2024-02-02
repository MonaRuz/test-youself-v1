import styles from "./Questions.module.css"

export default function Questions({ questions }) {
  
	return (
		<ul className={styles.list}>
			{questions.map((question) => (
				<div key={question.id}>
					<li
						className={styles.question}
					>
            <p>{question.question}</p>
					</li>
					<hr className={styles.line} />
				</div>
			))}
		</ul>
	)
}
