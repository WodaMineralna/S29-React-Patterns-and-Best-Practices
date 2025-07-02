import { useState, useRef } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const lastChange = useRef();

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    // if we have a currently running timer - we clear it, and start a new one
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    // starting a new timeout, which will update our State in 500ms
    lastChange.current = setTimeout(() => {
      // ^ manually clearing the Timer ID from the Ref if the timer has expired, so it's not equal to 'true' in the if-statement above 
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
