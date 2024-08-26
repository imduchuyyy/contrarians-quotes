import type { NextPage } from "next";
import ContrarianPage from "templates/ContrarianPage";
import React from "react";

interface ContrarianPageProps {
    params: {
        contrarian: number;
    };
}

const Contrarian: NextPage<ContrarianPageProps> = ({ params }) => {
    return <ContrarianPage params={params}/>;
};

export default Contrarian;
