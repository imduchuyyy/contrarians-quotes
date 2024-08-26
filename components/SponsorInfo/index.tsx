import { useColorMode } from "@chakra-ui/react";

const SponsorInformation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  return (
    <div className="mt-4 fixed sm:static w-full bottom-0 left-0">
      <div>
        <div className="text-base-1s sm:w-full text-center">
          Built By{" "}
          <a
            href="https://x.com/imduchuyyy"
            target="_blank"
            className={`${
              isLightMode ? "text-red-600" : "text-red-200"
            } italic`}
          >
            @imduchuyyy
          </a>
        </div>
        <div className="text-base-1s mb-4 sm:w-full text-center">
          By me a coffee:{" "}
          <a
            href="https://etherscan.io/address/imduchuyyy.eth"
            target="_blank"
            className={`${
              isLightMode ? "text-red-600" : "text-red-200"
            } italic`}
          >
            imduchuyyy.eth
          </a>
          {" | "}
          <a
            href="https://vicscan.xyz/address/imduchuyyy.c98"
            target="_blank"
            className={`${
              isLightMode ? "text-red-600" : "text-red-200"
            } italic`}
          >
            imduchuyyy.c98
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorInformation;
