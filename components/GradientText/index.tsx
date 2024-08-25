// components/GradientText.tsx
interface GradientTextProps {
    text: string | null;
    isLightMode: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ text, isLightMode }) => {
    return (
        isLightMode ? <h1 className="mb-5 text-2xl lg:text-xl sm:text-title-1s font-bold md:font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 animate-gradient-text bg-200%">
            - {text}
        </h1> :
        <h1 className="mb-5 text-2xl lg:text-xl sm:text-title-1s font-bold md:font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-300 to-red-500 animate-gradient-text bg-200%">
            - {text}
        </h1>
    );
};

export default GradientText;
