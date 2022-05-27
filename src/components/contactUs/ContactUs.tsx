import React, { useState,FormEvent } from 'react';
import style from "./ContactUs.module.css";
import phoneImg from '../../assets/images/contactUs/phone.png'
import address from "../../assets/images/contactUs/address.png";



function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [alert, setAlert] = useState(false);
 

  
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          let res = await fetch("https://appoga.herokuapp.com/contact_us", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone,
              message: message
            }),
            mode:'cors',
            headers: { 'Content-Type': 'application/json' },
          });
           const data = await res.json();
           console.log(data)

          if (res.status === 200) {
            setName("");
            setEmail("");
            setMessage("")
            setPhoneNumber("");
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
    <div className={style.ContactUsBody}>
      
     <section >
       <div className={style.top}>
          <div className={style.topText}>
           <p>Let us help you build your online presence</p> 
          </div>
          <div className={style.topImg}></div>
       </div>  
       <div className={style.helpLine}>
       <div className={style.helpLine_NGN}>
            <div className={style.flagNGN}>  
            </div>
            <h3>Nigeria</h3>
            <div>
                <div className={style.content}>
                  <img src={phoneImg} alt="phone" />
                  <p>(+234) 9138911913</p>
                </div>
                <div className={style.content}>
                  <img src={address} alt="address" />
                  <p>Block 308 DBM Plaza, Wuse Zone 1, Abuja</p>
                </div>
            </div>
            

       </div>


       <div className={style.helpLine_CAD}>
       <div className={style.flagCAD}>  
            </div>
            <h3>Canada</h3>
            <div >
                <div className={style.content}>
                  <img src={phoneImg} alt="phone" />
                  <p>(+234) 9138911913</p>
                </div>
                <div className={style.content}>
                  <img src={address} alt="address" />
                  <p>Block 308 DBM Plaza, Wuse Zone 1, Abuja</p>
                </div>
            </div>
            
       </div>

     </div>
     </section>

     <section className={style.middle}>
          <div className={style.container}>
              <div className={style.middleHeader}>
                    <h2>Contact Us</h2>
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

                        <input 
                        type="text" 
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                  </div>
                 

                  <input 
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                 <div className={style.wrapper}>
                 
                 <textarea 
                 className={style.textareaMessage} 
                 placeholder="Message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 
                 ></textarea>
                 </div>
                 <button type="submit" className={style.button}>Send Enquiry</button>
                 {alert &&  <div className={style.reply}><p>{reply}</p></div> } 
                
                </form>
              </div>
          </div>          
     </section>
  
    </div>
  )
}

export default ContactUs