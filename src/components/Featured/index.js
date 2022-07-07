import { useState, useEffect } from "react";

import GifList from "../GifList";
import Tenor from "../../services/tenorSearch";

import './featured.css';

const CONTEXT = "featured";
let isLoaded = false;
const Featured = ({query}) => {
    const [trendingList, setTrendingList] = useState(null);

    useEffect(()=>{
        if(isLoaded) return;
        
        async function loadResponse() {
            const tenor = new Tenor(CONTEXT);
            const trendingGifs = await tenor.getGifList(query);
            setTrendingList(trendingGifs);
        }
        loadResponse()
        isLoaded = true
    },[query])

    return (
        <div className="featured">
            <p className="featured-title">Featured GIFs</p>
            <GifList gifData={trendingList} />
        </div>
    )
}
export default Featured;