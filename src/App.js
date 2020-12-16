import React, { useState, useEffect } from "react";
import "./App.scss";
import { Calcfield } from "./components/calcfield/calcfield";
import { SubForm } from "./components/formfield/SubForm";
import money from "./svg/money-transfer.svg";
import balance from "./svg/balance.svg";
import expenses from "./svg/expenses.svg";
import pen from "./svg/pen.svg";

function App() {
  const [
    {
      incomeAmount,
      incomeTitle,
      expenseAmount,
      expenseTitle,
      incomeArray,
      expenseArray,
      incomeBalance,
      expenseBalance,
      balBalance,
    },
    setincome,
  ] = useState({
    incomeAmount: "",
    incomeTitle: "",
    expenseAmount: "",
    expenseTitle: "",
    incomeArray: [],
    expenseArray: [],
    incomeBalance: 0,
    expenseBalance: 0,
    balBalance: 0,
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

  useEffect(() => {
    let aa = 0;
    incomeArray.reduce((x, y) => {
      aa = x += parseInt(y.amount);
      return aa;
    }, 0);
    setincome((_) => ({ ..._, incomeBalance: aa }));
    // return setincome((_) => ({
    //   ..._,
    //   balBalance: incomeBalance - expenseBalance,
    // }));
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
    // return new Date().getTime();
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
                  {incomeArray.length > 0 ? (
                    <div className="tb_net">
                      <h3 className="title">Income List</h3>
                      {incomeArray.map((x, index) => {
                        return (
                          <div className="sng_vt" key={key_()}>
                            <div className="mn_ct_">
                              <div className="id">{index + 1}</div>
                              <div className="cont__r">
                                <p className="amunt_ green_">
                                  {"$" + x.amount}
                                </p>
                                <h2 className="title_">{x.title}</h2>
                              </div>
                            </div>
                            <div className="tb_icn__">
                              <button className="bx_btn ">
                                <svg
                                  class="icn__i yellow_"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                                >
                                  <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path>
                                  <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"></path>
                                </svg>
                                {/* <img class="icn__i" src={pen} alt="" /> */}
                              </button>
                              <button className="bx_btn ">
                                <svg
                                  class="icn__i red_"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                                >
                                  <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"></path>
                                  <path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"></path>
                                  <path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* expense */}
                <div className="tbr__">
                  {expenseArray.length > 0 ? (
                    <div className="tb_net">
                      <h3 className="title">Expense List</h3>
                      {expenseArray.map((x, index) => {
                        return (
                          <div className="sng_vt" key={key_()}>
                            <div className="mn_ct_">
                              <div className="id">{index + 1}</div>
                              <div className="cont__r">
                                <p className="amunt_ red_">{"$" + x.amount}</p>
                                <h2 className="title_">{x.title}</h2>
                              </div>
                            </div>
                            <div className="tb_icn__">
                              <button className="bx_btn ">
                                <svg
                                  class="icn__i yellow_"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                                >
                                  <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path>
                                  <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"></path>
                                </svg>
                                {/* <img class="icn__i" src={pen} alt="" /> */}
                              </button>
                              <button className="bx_btn ">
                                <svg
                                  class="icn__i red_"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                                >
                                  <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"></path>
                                  <path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"></path>
                                  <path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
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
