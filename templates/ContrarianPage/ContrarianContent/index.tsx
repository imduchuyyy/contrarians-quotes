import { LineChart, Line, ResponsiveContainer } from "recharts";
import Card from "@/components/Card";
import { contrariansTraits } from "@/mocks/contrariansTraits";
import Image from "@/components/Image";
import React from "react";
import GradientText from "@/components/GradientText";
import { notificationsAll } from "@/mocks/notifications";
import {useColorMode} from "@chakra-ui/color-mode";

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

const ContrarianContent = ({ data }: ContrarianContentProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightMode = colorMode === "light";
    if (!data || Object.keys(data).length === 0) {
        return (
            <div className="flex items-center justify-center py-20 h-full text-3xl text-gray-300">
                No information
            </div>
        );
    }

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
        <div className="flex sm:flex-col-reverse flex-row lg:space-x-2 lg:space-y-0 space-y-3 py-20">
            {/* Text Content */}
            <div className="flex-1 w-1/2 py-20 xl:px-0 px-10 ml-40 xl:ml-20 lg:ml-5 md:ml-0 sm:w-full sm:items-center md:py-20 sm:py-0 mt-5 md:space-y-6">
                {traits.map((item) => (
                    <div key={item.Trait}>
                        <GradientText text={item?.Description} isLightMode={isLightMode} />
                    </div>
                ))}
            </div>

            {/* Image Content */}
            <div className="flex-shrink-0 w-1/2 px-10 sm:w-full md:py-10 sm:py-0 sm:mt-10 mt-5 flex flex-col items-center justify-end sm:items-center">
                <Image
                    className="max-w-full opacity-100 rounded-[1.5rem] object-cover"
                    src={`https://ipfs-wrapper.dagora.xyz/ipfs/${imageId}?width=500&height=500`}
                    width={420}
                    height={420}
                    alt=""
                />
                <div className="text-2xl text-center font-bold bg-opacity-70 p-2 rounded-md">
                    {name}
                </div>
            </div>
        </div>
    );
};

export default ContrarianContent;
