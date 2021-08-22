import {bookService} from '../services/BookService.js'
import {BookList} from '../cmps/BookList.jsx'
import {BookFilter} from  '../cmps/BookFilter.jsx'
import {BookDetails} from './BookDetails.jsx'
// import React from 'react'

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        const books = bookService.query(this.state.filterBy);
        this.setState({books})
    }

    onSelectBook = (book) => {
        this.setState({ selectedBook: book})
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy}, this.loadBooks);
    }

    render() {

        const {books, selectedBook} = this.state;

        return (
            <section className="books-app">
                {!selectedBook && (
                    <React.Fragment>
                        {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                        <BookList books={books} onSelectBook={this.onSelectBook} />
                    </React.Fragment>
                )}
                {/* {!selectedBook && <BookList books={books} onSelectBook={this.onSelectBook} />} */}
                {selectedBook && <BookDetails book={selectedBook} onBack={() => this.onSelectBook()} />}
            </section>
        );
    }
}