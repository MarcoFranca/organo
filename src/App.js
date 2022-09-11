import Banner from "./components/Banner";
import {Form} from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";

function App() {

    const [contributers, setContributer] = useState([])

    const toNewContributer = (contributer) =>{
        setContributer([...contributers,contributer])
        console.log(contributer)
    }

    const teams = [
        {
        name:'Programação',
        background:'#D9F7E9',
        borderColor:'#57C278'
    },
    {
        name:'Front-End',
        background:'#E8F8FF',
        borderColor:'#82CFFA'
    },
    {
        name:'Data-Science',
        background:'#F0F8E2',
        borderColor:'#A6D157'
    },
    {
        name:'Devops',
        background:'#FDE7E8',
        borderColor:'#E06B69'
    },
    {
        name:'Ux-Designer',
        background:'#FAE9F5',
        borderColor:'#DB6EBF'
    },
    {
        name:'Mobile',
        background:'#FFF5D9',
        borderColor:'#FFBA05'
    },
    {
        name:'Inovação e Gestão',
        background:'#FFEEDF',
        borderColor:'#FF8A29'
    }]

    return (
        <div className="App">
            <Banner/>
            <Form
                registeredContributor = {contributer => toNewContributer(contributer)}
                selectTeam={teams.map(team => team.name)}
            />
            {teams.map(team => <Team
                key={team.name}
                backGround={team.background}
                border={team.borderColor}
                title={team.name}
            />)}

        </div>
    );
}

export default App;
