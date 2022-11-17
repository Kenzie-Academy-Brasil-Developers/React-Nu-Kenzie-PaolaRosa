import "./styles.css";
import trash from "../../assets/trash (1).png";

export function Card({ transaction, deleted }) {
  return (
    <li className={transaction.type === "Entrada" ? "green" : "gray"}>
      <div>
        <h3>{transaction.description}</h3>
        <h4>{transaction.type}</h4>
      </div>
      <div className="valueButton">
        <p>R$ {transaction.value},00</p>
        <button
          onClick={() => {
            deleted(transaction);
          }}
        >
          <img src={trash} alt=""></img>
        </button>
      </div>
    </li>
  );
}
