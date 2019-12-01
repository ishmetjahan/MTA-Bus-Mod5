import React, { Component } from 'react'
import Video from "./components/Video"

class SignUpPage extends Component{

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        fetch("http://localhost:3000/signup",{
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
                this.props.history.push('/login')
            }
        })
    }

    render (){
        return (
            <div>
                <div className="signuppage" >
                <h1>SignUp</h1>
                <form onSubmit={this.handleSubmit} >
                    <label> Create a UserName:
                    <input onChange= {this.handleChange} value={this.state.username} type="text" name="username" />
                    </label>
                    <br/>
                    <label> Create a PassWord:
                    <input onChange= {this.handleChange} value={this.state.password} type="password" name="password" />
                    </label> 
                    <br/>
                    <input type= "submit" value="Signup" />
                </form>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="videotag" >
                    <Video/>
                </div>
            </div>
        )
    }
}

export default SignUpPage