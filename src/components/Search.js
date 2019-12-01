import React from "react"

class Search extends React.Component {



    render(){
        
        return(
            <div className="container">
                <label className="search-label" htmlFor="search-input" >
                    <input type="text" value={this.props.searchValue} onChange={(e)=> this.props.onSearch(e.target.value)} placeholder="Search..." />
                    <br/>
                    <input type="submit" value="Submit" />
                </label>
               
            </div>
        )
    }
}

export default Search;