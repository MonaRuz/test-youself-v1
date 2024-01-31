import styles from "./Categories.module.css"
import Category from "./Category"
import NewCategory from "./NewCategory"

export default function Categories() {
	return (
		<>
		<hr/>
      <p className={styles.instructions}>Start test, edit or add questions in existing category, or create new category with minimal one question and answer.</p>
			<div className={styles.box}>
				<Category />
				<NewCategory />
			</div>
		</>
	)
}
