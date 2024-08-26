"use client";

import Layout from "@/components/Layout";
import React from "react";
import ContrarianContent from "@/templates/ContrarianPage/ContrarianContent";
import SponsorInformation from "@/components/SponsorInfo";

interface ContrarianPageProps {
    params: {
        contrarian: number;
    };
    data: { [key: string]: any }; // An object with keys of type string and values of any type
}

const ContrarianPage: React.FC<ContrarianPageProps> = ({ params: { contrarian }, data }) => {
    return (
        <Layout title={''} visibleBackButton={true}>
            <div className="space-y-2">
                <ContrarianContent data={data} contrarianId={contrarian}/>
            </div>
            <SponsorInformation />
        </Layout>
    );
};

export default ContrarianPage;
