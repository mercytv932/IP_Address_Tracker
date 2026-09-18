import { useState, type FormEvent } from "react";
interface SearchBarProps {
  onSearch(value: string): void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">&gt;</button>
    </form>
  );
}

export default SearchBar;
