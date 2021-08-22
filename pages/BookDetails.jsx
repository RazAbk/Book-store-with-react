import {LongTxt} from '../cmps/LongTxt.jsx';

export function BookDetails({book, onBack}) {

    // Handle currency symbol
    let priceCurrency;  

    switch(book.listPrice.currencyCode){
        case 'ILS':
            priceCurrency = '₪';
            break;
        case 'USD':
            priceCurrency = '$';
            break;
        case 'EUR':
            priceCurrency = 'Є';
            break;
        default:
            priceCurrency = '';
    }

    // Handle language text
    let language;

    switch(book.language){
        case 'he':
            language = 'Hebrew';
            break;
        case 'en':
            language = 'English';
            break;
        case 'sp':
            language = 'Spanish';
            break;
        default:
            language = '';
    }

    // Handle Page count message
    let pagesMsg = null;
    if(book.pageCount > 500) pagesMsg = 'Long reading';
    else if(book.pageCount > 200) pagesMsg = 'Decent reading';
    else if(book.pageCount < 100) pagesMsg = 'Light reading';
    
    // Handle release date message
    let dateMsg = null;
    const bookAge = (new Date()).getFullYear() - book.publishedDate;
    if(bookAge > 10) dateMsg = 'Old book';
    else if(bookAge < 1) dateMsg = 'New Book';
    
    // Handle price color
    let priceColor = 'white';
    if(book.listPrice.amount > 150) priceColor = 'red';
    else if(book.listPrice.amount < 20) priceColor = 'green';

    // Handle if book is on sale image
    const isOnSale = book.listPrice.isOnSale;

    return (
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
                    {/* <p>{book.description}</p> */}
                    <LongTxt txt={book.description}/>
                    <br/>
                    <br/>
                    <p>(pages: {book.pageCount} {pagesMsg && `- ${pagesMsg}`})</p>

                </div>
                <div className="details-2">
                    <h3>{language}</h3>
                    <button onClick={onBack}>Go back</button>
                    <h3><span style={{color: priceColor}}>{book.listPrice.amount + priceCurrency}</span></h3>
                </div>
            </div>

        </div>
    )
}

