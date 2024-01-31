import styles from "./NewCategory.module.css"

export default function NewCategory() {
  return (
    <div className={styles.category}>
        <h2 className={styles.title}>Add new category</h2>
        <div className={styles.plus}>+</div>
    </div>
  )
}
