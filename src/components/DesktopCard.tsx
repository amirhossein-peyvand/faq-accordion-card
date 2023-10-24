import box from "../assets/illustration-box-desktop.svg";
import dekstopWoman from "../assets/illustration-woman-online-desktop.svg";
import "../sass/DesktopCard.scss";
import Accordion from "./Accordion";

const DesktopCard = () => {
  return (
    <article className="desktopCard">
      <section className="left">
        <div className="imageContainer">
          <img src={dekstopWoman} alt="dekstopWoman" />
        </div>
        <img className="box" src={box} alt="box" />
      </section>
      <section className="contentContainer">
        <h1 className="title">FAQ</h1>
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

export default DesktopCard;
