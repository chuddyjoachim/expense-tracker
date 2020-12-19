import React from "react";

export default function Listarray({ array, editFunc, deleteFunc }) {
  return (
    <>
      {array.length > 0 ? (
        <div className="tb_net">
          <h3 className="title">Income List</h3>

          {array.map((x, index) => {
            return (
              <div className="sng_vt" key={x.key}>
                <div className="mn_ct_">
                  <div className="id">{index + 1}</div>
                  <div className="cont__r">
                    <p className="amunt_ green_">{"$" + x.amount}</p>
                    <h2 className="title_">{x.title}</h2>
                  </div>
                </div>
                <div className="tb_icn__">
                  <button
                    className="bx_btn "
                    onClick={() => {
                      editFunc(x.key);
                    }}
                  >
                    <svg
                      className="icn__i yellow_"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="../../external.html?link=http://www.w3.org/2000/svg"
                    >
                      <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path>
                      <path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"></path>
                    </svg>
                  </button>
                  <button
                    className="bx_btn"
                    onClick={() => {
                      deleteFunc(x.key);
                    }}
                  >
                    <svg
                      className="icn__i red_"
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
    </>
  );
}
