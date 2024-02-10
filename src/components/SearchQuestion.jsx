import styles from "./SearchQuestion.module.css"
export default function SearchQuestion({setSearchQuery,searchQuery}) {
  return (
    <form className={styles.form}>
        <input type="text" placeholder="Search in questions and answers" className={styles.input} value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    </form>
  )
}
