import styles from "./Box.module.css"
import { Outlet } from "react-router-dom";
import { QuestionsProvider } from "..//contexts/QuestionsContext"

export default function Box() {
  return (
    <div className={styles.box}>
      <QuestionsProvider>
        <Outlet/>
      </QuestionsProvider>
    </div>
  )
}
