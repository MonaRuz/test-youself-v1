import { Link } from "react-router-dom"
import styles from "./Question.module.css"
import Button from "./Button"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

export default function Question({
	id,
	question,
	answer,
	isOpen,
	onToggleOpen,
}) {
	return (
		<div>
			<li className={question}>
				<div
					className={styles.questionBox}
					onClick={() => onToggleOpen()}
				>
					<p className={!isOpen?`${styles.question}`:`${styles.currentQuestion}`}>{question}</p>
					<p className={styles.btn}>
						{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
					</p>
				</div>
				{isOpen && (
					<div>
						<p className={styles.answer}>{answer}</p>
						<div className={styles.btnBox}>
							<Link
								className={styles.link}
								to={`${id}`}
							>
								<Button
									bgColor='var(--main-bg-color)'
									textColor='var(--positive-color)'
								>
									Edit question
								</Button>
							</Link>

							<Button
								bgColor='var(--main-bg-color)'
								textColor='var(--negation-color)'
							>
								Delete question
							</Button>
						</div>
					</div>
				)}
			</li>
			<hr className={styles.line} />
		</div>
	)
}
