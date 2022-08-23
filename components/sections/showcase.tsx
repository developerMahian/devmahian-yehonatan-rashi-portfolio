/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import SectionHeading from "../shared/section-heading";
import { AiPsImage } from "../svg-assets";

const ShowcaseSection = () => {
	const ImgWrapperStyle = {
		position: "relative",
		borderRadius: "8px",
		overflow: "hidden",
		cursor: "pointer",
		img: { w: "100%", h: "100%", transitionDuration: "0.35s" },
		"&:hover": { img: { transform: "scale(1.065)" } },
	};

	const ImgBottomOverLay = (props: { text: string }) => (
		<Box
			position="absolute"
			left="0"
			right="0"
			bottom="0"
			pb="13px"
			bgColor="rgba(0, 0, 0, 0.5)"
			boxShadow="0 -20px 50px 40px rgba(0, 0, 0, 0.5)"
		>
			<Text
				sx={{
					fontSize: "16px",
					fontWeight: "600",
					textAlign: "center",
					lineHeight: "21px",
				}}
			>
				{props.text}
			</Text>
		</Box>
	);

	return (
		<Box
			as="section"
			id="showcase"
			py="20px"
			mt={{ sm: "100px", md: "210px", lg: "0" /* 0 because 'mb' of upper section does the job */ }}
			mb={{ base: "100px", md: "210px" }}
		>
			<SectionHeading
				display={{ base: "none", lg: "block" }}
				fontWeight={500}
				mb={{ base: "32px", lg: "84px", xl: "52px" }}
			>
				תיק עבודות
			</SectionHeading>

			<Flex
				flexDir={{ base: "column-reverse", lg: "row" }}
				alignItems="stretch"
				justifyContent="space-between"
				gap="35px"
			>
				<Flex flex={0.545} gap={{ base: "16px", sm: "26px", md: "32px" }}>
					<NextLink href="/branding" passHref>
						<Box as="a" w="55%" sx={ImgWrapperStyle}>
							<img src="/assets/showcase-1.png" alt="" />
							<ImgBottomOverLay text="מיתוג" />
						</Box>
					</NextLink>
					<Flex w="45%" flexDir="column" gap={{ base: "14px", sm: "18px", md: "22px" }}>
						<NextLink href="/branding" passHref>
							<Box as="a" h="65%" sx={ImgWrapperStyle}>
								<img src="/assets/showcase-2.png" alt="" />
								<ImgBottomOverLay text="מדיה חברתית" />
							</Box>
						</NextLink>
						<NextLink href="/branding" passHref>
							<Box as="a" h="35%" sx={ImgWrapperStyle}>
								<img src="/assets/showcase-3.png" alt="" />
								<ImgBottomOverLay text="טאמבניילים" />
							</Box>
						</NextLink>
					</Flex>
				</Flex>

				<SectionHeading
					display={{ base: "block", lg: "none" }}
					fontWeight={500}
					my={{ base: "24px", sm: "45px" }}
				>
					תיק עבודות
				</SectionHeading>

				<Box flex={0.465} w="770px" maxW={{ base: "85vw", sm: "450px", lg: "none" }} mx="auto">
					<AiPsImage />
				</Box>
			</Flex>
		</Box>
	);
};

export default ShowcaseSection;
