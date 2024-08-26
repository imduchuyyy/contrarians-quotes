"use client";

import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import ContrarianContent from "@/templates/ContrarianPage/ContrarianContent";
import SponsorInformation from "@/components/SponsorInfo";
import { useColorMode } from "@chakra-ui/react";

interface ContrarianPageProps {
    params: {
        contrarian: number;
    };
    // data: { [key: string]: any }; // An object with keys of type string and values of any type
}

const ContrarianPage: React.FC<ContrarianPageProps> = ({ params: { contrarian } }) => {
    const [data, setData] = useState<{}>({}); // Initialized as an empty object

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://inventory.coin98.com/collection/Contrarians/${contrarian}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [contrarian]);

    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";
    return (
        <Layout title={''} visibleBackButton={true}>
            <div className={`pb-3 pt-3 ${isLightMode ? "bg-white" : "bg-black"}`} id="contrarian-page">
                <ContrarianContent data={data} contrarianId={contrarian}/>
            </div>
            <SponsorInformation />
        </Layout>
    );
};

export default ContrarianPage;
