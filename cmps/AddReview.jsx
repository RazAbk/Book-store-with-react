import { bookService } from "../services/BookService";

export class AddReview extends React.Component {
    state = {
        review: {
            title: '',
            description: '',
            date: new Date().getTime(),
            rating: ''
        }
    }

    handleChange = ({target}) => {
        const field = target.name;
        let value;
        switch(target.type){
            case 'number':
                value = +target.value;
                if(value > 5) value = 5;
                if(value < 0) value = 0;
                break;
            case 'text':
                value = target.value;
                break;
        }

        this.setState(prevState=> ({review: {...prevState.review, [field]: value}}))
    }

    onAddReview = (ev) => {
        ev.preventDefault();
        const {bookId} = this.props;
        bookService.AddReview(this.state.review, bookId);

        this.setState({review: {title:'', description: '', date: new Date().getTime(), rating:''}})

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

                                <button>Add Review</button>
                            </form>
                    </div>
                }
                {!isOpen && <span></span>}
            </React.Fragment>
        )
    }
}