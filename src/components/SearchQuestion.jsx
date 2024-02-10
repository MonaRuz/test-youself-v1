import styles from "./SearchQuestion.module.css"
export default function SearchQuestion({setSearchQuery}) {
  return (
    <form className={styles.form}>
        <input type="text" placeholder="Search in questions" className={styles.input}  onChange={(e)=>setSearchQuery(e.target.value)} />
    </form>
  )
}
