import React, {Component} from "react"
import Video from "./components/Video"

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/login`,{
            method: 'POST',
            headers:  {
                'Accept' : 'applicaiton/json',
                'Content-Type' : "application/json"
            },
            body: JSON.stringify(this.state) 
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.token){
                localStorage.token = data.token
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (
            <div>
             <div className="newLogin" >
             <h1> Login to Proceed</h1>
             <form onSubmit={this.handleSubmit}>
                <label> UserName: 
               <input onChange= {this.handleChange} value={this.state.username} type="text" name="username" /> 
                </label>
                <br/>
                <label> Password: 
               <input onChange= {this.handleChange} value={this.state.password} type="text" name="password" /> 
                </label>
                <br/>
               <input type="submit" value="Login" /> 
             </form>
             <br/>
             <div className="videotag" >
                    <Video/>
                </div>
            </div>
             </div>
        );
    }

}


export default LoginPage