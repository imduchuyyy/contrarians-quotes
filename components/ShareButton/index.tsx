// components/ShareButton.tsx
import React from 'react';
import Image from "@/components/Image";
import { toPng } from 'html-to-image';
import Icon from '../Icon';

const ShareButton = ({ traits, contrarianId } : any) => {
    const filter = (node: HTMLElement) => {
        const exclusionClasses = ['share-button'];
        return !exclusionClasses.some((classname) => node.classList?.contains(classname));
    }

    const shareContent = () => {
        // const text = encodeURIComponent(`My Contrarian types!\n - ${traits[0].Description}\n - ${traits[1].Description}\n - ${traits[2].Description}\n Try it out yourself at ${window.location.origin}!
        // `);
        // const url = encodeURIComponent(`https://dagora.xyz/detail/viction/0x09201E7A42f548Dc56D7e61d8De3A3EDf2AaBAc5/${contrarianId}`);
        // const hashtags = encodeURIComponent("contrarians,quotes");
        // const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
        // window.open(shareUrl, '_blank');
        const node = document.getElementById('contrarian-page');
        if (!node) {
            return;
        }
        toPng(node, { cacheBust: true, filter: filter})
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-contrarian-type.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <button
            onClick={shareContent}
            className={`px-4 flex py-2 font-semibold rounded-lg bg-theme-luxury-brand transition-colors share-button`}
        >
            <div className="text-xl font-medium ml-2 mt-1">
                <Icon name="copy"/>{" "}
                Download Image
            </div>
        </button>
    );
};

export default ShareButton;
