import React, { useState, FormEvent } from "react";
import Accordion from "../../components/Accordion/Accordion";
import image from "../../assets/images/Faqs/contact-illustration1.jpg";
import faqCss from "./faq.module.css";
const Faqs = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(question);
  };
  return (
    <>
      <div className={faqCss.faqContainer}>
        <div className={faqCss.purpleBg}>Got a Question?</div>
        <img className={faqCss.faqImage} src={image} alt="" />
      </div>
      <h3 className={faqCss.frequentlyAskedQuestions}>
        Frequently asked questions
      </h3>
      <Accordion data={"data"} />
      <Accordion data={"data"} />
      <Accordion data={"data"} />
      <Accordion data={"data"} />

      <h3 className={faqCss.anotherQuestionHeader}>Still have A question?</h3>
      <div className={faqCss.formDiv}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your question"
            className={faqCss.questionInput}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input type="submit" value="send" className={faqCss.questionButton} />
        </form>
      </div>
    </>
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
