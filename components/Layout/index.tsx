import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

type LayoutProps = {
    title: string;
    children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
    const [visible, setVisible] = useState<boolean>(true);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const isDesktop = useMediaQuery({
        query: "(max-width: 1259px)",
    });

    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    useEffect(() => {
        setVisible(isMobile || !isDesktop);
    }, [isMobile, isDesktop]);

    return (
        <div
            className={"min-h-screen md:pl-0"}
        >
            <div className="">
                <Header
                    visible={visible}
                    title={title}
                    onClickBurger={() => setShowMenu(!showMenu)}
                    showMenu={showMenu}
                />
                <div className="mx-auto pt-24 pb-10 lg:px-6 md:pt-20 md:px-4 md:pb-8">
                    {title && (
                        <div className="hidden md:flex items-center h-16 mb-2 bg-theme-on-surface-1 rounded-2xl text-h5">
                            {title}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
