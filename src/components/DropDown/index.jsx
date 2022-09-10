import './DropDown.css'

export default function DropDown(props) {
    return(
        <div className='select-container'>
            <label className='select-container__label'>{props.label}</label>
            <select className='select-container__select'>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
