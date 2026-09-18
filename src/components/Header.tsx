import SearchBar from "./SearchBar";
function Header({ onSearch }: { onSearch: (value: string) => void }) {
  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Header;
