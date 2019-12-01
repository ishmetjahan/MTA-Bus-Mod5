import React from "react";
import Bus from "./Bus"

class BusCollection extends  React.Component{


    render(){
        // debugger
        console.log(this.props.info)

        const singleBus = this.props.info.map(bus=>{
            return <Bus key={bus.id} 
                bus={bus}  
                />
        })
        return (
            <div >
                <div>
                {singleBus}
                    
                </div>
            </div>
        )
    }

    
}

export default BusCollection;