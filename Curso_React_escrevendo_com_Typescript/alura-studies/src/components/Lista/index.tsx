import styled from "styled-components";
import Item from "./Item";

const AsideStyle= styled.aside`
  grid-area: tarefas;
  height: 100%;
  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
  ul {
    max-height: 350px;
    overflow-y: scroll;
  	scrollbar-width: thin;
  }
  @media screen and (min-width:1280px) {
    h2{
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }
    ul {
      overflow: auto;
      max-height: 500px;
    }
  }  
`;
function Lista () {
    const tarefas = [
        {
            id: 1,
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            id: 2,
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            id: 3,
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ]
    return (
        <AsideStyle>
            <h2>Estudo do Dia</h2>
            <ul>
                {tarefas.map((itemTarefa) => (
                  <Item
                    key={itemTarefa.id}
                    // tarefa={itemTarefa.tarefa}
                    // tempo={itemTarefa.tempo}
                    // Poderia ser feito dessa outra forma abaixo
                    {...itemTarefa}
                  />
                ))}
            </ul>
        </AsideStyle>
    );
};
export default Lista;
