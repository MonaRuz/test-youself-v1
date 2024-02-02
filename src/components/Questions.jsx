import styles from "./Questions.module.css"

export default function Questions({questions}) {
  return (
    <ul className={styles.list}>
      {questions.map((question)=><><li className={styles.question} key={question.id}>{question.question}</li><hr className={styles.line}/></>)}
    </ul>
  )
}
