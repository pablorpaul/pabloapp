import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
