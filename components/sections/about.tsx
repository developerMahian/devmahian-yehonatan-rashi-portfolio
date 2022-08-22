import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AboutImg, AboutImgMobile } from "../svg-assets";
import ReviewsSlider from "./reviews";

const AboutSection = () => (
	<Box as="section" id="about" py="20px" mt={{ base: "220px", sm: "350px", md: "420px", lg: 0 }}>
		<Flex
			flexDir={{ base: "column", lg: "row" }}
			alignItems={{ base: "center", "2xl": "flex-end" }}
			justifyContent="space-between"
			gap={{ base: "40px", lg: "20px" }}
			bgColor="darkBg.100"
			borderRadius="16px"
			pt={{ lg: "30px", "2xl": "50px" }}
			mb={{ base: "100px", md: "180px" }}
		>
			<Box
				w={{ base: "100%", lg: "auto" }}
				minW={{ base: "auto", lg: "540px", xl: "650px", "2xl": "763px" }}
				maxW={{ md: "721px", lg: "none" }}
				ml={{ lg: "-6%" }}
				mb={{ "2xl": "-1px" }}
				mt={{ base: "-110px", sm: "-170px", md: "-260px", lg: "0" }}
			>
				<Box display={{ base: "none", lg: "block" }}>
					<AboutImg />
				</Box>
				<Box display={{ base: "block", lg: "none" }}>
					<AboutImgMobile />
				</Box>
			</Box>
			<Box
				pl={{ base: "24px", sm: "57px", lg: "0" }}
				pr={{ base: "24px", sm: "57px", xl: "150px" }}
				pb={{ base: "30px", sm: "50px", md: "90px", lg: "62px" }}
			>
				<Heading
					fontSize={{ base: "22px", sm: "26px", lg: "48px" }}
					fontWeight={700}
					letterSpacing={{ base: "0.735em", lg: "initial" }}
					lineHeight={{ base: "31px", lg: "62px" }}
					mb={{ base: "24px", xl: "36px" }}
				>
					אודות
				</Heading>
				<Text
					maxW="840px"
					fontSize={{ sm: "18px", md: "24px" }}
					lineHeight="31px"
					mb={{ lg: "40px", xl: "60px" }}
				>
					שלום, אני יהונתן, ומזה 3 שנים אני עוסק בעיצוב גרפי ומיתוג ברשתות החברתיות. כאן תוכלו למצוא מענה לכל
					האתגרים העיצוביים שלכם, ולשפר את הנראות של העסק שלכם.
				</Text>
				<Button
					display={{ base: "none", lg: "inline" }}
					variant="unstyled"
					bg="primary"
					h="auto"
					p={{ base: "20px 44px", lg: "20px 68px" }}
				>
					צור קשר
				</Button>
			</Box>
		</Flex>

		<ReviewsSlider />
	</Box>
);

export default AboutSection;
