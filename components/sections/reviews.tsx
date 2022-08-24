import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../shared/section-heading";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

type ReviewsData = {
	id: number;
	profile_pic: string;
	name: string;
	caption?: string;
	review: string;
};

const reviewsData: ReviewsData[] = [
	{
		id: 1,
		profile_pic: "/assets/review-profile-1.jpg",
		name: "תמיר לוי · יוצר תוכן",
		caption: "73K רשומים",
		review: "התחלתי לעבוד עם יהונתן קבוע לפני חודשיים.. מדובר בתותח אמיתי קשוב ומקצועי ממליץ עליו בחום עזר לי לעלות את רמת הערוץ שלי עם העיצובים שלו!",
	},
	{
		id: 2,
		profile_pic: "/assets/review-profile-2.jpg",
		name: "Ruizu · מנהל קהילה",
		caption: "200 אלף איש",
		review: "יהונתן מעצב מאוד רציני ומקצועי העומד באחריות שלו, קיבלת מטלות לעיצובים של קהילה בגודל 200 אלף איש וביצע אותם כמו שצריך על הצד הטוב ביותר.",
	},
	{
		id: 3,
		profile_pic: "/assets/review-profile-3.jpg",
		name: "שובל דהאן · אדריכלית",
		review: "התוצאה הייתה בדיוק מה שרציתי וגם יהונתן היה שירותי ומקצועי בטירוף, הקשבת לכל הרצונות שלי בסבלנות אין סופית	תודה על הכל ובטוחה שניפגש בהמשך🙏",
	},
];

const ReviewsSlider = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.1, y: { duration: 0.5 } }}
			viewport={{ once: true }}
		>
			<Box py="20px" mb={{ base: "65px", md: "90px" }}>
				<SectionHeading mb={{ base: "36px", md: "64px" }}>ביקורות</SectionHeading>

				<Box
					sx={{
						".flickity-button": {
							top: "calc(50% + 35px)",
							"&.next": { right: "45px" },
							"&.previous": { left: "45px" },
							bg: "none",
							svg: { fill: "darkBg.50", w: "50%", h: "50%" },
							"&[disabled] svg": { fill: "89898963" },
						},
					}}
				>
					<Carousel controls={false} interval={2000}>
						{reviewsData?.map(({ id, name, profile_pic, caption, review }: ReviewsData) => (
							<Carousel.Item key={id}>
								<Box key={id} sx={{ w: "100%", pt: "72.5px" }}>
									<Box
										sx={{
											minH: "363px",
											bgColor: "darkBg.100",
											borderRadius: "16px",
											pb: "73px",
											px: "16px",
											textAlign: "center",
										}}
									>
										<Box
											sx={{
												position: "relative",
												top: "-72.5px",
												w: "145px",
												h: "145px",
												mx: "auto",
												mb: "7px",
												borderRadius: "50%",
												overflow: "hidden",
											}}
										>
											<Image src={profile_pic} alt="name" layout="fill" />
										</Box>
										<SectionHeading as="h3" mt="-72.5px" mb="7px" letterSpacing="initial">
											{name}
										</SectionHeading>
										<Text fontSize="16px" fontWeight={500} color="darkBg.50" mb="26px">
											{caption}
										</Text>
										<Text
											maxW="626px"
											fontSize={{ base: "20px", md: "24px" }}
											lineHeight="42px"
											mx="auto"
											textAlign="right"
										>
											{review}
										</Text>
									</Box>
								</Box>
							</Carousel.Item>
						))}
					</Carousel>
				</Box>
			</Box>
		</motion.div>
	);
};

export default ReviewsSlider;
