export default function ChingueSearch() {
  return (
    <div>
       <input
          type="search"
          id="chingu-search"
          placeholder="Keywords come here"
          className="border border-gray-400 p-1 rounded-lg mb-2 mr-2"
        />
        <button type="submit">Search</button>
    </div>
  )
}