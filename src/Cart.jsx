import React, { useState, useEffect } from "react";
import axios from "axios";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function Cartsample() {
  var [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((res) => {
      setCart([...res.data.carts[0].products]);
    });
  }, []);

  function incQut(xyz) {
    console.log(xyz)
    var temp= [...cart]
    temp=temp.map((titem)=>{
        if(titem.id==xyz.id){
            titem.quantity=titem.quantity+1
        }
        return titem
    })
setCart([...temp])

  }

  function decQut(xyz) {
    console.log(xyz)
    var temp= [...cart]
    temp=temp.map((titem)=>{
        if(titem.id==xyz.id){
            titem.quantity=titem.quantity-1
        }
        return titem
    })
setCart([...temp])

  }
  return (
    <div className="main">
      <h1 className="text-center text-warning m-5 heading ">SHOPPING CART</h1>
      <div className="m-5">
{cart.map((a) => {
          return (
            <div className="d-flex justify-content-around align-items-center  p-3 m-2  rounded shadow">
                <img className="rounded" width={100} src={a.thumbnail} />
                <b>{a.title.slice(1,20)}</b>
                <b>Price : &#8377; {a.price}</b>
                 <div>
                 <button  onClick={()=>{incQut(a)}} className="btn btn-warning"> + </button>
                  <b>&nbsp; {a.quantity} &nbsp;</b>
                  {a.quantity>1?(<button onClick={()=>{decQut(a)}} className="btn btn-primary"> - </button>):
                  (<button disabled  className="btn btn-primary"> - </button>)}
                 
                 </div>
                  <b>Each Qty Total   <b className="text-danger"> &#8377; {a.price * a.quantity}</b></b>                

            </div>  
          );
        })}
        <br />
        <h1 className="text-center bg-warning p-2 rounded">
          <span className="text-light">TOTAL :</span>  <b className="text-success">&#8377; {cart?.reduce((sum, item) => {return sum + (item.price * item.quantity)}, 0)}</b>
        </h1>
      </div>
    </div>
  );
}

export default Cartsample;