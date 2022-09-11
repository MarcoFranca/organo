import './Team.css'
import Card from "../Card";

export default function (props) {
    return (
        <section className='team'
                 style ={{backgroundColor: props.backGround}}>
            <div className="team__team-content">
                <h3 className='team__team-content__title'>{props.title}</h3>
                <div className='team__team-content__after' style={{backgroundColor: props.border}}></div>
            </div>
            <div className="team__cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}