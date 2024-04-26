import '../App.css';
import ReactImage from "../assets/reactjs-icon.png";

function MainContent() {

    return (
        <main>
            <h1>Fun facts about React</h1>
            <img src={ReactImage} className="react-bg" alt="React logo"/>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default MainContent