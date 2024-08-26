// components/ShareButton.tsx
import React from 'react';
import Image from "@/components/Image";
import { useColorMode } from '@chakra-ui/react';

const ShareButton = ({ traits, contrarianId } : any) => {
    const shareContent = () => {
        const text = encodeURIComponent(`My Contrarian types!\n - ${traits[0].Description}\n - ${traits[1].Description}\n - ${traits[2].Description}\n Try it out yourself at ${window.location.origin}!
        `);
        const url = encodeURIComponent(`https://dagora.xyz/detail/viction/0x09201E7A42f548Dc56D7e61d8De3A3EDf2AaBAc5/${contrarianId}`);
        const hashtags = encodeURIComponent("contrarians,quotes");
        const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
        window.open(shareUrl, '_blank');
    };

    return (
        <button
            onClick={shareContent}
            className={`px-4 flex py-2 font-semibold rounded-lg hover:bg-theme-luxury-brand transition-colors`}
        >
            <Image
                className="opacity-100"
                src="/images/x_social.svg"
                width={36}
                height={36}
                alt=""
            />
            <div className="text-xl font-medium ml-2 mt-1">
                Share on X
            </div>
        </button>
    );
};

export default ShareButton;
