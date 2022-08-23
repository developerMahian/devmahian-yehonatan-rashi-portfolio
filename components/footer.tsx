import NextLink from "next/link";
import { ReactElement } from "react";
import { Box, Button, Container, Flex, IconButton, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import ContainerBreakpoints from "../styles/container-breakpoints";
import { AtEmailIcon, BehanceIcon, CameraIcon, RashiLogo, Youtube } from "./svg-assets";

const Footer = () => {
	return (
		<Box
			as="footer"
			bg="linear-gradient(72.49deg, #005FF9 34.07%, #31A8FF 124.06%)"
			sx={{
				position: "relative",
				"&::before": {
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					w: 0,
					h: 0,
					borderTop: { base: "134px solid #111", lg: "100px solid #111" },
					borderRight: "calc(100vw - 0px) solid transparent",
				},
			}}
		>
			<Container {...ContainerBreakpoints} pt="120px">
				<Flex
					maxW={{ base: "400px", lg: "none" }}
					mx="auto"
					flexDir={{ base: "column", lg: "row" }}
					alignItems="flex-end"
					justifyContent="space-between"
					gap={{ base: "100px", sm: "160px", lg: "10px" }}
					fontSize={{ base: "20px", sm: "24px", lg: "20px", "2xl": "24px" }}
					fontWeight={500}
					py={{ base: "30px", md: "55px" }}
					mb={{ base: "40px", sm: "10px" }}
					borderBottom={{ lg: "3px solid white" }}
				>
					<Box display={{ base: "none", lg: "block" }}>
						<ListHeading>תיק עבודות</ListHeading>
						<UnorderedList listStyleType="none" spacing={{ base: "24px", "2xl": "40px" }}>
							<FooterLink url="#" notExternal>
								מיתוג
							</FooterLink>
							<FooterLink url="#" notExternal>
								מדיה חברתית
							</FooterLink>
							<FooterLink url="#" notExternal>
								טאמבניילים
							</FooterLink>
						</UnorderedList>
					</Box>
					<Box>
						<ListHeading borderB>איפה אני נמצא?</ListHeading>
						<UnorderedList listStyleType="none" spacing={{ base: "24px", "2xl": "40px" }}>
							<FooterLink
								url="https://www.instagram.com/rashi.designss/"
								icon={<CameraIcon />}
								extraSvgCss={{ w: { base: "18px", "2xl": "22px" } }}
							>
								Instagram
							</FooterLink>
							<FooterLink url="http://be.net/RashiDesignn" icon={<BehanceIcon />}>
								Behance
							</FooterLink>
							<FooterLink url="#" icon={<AtEmailIcon />}>
								jonathanrashi100@gmail.com
							</FooterLink>
							<FooterLink
								url="https://www.youtube.com/channel/UCE2tW8rUgAH7KlCyMQe9LaA"
								icon={<Youtube />}
							>
								YouTube
							</FooterLink>
						</UnorderedList>
					</Box>
					<Box>
						<ListHeading MobileBorderB>תפריט</ListHeading>
						<ListHeading>דף הבית</ListHeading>
						<UnorderedList listStyleType="none" spacing={{ base: "24px", "2xl": "40px" }}>
							<FooterLink url="#" notExternal>
								תיק עבודות
							</FooterLink>
							<FooterLink url="#" notExternal>
								אודות
							</FooterLink>
							<FooterLink url="#" notExternal>
								לקוחות אומרים
							</FooterLink>
							<FooterLink url="#" notExternal>
								יצירת קשר
							</FooterLink>
						</UnorderedList>
					</Box>
					<Flex flexDir="column" alignSelf="flex-start" display={{ base: "none", lg: "block" }}>
						<Button
							variant="outline"
							rightIcon={<RashiLogo />}
							h="auto"
							gap="16px"
							p={{ base: "14px 18px 14px 36px", md: "16px 27px 16px 44px" }}
							_hover={{ bgColor: "initial" }}
						>
							Rashi.co
						</Button>

						<Flex
							justifyContent="flex-end"
							mt="38px"
							sx={{
								a: {
									px: { base: "14px", sm: "18px" },
									bgColor: "transparent",
									svg: { fill: "white", w: "28px", h: "28px", transitionDuration: "0.25s" },
									"&:hover": { bgColor: "transparent", svg: { transform: "scale(1.1)" } },
								},
							}}
						>
							<IconButton
								as={Link}
								isExternal
								href="https://www.youtube.com/channel/UCE2tW8rUgAH7KlCyMQe9LaA"
								aria-label="View me on Youtube"
								icon={<Youtube />}
							/>
							<IconButton
								as={Link}
								isExternal
								href="http://be.net/RashiDesignn"
								aria-label="View me on Youtube"
								icon={<BehanceIcon />}
							/>
							<IconButton
								as={Link}
								isExternal
								href="https://www.instagram.com/rashi.designss/"
								aria-label="View me on Youtube"
								icon={<CameraIcon />}
							/>
						</Flex>
					</Flex>
				</Flex>

				<Text fontSize="15px" fontWeight={500} textAlign="center" py={{ base: "22px", sm: "31px" }}>
					כל הזכויות מותנות יהונתן עיצוב גרפי 2022™
				</Text>
			</Container>
		</Box>
	);
};

const ListHeading = (props: { children: string; borderB?: boolean; MobileBorderB?: boolean }) => {
	const { children, borderB, MobileBorderB } = props;

	return (
		<Text
			as="h4"
			fontSize={{ base: "inherit", lg: "22px", "2xl": "26px" }}
			fontWeight={700}
			mb={borderB || MobileBorderB ? { base: "35px", "2xl": "48px" } : { base: "26px", "2xl": "44px" }}
			sx={
				borderB || MobileBorderB
					? {
							position: "relative",
							"&::before": {
								content: MobileBorderB ? { base: "''", lg: "none" } : "''",
								position: "absolute",
								bottom: { base: "-18px", "2xl": "-25px" },
								right: 0,
								width: { base: "228px", lg: "120px" },
								height: { base: "3px", "2xl": "4px" },
								bgColor: "white",
								borderRadius: "2px",
							},
					  }
					: {}
			}
		>
			{children}
		</Text>
	);
};

const FooterLink = (props: {
	children: string;
	url: string;
	icon?: ReactElement;
	extraSvgCss?: object;
	notExternal?: boolean;
}) => (
	<ListItem>
		<NextLink href={props.url} passHref>
			<Link
				isExternal={!props.notExternal}
				sx={{
					display: props.icon ? "flex" : "block",
					alignItems: "center",
					justifyContent: "flex-end",
					gap: { base: "8px", "2xl": "10px" },
					svg: { w: { base: "22px", "2xl": "28px" }, fill: "white", ...props.extraSvgCss },
				}}
				_hover={{ textDecor: "none" }}
			>
				<Box as="span" display={{ base: "none", lg: "block" }}>
					{props.icon}
				</Box>

				{props.children}

				<Box as="span" display={{ base: "block", lg: "none" }}>
					{props.icon}
				</Box>
			</Link>
		</NextLink>
	</ListItem>
);

export default Footer;
