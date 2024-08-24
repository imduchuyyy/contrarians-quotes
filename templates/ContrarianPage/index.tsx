"use client";

import Layout from "@/components/Layout";
import React from "react";
import ContrarianContent from "@/templates/ContrarianPage/ContrarianContent";

interface ContrarianPageProps {
    params: {
        contrarian: number;
    };
    data: { [key: string]: any }; // An object with keys of type string and values of any type
}

const ContrarianPage: React.FC<ContrarianPageProps> = ({ params: { contrarian }, data }) => {
    return (
        <Layout title={''}>
            <div className="space-y-2">
                <ContrarianContent data={data} />
            </div>
            <div className="fixed bottom-0 text-base-1s left-1/2 transform -translate-x-1/2 mb-4">
                Sponsor Information
            </div>
        </Layout>
    );
};

export default ContrarianPage;
