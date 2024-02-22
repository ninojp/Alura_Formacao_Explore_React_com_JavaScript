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
  //====================================================================================
  // const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  function manipularEndereco(evento){
    const cep =  evento.target.value
    setEndereco({cep});
    if(cep && cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      // .then(dados => { setEndereco({
      //     cep: cep,
      //     rua: dados.logradouro,
      //     bairro: dados.bairro,
      //     cidade: dados.localidade,
      //     estado: dados.uf
      //   });
      // Pode ser feito assim também
      .then(dados => { setEndereco(enderecoAntigo => {
          return {
            ...enderecoAntigo,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
        })
      })
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Alura+ Hooks do React: useState
        </h1>
      </header>
      <section className='corpo'>
        <div className='trocar-nome'>
          <h2>{nome}</h2>
          <button onClick={trocaNome}>Atualizar Nome</button>
        </div>
        <div className='cep-digitado'>
          <label >Digite o CEP</label>
          <input placeholder='Digite o CEP' onChange={manipularEndereco}/>
          <ul>
            <li>CEP Digitado: {endereco.cep}</li>
            <li>Rua: {endereco.rua}</li>
            <li>Bairro: {endereco.bairro}</li>
            <li>Cidade: {endereco.cidade}</li>
            <li>Estado: {endereco.estado}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
