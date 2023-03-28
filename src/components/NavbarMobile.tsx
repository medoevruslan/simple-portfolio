import { useNavbarMenuContext } from "@/hooks/useNavbarMenucontext";
import { FC } from "react";

const NavbarMobile: FC = () => {

    const { toggle,  toggleHandler } = useNavbarMenuContext();

    const handleClick = () => {
        toggleHandler(!toggle)
    }

    return (
        <div className='nav-mobile-toggle' onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default NavbarMobile;