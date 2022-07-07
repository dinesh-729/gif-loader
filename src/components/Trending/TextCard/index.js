import './textCard.css';

const TextCard = ({text}) => {
    return(
        <div className="trending-item">
            <span>{text}</span>
        </div>
    )
}
export default TextCard;