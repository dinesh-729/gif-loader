import { useState, useEffect } from "react";

import GifList from "../GifList";
import TrendingList from "../Trending/trendingList";
import Tenor from "../../services/tenorSearch";
import { CONSTANTS } from "../../lib/constants";

import './searchResults.css';

const GifResults = ({context, query}) => {
    const [trendingList, setTrendingList] = useState(null);

    useEffect(()=>{        
        async function loadResponse() {
            const tenor = new Tenor(context);
            const trendingGifs = await tenor.getGifList(query);
            setTrendingList(trendingGifs);
        }
        loadResponse()
    },[query, context])

    if(context===CONSTANTS.TRENDING_KEY) {
        return (
            <TrendingList trending={trendingList} />
        )
    }

    if(context===CONSTANTS.FEATURED_KEY) {
        return (
            <GifList gifData={trendingList} />
        )
    }

    if(context===CONSTANTS.SEARCH_KEY) {
        return (
            <GifList gifData={trendingList} />
        )
    }

    return (<p>
        Invalid context. Page Cannot be loaded.
    </p>)
}
export default GifResults;