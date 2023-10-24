import mobileWoman from "../assets/illustration-woman-online-mobile.svg";
import "../sass/MobileCard.scss";
import Accordion from "./Accordion";

const MobileCard = () => {
  return (
    <article className="mobileCard">
      <section className="imageContainer">
        <img src={mobileWoman} alt="" style={{ width: "300px" }} />
      </section>
      <section className="contentContainer">
        <h1>FAQ</h1>
        <Accordion
          header="How many team members can I invite?"
          text="You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan."
        />
        <Accordion
          header="What is the maximum file upload size?"
          text="No more than 2GB. All files in your account must fit your allotted storage space."
        />
        <Accordion
          header="How do I reset my password?"
          text="Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you."
        />
        <Accordion
          header="Can I cancel my subscription?"
          text="Yes! Send us a message and we’ll process your request no questions asked."
        />

        <Accordion
          header="Do you provide additional support?"
          text="Chat and email support is available 24/7. Phone lines are open during normal business hours."
        />
      </section>
    </article>
  );
};

export default MobileCard;
