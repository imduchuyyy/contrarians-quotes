import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useColorMode } from "@chakra-ui/react";
import Modal from "@/components/Modal";
import Trade from "@/components/Trade";
import Search from "./Search";
import Icon from "@/components/Icon";

type HeaderProps = {
    title: string;
    visible?: boolean;
    visibleBackButton?: boolean;
    showMenu?: boolean;
    onClickBurger?: () => void;
};

const Header = ({ title, visible, visibleBackButton, showMenu, onClickBurger }: HeaderProps) => {
    const router = useRouter();
    const [visibleModalSearch, setVisibleModalSearch] =
        useState<boolean>(false);
    const [visibleModalTrade, setVisibleModalTrade] = useState<boolean>(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";

    return (
        <>
            <div
                className={`fixed top-0 md:top-4 right-0 z-10 bg-theme-n-8 md:z-30 md:transition-colors left-0 sm:left-3 md:left-5 ${showMenu ? "md:!bg-theme-on-surface-1" : ""}`}
            >
                <div
                    className={`relative flex items-center justify-between h-24 w-full mx-auto px-10 sm:px-0 lg:px-6 md:h-16 md:px-4 md:rounded-2xl md:transition-shadow ${
                        showMenu
                            ? "shadow-depth-1 dark:shadow-[inset_0_0_0_0.125rem_#272B30]"
                            : ""
                    }`}
                >
                    {visibleBackButton ? (
                        <button
                            className="group inline-flex items-center mr-auto"
                            onClick={() => router.back()}
                        >
                            <div className="flex justify-center items-center w-6 h-6 mr-3.5 lg:mr-1">
                                <Icon
                                    className="fill-theme-primary transition-transform group-hover:-translate-x-0.5"
                                    name="arrow-left"
                                />
                            </div>
                            <div className="md:hidden text-xl">Try another one</div>
                        </button>
                    ) : null}

                    <div className="absolute left-1/2 transform -translate-x-1/2 text-h3 sm:text-xl md:text-2xl md:text-h4 sm:text-h5 text-center font-bold">
                        Your Contrarian types
                    </div>

                    <button
                        className="absolute right-10 group flex items-center h-12 px-4 sm:px-0 rounded-xl transition-colors hover:bg-theme-on-surface-2 md:hover:bg-transparent lg:right-6"
                        onClick={toggleColorMode}
                    >
                        <Icon
                            className="shrink-0 fill-theme-primary transition-colors group-hover:fill-theme-primary md:group-hover:fill-theme-secondary"
                            name={isLightMode ? "moon" : "sun"}
                        />
                    </button>
                </div>
            </div>
            <Modal
                classWrap="max-w-[40rem] !p-0 rounded-3xl overflow-hidden"
                visible={visibleModalSearch}
                onClose={() => setVisibleModalSearch(false)}
            >
                <Search />
            </Modal>
            <Modal
                classWrap="p-8 md:!px-4 md:!py-6"
                visible={visibleModalTrade}
                onClose={() => setVisibleModalTrade(false)}
            >
                <Trade />
            </Modal>
        </>
    );
};

export default Header;
