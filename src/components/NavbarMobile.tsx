import { useNavbarMenuContext } from "@/hooks/useNavbarMenucontext";
import { FC, useState } from "react";

const NavbarMobile: FC = () => {

    const [isPressed, setIsPressed] = useState(false);
    const { toggle,  toggleHandler } = useNavbarMenuContext();

    const handleClick = () => {
        toggleHandler(!toggle)
    }

    const handleOnPointerUp = () => {   
        setIsPressed(false)    
    }

    const handleOnPointerDown = () => {
        setIsPressed(true)    
    }

    return (
        <div 
        className={`nav-mobile-toggle ${isPressed ? 'toggle-pressed' : ''}`}
        onPointerUp={handleOnPointerUp} 
        onPointerDown={handleOnPointerDown} 
        onClick={handleClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default NavbarMobile;