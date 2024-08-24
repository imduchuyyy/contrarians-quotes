// pages/index.tsx

import ImageGallery from '@/components/ImageGallery';

const Gallery: React.FC = () => {
    // Replace these with your actual image URLs
    const images = [
        '/images/contrarian_1.png',
        '/images/contrarian_2.png',
        '/images/contrarian_3.png',
        '/images/contrarian_4.png',
        '/images/contrarian_5.png',
        '/images/contrarian_6.png',
        '/images/contrarian_7.png',
        '/images/contrarian_8.png',
        '/images/contrarian_9.png',
        '/images/contrarian_10.png',
        '/images/contrarian_1.png',
        '/images/contrarian_2.png',
        '/images/contrarian_3.png',
        '/images/contrarian_4.png',
        '/images/contrarian_5.png',
        '/images/contrarian_6.png',
        '/images/contrarian_7.png',
        '/images/contrarian_8.png',
        '/images/contrarian_9.png',
        '/images/contrarian_10.png',
        '/images/contrarian_3.png',
        '/images/contrarian_6.png',
        '/images/contrarian_10.png',
        '/images/contrarian_4.png',
    ];

    return (
        <div className="container p-4">
            <ImageGallery images={images} />
        </div>
    );
};

export default Gallery;
