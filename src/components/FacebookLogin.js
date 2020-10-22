import React from "react";
import FacebookLoginBtn from "react-facebook-login";

class FaceBookLogin extends React.Component {
    state = {
        auth: false,
        name: "",
        picture: "",
        };
    componentClicked = () => {
        console.log('fb login is clicked');
    }
    responseFacebook = (response) => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        })
    }
    render() {
        let fbData;
        this.state.auth ? 
            fbData = 
            (< div >
                <img alt={this.state.name} src={this.state.picture} />
                <h1>{this.state.name}</h1>
            </ div>)
             :
            fbData = (
                <FacebookLoginBtn
                appId="405686443781591"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
      return (
        <div>
            {fbData}
        </div>
      );
  }
}

export default FaceBookLogin;
