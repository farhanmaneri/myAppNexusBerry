import React from "react";

export default function KfcCard({item, increment}) {
  return (
    <div className="col">
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image} className="card-img-top" alt="kfc card" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
            {item.desc}
            <span className="badge text-bg-info">Rs. {item.price}</span>
        </p>
        
        <button className="btn btn-primary" onClick={increment}>
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
