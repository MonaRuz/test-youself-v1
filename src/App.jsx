import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Test from "./components/Test"
import PageNotFound from "./components/PageNotFound"
import Categories from "./components/Categories"
import Questions from "./components/Questions"
import CreateNewCategory from "./components/CreateNewCategory"
import Edit from "./components/Edit"

const BASE_URL = "http://localhost:8000"

export default function App() {
	const [questions, setQuestions] = useState([])
	const [testQuestions, setTestQuestions] = useState([])
	const [error, setError] = useState("")

	useEffect(function () {
		async function getQuestions() {
			try {
				const res = await fetch(`${BASE_URL}/React`)

				if (!res.ok)
					throw new Error("Something went wrong with questions fetching.")

				const data = await res.json()
				setQuestions(data)
				setTestQuestions(data)
			} catch (err) {
				console.error(err.message)
        setError("Something went wrong with questions fetching!")
			}
		}
		getQuestions()
	}, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<Homepage />}
				/>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='app'
					element={<AppLayout />}
				>
					<Route
						index
						element={<Categories error={error} />}
					/>
					<Route
						path='categories'
						element={<Categories error={error} />}
					/>
					<Route
						path='test'
						element={
							<Test
								questions={questions}
								testQuestions={testQuestions}
								setTestQuestions={setTestQuestions}
							/>
						}
					/>
					<Route
						path='questions'
						element={<Questions questions={questions} />}
					/>
					<Route
						path='questions/:id'
						element={<Edit questions={questions} />}
					/>
					<Route
						path='new-category'
						element={<CreateNewCategory />}
					/>
				</Route>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
