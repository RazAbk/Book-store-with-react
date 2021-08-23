import { bookService } from "../services/BookService";

export class AddReview extends React.Component {
    state = {
        review: {
            title: '',
            description: '',
            date: '',
            rating: ''
        }
    }

    handleChange = ({target}) => {
        const field = target.name;
        let value;
        switch(target.type){
            case 'number':
                value = +target.value;
                break;
            case 'text':
                value = target.value;
                break;
            case 'date':
                value = target.value;
                break;
        }

        this.setState(prevState=> ({review: {...prevState.review, [field]: value}}))
    }

    onAddReview = (ev) => {
        ev.preventDefault();
        const {bookId} = this.props;
        bookService.AddReview(this.state.review, bookId);

        this.props.closeModal();
    }


    render(){




        const {isOpen} = this.props;
        const {title, description, date, rating} = this.state.review;

        return (
            <React.Fragment>
                {isOpen && 
                    <div className="add-review-modal">
                            <h2>Add a review</h2>
                            <form className="add-review-form" onSubmit={this.onAddReview}>
                                <label htmlFor="title" >title</label>
                                <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />  

                                <label htmlFor="description" >description</label>
                                <input type="text" name="description" id="description" value={description} onChange={this.handleChange} />  

                                <label htmlFor="rating" >rating</label>
                                <input type="number" name="rating" id="rating" value={rating} onChange={this.handleChange} />  

                                <label htmlFor="date" >date</label>
                                <input type="date" name="date" id="date" value={date} onChange={this.handleChange} />  
                                <button>Add Review</button>
                            </form>
                    </div>
                }
                {!isOpen && <span></span>}
            </React.Fragment>
        )
    }
}