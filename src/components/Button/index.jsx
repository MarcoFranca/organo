import './Button.css'

export default function (props) {
    return(
            <button className='button-container__button'>{props.children}</button>
    )
}