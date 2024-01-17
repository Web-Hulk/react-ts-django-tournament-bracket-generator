import { useState } from "react";

export const Feedback = () => {
  const [rateNumber, setRateNumber] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [numberOfWordsInTextarea, setIsNumberOfWordsInTextarea] =
    useState<number>(0);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] =
    useState<boolean>(false);

  const handleRateButton = (value: number) => {
    setRateNumber(value);
  };

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setComment(value);
    setIsNumberOfWordsInTextarea(value.length);
  };

  const handleSubmit = () => {
    setIsFeedbackSubmitted(true);
  };

  return (
    <div>
      {isFeedbackSubmitted ? (
        <div>
          <p>You selected {rateNumber} out 5</p>
          <p>Thanks for your feedback!</p>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch.
          </p>
        </div>
      ) : (
        <>
          <h1>Please, tell us how much you like the application!</h1>

          <div>
            <button onClick={() => handleRateButton(1)}>1</button>
            <button onClick={() => handleRateButton(2)}>2</button>
            <button onClick={() => handleRateButton(3)}>3</button>
            <button onClick={() => handleRateButton(4)}>4</button>
            <button onClick={() => handleRateButton(5)}>5</button>
          </div>

          <textarea name="comment" value={comment} onChange={handleComment} />
          {/* Add counter to inform user that maximum amount of words is e.g., 500 - I want to make it custom, similar to Twitter */}
          <span>{numberOfWordsInTextarea}/500</span>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!rateNumber || !comment}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};
