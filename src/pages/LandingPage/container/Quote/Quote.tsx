import React from 'react'
import Button from '../../../../components/button/Button'
import InputField from '../../../../components/Custom_InputField/InputField'
import { arrow_icon } from '../../../../constants/image'
import QuoteStyles from './Quote.module.scss'

const Quote = () => {
  return (
    <div className={QuoteStyles.quote}>
        <div className={QuoteStyles.main_quote}>
            <div className={QuoteStyles.quote_title}>
                <h1>Get a Free Quote</h1>
                <p>Let’s begin by providing a free quotation for your project</p>
            </div>
            <form className={QuoteStyles.quote_form}>
                <InputField
                    type='text'
                    name='name'
                    value=''
                    placeholder='Name'
                    handleChange={() => {}}
                />
                <div className={QuoteStyles.mata_input}/>
                <InputField
                    type='email'
                    name='email'
                    value=''
                    placeholder='Email'
                    handleChange={() => {}}
                />
                <div className={QuoteStyles.mata_input}/>
                <InputField
                    textArea={true}
                    name='message'
                    value=''
                    placeholder='Message'
                    handleChange={() => {}}
                />
                <div className={QuoteStyles.mata_input}/>
                <Button>Get a Free Quote</Button>
            </form>
        </div>
        <div className={QuoteStyles.main_liveChat}>
            <div className={QuoteStyles.quote_title}>
                <h1>Live Chat</h1>
                <p>We are online 24/7 to reply your messages</p>
            </div>
            <div className={QuoteStyles.live_chat_container}>
                <div className={QuoteStyles.liveChat_content}>
                    <div className={QuoteStyles.liveChat_input}>
                        <InputField
                            type='text'
                            name='liveChat'
                            value=''
                            placeholder='Type your message...'
                            handleChange={() => {}}
                            allowRadius={true}
                        />
                    </div>
                    <div className={QuoteStyles.mata}/>
                    <div className={QuoteStyles.liveChat_button}>
                        <img src={arrow_icon} alt="arrow_icon" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Quote