import './Card.css'

export default function (props) {
    return (
        <div className='card'>
            <div className='card__header'>
                <img src='https://github.com/dinosoid.png' alt='perfil image'/>
            </div>
            <div className='card__content'>
                <h3>João das Coves</h3>
                <h4>Desenvolvedor de legumes</h4>
            </div>
        </div>
    )
}