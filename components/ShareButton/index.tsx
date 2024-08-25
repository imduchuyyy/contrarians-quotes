// components/ShareButton.tsx
import React from 'react';
import Icon from "@/components/Icon";
import Image from "@/components/Image";

const ShareButton = () => {
    const shareContent = () => {
        const text = encodeURIComponent("My Contrarian types!");
        const url = encodeURIComponent(window.location.href);
        const hashtags = encodeURIComponent("contract,quotes");
        const via = "https://dagora.xyz/collection/viction/0x09201E7A42f548Dc56D7e61d8De3A3EDf2AaBAc5"

        const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;

        window.open(shareUrl, '_blank');
    };

    return (
        <button
            onClick={shareContent}
            className="px-4 flex py-2 font-semibold text-white rounded-lg hover:bg-theme-luxury-brand transition-colors"
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
