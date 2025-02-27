import "../css/Search.css"

export const Search = ({ searchMovie, setSearchMovie }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a movie"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)} />
        </div>

    )
}