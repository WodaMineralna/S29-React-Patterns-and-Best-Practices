import { createContext, useContext } from "react";

const AccordionItemContext = createContext({
  id: null,
});

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>"
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  const contextValue = {
    id,
  };

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
