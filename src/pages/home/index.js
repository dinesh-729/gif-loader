import GifResults from "../../components/GifResults";
import { CONSTANTS } from "../../lib/constants";

import './home.css';

const Home = () => {
    return(
        <div className="home-content">
            <div className="section trending">                
                <p className="title">Trending Tenor Searches</p>
                <GifResults context={CONSTANTS.TRENDING_KEY}/>
            </div>
            <div className="section featured">
                <p className="title">Featured GIFs</p>
                <GifResults context={CONSTANTS.FEATURED_KEY}/>
            </div>
        </div>
    )
}
export default Home;