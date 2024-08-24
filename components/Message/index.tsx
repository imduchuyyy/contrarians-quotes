// components/Message.tsx
import { ChangeEventHandler, KeyboardEvent } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import TextareaAutosize from "react-textarea-autosize";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

interface MessageProps {
    className?: string;
    value: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    logo?: boolean;
    autoFocus?: boolean;
    onAction?: () => void;
}

const Message: React.FC<MessageProps> = ({
                                             className = "",
                                             value,
                                             onChange,
                                             placeholder = "Enter ID Here",
                                             logo,
                                             autoFocus,
                                             onAction
                                         }) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default Enter key behavior (like adding a new line)
            onAction?.(); // Call onAction if it's provided
        }
    };

    return (
        <div
            className={`flex items-center p-1 pl-4 min-h-[3rem] bg-theme-n-8 rounded-3xl transition-all hover:shadow-[inset_0_0_0_0.0625rem_#EFEFEF] hover:bg-theme-on-surface-1 dark:hover:shadow-[inset_0_0_0_0.0625rem_#272B30] md:pl-3 ${
                value !== 0
                    ? "!shadow-[inset_0_0_0_0.0625rem_#0C68E9] !bg-theme-on-surface-1"
                    : ""
            } ${className}`}
        >
            {logo && (
                <div className="shrink-0 mr-4 md:mr-3">
                    <Image
                        className="w-6 opacity-100"
                        src={
                            isDarkMode
                                ? "/images/message-logo-light.svg"
                                : "/images/message-logo-dark.svg"
                        }
                        width={24}
                        height={24}
                        alt="Message Logo"
                    />
                </div>
            )}
            <TextareaAutosize
                className="w-full py-2 bg-transparent text-body-1m text-theme-primary outline-none resize-none placeholder:text-theme-tertiary md:text-[1rem]"
                maxRows={5}
                autoFocus={autoFocus}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
            />
            <button
                className="shrink-0 w-10 h-10 ml-6 rounded-full bg-theme-brand transition-colors hover:bg-primary-1/90 md:ml-3"
                onClick={onAction}
                aria-label="Send"
            >
                <Icon className="fill-theme-white-fixed" name="arrow-right" />
            </button>
        </div>
    );
};

export default Message;
