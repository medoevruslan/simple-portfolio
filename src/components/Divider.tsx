import { FC, useEffect, useState } from "react";

type DividerProps = {
    delay: number
}

const Divider: FC<DividerProps> = ({ delay }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), delay)
    }, [delay, isVisible])

    return isVisible ? <div className="divider"></div> : null;
}

export default Divider;