import './Formulario.css'
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColabordorCadastrado({
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
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
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
        </section>
    )
}

export default Formulario