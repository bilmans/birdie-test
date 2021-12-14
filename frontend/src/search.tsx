import './css/search.css'

const Search= ({searchQuery, setSearchQuery}: any) => {
    return <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Events</span>
        </label>
        <input className="input"
            value={searchQuery}
            onInput={e =>
                /*@ts-ignore*/
                setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Filter"
            name="s" 
        />
    </form>
}

export default Search;