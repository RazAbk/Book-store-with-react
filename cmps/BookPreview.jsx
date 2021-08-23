const { Link } = ReactRouterDOM

export function BookPreview({book, onSelectBook}) {

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

    return (
        <Link to={`/book/${book.id}`}>
        <div className="book-preview" onClick={() => {onSelectBook(book)}}>
            <img src={book.thumbnail} />
            <h2>{book.title}</h2>
            <h3>{book.listPrice.amount + priceCurrency}</h3>
        </div>
        </Link>
    )
}