import './gifList.css';

const GifItem = ({gif}) => {
    return(
        <div className="gif">
            <img 
                src={gif.media_formats?.gif?.url}
                width={gif.media_formats?.gif?.dims?.[0]}
                height={gif.media_formats?.gif?.dims?.[1]}
                alt={gif.content_description}
            />
        </div>
    )
}
export default GifItem;