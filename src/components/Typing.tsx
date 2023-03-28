import { FC, useEffect, useState } from "react";

type TypingProps = {
    text: string,
    speed: number;
}

const Typing: FC<TypingProps> = ({ text, speed }) => {

    const [textToType, setTextToType] = useState('');

    useEffect(() => {
        const typeSpeed = Math.floor((Math.random() * (speed - speed / 5)) + speed / 5);
        const timeout = setTimeout(() => setTextToType(text.slice(0, textToType.length + 1)), typeSpeed);
        return () => clearTimeout(timeout);
    }, [textToType]);

    return (
        <>
            <span className="typing">{textToType}</span>
            <span className="cursor"></span>
        </>
    )
}

export default Typing;