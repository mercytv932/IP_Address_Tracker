import { useState } from "react";
interface SearchBarProps {
  onSearch(value: string): void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type="text" placeholder="Search for any IP address or domain" />
      <button>&gt;</button>
    </div>
  );
}

export default SearchBar;
