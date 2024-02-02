import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Test from "./components/Test";
import PageNotFound from "./components/PageNotFound";
import Categories from "./components/Categories";
import Questions from "./components/Questions";
import CreateNewCategory from "./components/CreateNewCategory";

const BASE_URL="http://localhost:8000"


export default function App() {

  const[questions,setQuestions]=useState([])
  const[testQuestions,setTestQuestions]=useState([])

	useEffect(function(){
		async function getQuestions(){
			const res=await fetch(`${BASE_URL}/React`)
			const data=await res.json()
			setQuestions(data)
      setTestQuestions(data)
		}
		getQuestions()
	},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Categories/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="test" element={<Test questions={questions} testQuestions={testQuestions} setTestQuestions={setTestQuestions}/>}/>
          <Route path="questions" element={<Questions questions={questions}/>}/>
          <Route path="new-category" element={<CreateNewCategory/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

