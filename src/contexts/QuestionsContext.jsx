import { useState, useEffect, createContext, useContext } from "react"

const BASE_URL = "http://localhost:8000"

const QuestionsContext = createContext()

function QuestionsProvider({ children }) {
	const [questions, setQuestions] = useState([])
	const [testQuestions, setTestQuestions] = useState([])
	const [error, setError] = useState("")
	const[categories,setCategories]=useState([])

	useEffect(function () {
		async function getQuestions() {
			try {
				const res = await fetch(`${BASE_URL}/categories`)

				if (!res.ok)
					throw new Error("Something went wrong with questions fetching.")

				const data = await res.json()
				console.log(data);
				setCategories(data)
				// setQuestions(data)
				// setTestQuestions(data)
			} catch (err) {
				console.error(err.message)
				setError("Something went wrong with questions fetching!")
			}
		}
		getQuestions()
	}, [])

	return (
		<QuestionsContext.Provider value={{ questions, testQuestions,setTestQuestions, error }}>
			{children}
		</QuestionsContext.Provider>
	)
}

function useQuestions(){
    const context=useContext(QuestionsContext)
    return context
}

export {QuestionsProvider,useQuestions}
