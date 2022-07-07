import { useState, useEffect } from "react";

import TrendingList from "./trendingList";
import Tenor from "../../services/tenorSearch";

import './trending.css';

const CONTEXT = "trending";
let isLoaded = false;
const Trending = () => {
    const [trendingList, setTrendingList] = useState(null);

    useEffect(()=>{
        if(isLoaded) return;
        
        async function loadResponse() {
            const tenor = new Tenor(CONTEXT);
            const trendingGifs = await tenor.getGifList();
            setTrendingList(trendingGifs);
        }
        loadResponse()
        isLoaded = true
    },[])

    return (
        <div className="trending">
            <p className="trending-title">Trending Tenor Searches</p>
            <TrendingList trending={trendingList} />
        </div>
    )
}
export default Trending;