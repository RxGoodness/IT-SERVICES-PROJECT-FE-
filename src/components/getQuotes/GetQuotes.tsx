import { useState,FormEvent } from 'react';
import style from "./GetQuotes.module.css";

function GetQuotes() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [alert, setAlert] = useState(false);


    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          let res = await fetch("https://appoga.herokuapp.com/quotes", {
            method: "POST",
            body: JSON.stringify({
              projectName: name,
              email: email,
              summary: message
            }),
            mode:'cors',
            headers: { 'Content-Type': 'application/json' },
          });
           const data = await res.json();
           console.log(res)

          if (res.status === 201) {
            setName("");
            setEmail("");
            setMessage("")
            setAlert(true)
            setReply("Thanks for reaching out, we will get back to you soon!");
            clearReply();
          } else {
            setAlert(true)
            setReply("Please complete all fields");
            clearReply();
          }
        } catch (err) {
          console.log(err);
        }
  }

  const clearReply = () => {
      setTimeout(() => {
          setAlert(false)
      }, 3000)
  }




  return (
    <section className={style.quotes}>
    <div className={style.quotes_container}>
        <div className={style.quotes_headerText}>
              <h2>Get a Free Quote</h2>
              <p>Send us an enquiry with your details and we will reach out to you</p>
        </div>

        <div className={style.form_container}>

            <form onSubmit ={handleSubmit}>
            <div className={style.namePhone}>
                  <input 
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
            </div>
           
            <div className={style.email}>
                <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
           

           <div className={style.txtAreaWrapper}>
           
           <textarea 
           className={style.textareaMessage} 
           placeholder="Message"
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           
           ></textarea>
           </div>
           <button type="submit" className={style.button}>Get a Free Quote</button>
           {alert &&  <div className={style.reply}><p>{reply}</p></div>} 
          
          </form>
        </div>
    </div>          
</section>


  )
}

export default GetQuotes
