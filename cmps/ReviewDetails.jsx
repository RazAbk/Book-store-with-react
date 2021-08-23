import { bookService } from "../services/BookService";
import { LongTxt } from "./LongTxt"

export function ReviewsDetails({review}) {

    const {reviewId, title, description, rating, date} = review;

    let formatedDate = new Date(date * 1000);
    formatedDate = `${formatedDate.getDay()}/${formatedDate.getMonth() + 1}/${formatedDate.getFullYear()}`;

    const onDeleteReview = () =>{
        const isDeleteSuccess = bookService.deleteReview(reviewId);
        if(isDeleteSuccess){
            location.reload();
        }
    }

    return (
        <div className="review">

            <div className="top-section line-under-bold">
                <div className="top-left">
                    <h3>{title}</h3>
                    <h2>{rating}</h2>
                    {/* <i className="icon-star-empty"></i> */}
                </div>
                <div className="top-right">
                    <h3>{formatedDate}</h3>
                    <i onClick={onDeleteReview} className="delete-review">x</i>
                </div>
            </div>

            <div className="bottom-section">
                <LongTxt txt={description} max={100}/>
            </div>

        </div>
    )
}