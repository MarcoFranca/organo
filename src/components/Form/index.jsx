import './Form.css'
import InputText from "../InputText";
import DropDown from "../DropDown";
import Button from "../Button";

export const Form = () =>{
    const team = ['Programação', 'Front-End', 'Data-Science', 'Devops', 'Ux-Designer', 'Mobile', 'Inovação e Gestão']
    return(
        <section className='form-container'>
            <form className='form-container__form'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder='Digite o seu nome'/>
                <InputText label="Cargo" placeholder='Digite o seu cargo'/>
                <InputText label="Imagem" placeholder='Digite a url da imagem'/>
                <DropDown label="Time" itens={team}/>
                <Button/>
            </form>
        </section>
    )
}

