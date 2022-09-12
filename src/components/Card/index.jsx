import './Card.css'

export default function Card ({name, image, office, backGround}) {
    return (
        <div className='card'>
            <div className='card__header' style={{backgroundColor : backGround}}>
                <img src={image} alt={name}/>
            </div>
            <div className='card__content'>
                <h3>{name}</h3>
                <h4>{office}</h4>
            </div>
        </div>
    )
}