import { useState } from "react";
import Button from "../Button/Button"

import { EnvelopeSimple } from "@phosphor-icons/react"

export default function Form(){
    const [emailError, setEmailError] = useState('');
    const [input, setInput] = useState('');
    const [errorColor, setErrorColor] = useState(true);

    const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

    const onChange =(e) => {

        setInput(e.target.value);

        if(!emailRegex.test(input)){
            setEmailError('Invalid email format')
    
          } else {
            setEmailError('')
          }
    }
  
    const handleValidation = (e) => {
        e.preventDefault();

        if(input.length >= 1){

        setEmailError('Thank you! You\'ve been added to the waitlist.');
        setErrorColor(false);
        setInput('');
        } else {
          console.log('empty inputbox');
          setErrorColor(true);
          setEmailError('Please enter your email address');
        }

        setInput('');
      }

    return(
        <>
            <form onSubmit={handleValidation} className="form form--waitlist">
                <div className='form--group form--waitlist__group'>
                    <label htmlFor='email'></label>
                    <input id="email" name='email' type="text" className='form--input' placeholder={`Email address`} onChange={onChange} value={input}/>
                    <EnvelopeSimple size={28} color="#868e96" className="form--input__icon"/>
                </div>

                <Button type='b' className="btn btn--nav">
                 Subscribe
                </Button>

                <p className={errorColor ? 'form--error': 'form--success'}> {emailError} </p>
            </form>
        </>
    )
}