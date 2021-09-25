import logo from './assets/images/logo.svg';
import ilustracion from './assets/images/cuate.svg';
import user from './assets/images/user.svg';
import lock from './assets/images/lock.svg';
import './assets/css/styles.scss';

function App() {
  return (
    <div className="App">
      <section className="App-page">
        <div className="fondo"></div>
        <div className="banner">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={ilustracion} className="App-ilustracion" alt="ilustracion" />
        </div>
        <div className="content-form">
          <h1>Bienvenido</h1>
          <h4>Ingresa a tu cuenta</h4>
          <hr />
          <form className="form-login">
            <div>
              <img src={user} className="icon" alt="icon-user" />
              <input className="input" type="text" name="usuario" placeholder="Usuario" />
            </div>
            <div>
              <img src={lock} className="icon" alt="icon-lock" />
              <input className="input" type="password" name="password" placeholder="Contraseña" />
            </div>
            <input className="btn-ingresar bn28" type="submit" value="Ingresar" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
