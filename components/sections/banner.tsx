import { Box, Button, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { BannerImg, BannerMobileImg, BannerText, CameraIcon, Youtube } from "../svg-assets";

const BannerSection = () => (
	<Box as="section" id="home" pb="20px" mb={{ base: "70px", lg: "100px" }}>
		<Flex alignItems="center" justifyContent={{ base: "center", lg: "space-between" }} gap="120px">
			{/* left side gradient text to show on large screen */}
			<Box w="725px" display={{ base: "none", lg: "block" }}>
				<BannerImg />
			</Box>

			<Box>
				{/* right side gradient text to show on large screen */}
				<Box
					display={{ base: "none", lg: "block" }}
					sx={{ svg: { w: { base: "320px", xl: "430px" }, ml: "auto", mb: "40px" } }}
				>
					<BannerText />
					<Text
						maxW="550px"
						fontSize={{ base: "20px", xl: "24px" }}
						fontWeight={500}
						lineHeight="32px"
						mb="44px"
					>
						מעצב למעלה מ3 שנים אני אעזור לך במה שצריך על מנת להוציא את העיצוב הטוב ביותר!
					</Text>
				</Box>

				{/* illustration banner image for screens less than 1053px */}
				<Box
					display={{ base: "block", lg: "none" }}
					w="663px"
					maxW={{ base: "85vw", md: "655px", lg: "none" }}
					mx="auto"
					mb="20px"
				>
					<BannerMobileImg />
				</Box>

				<Flex
					alignItems="center"
					justifyContent={{ base: "center", lg: "flex-end" }}
					gap={{ base: "16px", sm: "22px", md: "36px" }}
					// styling for the first two icon buttons...
					sx={{
						a: {
							h: { base: "54px", sm: "60px" },
							"&:not(:last-child)": {
								display: { lg: "none" },
								px: { base: "14px", sm: "18px" },
								bg: "darkBg.200",
								svg: { transitionDuration: "0.25s" },
								"&:hover": { svg: { transform: "scale(1.1)" } },
							},
						},
					}}
				>
					<IconButton
						as={Link}
						isExternal
						href="https://www.instagram.com/rashi.designss/"
						aria-label="Connect on Instagram"
						icon={<CameraIcon />}
					/>
					<IconButton
						as={Link}
						isExternal
						href="https://www.youtube.com/channel/UCE2tW8rUgAH7KlCyMQe9LaA"
						aria-label="View me on Youtube"
						icon={<Youtube />}
					/>
					<Button
						as="a"
						href="#contact"
						variant="unstyled"
						bg="primary"
						h="auto"
						p={{ base: "16px 28px", sm: "20px 44px", lg: "20px 68px" }}
						_hover={{ color: "white" }}
					>
						צור קשר
					</Button>
				</Flex>
			</Box>
		</Flex>
	</Box>
);

export default BannerSection;
