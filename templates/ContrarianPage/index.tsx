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
        <Layout title={'Test'}>
            <div className="space-y-2">
                <div className="mb-10 text-h2 text-center font-bold">Contrarians Quotes</div>
                <ContrarianContent data={data} />
            </div>
        </Layout>
    );
};

export default ContrarianPage;
