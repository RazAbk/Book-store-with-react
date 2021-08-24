const { Link } = ReactRouterDOM;

import {bookService} from '../services/BookService.js'
import {BookList} from '../cmps/BookList.jsx'
import {BookFilter} from '../cmps/BookFilter.jsx'
import {BookDetails} from './BookDetails.jsx'
import { Screen } from '../cmps/Screen.jsx';
import { BookAdd } from '../cmps/BookAdd.jsx';

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null,
        isSearchBookOpen: false
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        const books = bookService.query(this.state.filterBy).then(books=>{
            this.setState({books})
        });
    }

    onSelectBook = (book) => {
        this.setState({ selectedBook: book})
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy}, this.loadBooks);
    }

    toggleSearchModal = () => {
        this.setState({isSearchBookOpen: !this.state.isSearchBookOpen});
        this.loadBooks();
    }

    render() {

        const {books, selectedBook} = this.state;

        return (
            <section className="books-app">
                <Screen isOpen={this.state.isSearchBookOpen} closeModal={this.toggleSearchModal} />
                {!selectedBook && (
                    <React.Fragment>
                        <button className="search-book-btn" onClick={this.toggleSearchModal} >Search Book</button>
                        <BookAdd isOpen={this.state.isSearchBookOpen} closeModal={this.toggleSearchModal} />
                        <BookFilter onSetFilter={this.onSetFilter}/>
                        <BookList books={books} onSelectBook={this.onSelectBook} />
                    </React.Fragment>
                )}
                {selectedBook && <BookDetails book={selectedBook} onBack={() => this.onSelectBook()} />}
            </section>
        );
    }
}