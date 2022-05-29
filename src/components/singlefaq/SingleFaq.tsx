import { useRef, useState } from 'react'
import "./style.css"

export interface FaqsType {
    _id: string
    questions: string,
    answers: string,
    isAnswered: boolean,
}

type Props = {
  data: FaqsType;
  onUpdate: (faq: FaqsType) => void;
  onDelete: (id: string) => void;
}

function SingleFaq({ data, onUpdate, onDelete}: Props) {
    const { _id, isAnswered, questions, answers } = data;
    const [question, setQuestion] = useState(questions);
    const [answer, setAnswer] = useState(answers); 
    const questionRef = useRef<HTMLSpanElement>(null);
    const answerRef = useRef<HTMLSpanElement>(null);

    const [inputClass, setInputClass] = useState('faq-text');
    const [editButtonText, setEditButtonText] = useState('Edit');

    const edit = () => {
      if (questionRef.current && answerRef.current) {
        if (editButtonText === 'Edit') {
          questionRef.current.contentEditable = 'true';
          answerRef.current.contentEditable = 'true';
          setInputClass('faq-text editing');
          setEditButtonText('Update');
        } else {
          onUpdate({
            _id,
            isAnswered,
            questions: question,
            answers: answer
          });
          questionRef.current.contentEditable = 'false';
          answerRef.current.contentEditable = 'false';
          setInputClass('faq-text');
          setEditButtonText('Edit');
        }
      }
    }

    const remove = () => {
      onDelete(_id);
    }

    const handleQuestionChange = (e: any) => {
      const value = e.target.textContent;
      console.log(value, "?")
      setQuestion(value as string);
    }

    const handleAnswerChange = (e: any) => {
      const value = e.target.textContent;
      console.log(value, "answer")
      setAnswer(value as string);
    }

  return (
    <div className="faq-wrapper">
      <div className="faq-box">
        <span className="faq-title">Question: </span>
        <span
          ref={questionRef}
          onBlur={handleQuestionChange}
          className={inputClass}
        >
          {question}
        </span>
      </div>
      <div className="faq-box">
        <span className="faq-title">Answer: </span>
        <span
          ref={answerRef}
          onBlur={handleAnswerChange}
          className={inputClass}
        >
          {answer}
        </span>
      </div>
      <div className="action-box">
        <button onClick={remove}>Delete</button>
        <button onClick={edit}>{editButtonText}</button>
      </div>
    </div>
  )
}

export default SingleFaq