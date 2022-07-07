import { useState, useEffect } from "react";

import GifList from "../GifList";
import Tenor from "../../services/tenorSearch";

import './searchResults.css';

const CONTEXT = "search";
let isLoaded = false;
const SearchList = ({query}) => {
    const [trendingList, setTrendingList] = useState(null);

    useEffect(()=>{
        if(isLoaded) return;
        
        async function loadResponse() {
            const tenor = new Tenor(CONTEXT);
            const trendingGifs = await tenor.getGifList(query);
            setTrendingList(trendingGifs);
        }
        loadResponse()
        isLoaded = true;
    },[query])

    return (
        <div className="featured">
            <p className="featured-title">Featured GIFs</p>
            <GifList gifData={trendingList} />
        </div>
    )
}
export default SearchList;