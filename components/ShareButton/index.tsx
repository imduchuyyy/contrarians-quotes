// components/ShareButton.tsx
"use client"
import React, { useState } from 'react';
import Image from "@/components/Image";
import { toPng, toBlob } from 'html-to-image';
import { useMediaQuery } from 'react-responsive';
import Modal from "@/components/Modal";

const ShareButton = ({ traits, contrarianId } : any) => {
    const [showImage, setShowImage] = useState(false);
    const [image, setImage] = useState('');
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    console.log(isMobile)

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
        if (!node) {
            return;
        }
        toPng(node, { cacheBust: true, filter: filter})
            .then((dataUrl) => {
                if (!dataUrl) {
                    return
                }
                if (isMobile) {
                    setImage(dataUrl);
                    setShowImage(true);
                } else {
                    const link = document.createElement('a')
                    link.download = 'my-contrarian-type'
                    link.href = dataUrl
                    link.click()
                    link.remove()
                }
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
                <div className="flex items-center text-xl font-medium sm:text-sm">
                    Share on X
                </div>
            </button>
            <button
                onClick={downloadImage}
                className={`px-4 flex py-2 font-semibold rounded-lg bg-theme-luxury-brand transition-colors min-h-2`}
            >
                <div className="flex items-center text-xl font-medium sm:text-sm">
                    Download
                </div>
            </button>
            <Modal
                classWrap="max-w-[40rem] !p-0 rounded-3xl overflow-hidden"
                visible={isMobile && showImage}
                onClose={() => setShowImage(false)}
            >   
                <div className="text-center mt-4 text-base-1s">
                    Tab and hold to Save your Contrarian Type
                </div>
                <div className='rounded-lg'>
                    <img src={image} alt="contrarian-type" />
                </div>
            </Modal>
        </div>
    );
};

export default ShareButton;
