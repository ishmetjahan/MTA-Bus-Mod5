import React from "react";
import BusCollection from "./BusCollection"
import Search from "./Search";



class Busindex extends  React.Component{

    state= {
        totalbus: [],
        searchTerm: "",
      }
      componentDidMount (){
        fetch(`http://localhost:3000/buses`)
        .then(resp=> resp.json())
        .then(totalbus => {
          this.setState({totalbus})
        })
      }

    handleSearch= (searchValue)=>{
      this.setState({searchTerm:searchValue})
    }

    whatToRender = () => {
      let displayedBus = this.state.totalbus
      console.log(displayedBus)
      displayedBus = displayedBus.filter(bus => bus.name.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim()))
      return displayedBus
      
    }

    render(){
      console.log(this.state)

        return (
          <div>
            <Search searchValue={this.state.searchTerm} onSearch={this.handleSearch} />
            <br/>
          <div className="grid-container">
                <BusCollection info={this.whatToRender()}/>
            </div>
            </div>
        )
    }



    
}

export default Busindex;