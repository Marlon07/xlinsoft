
import GoogleLogin from 'react-google-login';
import logo from '../assets/images/logo.svg';
import ilustracion from '../assets/images/cuate.svg';
import { Redirect } from 'react-router';
import { url } from 'inspector';
// import { url } from 'inspector';

const Login = () => {

    const responseGoogle = (response: any) => {
        console.log(response);
    }

    return (
        <div>
            <div className="App-page">
                <div className="fondo"></div>
                <div className="banner">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={ilustracion} className="App-ilustracion" alt="ilustracion" />
                </div>
                <section className="content-form">
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
                </section>
            </div>
        </div>
    );
}

export default Login;