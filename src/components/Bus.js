import React from "react";


class Bus extends  React.Component{

  
    render(){
    

        return (
            
                 <div className="grid-item"
                 key={this.props.bus.key}>
                        {/* <button className="Savebtn" onClick={this.handleClick}>Save</button> */}
                     <a href={this.props.bus.web_url}>
                 <h3> {this.props.bus.name}</h3></a>
                    <p className="card-text">{this.props.bus.route}</p>

                </div>
                     
               

        )
    }

    
}

export default Bus;