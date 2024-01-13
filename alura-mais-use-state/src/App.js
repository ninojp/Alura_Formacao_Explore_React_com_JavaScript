import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [nome, setNome] = useState('Nino JP')
  // function trocaNome(){
  //   setNome('Edenilson JP')
  //   if(nome === 'Edenilson JP'){
  //     setNome('Nino JP')
  //   }
  const trocaNome = () => {
    setNome('Edenilson JP')
    if(nome === 'Edenilson JP'){
      setNome('Nino JP')
    }
    console.log(nome);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Alura+ Hooks do React: useState
        </h1>
      </header>
      <section className='corpo'>
        <h2>{nome}</h2>
        <button onClick={trocaNome}>Atualizar Nome</button>
      </section>
    </div>
  );
}

export default App;
