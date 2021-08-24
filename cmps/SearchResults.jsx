import { bookService } from '../services/BookService.js'

export function SearchResults({results, closeModal}){
    let resultsDisplay;

    if(results){
        resultsDisplay = results.items.map(result=>{
            return <div key={result.id} className="result" >
                    <h2>{result.volumeInfo.title}</h2>
                    <button onClick={()=>{bookService.addBook(result); closeModal()}}>
                        <i className="fas fa-plus"></i>
                    </button>
               </div>
    })
    }

    return(
        <React.Fragment>
            {results && 
                <div className="display-results">
                    {resultsDisplay}
                </div>
            }
            {!results && <h1>no results</h1>}
        </React.Fragment>
    )
}