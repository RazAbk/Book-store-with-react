import { LongTxt } from "./LongTxt"

export function ReviewsDetails({review}) {

    const {title, description, rating, date} = review;

    let formatedDate = new Date(date * 1000);
    formatedDate = `${formatedDate.getDay()}/${formatedDate.getMonth() + 1}/${formatedDate.getFullYear()}`;

    return (
        <div className="review">

            <div className="top-section line-under-bold">
                <div className="top-left">
                    <h3>{title}</h3>
                    <h2>{rating}</h2>
                </div>
                <div className="top-right">
                    <h3>{formatedDate}</h3>
                    <div className="delete-review">x</div>
                </div>
            </div>

            <div className="bottom-section">
                <LongTxt txt={description} max={100}/>
            </div>

        </div>
    )
}