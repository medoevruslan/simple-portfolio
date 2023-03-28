import FadeAnimation from "@/components/FadeAnimation";
import { FC } from "react";

const Contact: FC = () => {

    return (
        <div className="hero__content contact">
            <FadeAnimation className="title">
                <h1>Contact me.</h1>
            </FadeAnimation>
            <div className="contact-form-wrapper">
                <form className="form" name="contact-form">
                    <label>
                        <FadeAnimation tag="span" delay={100}>Type your email</FadeAnimation>
                        <input type="email" name="email" id="email" required />
                    </label>
                    <label>
                        <FadeAnimation tag='span' delay={150}>Message subject</FadeAnimation>
                        <input type="text" name="subject" id="subject" required />
                    </label>
                    <label>
                        <FadeAnimation tag="span" delay={200}>Type your message</FadeAnimation>
                        <textarea name="message" id="message" required></textarea>
                    </label>
                    <button name="send">send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;