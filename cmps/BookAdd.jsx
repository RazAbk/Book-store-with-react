import { utilService } from "../services/util.service.js";

export class BookAdd extends React.Component{


    componentDidMount(){
        this.valueRef = React.createRef();
    }

    
    handleChange = utilService.debounce(() => {
        const value = this.valueRef.current.value;
        console.log(value)
    },750)
    
    
    render(){

        const {isOpen} = this.props;

        return (
            <React.Fragment>
            {isOpen && 
                <div className="book-add-modal">
                    <h1>Search book</h1>
                    <input type="text" name="search-book" onChange={this.handleChange} ref={this.valueRef} />
                </div>
            }
            {!isOpen && <React.Fragment></React.Fragment>}
            </React.Fragment>
        )
    }
}