import './Form.css'
import InputText from "../InputText";
import DropDown from "../DropDown";
import Button from "../Button";
import {useState} from "react";

export const Form = (props) =>{
    const [nameValue, setName] = useState('')
    const [officeValue, setOffice] = useState('')
    const [imageValue, setImage] = useState('')
    const [selectValue, setSelect] = useState('Programação')

    const onSave = (event) =>{
        event.preventDefault()
        props.registeredContributor({
            nameValue,
            officeValue,
            imageValue,
            selectValue
        })
        console.log(`form foi submetido =>`, nameValue, officeValue, imageValue, selectValue)
    }



    return(
        <section className='form-container'>
            <form onSubmit={onSave} className='form-container__form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    value = {nameValue}
                    toChange = {value => setName(value)}
                    required = {true}
                    label = "Nome"
                    placeholder = 'Digite o seu nome'/>
                <InputText
                    value = {officeValue}
                    toChange = {value => setOffice(value)}
                    required = {true}
                    label="Cargo"
                    placeholder='Digite o seu cargo'/>
                <InputText
                    value = {imageValue}
                    toChange = {value => setImage(value)}
                    required = {false}
                    label="Imagem"
                    placeholder='Digite a url da imagem'/>
                <DropDown
                    value={selectValue}
                    toChange = {value => setSelect(value)}
                    required = {true}
                    label="Time"
                    itens={props.selectTeam}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

