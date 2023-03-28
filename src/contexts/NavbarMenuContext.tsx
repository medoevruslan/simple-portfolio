import React, { FC, ReactNode } from "react";

interface IMenuContext {
    toggle: boolean,
    toggleHandler: (state: boolean) => void
}

type NavbarMenuContextProviderProps = {
    children: ReactNode
}

export const NavbarMenuContext = React.createContext<IMenuContext>({
    toggle: false,
    toggleHandler: () => {}
});

export const NavbarMenuContextProvider: FC<NavbarMenuContextProviderProps> = ({ children }) => {
    const [isToggled, setIsToggled] = React.useState(false);

    return (
        <NavbarMenuContext.Provider
            value={{
                toggle: isToggled,
                toggleHandler: setIsToggled,
            }}>
            {children}
        </NavbarMenuContext.Provider>
    )
}

