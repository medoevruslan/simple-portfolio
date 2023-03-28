import { useNavbarMenuContext } from "@/hooks/useNavbarMenucontext";
import { useRouter } from "next/router";
import { FC } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";

type ListItem = {
    id: number,
    title: string,
    path: string
}

type NavbarMainProps = {
    navlist: Array<ListItem>,
}

const NavbarMain: FC<NavbarMainProps> = ({ navlist }) => {

    const { pathname } = useRouter();
    const { width } = useWindowDimensions();

    const { toggle, toggleHandler } = useNavbarMenuContext();

    const handleClick = () => {
        if (width && width <= 550) {
            toggleHandler(!toggle)
        }
    }

    return (
        <nav className={`nav ${toggle ? 'toggle' : ''}`}>
            <ul className="nav__list">
                {navlist.map(({ id, title, path }) => (
                    <li key={id} className='nav__list-item'>
                        <Link
                            href={path}
                            className={pathname === path
                                ? "nav__list-link active"
                                : "nav__list-link"}
                            onClick={handleClick}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavbarMain;