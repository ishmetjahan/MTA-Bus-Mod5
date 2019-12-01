import React from "react";

class Toolbar extends  React.Component{

    state = {
        page: 'login'
      }
    
      redirect = (page) => {
        this.setState({page})
      }
    
      componentDidMount(){
        if (localStorage.token){
          this.redirect('profile')
        }
      }

    render() {
        return (
            <div>
            <header className="toolbar" >
            <nav className="toolbar_navigation" >
                <div className="appTitle" ><h1> Personalized Bus Tracker </h1> </div>
                <div className="toolbar_navigation-items" >
                    
                        <a href= "/login">Login</a>
                        <br/>
                        <br/>
                        <a href= "/signup">Signup</a>
                    
                </div>
            </nav>
        </header>
        </div>
        );
    }
} 
    


export default Toolbar;