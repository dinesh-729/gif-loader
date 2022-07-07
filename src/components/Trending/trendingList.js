import TextCard from "./TextCard";

import './trending.css';

const TrendingList = ({trending}) => {
    const searchUrl = "/search?q="
    return(
        <div className="trending-list">
            {trending?.results?.map((text, index)=> (
                <a key={`trending${index}`} href={searchUrl + encodeURIComponent(text)}>
                    <TextCard text={text} />
                </a>
            ))}
        </div>
    )
}
export default TrendingList;