type ChinguSearchProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function ChinguSearch({
  searchTerm,
  setSearchTerm,
}: ChinguSearchProps) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        id="chingu-search"
        placeholder="Type keyword here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-secondary-light border border-black-100 px-2 py-1 rounded-lg mb-2 mr-2"
      />
    </div>
  );
}
