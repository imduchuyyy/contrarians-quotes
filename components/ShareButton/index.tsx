// components/ShareButton.tsx
import React from 'react';
import Image from "@/components/Image";
import { toPng } from 'html-to-image';

const ShareButton = ({ traits, contrarianId } : any) => {
    const filter = (node: HTMLElement) => {
        const exclusionClasses = ['share-button'];
        return !exclusionClasses.some((classname) => node.classList?.contains(classname));
    }

    const shareContent = () => {
        const text = encodeURIComponent(`My Contrarian characteristics are:\n - ${traits[0].Description}\n - ${traits[1].Description}\n - ${traits[2].Description}\n What about you? ${window.location.origin}!`);
        // const url = encodeURIComponent(window.location.origin);
        const hashtags = encodeURIComponent("contrarians,quotes");
        const shareUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}`;
        window.open(shareUrl, '_blank');
    };

    const downloadImage = () => {
        const node = document.getElementById('contrarian-page');
        console.log(node?.getHTML())
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
    }


    return (
        <div className='share-button flex items-center gap-2'>
            <button
                onClick={shareContent}
                className={`px-4 flex py-2 font-semibold rounded-lg bg-theme-luxury-brand transition-colors min-h-2`}
            >
                <div className="flex items-center text-xl font-medium">
                    Share on X
                </div>
            </button>
            <button
                onClick={downloadImage}
                className={`px-4 flex py-2 font-semibold rounded-lg bg-theme-luxury-brand transition-colors min-h-2`}
            >
                <div className="flex items-center text-xl font-medium">
                    Download
                </div>
            </button>
        </div>
    );
};

export default ShareButton;
