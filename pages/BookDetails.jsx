const { Link } = ReactRouterDOM

import {bookService} from '../services/BookService.js'
import {LongTxt} from '../cmps/LongTxt.jsx';
import {ReviewsPreview} from '../cmps/ReviewsPreview.jsx'
import {AddReview} from '../cmps/AddReview.jsx'
import { Screen } from '../cmps/Screen.jsx';

export class BookDetails extends React.Component {

    state = {
        book: null,
        isReviewEditOpen: false
    }

    componentDidMount() {
        this.loadBook();
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.bookId !== this.state.book.id) {
            this.loadBook();
        }
    }
    
    loadBook = () => {
        const id = this.props.match.params.bookId;
        bookService.getBookById(id)
        .then(book => {
            if(!book) this.props.history.push('/');
            this.setState({book})
        })
    }

    toggleModal = () => {
        this.setState({isReviewEditOpen: !this.state.isReviewEditOpen});
        this.loadBook();
    }

    render(){

    const {book} = this.state;
    if(!book) return <h2>Loading...</h2>;
    
    const priceCurrency = bookService.getPriceWSymbol(book.listPrice);
    const priceColor = bookService.getPriceColor(book.listPrice.amount);
    const pagesMsg = bookService.getPagesMsg(book.pageCount);
    const dateMsg = bookService.getDateMsg(book.publishedDate);
    const isOnSale = bookService.isOnSale(book.listPrice.isOnSale);
    const language = bookService.getLang(book.language);

    return (
        <React.Fragment>
        <Screen isOpen={this.state.isReviewEditOpen} closeModal={this.toggleModal} />
        <div className="book-details">
            <div className="image">
                <img src={book.thumbnail} />
                {isOnSale && <img className="on-sale" src="assets\img\sale-badge.png" />}
            </div>
            <div className="more-details">
                <div className="details-1">
                    <h2>{book.title}</h2>
                    <h3>{book.subtitle}</h3>
                    <br/>
                    <h4>Written by <i>{book.authors}</i></h4>
                    <h4 className="line-under">at <i>{book.publishedDate} {dateMsg && `- ${dateMsg}`}</i></h4>
                    <br/>
                    <LongTxt txt={book.description} max={60}/>
                    <br/>
                    <br/>
                    <p>(pages: {book.pageCount} {pagesMsg && `- ${pagesMsg}`})</p>
                    <button className="add-review-btn" onClick={this.toggleModal}>Add review</button>
                        <AddReview isOpen={this.state.isReviewEditOpen} closeModal={this.toggleModal} bookId={book.id}/>
                        
                </div>
                <div className="details-2">
                    <h3>{language}</h3>
                    <Link className="go-back" to={'/book'}>Go Back</Link>
                    <h3><span style={{color: priceColor}}>{priceCurrency}</span></h3>
                </div>
            </div>
        </div>
        <ReviewsPreview reviews={book.reviews}/>
        </React.Fragment>
    )
    }
}

