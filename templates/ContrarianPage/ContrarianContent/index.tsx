import { LineChart, Line, ResponsiveContainer } from "recharts";
import Card from "@/components/Card";
import {contrariansTraits} from "@/mocks/contrariansTraits";
import Image from "@/components/Image";
import React from "react";
import {notificationsAll} from "@/mocks/notifications";

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
    const name = data?.name;
    const attributes = data?.attributes?.filter((i: Attribute) => i.value !== "None");
    const randomAttributes = getRandomItems(attributes, 3);
    const traits = contrariansTraits?.filter(trait =>
        Object.values(trait)?.some((value) =>
            randomAttributes?.some((i) => i.value === value)
        )
    );
    return (
        <div className="flex flex-row lg:flex-row lg:space-x-2 lg:space-y-0 space-y-3 m-18">
            {/* Text Content */}
            <div className="flex-1 w-full px-30 py-15 lg:w-1/2 mt-5 lg:mt-0 lg:ml-10 md:space-y-6">
                {traits.map((item) => (
                    <div key={item.Trait}>
                        <div className="mb-5 text-title-1s">{item.Description}</div>
                        {/*<div className="mb-8 text-title-1m text-theme-secondary 2xl:mb-10">*/}
                        {/*    {item.Description}*/}
                        {/*</div>*/}
                    </div>
                ))}
            </div>

            {/* Image Content */}
            <div className="flex-shrink-0 w-1/2 lg:w-1/2 py-10 px-20 justify-end lg:py-0">
                <Image
                    className="max-w-full opacity-100 rounded-[1.5rem] object-cover"
                    src={`https://ipfs-wrapper.dagora.xyz/ipfs/${imageId}?width=500&height=500`}
                    width={420}
                    height={420}
                    alt=""
                />
                <div className="mb-10 mt-5 text-2xl text-center font-bold">{name}</div>
            </div>
        </div>


    );
};

export default ContrarianContent;
