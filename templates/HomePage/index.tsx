"use client";

import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import Balance from "./Balance";
import Message from "@/components/Message";
import {useState} from "react";

const HomePage = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    const onViewContrarian = () => {
        router.push(`/contrarian/${message}`);
    };

    return (
        <Layout title="Dashboard">
            <div className="space-y-2">
                <Balance />
            </div>
            <div>
                <Message
                    className="flex items-center w-1/3 mt-10 btn-primary mx-auto text-center"
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    onAction={onViewContrarian}
                />
            </div>
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                Sponsor Information
            </div>
        </Layout>
    );
};

export default HomePage;
