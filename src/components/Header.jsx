import reactLogo from "../assets/react.svg";
import '../App.css';

function Header() {

    return (
        <header>
            <nav>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}

export default Header