import React from "react";
import "./App.css";
import SpiderDiagram from "./components/spiderDiagram/SpiderDiagram";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import TransactionsTable from "./components/transactionsTable/TransactionsTable";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="sandbox">
        <h1 className="sandbox-title">This is sandbox!</h1>
        <div className="sandbox-body">
          {/* <SpiderDiagram /> */}
          {/* Диаграмма паутиннообразная */}
          {/* <Login />
          <Register /> */}
          {/* Компоненты авторизации */}
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default App;
