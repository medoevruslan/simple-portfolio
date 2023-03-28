import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FC, ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <section className='hero'>
                    {children}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Layout;