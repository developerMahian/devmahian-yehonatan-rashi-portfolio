import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import ContainerBreakpoints from "../styles/container-breakpoints";
import { AboutIcon, ContactIcon, HomeIcon, ShowcaseIcon } from "./svg-assets";

const linksData = [
	{
		icon: <HomeIcon />,
		url: "home",
	},
	{
		icon: <ShowcaseIcon />,
		url: "showcase",
	},
	{
		icon: <AboutIcon />,
		url: "about",
	},
	{
		icon: <ContactIcon />,
		url: "contact",
	},
];

const Navbar = () => {
	const [navScrolled, setNavScrolled] = useState<boolean>(false);

	useEffect(() => {
		const checkIfScrolled = () => {
			setNavScrolled(window.scrollY > 95);
		};
		checkIfScrolled();

		window.addEventListener("scroll", checkIfScrolled);
		return () => window.removeEventListener("scroll", checkIfScrolled);
	}, []);

	return (
		<Box as="header">
			<Container {...ContainerBreakpoints}>
				<Flex
					as="nav"
					position="fixed"
					top={navScrolled ? "12px" : { base: "28px", md: "43px" }}
					left="50%"
					transform="translateX(-50%)"
					transition="all 0.2s"
					zIndex="10"
					alignItems="center"
					justifyContent="space-around"
					gap={{ base: "34px", sm: "65px", md: "90px", "2xl": "135px" }}
					bg="darkBg.200"
					borderRadius="8px"
					boxShadow="dark-lg"
					py={{ base: "14px", "2xl": "18px" }}
					px={{ base: "26px", sm: "44px", md: "63px" }}
					sx={{
						a: { position: "relative", p: "4px 8px", cursor: "pointer", transitionDuration: "0.2s" },
						"a:hover": { opacity: 0.85 },
						".active svg": { fill: "primary" },
						".active::before": {
							content: "''",
							position: "absolute",
							top: { base: "-21px", "2xl": "-25px" },
							left: "50%",
							transform: "translateX(-50%)",
							boxSize: "12px",
							bgColor: "primary",
							borderRadius: "50%",
						},
					}}
				>
					{linksData?.map(({ icon, url }, i) => (
						<ScrollLink key={i} activeClass="active" smooth spy offset={-300} to={url}>
							{icon}
						</ScrollLink>
					))}
				</Flex>

				<Flex
					justifyContent="flex-end"
					pt={{ base: "28px", md: "43px" }}
					mb={{ base: "100px", sm: "160px", lg: "50px" }}
				>
					<Button
						variant="unstyled"
						display={{ base: "none", lg: "block" }}
						bg="darkBg.200"
						h="auto"
						p={{ base: "17px 42px", "2xl": "20px 68px" }}
						_hover={{ transform: "translateY(-1px) scale(1.035)" }}
					>
						צור קשר
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
