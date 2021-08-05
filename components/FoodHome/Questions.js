import CollapsQue from "./CollapsQue";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Questions = () => {
  return (
    <div className={styles.QuestionsContainer}>
      <div className={styles.imgQuestion}>
        <Image
          src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139318/assests/biriyani_ulyv8d.png"
          alt="Picture of the author"
          width={600}
          height={580}
        />
      </div>
      <div className={styles.qna}>
        <h1 className={styles.qnaTitle}>
          Popular <span className={styles.headingproClr}>Questions</span>{" "}
        </h1>
        <CollapsQue
          que="What is the Customers Experience Like?"
          ans="Simply place an order, specifying the quantity of meals desired, as well as the time and location for delivery. You can feel assured that your home-cooked meal will be cooked by our home-chefs using the freshest ingredients available in a sanitary setting and delivered on time. You can also look through our Facebook group for available discounts."
        />
        <CollapsQue
          que="What Distinguishes meals from Lakhri Foods
Compared to Food From Restaurants or Takeways ? "
          ans="We provide nutritious and delectable meals tailored to your specifications. We emphasize on nutritious and freshly produced dishes, made with love and care in our cooks' kitchens, unlike commercial restaurants."
        />
        <CollapsQue
          que="Is It Necessary to Place to an Order ahead of Time?"
          ans="Most offers can be ordered 24 hours ahead of time at this moment, while some may only be available 3-6 hours ahead of time. Shopping for local products, preparing your meals, and then having them delivered to your home take time, as you may already know."
        />
        <CollapsQue
          que="Do you Provide Delivery Services? "
          ans="Yes. All meals are delivered to the address you provide when placing your order, which might be your home, business, or any other location within our service region."
        />
        <CollapsQue
          que="Which Regions Lakhri Foods Delivered to?"
          ans="Lakhri Foods, currently, is only serving within Dhaka city limits."
        />

        <CollapsQue
          que="What is the procedure for filing a complaint?"
          ans="If the cuisine does not match your expectations on a rare occasion, the cook will normally reward you with a free dinner if you present a solid cause. Lakhri Foods will examine any delivery concerns and take appropriate action, which may include reimbursing your delivery price. Please do not hesitate to contact us via the app's help & support area or via email/phone at:
          complaints@lakhrifoods.com
          +88 01747 229 993
          +88 01747 229 663
          "
        />

        <CollapsQue
          que="How are the Home Chef Choosen?"
          ans="The Lakhri Foods community places a premium on food safety. We only hire the greatest home chefs and hold them to the strictest food safety standards. We examine all kitchens before approving chefs to sell on the platform, and we undertake quarterly house inspections to ensure our high standards are met. We also provide each home-chefs with information on sanitation and packing rules. Every Lakhri Foods meal receives feedback to guarantee that quality and safety standards are never compromised. All complaints are properly investigated, and if there are any safety concerns, such as illness, the home-chef is prohibited from working until the inquiry is completed. If a complaint is valid and substantial, the home-chef will be removed from our platform; the most essential thing to us is that customers may safely enjoy their cuisine.
"
        />

        <CollapsQue
          que="What is the Procedure For Filling the Complaint?"
          ans="If the cuisine does not match your expectations on a rare occasion, the cook will normally reward you with a free dinner if you present a solid cause. Lakhri Foods will examine any delivery concerns and take appropriate action, which may include reimbursing your delivery price. Please do not hesitate to contact us via the app's help & support area or via email/phone at:
complaints@lakhrifoods.com
+88 01747 229 993
+88 01747 229 663
"
        />

        <CollapsQue
          que="How Does the Charity Work For Lakhri Food?"
          ans="When you use Lakhri Foods service, 50% of the entire profit that is generated goes to feeding the homeless street kids!
Satisfy your tummy while providing a meal to a hungry street kid at no extra cost! 
Your charity works are done at-least once a month (more depending on the orders volume). Details of the charity can be found in our Facebook, Instagram page as well as on the website.
"
        />

        <CollapsQue
          que="Who Should I Contact if My Question isn't Answered Here?"
          ans="If you have any questions, please contact us via Messenger, phone or email at: support@lakhrifoods.com
          "
        />
      </div>
    </div>
  );
};

export default Questions;
