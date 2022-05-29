import React from 'react'
import InputFieldStyles from './InputField.module.scss'
// import './InputField.scss'


interface I_InputData {
    type?: string,
    placeholder: string,
    value: string | number,
    name?: string,
    handleChange?:  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textArea?: boolean;
    allowRadius?: boolean;
    lg?: boolean;

};

const InputField = ({type, name, value, placeholder, handleChange, textArea, allowRadius, lg}: I_InputData) => {

    return (
        <div className={InputFieldStyles.input_field_container}>
            
            {
                textArea ? (
                    <textarea className={lg ? InputFieldStyles.lg_textinput : InputFieldStyles.textinput_textarea} name={name} value={value} placeholder={placeholder} onChange={handleChange}></textarea>
                    ) : (
                        <input className={allowRadius ? InputFieldStyles.input_with_radius : InputFieldStyles.textinput} type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange}/>  
                    )
            }
            
        </div>
    )
}

export default InputField