import './DropDown.css'

export default function DropDown(props) {
    return(
        <div className='select-container'>
            <label className='select-container__label'>{props.label}</label>
            <select
                value={props.value}
                onChange = {event => props.toChange(event.target.value)}
                required={props.required}
                className='select-container__select'
            >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
