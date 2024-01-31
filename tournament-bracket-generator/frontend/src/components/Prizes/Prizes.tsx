// It is worth to make a cool design to display prizes (Triangle, like 3rd, 1st, 2nd)
export const Prizes = () => {
  return (
    <div>
      <h1>Prizes</h1>
      <p>
        The total prize pool for this tournament is 600 Worksmile points, which
        will be distributed among the top three players. Here's how the points
        will be awarded:
      </p>
      <ul>
        <li>
          <strong>
            1<sup>st</sup> Place:
          </strong>{" "}
          The champion of the tournament will receive 300 points. (Image of a
          gold medal)
        </li>
        <li>
          <strong>
            2<sup>nd</sup> Place:
          </strong>{" "}
          The runner-up will receive 200 points. (Image of a silver medal)
        </li>
        <li>
          <strong>
            3<sup>rd</sup> Place:
          </strong>{" "}
          The player who secures the third place will receive 100 points. (Image
          of a bronze medal)
        </li>
      </ul>
      <p>
        Stay tuned for more details on the exact distribution of points. Good
        luck to all participants!
      </p>
    </div>
  );
};
