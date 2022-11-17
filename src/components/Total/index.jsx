import "./styles.css";

export function Total({ listTransactions }) {
  const sum = listTransactions.reduce((firstValue, actualValue) => {
    return actualValue.value + firstValue;
  }, 0);

  return (
    <div className="divTotal">
      <div>
        <h4> Valor total:</h4>
        <p>O valor se refere ao saldo</p>
      </div>
      <h5> R$ {sum} </h5>
    </div>
  );
}
