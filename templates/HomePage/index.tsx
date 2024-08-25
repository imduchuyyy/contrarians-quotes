"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import Balance from "./Balance";
import Message from "@/components/Message";
import { useState } from "react";
import Gallery from "@/templates/HomePage/Gallery";

const HomePage = () => {
    const router = useRouter();
    const [message, setMessage] = useState<number | null>(null);

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
            <div className="fixed bottom-0 text-base-1s left-1/2 transform -translate-x-1/2 mb-4">
                Sponsor Information
            </div>
        </Layout>
    );
};

export default HomePage;
