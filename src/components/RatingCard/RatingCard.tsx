import { useState } from "react";
import RatingForm from "./RatingForm";
import Summary from "./Summary";

export default function RatingCard() {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="bg-[#1e293b] rounded-3xl p-4 h-[450px] w-96">
      {rating === 0 ? (
        <RatingForm handleSubmit={(rating) => setRating(rating)} />
      ) : (
        <Summary rating={rating} />
      )}
    </div>
  );
}
