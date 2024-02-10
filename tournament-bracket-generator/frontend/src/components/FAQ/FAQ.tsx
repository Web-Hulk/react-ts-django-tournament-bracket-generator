import { FAQItem } from "./FAQItem/FAQItem";
import { FAQ_DATA } from "./data/FAQ_DATA";
import "./FAQ.scss";

export const FAQ = () => {
  return (
    <div className="faq-container">
      <h3 className="title">FAQ</h3>

      {FAQ_DATA.map(({ header, body, link }, index) => (
        <FAQItem
          key={`Create FAQ Item - ${index + 1}`}
          header={header}
          body={body}
          link={link}
        />
      ))}
    </div>
  );
};
