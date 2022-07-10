import { useState, useRef } from "react";
import TextCard from "./TextCard";
import Arrow from "../Arrow";

import './trending.css';

const TrendingList = ({trending}) => {
    const searchBaseUrl = "/search?q=";
    const [show, setShow] = useState({prev:false, next:true});
    const scrollPosition = useRef(0);
    const scrollWidth = useRef(0);

    const handlerNext = () => {
        const featured = document?.querySelector(".trending-list");
        if(!featured) return;
        const position = featured.getBoundingClientRect();

        if(!scrollWidth.current) {
            scrollWidth.current = featured.childElementCount * featured.querySelector("a")?.getBoundingClientRect()?.width;
        }

        scrollPosition.current = scrollPosition.current + position?.width;
        featured.scrollTo(scrollPosition.current,0);
        if(scrollWidth.current<=scrollPosition.current) {
            setShow(prev=>({
                ...prev,
                next: false   
            }))
        }
        setShow(prev=>({
            ...prev,
            prev: true
        }))
    }
    const handlerPrev = () => {
        const featured = document?.querySelector(".trending-list");
        if(!featured) return;
        const position = featured.getBoundingClientRect();

        scrollPosition.current = scrollPosition.current - position?.width;
        featured.scrollTo(scrollPosition.current,0);
        
        if(featured.scrollLeft===0) {
            setShow(prev=>({
                ...prev,
                prev: false   
            }))
        }
        setShow(prev=>({
            ...prev,
            next: true   
        }))
    }

    return(
        <div className="trending-wrapper">    
            {show.prev && 
                <div className="prev-arrow" onClick={handlerPrev}>
                    <Arrow />
                </div>
            }
            <div className="trending-list">
                {trending?.results?.map((text, index)=> (
                    <a key={`trending${index}`} href={searchBaseUrl + encodeURIComponent(text)}>
                        <TextCard text={text} />
                    </a>
                ))}   
            </div>         
            {show.next && 
                <div className="next-arrow" onClick={handlerNext}>
                    <Arrow />
                </div>
            }
        </div>
    )
}
export default TrendingList;