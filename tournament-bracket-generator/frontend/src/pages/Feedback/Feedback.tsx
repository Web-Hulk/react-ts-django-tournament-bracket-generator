import { useState } from "react";
import { postData } from "../../api/axios";
import "./Feedback.scss";

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
    postData("feedback/", {
      rate: rateNumber,
      comment,
    }).then((response) => {
      console.log(response);
    });

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
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={`Rate - ${value}`}
                onClick={() => handleRateButton(value)}
                className={`button ${value === rateNumber ? "active" : ""}`}
              >
                {value}
              </button>
            ))}
          </div>

          <textarea name="comment" value={comment} onChange={handleComment} />
          {/* I want to make it custom, similar to Twitter! */}
          <span>{numberOfWordsInTextarea}/500</span>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!rateNumber || !comment || numberOfWordsInTextarea > 500}
          >
            Submit
          </button>

          {numberOfWordsInTextarea > 500 ? (
            <p>Too many letters: {numberOfWordsInTextarea - 500}</p>
          ) : null}
        </>
      )}
    </div>
  );
};
