import { utilService } from "../services/util.service.js";
import { searchBookService } from "../services/SearchBookService.js";
import { SearchResults } from "./SearchResults.jsx";

export class BookAdd extends React.Component{

    state = {
        searchResults: ''
    }

    componentDidMount(){
        this.valueRef = React.createRef();
    }

    
    handleChange = utilService.debounce(() => {
        const value = this.valueRef.current.value;
        searchBookService.getBookSearchResults(value).then(res=>{this.loadResults(res)})
    },750)
    
    loadResults = (results) => {
        this.setState({searchResults: results})
    }
    
    render(){

        const {isOpen} = this.props;
        const {searchResults} = this.state

        return (
            <React.Fragment>
            {isOpen && 
                <div className="book-add-modal">
                    <h1>Search book</h1>
                    <input type="text" name="search-book" onChange={this.handleChange} ref={this.valueRef} />
                    <div className="search-results">
                        {searchResults && <SearchResults results={this.state.searchResults} closeModal={this.props.closeModal}/>}
                    </div>
                </div>
            }
            {!isOpen && <React.Fragment></React.Fragment>}
            </React.Fragment>
        )
    }
}