import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import image from "../../assets/images/Faqs/contact-illustration1.jpg";
import faqCss from "./faq.module.css";
const Faqs = () => {
  return (
    <section className = {faqCss.main_container}>
      <div className={faqCss.faqContainer}>
        <div className={faqCss.purpleBg}>Got a Question?</div>
        <img className={faqCss.faqImage} src={image} alt="" />
      </div>
      <h3 className={faqCss.frequentlyAskedQuestions}>Frequently asked questions</h3>
      <Accordion data={"data"} />
      <Accordion data={"data"} />
      <Accordion data={"data"} />
      <Accordion data={"data"} />

      <h3 className={faqCss.anotherQuestionHeader}>Still have A question?</h3>
      <div className={faqCss.anotherQuestion}>
        <input
          type="text"
          className={faqCss.questionInput}
          placeholder="Type your question"
        />
        <input type="button" value="send" className={faqCss.questionButton} />
      </div>
    </section>
  );
};

export default Faqs;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="faqs">
<h3>Frequently asked questions</h3>
<div className="faq-question">question</div>
<div className="faq-answer">
  In publishing and graphic design, Lorem ipsum is a placeholder text
  commonly used to demonstrate the visual form of a document or a
  typeface without relying on meaningful content. In publishing and
  graphic design, Lorem ipsum is a placeholder text commonly used to
  demonstrate the visual form of a document or a typeface without
  relying on meaningful content.
</div>
</div> */
}
