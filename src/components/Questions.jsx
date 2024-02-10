import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Questions.module.css"
import SearchQuestion from "./SearchQuestion"

export default function Questions({ questions }) {
	const [searchQuery, setSearchQuery] = useState("")
	const searchedQuestions =
		searchQuery.length > 0
			? questions.filter((question) =>
					`${question.question} ${question.answer}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase()))
			: questions

	return (
		<div>
			<SearchQuestion searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<ul className={styles.list}>
				{searchedQuestions.map((question) => (
					<div key={question.id}>
						<li className={styles.question}>
							<Link
								className={styles.link}
								to={question.id}
							>
								{question.question}
							</Link>
						</li>
						<hr className={styles.line} />
					</div>
				))}
			</ul>
		</div>
	)
}
