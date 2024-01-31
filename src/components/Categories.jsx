import styles from "./Categories.module.css"
import Category from "./Category"
import NewCategory from "./NewCategory"

export default function Categories() {
  return (
    <div className={styles.box}>
        <Category/>
        <NewCategory/>
    </div>
  )
}
