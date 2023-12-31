import React from "react";

export default function KfcCard({ item, increment }) {
  return (

    <>
      <div className="col my-3">
        <div className="card bg-dark text-white" style={{ width: "290px" }}>
          <img src={item.image} className="card-img-top" style={{height:'290px'}} alt="kfc card" />
          <div className="card-body ">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              {item.disc}
            </p>
<h5 style={{ fontWeight:'bold' }}>Rs. {item.price}</h5>
            <button className="btn btn-primary" onClick={increment}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
};
