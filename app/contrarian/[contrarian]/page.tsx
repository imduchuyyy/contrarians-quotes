'use client';

import type { NextPage } from "next";
import ContrarianPage from "templates/ContrarianPage";
import React, { useEffect, useState } from "react";

interface ContrarianPageProps {
    params: {
        contrarian: number;
    };
}

const Contrarian: NextPage<ContrarianPageProps> = ({ params }) => {
    const [data, setData] = useState<{}>({}); // Initialized as an empty object
    const contrarian = params.contrarian;

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
    }, [params.contrarian]);

    return <ContrarianPage params={params} data={data} />;
};

export default Contrarian;
