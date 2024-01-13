import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [racas, setRacas] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
    .then(resposta => resposta.json())
    .then(dados => {setRacas(dados)});
  // Os colchetes[] aqui é usado para indicar que a requisição(localhost) deve ser feito apenas uma vez
  }, []);

  useEffect(() => {
    if(busca && busca.length > 3) {
      fetch('http://localhost:8080/doguinhos?nome=' + busca)
      .then(resposta => resposta.json())
      .then(dados => { setRacas(dados)});
    };
  // Aqui o [busca] serve para indicar que a requisição(localhost) deve ser feito apenas quando busca mudar
  }, [busca]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Alura+ Hooks do React: useEffect
        </h1>
      </header>
      <section className='corpo'>
          <h2>Bem vindo ao App Doguinhos</h2>
          <h4>Confira abaixo uma lista de raças dos Doguinhos</h4>
          <input placeholder='Buscar por Raça' onChange={evento => setBusca(evento.target.value)} />
          <ul>
            {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
          </ul>
      </section>
    </div>
  )
};
export default App;
