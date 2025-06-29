import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div className={`${className ?? null} ${isOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}
