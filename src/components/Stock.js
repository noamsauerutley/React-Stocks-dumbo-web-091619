import React from 'react'
// import { prependOnceListener } from 'cluster';

const Stock = (props) => {

  let handleClick = (e) =>{
    props.addToPortfolio(props.stock)
  }

return (
  <div>
    <div className="card" >
      <div className="card-body" onClick={handleClick}>
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>


  </div>)
};

export default Stock
