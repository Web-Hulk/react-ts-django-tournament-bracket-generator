import { Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

type FAQItemProps = {
  header: string;
  body: string;
  link?: string;
};

export const FAQItem = ({ header, body, link }: FAQItemProps) => {
  const [isSectionDisplayed, setIsSectionDisplayed] = useState<boolean>(false);

  const setSectionVisibility = () => {
    setIsSectionDisplayed(!isSectionDisplayed);
  };

  return (
    <Box className="faq-item">
      <header onClick={setSectionVisibility}>
        <p>{header}</p>
      </header>

      {isSectionDisplayed ? (
        <section>
          <p>
            {body}{" "}
            {link && link.startsWith("localhost") ? (
              <Link to={link}>Click here for more info.</Link>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Click here for more info.
              </a>
            )}
          </p>
        </section>
      ) : null}
    </Box>
  );
};
