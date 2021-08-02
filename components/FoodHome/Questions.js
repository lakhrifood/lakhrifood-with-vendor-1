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
        <CollapsQue que="What is the Customers Experience Like?" ans="ans" />
        <CollapsQue
          que="What Distinguishes meals from Lakhri Foods
Compared to Food From Restaurants or Takeways ? "
          ans="ans"
        />
        <CollapsQue que="Is It Necessary to Place to an Order ahead of Time?" />
        <CollapsQue que="Do you Provide Delivery Services? " />
        <CollapsQue que="Which Regions Lakhri Foods Delivered to?" />
        <CollapsQue que="Is There a Policy Regarding Cancellation?" />
        <CollapsQue que="How are the Home Chef Choosen?" />
        <CollapsQue que="What is the Procedure For Filling the Complaint?" />
        <CollapsQue que="Which Regions Lakhri Foods Delivered to?" />
        <CollapsQue que="Is There a Policy Regarding Cancellation?" />

        <CollapsQue que="How are the Home Chef Choosen?" />

        <CollapsQue que="What is the Procedure For Filling the Complaint?" />

        <CollapsQue que="How Does the Charity Work For Lakhri Food?" />

        <CollapsQue que="Who Should I Contact if My Question isn't Answered Here?" />
      </div>
    </div>
  );
};

export default Questions;
