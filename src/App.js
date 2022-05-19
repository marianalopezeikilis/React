import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="menu">
      <p>Menu</p>
      <a class="colorLink" >Aves</a>
      <a class="colorLink" >Reptiles</a>
      <a class="colorLink">Mamíferos</a>
      <a class="colorLink" >Anfibios</a>
      <a class="colorLink">Peces</a>
    </div><br /><div className="divGrande">
        <h1>Mamíferos</h1>
        <div className="card">
          <p>Osos</p>
          <img src="./imagenes/oso.jpg" />
        </div>
        <div className="card">
          <p>Tigre</p>
          <img src="./imagenes/tigre.jpg" />
        </div>
        <div className="card">
          <p>Lobo</p>
          <img src="./imagenes/lobo.jpg" />
        </div>
        <br />
        <div className="card">
          <p>Leon</p>
          <img src="./imagenes/leon.jpg" />
        </div>
        <div className="card">
          <p>Koala</p>
          <img src="./imagenes/koala.jpg" />
        </div>
        <div className="card">
          <p>Gato</p>
          <img src="./imagenes/Gato.jpg" />
        </div>
      </div><br /><br /></>
    
  );
}

export default App;
