import CollapsQue from "./CollapsQue";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Questions = () => {
  return (
    <div className={styles.QuestionsContainer}>
      <div className={styles.imgQuestion}>
        <Image
          src="/../public/biriyani.png"
          alt="Picture of the author"
          width={600}
          height={580}
        />
      </div>
      <div className={styles.qna}>
        <h1 className={styles.qnaTitle}>
          Popular <span className={styles.headingproClr}>Questions</span>{" "}
        </h1>
        <CollapsQue />
        <CollapsQue />
        <CollapsQue />
        <CollapsQue />
        <CollapsQue />
      </div>
    </div>
  );
};

export default Questions;
