// components/ImageGallery.tsx

import React from 'react';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    if (images.length !== 24) {
        throw new Error('You must provide exactly 10 images.');
    }

    const firstRow = images.slice(0, 12);
    const secondRow = images.slice(12, 24);

    return (
        <div className=" overflow-hidden">
            {/* First row: left to right with continuous scroll */}
            <div className="flex animate-scroll-left">
                {firstRow.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index}`} className="image object-cover" />
                ))}
                {/* Duplicate images to ensure continuous scrolling effect */}
                {firstRow.map((src, index) => (
                    <img key={`dup-${index}`} src={src} alt={`Image ${index}`} className="image object-cover" />
                ))}
            </div>

            {/* Second row: right to left with continuous scroll */}
            <div className="flex flex-row-reverse animate-scroll-right">
                {secondRow.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 12}`} className="image object-cover" />
                ))}
                {/* Duplicate images to ensure continuous scrolling effect */}
                {secondRow.map((src, index) => (
                    <img key={`dup-${index}`} src={src} alt={`Image ${index + 24}`} className="image object-cover" />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
