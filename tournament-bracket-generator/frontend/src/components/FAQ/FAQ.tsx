import { FAQItem } from "./FAQItem/FAQItem";
import { FAQ_DATA } from "./data/FAQ_DATA";

export const FAQ = () => {
  return (
    <div>
      <h3>FAQ</h3>

      {FAQ_DATA.map(({ header, body }) => (
        <FAQItem header={header} body={body} />
      ))}
    </div>
  );
};
