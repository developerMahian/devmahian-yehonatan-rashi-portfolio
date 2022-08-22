import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "../styles/chakra-theme";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={ChakraTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
