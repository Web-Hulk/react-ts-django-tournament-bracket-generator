import { Box } from "@mui/material";
import "./FAQ.scss";
import { FAQItem } from "./FAQItem/FAQItem";
import { FAQ_DATA } from "./data/FAQ_DATA";

export const FAQ = () => {
  return (
    <Box className="faq-container">
      <h2 className="title">Frequently Asked Questions</h2>

      {FAQ_DATA.map(({ header, body, link }, index) => (
        <FAQItem
          key={`Create FAQ Item - ${index + 1}`}
          header={header}
          body={body}
          link={link}
        />
      ))}
    </Box>
  );
};
