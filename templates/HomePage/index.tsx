"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import Message from "@/components/Message";
import { useState } from "react";
import Gallery from "@/templates/HomePage/Gallery";
import { useColorMode } from "@chakra-ui/react";
import SponsorInformation from "@/components/SponsorInfo";

const HomePage = () => {
    const router = useRouter();
    const [message, setMessage] = useState<number | null>(null);
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";

    const onViewContrarian = () => {
        if (message !== null) {
            router.push(`/contrarian/${message}`);
        }
    };

    return (
        <Layout title="">
            <div className="space-y-2">
                {/* <Balance /> */}
                <Gallery />
            </div>
            <div>
                <Message
                    className="flex items-center w-1/3 md:w-1/2 mt-10 sm:w-full btn-primary mx-auto text-center"
                    value={message === null ? "" : message.toString()} // Convert number to string for the value prop
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(Number(e.target.value) || null)} // Convert input to number or set null
                    onAction={onViewContrarian}
                />
            </div>
            <SponsorInformation />
        </Layout>
    );
};

export default HomePage;
