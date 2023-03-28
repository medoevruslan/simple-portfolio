import { NavbarMenuContextProvider } from '@/contexts/NavbarMenuContext';
import { FC } from 'react';
import NavbarMain from './NavbarMain';
import NavbarMobile from './NavbarMobile';

const navigation = [
    { id: 1, title: 'home', path: '/' },
    { id: 2, title: 'about', path: '/about' },
    { id: 3, title: 'skills', path: '/skills' },
    { id: 4, title: 'writing', path: '/writing' },
    { id: 5, title: 'contact', path: '/contact' },
]

const Navbar: FC = () => {

    return (
        <>
            <NavbarMenuContextProvider>
                <NavbarMain navlist={navigation} />
                <NavbarMobile />
            </NavbarMenuContextProvider>
        </>
    )
};

export default Navbar;