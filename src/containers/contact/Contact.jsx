import styles from "../../style";
import RadientBg from "../../components/reusable-ui/RadientBg";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9zmmyun', 'template_lodzqo9', form.current, 'OeGmUZCXXV1KJYP9K')
        .then((result) => {
            console.log(result.text);
            toast.success('Envoyé', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }, (error) => {
            console.log(error.text);
            toast.error('Erreur', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    };

  return (
    <section id="contact" className={`${styles.boxWidth} ${styles.padding} relative ${styles.marginY} `}>
        
        <RadientBg 
        blur="blur-[200px]"
        top="top-[20%]"
        left="left-[0%]"
        />
        
        <div className={`${styles.gradientLine}`}></div>
        
        <h2 className= {` ${styles.heading2} ${styles.marginYTitle}`}>Contact</h2>
        
        <p className={`${styles.paragraph} sm:w-[50%]`}>Feel free to contact me by email or through my social networks.</p>

        <div className={`${styles.marginYBloc} mb-0 flex justify-center relative`}>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3
            md:w-[60%] sm:w-[70%] ss:w-[70%] w-[100%]">

                <div className="gap-3 flex ss:flex-row flex-col ">
                    <input className={`${styles.glassBg} font-text ss:w-[50%] w-[100%] glass__bg rounded-md px-4 py-2 text-white`}
                    type="text" 
                    name="user_name" 
                    placeholder="Name"
                    required/>
                    <input className={`${styles.glassBg} font-text ss:w-[50%] w-[100%] glass__bg rounded-md px-4 py-2 text-white`}
                    type="email" 
                    name="user_email" 
                    placeholder="Email"
                    required/>
                </div>

                <textarea className={`${styles.glassBg} font-text rounded-md px-4 py-2 min-h-[200px] text-white`}
                name="message" 
                placeholder="Message"
                required/>

                <div className=" flex justify-end relative">
                    
                    <div
                        className={`${styles.gradientBtnBg}
                        animate-pulse
                        bg-gradient-to-r from-linearLeft to-linearRight`}
                    ></div>
                    <input className={`${styles.gradientBtn}`}
                    type="submit" 
                    value="Send" />
                    <ToastContainer />
                </div>
            </form>
        </div>

    </section>
  )
}
