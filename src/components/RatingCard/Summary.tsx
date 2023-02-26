import ThankYouLogo from "../../assets/illustration-thank-you.svg";

interface SummaryProps {
  rating: number;
}

export default function Summary(props: SummaryProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={ThankYouLogo} className="my-4" alt="Thank you illustration" />
      <div className="my-4 bg-gray-700 rounded-full text-orange-500 w-fit py-2 px-6">
        You selected {props.rating} out of 5
      </div>
      <div className="text-center my-4">
        <h1 className="text-slate-50 font-bold text-4xl">Thank you!</h1>
        <br />
        <p className="text-slate-300">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
