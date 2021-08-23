const { Link } = ReactRouterDOM

import {bookService} from '../services/BookService.js'
import {LongTxt} from '../cmps/LongTxt.jsx';

export class BookDetails extends React.Component {

    state = {
        book: null
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
        // <h1>{book.id}</h1>
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
                    <h4>at <i>{book.publishedDate} {dateMsg && `- ${dateMsg}`}</i></h4>
                    <br/>
                    <LongTxt txt={book.description}/>
                    <br/>
                    <br/>
                    <p>(pages: {book.pageCount} {pagesMsg && `- ${pagesMsg}`})</p>

                </div>
                <div className="details-2">
                    <h3>{language}</h3>
                    <Link className="go-back" to={'/book'}>Go Back</Link>
                    <h3><span style={{color: priceColor}}>{priceCurrency}</span></h3>
                </div>
            </div>

        </div>
    )
    }
}

