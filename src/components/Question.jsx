import { useState } from "react"
import styles from "./Question.module.css"
import Button from "./Button"
export default function Question({ id, question, answer }) {
	const [showDetails, setShowdetails] = useState(false)
	return (
		<div key={id}>
			<li className={question}>
				<div className={styles.questionBox}>
					<p
						className={styles.p}
						
					>
						{question}
					</p>
                    <Button bgColor="var(--main-bg-color)" textColor="var(--title-color)" childrenSize={15} onClick={() => setShowdetails(true)}>Details</Button>
				</div>
				{showDetails && <p className={styles.p}>{answer}</p>}
			</li>
			<hr className={styles.line} />
		</div>
	)
}
