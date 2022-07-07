import GifItem from './gifItem';

import './gifList.css';

const GifList = ({gifData}) => {

    return(
        <div className="gif-list">
            {gifData?.results?.map(gif => (
                <GifItem key={gif.id} gif={gif} />
            ))}
        </div>
    )
}
export default GifList;