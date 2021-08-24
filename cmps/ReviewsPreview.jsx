import { ReviewsDetails } from "./ReviewDetails.jsx"

export function ReviewsPreview({reviews, reloadReviews}) {

    return (
        <div className="reviews">
            {reviews.map((review, idx) => <ReviewsDetails key={idx} review={review} reloadReviews={reloadReviews}/>)}
        </div>
    )
}