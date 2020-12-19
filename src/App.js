import React, { useState, useEffect } from "react";
import "./App.scss";
import Modal from "./components/modal";
import Formfield from "./components/formfield";
import Calcfield from "./components/calcfield";
import Listarray from "./components/listarray/";
import money from "./svg/money-transfer.svg";
import balance from "./svg/balance.svg";
import expenses from "./svg/expenses.svg";

function App() {
  // All income, expense and pop state
  const [
    {
      popDiv,
      delIncome,
      delExpense,
      incomeAmount,
      incomeTitle,
      expenseAmount,
      expenseTitle,
      incomeArray,
      expenseArray,
      incomeBalance,
      expenseBalance,
      balBalance,
      incomeRem,
      expenseRem,
    },
    setincome,
  ] = useState({
    popDiv: false,
    delIncome: false,
    delExpense: false,
    incomeAmount: "",
    incomeTitle: "",
    expenseAmount: "",
    expenseTitle: "",
    incomeArray: [],
    expenseArray: [],
    incomeBalance: 0,
    expenseBalance: 0,
    balBalance: 0,
    incomeRem: [],
    expenseRem: [],
  });

  // erro state for inputs
  const [
    {
      incomeAmountError,
      incomeTitleError,
      expenseAmountError,
      expenseTitletError,
    },
    setError,
  ] = useState({
    incomeAmountError: false,
    incomeTitleError: false,
    expenseAmountError: false,
    expenseTitletError: false,
  });

  // Income Amount
  const iA = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, incomeAmount: value }));
  };

  // Income Title
  const iT = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, incomeTitle: value }));
  };

  // Expense Amount
  const eA = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, expenseAmount: value }));
  };

  // Expense Title
  const eT = (e) => {
    let value = e.target.value;
    setincome((_) => ({ ..._, expenseTitle: value }));
  };

  const allIncome = () => {
    let single = {
      key: key_(),
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
      clearError();
    }
    if (incomeAmount.length < 1) {
      setError((_) => ({
        ..._,
        incomeAmountError: true,
      }));
    }
    if (incomeTitle.length < 1) {
      setError((_) => ({
        ..._,
        incomeTitleError: true,
      }));
    }
  };

  const allExpenses = () => {
    let single = {
      key: key_(),
      amount: expenseAmount,
      title: expenseTitle,
    };
    if (expenseAmount.length && expenseTitle.length > 0) {
      setincome((_) => ({
        ..._,
        expenseArray: _.expenseArray.concat(single),
        expenseAmount: "",
        expenseTitle: "",
      }));
      clearError();
    }
    if (expenseAmount.length < 1) {
      setError((_) => ({
        ..._,
        expenseAmountError: true,
      }));
    }
    if (expenseTitle.length < 1) {
      setError((_) => ({
        ..._,
        expenseTitletError: true,
      }));
    }
  };

  const clearError = () => {
    setError((_) => ({
      incomeAmountError: false,
      incomeTitleError: false,
      expenseAmountError: false,
      expenseTitletError: false,
    }));
  };

  useEffect(() => {
    // effect;
    const timer = 5000;
    let func;
    clearTimeout(func);
    return () => {
      func = setTimeout(clearError, timer);
    };
  }, [
    incomeAmountError,
    incomeTitleError,
    expenseAmountError,
    expenseTitletError,
  ]);

  useEffect(() => {
    let aa = 0;
    incomeArray.reduce((x, y) => {
      aa = x += parseInt(y.amount);
      return aa;
    }, 0);
    setincome((_) => ({ ..._, incomeBalance: aa }));
  }, [incomeArray]);

  useEffect(() => {
    let aa = 0;
    expenseArray.reduce((x, y) => {
      aa = x += parseInt(y.amount);
      return aa;
    }, 0);
    setincome((_) => ({ ..._, expenseBalance: aa }));
  }, [expenseArray]);

  useEffect(() => {
    setincome((_) => ({ ..._, balBalance: incomeBalance - expenseBalance }));
  }, [expenseBalance, incomeBalance]);

  const key_ = () => {
    let res = "";
    let lenght = 8;
    let key =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%!#*";
    let keyLenght = key.length;
    for (let i = 0; i < lenght; i++) {
      res += key.charAt(Math.floor(Math.random() * keyLenght));
    }
    return res;
  };

  const incomeEdit = (key_) => {
    const ed_ = incomeArray.filter((one) => one.key === key_);
    const { amount, title } = ed_[0];
    const rest = incomeArray.filter((one) => one.key !== key_);

    setincome((_) => ({
      ..._,
      incomeArray: rest,
      incomeAmount: amount,
      incomeTitle: title,
    }));
  };

  const expenseEdit = (key_) => {
    const ed_ = expenseArray.filter((one) => one.key === key_);
    const { amount, title } = ed_[0];
    const rest = expenseArray.filter((one) => one.key !== key_);

    setincome((_) => ({
      ..._,
      expenseArray: rest,
      expenseAmount: amount,
      expenseTitle: title,
    }));
  };

  // Delete income
  const incomeDelete = (key_) => {
    const remain = incomeArray.filter((one) => one.key !== key_);

    setincome((_) => ({
      ..._,
      popDiv: true,
      delIncome: true,
      incomeRem: remain,
    }));
  };

  // Delete expense
  const expenseDelete = (key_) => {
    const remain = expenseArray.filter((one) => one.key !== key_);

    setincome((_) => ({
      ..._,
      popDiv: true,
      delExpense: true,
      expenseRem: remain,
    }));
  };

  const del = () => {
    if (delIncome === true) {
      setincome((_) => ({
        ..._,
        incomeArray: incomeRem,
        popDiv: false,
        delIncome: false,
      }));
    } else if (delExpense === true) {
      setincome((_) => ({
        ..._,
        expenseArray: expenseRem,
        popDiv: false,
        delExpense: false,
      }));
    }
  };
  const delNot = () => {
    setincome((_) => ({
      ..._,
      incomeRem: [],
      popDiv: false,
      delIncome: false,
    }));
  };

  return (
    <>
      <div className="container__">
        <Modal condition={popDiv} delFunc={del} delNotFunc={delNot} />
        <header className="hder__">
          <h3 className="titlehead__">Expense Tracker</h3>
        </header>
        <div className="wrapset__">
          <div className="sd_inex">
            <div className="all_hld">
              <Formfield
                title="Enter income Amount and Description"
                btnColor={"green__"}
                amt={iA}
                tle={iT}
                setArr={allIncome}
                Amount={incomeAmount}
                Title={incomeTitle}
                amountError={incomeAmountError}
                TitleError={incomeTitleError}
              />
              <Formfield
                title="Enter Expense Amount and Description"
                btnColor={"red__"}
                amt={eA}
                tle={eT}
                setArr={allExpenses}
                Amount={expenseAmount}
                Title={expenseTitle}
                amountError={expenseAmountError}
                TitleError={expenseTitletError}
              />
            </div>
          </div>
          <div className="sd_bgl">
            <div className="panner">
              <Calcfield
                title={"INCOME"}
                imgSrc={money}
                amnt={incomeBalance}
                amtCollor={"green_"}
              />
              <Calcfield
                title={"BALANCE"}
                imgSrc={balance}
                amnt={balBalance}
                amtCollor={"yellow_"}
              />
              <Calcfield
                title={"EXPENSES"}
                imgSrc={expenses}
                amnt={expenseBalance}
                amtCollor={"red_"}
              />
            </div>
            <div className="adr__">
              <div className="adr__fg">
                <div className="tbr__">
                  {/* income list */}
                  <Listarray
                    array={incomeArray}
                    editFunc={incomeEdit}
                    deleteFunc={incomeDelete}
                  />
                </div>
                {/* expense list*/}
                <div className="tbr__">
                  <Listarray
                    array={expenseArray}
                    editFunc={expenseEdit}
                    deleteFunc={expenseDelete}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
