import React, { Component } from "react";
import GoogleLogin from 'react-google-login';

class Login extends Component {
    render() {
        
        const responseGoogle = (response:any) => {
            console.log(response);
        }
        
        return (
            <div>
                <h1>Bienvenido</h1>
                <h4>Ingresa al sistema</h4>
                <hr />
                <form className="form-login">
                    <GoogleLogin className="btn-google"
                        clientId="260904990789-cgiqeggb22as87134b7450q3jg24mqnv.apps.googleusercontent.com"
                        buttonText="Continuar con Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </div>
        );
    }
}

export default Login;