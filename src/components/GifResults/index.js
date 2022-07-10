import React, { useRef, useState, useEffect, useCallback } from "react";

import GifList from "../GifList";
import TrendingList from "../Trending/trendingList";
import Tenor from "../../services/tenorSearch";
import { CONSTANTS } from "../../lib/constants";

import './searchResults.css';


const GifResults = ({
    context, 
    query
}) => {  
    // add default queries here 
    const defaultParams = {
        q: "",
        limit: 20,
        media_filter: "gif",
        // contentfilter: "high" // uncomment this query to enable high safety level of gifs
    };

    const [trendingList, setTrendingList] = useState(null);
    const [queryParams, setQueryParams] = useState({...defaultParams, ...query});
    const canLoad = useRef(true);

    // throttle scroll event handler
    const handleGifFetch = useCallback(() => {
        let canListen = true;

        return (trendingGifs) => {
            if(!canListen) return;
    
            canListen = false;
            const delay = 500;
            setTimeout(()=>{
                canListen = true;
    
                const screenHeight = window?.innerHeight;
                const gifListElement = document.querySelector(".gif-list");
                const gifListBottoomPosition = gifListElement?.getBoundingClientRect()?.bottom ?? 0;
                
                if(gifListBottoomPosition - screenHeight<300) {  
                    const nextPos = trendingGifs?.next;
                    canLoad.current = true;
                    setQueryParams(prevQuery=>({
                        ...prevQuery,
                        pos: nextPos
                    }))
                }
            },delay)
        }
    },[])
 

    useEffect(()=>{         
        const loadResponse = async() => {
            const tenor = new Tenor(context);
            const trendingGifs = await tenor.getGifList(queryParams);
            setTrendingList(trendingGifs);

            if(context!==CONSTANTS.TRENDING_KEY) {
                window?.addEventListener('scroll',handleGifFetch().bind(null,trendingGifs));
            }
        }

        if(canLoad.current) {
            loadResponse();
            canLoad.current = false;
        }

        return () => window?.removeEventListener('scroll',handleGifFetch)
    },[queryParams, context, handleGifFetch])

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
export default React.memo(GifResults);