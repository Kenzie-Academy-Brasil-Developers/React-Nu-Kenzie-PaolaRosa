import "./styles.css";
import noCard from "../../assets/NoCard.svg";
import { Card } from "../Card";
import { useState } from "react";

export function List({ listTransactions, setListTransactions }) {
  const [filtered, setFiltered] = useState(null);

  function deleted(result) {
    setListTransactions(
      listTransactions.filter((transiction) => transiction !== result)
    );
  }

  function filteredCards(type) {
    setFiltered(
      listTransactions.filter((transaction) => transaction.type === type)
    );
  }
  console.log(filtered);
  return (
    <>
      <nav>
        <h3>Resumo Financeiro</h3>
        <div className="divButtons">
          <button onClick={() => setFiltered(null)}>Todos</button>
          <button
            onClick={() => {
              filteredCards("Entrada");
            }}
          >
            Entradas
          </button>
          <button
            onClick={() => {
              filteredCards("Despesa");
            }}
          >
            Despesas
          </button>
        </div>
      </nav>
      <ul>
        {listTransactions.length === 0 ? (
          <div className="divNoCard">
            <h2> Você ainda não possui nenhum lançamento </h2>{" "}
            <img src={noCard} />
          </div>
        ) : filtered == null ? (
          listTransactions.map((transaction, index) => (
            <Card deleted={deleted} transaction={transaction} key={index} />
          ))
        ) : (
          filtered.map((transaction, index) => (
            <Card deleted={deleted} transaction={transaction} key={index} />
          ))
        )}
      </ul>
    </>
  );
}
