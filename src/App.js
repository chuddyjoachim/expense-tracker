import React, { useState, useEffect } from "react";
import "./App.scss";
import { Calcfield } from "./components/calcfield/calcfield";
import { SubForm } from "./components/formfield/SubForm";
import money from "./svg/money-transfer.svg";
import balance from "./svg/balance.svg";
import expenses from "./svg/expenses.svg";

function App() {
  const [
    {
      incomeAmount,
      incomeTitle,
      expenseAmount,
      expenseTitle,
      incomeArray,
      expenseArray,
    },
    setincome,
  ] = useState({
    incomeAmount: "",
    incomeTitle: "",
    expenseAmount: "",
    expenseTitle: "",
    incomeArray: [],
    expenseArray: [],
  });

  useEffect(() => {
    console.log(incomeArray);
  }, [incomeArray]);

  useEffect(() => {
    console.log(expenseArray);
  }, [expenseArray]);

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
    if (incomeAmount.length && incomeTitle.length > 0) {
      setincome((_) => ({
        ..._,
        incomeArray: _.incomeArray.concat(single),
        incomeAmount: "",
        incomeTitle: "",
      }));
    }
  };

  const allExpenses = () => {
    let single = {
      amount: expenseAmount,
      title: expenseTitle,
    };
    if (expenseAmount != null) {
      setincome((_) => ({
        ..._,
        expenseArray: _.expenseArray.concat(single),
        expenseAmount: "",
        expenseTitle: "",
      }));
    }
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
                incomeAmount={incomeAmount}
                incomeTitle={incomeTitle}
              />
              <SubForm
                title="Enter Expense Amount and Description"
                btnColor={"red__"}
                amt={eA}
                tle={eT}
                setArr={allExpenses}
                incomeAmount={expenseAmount}
                incomeTitle={expenseTitle}
              />
              {/*  */}
              <div>
                <h3></h3>
                {incomeArray.map((x) => {
                  return (
                    <div key={x.amount}>
                      <div>{x.amount}</div>
                      <div>{x.title}</div>
                    </div>
                  );
                })}
              </div>
              {/*  */}
            </div>
          </div>
          <div className="panner">
            <Calcfield title={"INCOME"} imgSrc={money} amnt={incomeArray} />
            <Calcfield title={"BALANCE"} imgSrc={balance} />
            <Calcfield
              title={"EXPENSES"}
              imgSrc={expenses}
              amnt={expenseArray}
            />
          </div>
        </div>
        jioo
      </div>
    </>
  );
}

export default App;
