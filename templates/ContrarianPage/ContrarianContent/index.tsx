import { LineChart, Line, ResponsiveContainer } from "recharts";
import Card from "@/components/Card";
import {contrariansTraits} from "@/mocks/contrariansTraits";
import Image from "@/components/Image";
import React from "react";

type ContrarianContentProps = {
    data: { [key: string]: any }; // An object with keys of type string and values of any type
};

interface Attribute {
    value?: string;
}

interface Traits {
    Trait: string;
}

type Trait = {
    value: string;
    trait_type: string;
};

const getRandomItems = (arr: Trait[], numItems: number): Trait[] => {
    const shuffled = arr?.slice().sort(() => 0.5 - Math.random());
    return shuffled?.slice(0, numItems);
};

const ContrarianContent = ({data}: ContrarianContentProps) => {
    const imageId = data?.image?.split('ipfs://').pop();
    const attributes = data?.attributes?.filter((i: Attribute) => i.value !== "None");
    const randomAttributes = getRandomItems(attributes, 3);
    const traits = contrariansTraits?.filter(trait =>
        Object.values(trait)?.some((value) =>
            randomAttributes?.some((i) => i.value === value)
        )
    );
    return (
        <Card
            className="flex-1"
            // title="ContrarianContent"
            // seeAllUrl="/"
        >
            <div className="flex space-x-2 lg:block lg:space-x-0 lg:space-y-2">
                Test
            </div>
            <div className="flex justify-end mb-6 mr-10 p-6 text-center md:py-0">
                <Image
                    className="max-w-full opacity-100 rounded-[1.5rem] object-cover"
                    src={`https://ipfs-wrapper.dagora.xyz/ipfs/${imageId}?width=500&height=500`}
                    width={500}
                    height={500}
                    alt=""
                />
            </div>
        </Card>
    );
};

export default ContrarianContent;
