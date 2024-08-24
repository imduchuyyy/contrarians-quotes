// components/GradientText.tsx
const GradientText = ({ text }: { text: string }) => {
    return (
        <h1 className="text-2xl lg:text-xl sm:text-title-1s mb-5 font-medium bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
            {text}
        </h1>
    );
};

export default GradientText;
