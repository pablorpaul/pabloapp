import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <footer className="pt-4 my-md pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <h5>Senac</h5>
                </div>
                <div className="col-6 col-md">
                    <h5>Redes Sociais</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1">
                            <Link className="link-secondary text-decoration-none" to="https://www.instagram.com/">Instagram</Link>
                        </li>
                        <li>
                            <Link className="link-secondary text-decoration-none" to="https://www.facebook.com/">Facebook</Link>
                        </li>
                        <li>
                            <Link className="link-secondary text-decoration-none" to="https://www.whatsapp.com/">WhatsApp</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Recursos</h5>
                </div>
                <div className="col-6 col-md">
                    <h5>Sobre</h5>
                </div>
            </div>
        </footer>
    )
}