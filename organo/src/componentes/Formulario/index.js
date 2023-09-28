import './Formulario.css'
import Campo from "../Campo"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColabordorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colabordador</h2>
                <Campo
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    itens={props.times} label="Time"
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={evento => {
                evento.preventDefault()
                props.cadastarTime({ nome: nomeTime, cor: corTime })
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo Time</h2>
                <Campo
                    label="Nome"
                    placeholder="Digite o nome do time"
                    obrigatorio
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    label="Cor"
                    placeholder="Digite a cor do time"
                    type='color'
                    obrigatorio
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}

export default Formulario