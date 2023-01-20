import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="container">
      <div className="row">
        {state.map((x) => (
          <>
            <div className="col-6 mb-4">
              <img src={x.image} alt="" height={300} width={300} />
            </div>

            <div className="col-6">
              <h3>{x.title}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
