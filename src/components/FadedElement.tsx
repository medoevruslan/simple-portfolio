import { FC, ReactNode } from "react";

type FadedElementProps = {
    tag: string,
    className: string,
    children: ReactNode,
    dataMove: 'fademoveup' | 'moveup'
}

const FadedElement: FC<FadedElementProps> = ({ tag, children, className, dataMove }) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return <Tag className={className} data-move={dataMove}>{children}</Tag>
}

export default FadedElement;