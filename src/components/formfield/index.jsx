import React, { useState } from "react";
import "./Subform.scss";

export default function formfield({
  title,
  btnColor,
  amt,
  tle,
  setArr,
  Amount,
  Title,
  amountError,
  TitleError,
}) {
  return (
    <>
      <form id="form__" action="">
        <div className="wrapper">
          <h3 className="title">{title}</h3>
          <div className="inp_bx">
            <input
              type="number"
              value={Amount}
              name=""
              placeholder="Amount"
              id=""
              onChange={(e) => {
                amt(e);
              }}
            />
          </div>
          {amountError === true ? (
            <>
              <p className="form_error">Please Input Amount</p>
            </>
          ) : (
            ""
          )}
          <div className="inp_bx">
            <input
              type="text"
              value={Title}
              name=""
              placeholder="Detail"
              id=""
              onChange={(e) => {
                tle(e);
              }}
            />
          </div>
          {TitleError === true ? (
            <>
              <p className="form_error">Please Input Title</p>
            </>
          ) : (
            ""
          )}
          <div className="submt_bx">
            <button
              className={`submnt_btn ${btnColor}`}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setArr();
              }}
            >
              ADD
            </button>
          </div>
          {/* <h2>{incomeAmount}</h2>
  <h2>{incomeTitle}</h2> */}
        </div>
      </form>
    </>
  );
}
