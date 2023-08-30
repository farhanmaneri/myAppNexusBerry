import React from "react";

export default function KfcCard({ item, increment }) {
  return (

    <>
      <div className="col">
        <div className="card bg-dark text-white" style={{ width: "15rem" }}>
          <img src={item.image} className="card-img-top" style={{height:'13rem'}} alt="kfc card" />
          <div className="card-body ">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              {item.desc}
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
}
