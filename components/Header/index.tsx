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
    showMenu?: boolean;
    onClickBurger?: () => void;
};

const Header = ({ title, visible, showMenu, onClickBurger }: HeaderProps) => {
    const router = useRouter();
    const [visibleModalSearch, setVisibleModalSearch] =
        useState<boolean>(false);
    const [visibleModalTrade, setVisibleModalTrade] = useState<boolean>(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";

    return (
        <>
            <div
                className={`fixed top-0 right-0 z-10 bg-theme-n-8 md:z-30 md:transition-colors left-0 sm:left-10 md:left-5 ${showMenu ? "md:!bg-theme-on-surface-1" : ""}`}
            >
                <div
                    className={`flex justify-between h-24 w-full mx-auto px-10 lg:px-6 md:h-16 md:px-4 md:rounded-2xl md:transition-shadow ${
                        showMenu
                            ? "shadow-depth-1 dark:shadow-[inset_0_0_0_0.125rem_#272B30]"
                            : ""
                    }`}
                >
                    <div className="flex-1">
                        <div className="mt-6 mb-5 text-h3 md:text-h4 sm:text-h5 text-center font-bold">Contrarians Quotes</div>
                    </div>
                    <button className="mt-6 sm:mt-4 group flex items-center h-12 px-4 rounded-xl transition-colors hover:bg-theme-on-surface-2 md:hover:bg-transparent" onClick={toggleColorMode}>
                        <Icon
                            className="shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary md:group-hover:fill-theme-secondary"
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
