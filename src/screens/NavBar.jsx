import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicial</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}