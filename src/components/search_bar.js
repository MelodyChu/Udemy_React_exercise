import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />;
// }

// class based component; extening class by Component gives it a lot of other functionality
// each class based object has its own state; e/ time state changes; render function re-render
class SearchBar extends Component {
    // constructor is called every new instance of function
    constructor(props) {
        // Component has its own constructor; can call this from parent
        super(props);
        // only inside constructor do we establish STATE as this.state
        this.state = { term: ''}; // term is a property
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />
                
            </div>
        );
    }
    // event  describes the event that occured
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//controlled element has value set by state; value only changes when state changes 
// input is now controlled form element

export default SearchBar;