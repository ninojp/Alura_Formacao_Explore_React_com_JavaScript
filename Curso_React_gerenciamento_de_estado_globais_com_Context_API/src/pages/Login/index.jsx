// import {Container, Titulo, InputContainer} from './styles';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  @media(min-width: 768px) {
    margin: 0 auto;
    width: 60%;
  }
`;
const Titulo = styled.h2`
  margin-bottom: 20px;
  margin-top: 50px;
  width: max-content;
`;
const InputContainer = styled.form`
  margin-bottom: 30px;
`;
const InputLabel = styled.label`
  font-size: 16px;
`;
const Input = styled.input`
  height: 20px;
`;
// const InputAdornment = styled.input`
//   height: 30px;
// `;
const Button = styled.button`
`;
function Login() {
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input type="text" />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo R$</InputLabel>
        {/* <Input type="number" startAdornment={<InputAdornment position="start"> R$ </InputAdornment> } /> */}
        <Input type="number" />  
      </InputContainer>
      {/* <Button variant="contained" color="primary" > Avançar  </Button> */}
      <Button>Avançar</Button>
    </Container>
  )
}
export default Login;
