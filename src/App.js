import React, { useState } from "react";
import "./App.scss";
import { SubForm } from "./components/formfield/SubForm";

function App() {
  const [
    { incomeAmount, incomeTitle, expenseAmount, expenseTitle, incomeArray },
    setincome,
  ] = useState({
    incomeAmount: null,
    incomeTitle: null,
    expenseAmount: null,
    expenseTitle: "",
    incomeArray: [],
  });

  const iA = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, incomeAmount: value }));
  };

  const iT = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, incomeTitle: value }));
  };

  const eA = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, expenseAmount: value }));
  };

  const eT = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, expenseTitle: value }));
  };

  const allIncome = () => {
    let single = {
      amount: incomeAmount,
      title: incomeTitle,
    };
    if (incomeAmount != null) {
      setincome((_) => ({ ..._, incomeArray: _.incomeArray.concat(single) }));
    }
    console.log(incomeArray);
  };

  return (
    <>
      <div className="container__">
        <header className="hder__">
          <h3 className="titlehead__">Expense Tracker</h3>
        </header>
        <div className="wrapset__">
          <div className="sd_inex">
            <h1>{incomeAmount}</h1>
            <h1>{incomeTitle}</h1>
            <h1>{expenseAmount}</h1>
            <h1>{expenseTitle}</h1>
            <div className="all_hld">
              <SubForm
                title="Enter income Amount and Description"
                btnColor={"green__"}
                amt={iA}
                tle={iT}
                setArr={allIncome}
              />
              <SubForm
                title="Enter Expense Amount and Description"
                btnColor={"red__"}
                amt={eA}
                tle={eT}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
