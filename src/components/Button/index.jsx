import './Button.css'

export default function Button (props) {
    return(
            <button className='button-container__button'>{props.children}</button>
    )
}