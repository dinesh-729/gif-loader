import SearchResults from "../../components/SearchResults";
import { useQueryParams } from "../../lib/hooks/query-hook";

import './search.css';

const Search = () => {
    const queryParams = useQueryParams();

    return(
        <div className="search-content">
            <SearchResults query={queryParams} />
        </div>
    )
}
export default Search;