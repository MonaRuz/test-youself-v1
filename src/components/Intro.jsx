import styles from "./Intro.module.css"

export default function Intro() {
	return (
		<div>
			<p className={styles.intro}>
				Practice your knowledge in any field!<br/> Whether you're a student or
				self-taught, write your own questions and answers and rate your
				performance.
			</p>
		</div>
	)
}
