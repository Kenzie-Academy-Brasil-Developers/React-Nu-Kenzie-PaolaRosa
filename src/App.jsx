import { useState } from "react";
import { Form } from "./components/Form";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Total } from "./components/Total";
import "./styles.css";

function App() {
  const [page, setPage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  function renderPage() {
    return page ? setPage(false) : setPage(true);
  }
  return (
    <>
      {page ? (
        <Home setPage={setPage} />
      ) : (
        <>
          <Header setPage={setPage} />

          {/* <button onClick={() => renderPage()}>trocar</button> */}
          <div className="DivContainer">
            <div>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <Total listTransactions={listTransactions} />
            </div>
            <div>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
