import React, { Component } from 'react';
import Busindex from "./components/Busindex"


class ProfilePage extends Component{

    state = {
        username: ""
    }

    componentDidMount () {
        fetch("http://localhost:3000/profile", {
            headers: {
                "Authorization" : `Bearer ${localStorage.token}`
            }
        })
        .then (resp => resp.json())
        .then (user => this.setState({username: user.username}))
    }

    handleClick = () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    render (){
        return(
            <div>  
                <div>
                    <button className="Logoutbtn" onClick={this.handleClick}>Logout</button>
                    {
                    this.state.username ?
                    <h1 className="greeting" >Welcome {this.state.username}!</h1> :
                    <h1>getting your info...</h1>
                    }
                </div>
                <Busindex/>
          </div>
         
        )
    }

}

export default ProfilePage