import { useState } from "react"
import styles from "./Questions.module.css"
import SearchQuestion from "./SearchQuestion"
import Question from "./Question"

export default function Questions({ questions }) {
	const [searchQuery, setSearchQuery] = useState("")
	const[isOpen,setIsOpen]=useState(null)

	function handlToggleOpen(id){
        setIsOpen(id === isOpen ? null : id)
    }
	
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
					<Question key={question.id} question={question.question} answer={question.answer} id={question.id} isOpen={question.id===isOpen} onToggleOpen={()=>handlToggleOpen(question.id)}/>
				))}
			</ul>
		</div>
	)
}
