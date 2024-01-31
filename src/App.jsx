import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Test from "./components/Test";
import PageNotFound from "./components/PageNotFound";
import Categories from "./components/Categories";
import Questions from "./components/Questions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Categories/>}/>
          <Route path="test" element={<Test/>}/>
          <Route path="category" element={<Questions/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

