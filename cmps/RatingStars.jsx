export function RatingStars({rating}){

    let ratingToDisplay = [];

    for(let i = 1; i <= 5; i++){
        if(i <= rating){
            ratingToDisplay.push(<i key={i} className="fas fa-star full-star"></i>)
        } else{ 
            ratingToDisplay.push(<i key={i} className="far fa-star"></i>)
        }
    }

    return (
        <div className="stars">
            {ratingToDisplay}
        </div>
    )
}