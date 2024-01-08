import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import './Formulario.css';

const Formulario = () => {
    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'];
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('O Form foi submetido!')
    }
    return (
        <section className='sectionForm'>
            {/* o ouvinte de evento foi usado no form para termos as validações, por isso não foi usado no botao */}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu Nome' />
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu Cargo' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa obrigatorio={true} label='Times' itens={times} />
                <Botao>
                    {/* Outra forma de passar 'propriedades aninhadas(imgs, texto...)' para o compoente */}
                    Criar Card
                </Botao>
            </form>
        </section>
    );
};
export default Formulario; 