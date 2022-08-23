import { extendTheme } from "@chakra-ui/react";

const ChakraTheme = extendTheme({
	styles: {
		global: {
			"*": { fontFamily: "inherit", fontSize: "inherit" },
			body: {
				textAlign: "right",
				fontFamily: "IBM Plex Sans Hebrew, Arial, sans-serif",
				color: "white",
				bg: "darkBg.400",
				fontSize: "16px",
				lineHeight: "20.8px",
				overflowX: "hidden",
			},
			img: { objectFit: "cover" },
			"a:hover": { color: "white" },
		},
	},
	breakpoints: { lg: "65.75em", "2xl": "92em" },
	colors: {
		primary: "#005FF9",
		darkBg: { 50: "#898989", 100: "#272727", 200: "#1D1D1D", 300: "#191919", 400: "#111" },
	},
	components: {
		Button: { baseStyle: { borderRadius: "8px", "&:hover": { transform: "translateY(-1px) scale(1.01)" } } },
		Heading: { baseStyle: { fontFamily: "inherit" } },
	},
});

export default ChakraTheme;
