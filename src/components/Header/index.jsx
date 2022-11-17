import logo from "../../assets/Nu Kenzie.png";
import "./styles.css";

export function Header({ setPage, renderPage }) {
  return (
    <header>
      <div>
        <img src={logo} />
        <button onClick={() => setPage(true)}>Início</button>
      </div>
    </header>
  );
}
