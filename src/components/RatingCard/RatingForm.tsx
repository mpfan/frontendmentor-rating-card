import StarIcon from "../../assets/icon-star.svg";
import { useState } from "react";

interface RatingFormProps {
  handleSubmit: (rating: number) => void;
}

export default function RatingForm(props: RatingFormProps) {
  const [rating, setRating] = useState<number>(0);

  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full my-2 flex flex-row justify-start">
        <img
          src={StarIcon}
          className="rounded-full bg-gray-700 p-2"
          alt="Star icon"
        />
      </div>
      <div className="text-left my-4">
        <h1 className="text-slate-50 font-bold text-4xl my-4">
          How did we do?
        </h1>
        <p className="text-slate-300 my-4">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="my-4 flex flex-row justify-between w-full">
        {ratings.map((rate, index) => {
          if (rate === rating) {
            return (
              <button
                className="rounded-full px-6 py-4 bg-orange-500 text-slate-50 hover:bg-gray-500"
                key={index}
              >
                {rate}
              </button>
            );
          } else {
            return (
              <button
                className="rounded-full px-6 py-4 bg-gray-700 text-slate-400 hover:bg-gray-500 hover:text-slate-50"
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setRating(rate);
                }}
              >
                {rate}
              </button>
            );
          }
        })}
      </div>
      <button
        className="mt-6 rounded-full bg-slate-50 w-full py-2 text-orange-500"
        onClick={(e) => {
          e.preventDefault();
          props.handleSubmit(rating);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
