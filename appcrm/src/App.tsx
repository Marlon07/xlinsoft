import logo from './assets/images/logo.svg';
import ilustracion from './assets/images/cuate.svg';
import './assets/css/App.scss';

// Importar componentes
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="App-page">
        <div className="fondo"></div>
        <div className="banner">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={ilustracion} className="App-ilustracion" alt="ilustracion" />
        </div>
        <section className="content-form">
          <Login />
        </section>
      </div>
    </div>
  );
}

export default App;
