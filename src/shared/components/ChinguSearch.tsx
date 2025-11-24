type ChinguSearchProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function ChingueSearch({
  searchTerm,
  setSearchTerm,
}: ChinguSearchProps) {
  return (
    <div>
      <input
        type="text"
        id="chingu-search"
        placeholder="Keywords come here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 p-1 rounded-lg mb-2 mr-2"
      />
      <button type="submit">Search</button>
    </div>
  );
}
