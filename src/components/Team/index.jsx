import './Team.css'
import Card from "../Card";

export default function Team(props) {
    return (
        (props.contributers.length > 0) && <section className='team'
                 style ={{backgroundColor: props.backGround}}>
            <div className="team__team-content">
                <h3 className='team__team-content__title'>{props.title}</h3>
                <div className='team__team-content__after' style={{backgroundColor: props.border}}></div>
            </div>
            <div className="team__cards">
                {props.contributers.map(contributer =>
                    <Card
                        backGround={props.border}
                        name={contributer.nameValue}
                        office={contributer.officeValue}
                        image={contributer.imageValue}
                        key= {contributer.keyNum}
                    />)}
            </div>
        </section>
    )
}