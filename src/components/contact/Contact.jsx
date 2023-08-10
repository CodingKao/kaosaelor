import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
// import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_in0ob0t', 'template_xsfj3gt', form.current, 'vJFPuweGb_rfTPAMt')
          
        e.target.reset()
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>saelor.kao@gmail.com</h5>
                        <a href="mailto:saelor.kao@gmail.com">Send a message</a>
                    </article>

                    {/* <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Email</h4>
                        <h5>saelor.kao@gmail.com</h5>
                        <a href="mailto:saelor.kao@gmail.com">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>saelor.kao@gmail.com</h5>
                        <a href="mailto:saelor.kao@gmail.com">Send a message</a>
                    </article> */}

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required></input>       
                    <input type="email" name='email' placeholder='Your Email' required></input>   
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>          
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact