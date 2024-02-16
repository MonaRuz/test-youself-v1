import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QuestionsProvider } from "./contexts/QuestionsContext"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Test from "./components/Test"
import PageNotFound from "./components/PageNotFound"
import Categories from "./components/Categories"
import Questions from "./components/Questions"
import CreateNewCategory from "./components/CreateNewCategory"
import Edit from "./components/Edit"
import NewQuestion from "./components/NewQuestion"

export default function App() {
	return (
		<QuestionsProvider>
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
							element={<Categories />}
						/>
						<Route
							path='categories'
							element={<Categories />}
						/>
						<Route
							path='test'
							element={<Test />}
						/>
						<Route
							path='questions'
							element={<Questions />}
						/>
						<Route
							path='new-question'
							element={<NewQuestion />}
						/>
						<Route
							path='questions/:id'
							element={<Edit />}
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
		</QuestionsProvider>
	)
}
