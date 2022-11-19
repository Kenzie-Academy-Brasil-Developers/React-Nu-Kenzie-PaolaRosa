import "./styles.css";

export function Form({ listTransactions, setListTransactions }) {
  function createCard(event) {
    event.preventDefault();
    console.log(event.target[1].value);

    if (event.target[2].value == "Entrada") {
      const values = {
        description: event.target[0].value,
        type: event.target[2].value,
        value: +event.target[1].value,
      };
      setListTransactions([...listTransactions, values]);
    } else {
      const values = {
        description: event.target[0].value,
        type: event.target[2].value,
        value: -event.target[1].value,
      };
      setListTransactions([...listTransactions, values]);
    }
  }

  return (
    <form onSubmit={createCard}>
      <label>Descrição</label>
      <input
        className="inputDescription"
        placeholder="Digite aqui sua descrição"
      />
      <p>Ex: Compra de roupas</p>
      <div className="divValues">
        <div>
          <label>Valor</label>
          <input className="inputForm" type="number" placeholder="R$" />
        </div>
        <div>
          <label>Tipo de valor</label>
          <select>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
}

{
  /* <p {listTransictions.description}> </p> */
}
