import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "../styles/chakra-theme";
import "../styles/global.css";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
    <ChakraProvider theme={ChakraTheme}>
      <Component {...pageProps} />
      <Toaster />
    </ChakraProvider>
  );
};

export default MyApp;
