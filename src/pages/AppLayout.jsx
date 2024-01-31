import { useEffect, useState } from "react"
import Categories from "../components/Box"
import PageNav from "../components/PageNav"


export default function AppLayout() {
	const[questions,setQuestions]=useState([])
	useEffect(function(){
		async function getQuestions(){
			const res=await fetch("http://localhost:8000/questions")
			const data=await res.json()
			setQuestions(data)
		}
		getQuestions()
	},[])
	console.log(questions);
	return (
		<>
			<PageNav/>
			<Categories/>
		</>
	)
}
