import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Trade from "@/components/Trade";
import User from "@/components/User";
import Image from "@/components/Image";
import Notifications from "./Notifications";
import Search from "./Search";
import Switch from "@/components/Switch";

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
                className={`fixed top-0 right-0 z-10 bg-theme-n-8 md:z-30 md:px-4 md:py-2 md:transition-colors ${
                    visible
                        ? "left-[21.25rem] 2xl:left-76 xl:left-20 md:left-0"
                        : "left-20 md:left-0"
                } ${showMenu ? "md:!bg-theme-on-surface-1" : ""}`}
            >
                <div
                    className={`flex items-center h-24 max-w-[80rem] mx-auto px-10 lg:px-6 md:h-16 md:px-4 md:bg-theme-on-surface-1 md:rounded-2xl md:transition-shadow ${
                        showMenu
                            ? "shadow-depth-1 dark:shadow-[inset_0_0_0_0.125rem_#272B30]"
                            : ""
                    }`}
                >
                    <div className="flex items-center ml-auto space-x-6">
                        <button className="group flex items-center h-12 px-4 rounded-xl transition-colors hover:bg-theme-on-surface-2 md:hover:bg-transparent" onClick={toggleColorMode}>
                            <Icon
                                className="shrink-0 fill-theme-secondary transition-colors group-hover:fill-theme-primary md:group-hover:fill-theme-secondary"
                                name={isLightMode ? "moon" : "sun"}
                            />
                        </button>
                    </div>
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
