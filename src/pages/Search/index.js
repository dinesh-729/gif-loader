import GifResults from "../../components/GifResults";
import { useQueryParams } from "../../lib/hooks/query-hook";
import { CONSTANTS } from "../../lib/constants";

import './search.css';

const Search = () => {
    let queryParams = useQueryParams();
    
    return(
        <div className="search-content">            
            <div className="section search">
                <p className="title">Search Results</p>
                <GifResults query={queryParams} context={CONSTANTS.SEARCH_KEY}/>
            </div>
        </div>
    )
}
export default Search;