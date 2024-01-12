import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [corTimeF, setCorTimeF] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({ nome, cargo, imagem, time })
    }
    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault();
                cadastrarTime({nome: nomeTime, corPrimaria: corTimeF, corSecundaria: corTime});
            }}>
                <h2>Preencha os dados para criar um novo Time.</h2>
                <Campo
                    obrigatorio
                    label='Nome Time'
                    placeholder='Digite o nome do Time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio
                    tipo='color'
                    label='Cor destaque' 
                    placeholder='Digite a cor Destaque time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Campo
                    obrigatorio
                    tipo='color'
                    label='Cor Fundo' 
                    placeholder='Digite a cor Fundo do time'
                    valor={corTimeF}
                    aoAlterado={valor => setCorTimeF(valor)}/>
                <Botao texto='Criar Novo Time' />
            </form>
        </section>
    )
}

export default Formulario