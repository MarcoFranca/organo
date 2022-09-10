import Banner from "./components/Banner";
import {Form} from "./components/Form";
import {useState} from "react";

function App() {

    const [contributers, setContributer] = useState([])

    const toNewContributer = (contributer) =>{
        setContributer([...contributers,contributer])
        console.log(contributer)
    }

    return (
        <div className="App">
            <Banner/>
            <Form
                registeredContributor = {contributer => toNewContributer(contributer)}
            />
        </div>
    );
}

export default App;
