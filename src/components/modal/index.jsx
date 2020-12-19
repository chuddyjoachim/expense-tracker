import React from "react";
import "./modal.scss";

export default function Modal({ condition, delFunc, delNotFunc }) {
  return (
    <>
      {condition ? (
        <div className="shadow_pop">
          <div className="cenricQuest">
            <h3 className="quest">Are you sure you want to delete this item</h3>
            <div className="btn_holder">
              <button
                className="btn_popbtn green__"
                onClick={() => {
                  delFunc();
                }}
              >
                Yes
              </button>
              <button
                className="btn_popbtn red__"
                onClick={() => {
                  delNotFunc();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
