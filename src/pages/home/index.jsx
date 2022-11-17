import "./styles.css";
import logo from "../../assets/Nu Kenzie.svg";
import background from "../../assets/illustration.svg";

export function Home({ setPage }) {
  return (
    <div className="divContainer">
      <div>
        <img src={logo} />
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={() => setPage()}>Iniciar</button>
      </div>
      <div>
        <img src={background} />
      </div>
    </div>
  );
}
