import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface IReview {
  reviewerTitle: string;
  reviewerSubTitle: string;
  logoUrl: string;
  reviewBody: string;
}

const Reviews = () => {
  const reviews: IReview[] = [
    {
      reviewerTitle: "תמיר לוי · יוצר תוכן",
      logoUrl:
        "https://yt3.ggpht.com/ytc/AMLnZu_Pwwk8HD6horC-68LwOTG5LHgqj2bNCSqZz25_Rg=s88-c-k-c0x00ffffff-no-rj",
      reviewBody:
        "התחלתי לעבוד עם יהונתן קבוע לפני חודשיים.. מדובר בתותח אמיתי קשוב ומקצועי ממליץ עליו בחום עזר לי לעלות את רמת הערוץ שלי עם העיצובים שלו!",
      reviewerSubTitle: "73K רשומים",
    },
  ];
  const x = reviews.map((review) => (
    <Carousel.Item key={review.reviewerTitle}>
      <div className="flex items-center flex-col rounded-lg overflow-hidden bg-zinc-700 p-8">
        <span className="text-base text-white font-bold">
          {review.reviewerTitle}
        </span>
        <span
          className="text-xs text-zinc-400 font-medium"
          style={{ color: "#898989" }}
        >
          {review.reviewerSubTitle}
        </span>
        <p className="text-white p-3">{review.reviewBody}</p>
      </div>
    </Carousel.Item>
  ));

  return <Carousel controls={false}>{[...x, ...x, ...x]}</Carousel>;
};

export default Reviews;
