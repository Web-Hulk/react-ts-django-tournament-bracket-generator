import { useState } from "react";

type FAQItemProps = {
  header: string;
  body: string;
};

export const FAQItem = ({ header, body }: FAQItemProps) => {
  const [isSectionDisplayed, setIsSectionDisplayed] = useState<boolean>(false);

  const setSectionVisibility = () => {
    setIsSectionDisplayed(!isSectionDisplayed);
  };

  return (
    <>
      <header onClick={setSectionVisibility}>
        <p>{header}</p>
      </header>
      {isSectionDisplayed ? (
        <section>
          <p>{body}</p>
        </section>
      ) : null}
    </>
  );
};
