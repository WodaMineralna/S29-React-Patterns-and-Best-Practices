import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, className, children }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem(id);
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
      <div className={`accordion-item-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </li>
  );
}
