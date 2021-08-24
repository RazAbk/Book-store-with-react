import { utilService } from "../services/util.service.js";
import { bookService } from "../services/BookService.js";
import { LongTxt } from "./LongTxt.jsx"
import { RatingStars } from "./RatingStars.jsx";

export function ReviewsDetails({review, reloadReviews}) {

    const {reviewId, title, description, rating, date} = review;

    const formatedDateString = utilService.getFormatedDateString(new Date(date));

    const onDeleteReview = () =>{
        const isDeleteSuccess = bookService.deleteReview(reviewId);
        if(isDeleteSuccess){
            reloadReviews();
            // location.reload();
        }
    }

    return (
        <div className="review">

            <div className="top-section line-under-bold">
                <div className="top-left">
                    <h3>{title}</h3>
                    <RatingStars key={reviewId} rating={rating}/>
                </div>
                <div className="top-right">
                    <h3>{formatedDateString}</h3>
                    <i onClick={onDeleteReview} className="delete-review">x</i>
                </div>
            </div>

            <div className="bottom-section">
                <LongTxt txt={description} max={100}/>
            </div>

        </div>
    )
}