import Trending from "../../components/Trending";
import Featured from "../../components/Featured";

import './home.css';

const Home = () => {
    return(
        <div className="home-content">
            <Trending />
            <Featured />
        </div>
    )
}
export default Home;