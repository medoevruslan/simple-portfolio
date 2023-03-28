import { FC, ReactNode, useEffect, useState } from "react";
import FadedElement from "./FadedElement";

type FadeProps = {
    tag?: 'main' | 'section' | 'div' | 'span' | 'p',
    className?: string,
    delay?: number
    children: ReactNode;
}

type MoveUp = {
    fade: 'fademoveup' | 'moveup';
}

const FadeAnimation: FC<FadeProps> = ({ tag = 'div', className = '', children, delay = 0 }) => {

    const [isMove, setIsMove] = useState<MoveUp>({ fade: 'fademoveup' });

    useEffect(() => {
        const timer = setTimeout(() => setIsMove({ fade: 'moveup' }), delay);
        return () => clearTimeout(timer);
    }, [delay])

    return <FadedElement tag={tag} className={className} dataMove={isMove.fade}>{children}</FadedElement>
}

export default FadeAnimation;