
export class BookFilter extends React.Component {
    state = {
        filterBy: {
        name: '',
        minPrice: '',
        maxPrice: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({filterBy: {...this.state.filterBy, [field]: value}}, () => {
        this.props.onSetFilter(this.state.filterBy);
        });
    }

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy);
    }

    render() {

        const  {name, minPrice, maxPrice } = this.state.filterBy;
        return (
        <div className="filter-container">
        <h2>Filter:</h2>
        <form className="book-filter" onSubmit={this.onFilter}>
                <label htmlFor="by-name"></label>
                <input
                name="name"
                id="by-name"
                type="text"
                placeholder="name"
                value={name}
                onChange={this.handleChange}
                />

            <label htmlFor="min-price"></label>
            <input
            name="minPrice"
            id="min-price"
            type="number"
            placeholder="min price"
            value={minPrice}
            onChange={this.handleChange}
            />

            <label htmlFor="max-price"></label>
            <input
            name="maxPrice"
            id="max-price"
            type="number"
            placeholder="max price"
            value={maxPrice}
            onChange={this.handleChange}
            />
        </form>
        </div>
        );
    }
}