import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BiLogoTelegram} from 'react-icons/bi'
import { useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
function Contact(){
    const form = useRef()
    const [emailSent, setEmailSent] = useState(false)
    const resetForm = () => {
        form.current.name.value = ''
        form.current.email.value = ''
        form.current.message.value = ''
      }
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_x8qt6xi', 'template_nz77w27', form.current, 'ajkmS2X6Pc05cVPKs')
          .then((result) => {
              setEmailSent(true)
              resetForm()
          }, (error) => {
              resetForm()
              setEmailSent(false)
          })
      }
     
    return(<section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
            <article className="contact__option">
                <AiFillInstagram className='contact__options-icons' />
                <h4>Instagram</h4>
                <h5>የአብስራ ተስፋየ</h5>
                <a href="https://www.instagram.com/hereisyeab"  target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
             <AiFillLinkedin className='contact__options-icons' />
            <h4>Linkdin</h4>
                <h5>Yeabsra Tesfaye</h5>
            <a href='https://www.linkedin.com/in/yeabsra-tesfaye-815ba0261'>Send a message</a>
           </article>

            <article className="contact__option">
                <BiLogoTelegram  className='contact__options-icons'  />
                <h4>Telegram</h4>
                <h5>here_is_yeab</h5>
                <a href="https://t.me/here_is_yeab"  target='_blank'>Send a message</a>
            </article>
            </div>
            {emailSent ? (
                <p>Thank you for your message!</p>
            ): (
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send a Message</button>
            </form>
            )}
        </div>
    </section>)
}

export default Contact