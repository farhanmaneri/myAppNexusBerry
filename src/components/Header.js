import React from 'react'

export default function Header({cartCounter}) {
  return (
    <di className="container">

    <nav className="navbar navbar-expand-lg bg-white flex my-2 ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">KFC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">DELIVERY</a>
        </li>       
       
        <li className="nav-item">
          <a className="nav-link " >PICKUP</a>
        </li>
      </ul>
     
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Cart({cartCounter})
      </button> <button className="btn btn-outline-success" type="submit">LOGIN</button>
    </div>
  </div>
</nav>
    </di>
  )
};
