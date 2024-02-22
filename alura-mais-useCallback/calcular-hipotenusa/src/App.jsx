import logo from './logo.svg';
import './App.css';
import Calculadora from './components/Calculadora.jsx';
import { useCallback } from 'react';

function App() {
  const raizQuadrada = Math.sqrt;
  const calcularHipotenusa = useCallback((ladoA, ladoB) => {
    const quadradoA = Math.pow(ladoA, 2);
    const quadradoB = Math.pow(ladoB, 2);
    return raizQuadrada(quadradoA + quadradoB);
  }, [raizQuadrada]);

  return (
    <div className="App">
      <header className="App-header">
        <img style={{maxWidth: '150px'}} src='/assets/hipotenusa.png' alt='Imagem do caralho' />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Entendento o Hook useCallback</h1>
      </header>
      <Calculadora calcularHipotenusa={calcularHipotenusa} />
    </div>
  );
}
export default App;
