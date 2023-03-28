import { FC } from "react";
import FadeAnimation from "./FadeAnimation";

const Footer: FC = () => {
    return (
        <FadeAnimation delay={150}>
            <footer>
                <div className="footer-container">
                    Just a footer / Nothing fancy.
                </div>
            </footer>
        </FadeAnimation>
    )
}

export default Footer;