import { Heading, HeadingProps } from "@chakra-ui/react";

const SectionHeading = ({ children, ...props }: HeadingProps) => (
	<Heading
		fontSize={{ base: "20px", sm: "24px" }}
		fontWeight={700}
		textAlign="center"
		lineHeight="32px"
		letterSpacing={{ base: "0.5em", sm: "0.735em" }}
		{...props}
	>
		{" "}
		{/* destructure props in the end for overriding */}
		{children}
	</Heading>
);

export default SectionHeading;
