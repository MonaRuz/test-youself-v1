import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Questions.module.css"
import SearchQuestion from "./SearchQuestion"
import Question from "./Question"

export default function Questions({ questions }) {
	const [searchQuery, setSearchQuery] = useState("")
	const searchedQuestions =
		searchQuery.length > 0
			? questions.filter((question) =>
					`${question.question}`
						.toLowerCase()
						.includes(searchQuery.toLowerCase()))
			: questions

	return (
		<div>
			<SearchQuestion searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<ul className={styles.list}>
				{searchedQuestions.map((question) => (
					<Question key={question.id} question={question.question} answer={question.answer} id={question.id}/>
				))}
			</ul>
		</div>
	)
}
