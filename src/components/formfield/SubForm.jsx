import React,{useState} from "react";
import "./Subform.scss";

let initialState = 0;
export  function SubForm({title,btnColor,amt,tle,setArr}) {
  return (
    <>
      <form id="form__" action="">
        <div className="wrapper">
          <h3 className="title">{title}</h3>
          <div className="inp_bx">
            <input type="number" name="" placeholder="Amount" id="" 
            onChange={(e)=>{
              amt(e)
            }}
              />
          </div>
          <div className="inp_bx">
            <input type="text" name="" placeholder="Detail" id="" 
            onChange={(e)=>{
              tle(e)
            }}
              />
          </div>
          <div className="submt_bx">
            <button className={`submnt_btn ${btnColor}`} type="submit" 
            onClick={(e)=>{
              e.preventDefault()
              setArr()
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