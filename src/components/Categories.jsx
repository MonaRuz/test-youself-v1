import styles from "./Categories.module.css"
import Category from "./Category"
import NewCategory from "./NewCategory"
import Error from "./Error"

export default function Categories({error,questions}) {

	if(error)return <Error>{error}</Error>
	return (
		<>
			<hr />
			<p className={styles.instructions}>
				Start test, edit or add questions in existing category, or create new
				category with minimal one question and answer.
			</p>
			<div className={styles.box}>
				<Category
					cat={"React"}
					questions={questions}
				/>
				{/* <Category
					cat={"JavaScript"}
				/> */}
				<NewCategory />
			</div>
		</>
	)
}
