import React from 'react';

import './SearchPanel.css';

class SearchPanel extends React.Component{
    state={
        term: ''
    }
    onChange= (e)=>{
        const term = e.target.value;
        this.setState({term});
         this.props.onSearchChange(term);
    }
    render(){
    return(
        <div className="search_task">
            <input  placeholder='search task'
            value={this.state.term}
            onChange={this.onChange}/>
                   </div>
    );
    }
}

export default SearchPanel;