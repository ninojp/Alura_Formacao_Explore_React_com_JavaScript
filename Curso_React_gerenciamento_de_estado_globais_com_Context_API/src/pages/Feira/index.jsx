// import { Container, Header, Lista,} from './styles';
// import feira from './feira.json';
// import Produto from './components/Produto';
// import NavBar from './NavBar';
import styled from 'styled-components';
const titleGray = '#464646';
const Container = styled.main`
  min-height: 100vh;
  padding: 0 20px;
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }
`;
const Header = styled.header`
  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    > h2, > h3 {
      color: ${titleGray};
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 26px;
    }
  }
  > p {
    color: #A3A3A3;
    font-size: 26px;
  }
`;
const Lista = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  > h2 {
    color: ${titleGray};
    font-size: 32px;
    margin-top: 20px;
  }
`;
function Feira() {
  return (
    <Container>
      {/* <NavBar /> */}
      <Header>
        <div>
          <h2> Olá!</h2>
          <h3> Saldo: R$</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {/* {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))} */}
      </Lista>
    </Container>
  )
}
export default Feira;
