import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcart, deletecart } from "../redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const kurang = (props) => {
    dispatch(deletecart(props));
    console.log(props);
  };

  const tambah = (props) => {
    dispatch(addcart(props));
    console.log(props);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className=" d-flex justify-content-end  ">
          <div className="card col-md-3 position-absolute" width={40}>
             <h6 className="text-center mt-2">Transaksi</h6>
             <h6 className="text-center mb-2">Nama Product Yang Dipesan :</h6>
             {state.map((x)=>{
              let jumlah = 0
              // console.log(jumlah +=x.addcart * x.qty)
              return(
                <>
                <ul>
                  <li>{x.title}</li>
                </ul>
                </>
              )
             })}
             <h6 className="text-center">Harga</h6>
             <h6 className="text-center">$ {}</h6>
            </div>  
        </div>  
        {state.map((x) => (
          <>
            <div className="col-md-4 m-3">
              <img src={x.image} alt="" height={300} width={300} />
            </div>

            <div className="col-md-4 mb-4 mt-4">
              <h3 className="mt-3 mb-3">{x.title}</h3>
              <h6>Jumlah Produk : {x.qty}</h6>
              <h6 className="mb-3 mt-3">Harga Perunit : $ {x.price}</h6>
              <h6 className="mb-4 mt-3" style={{color:"red"}}>Harga Barang : ${x.qty * x.price}</h6>
              <button
                className="btn btn-outline-dark "
                onClick={() => kurang(x)}
              >
                kurang
              </button>
              <button
                className="btn btn-outline-dark mx-4"
                onClick={() => tambah(x)}
              >
                tambah
              </button>
            </div>
          </>
        ))}
      </div>

    </div>
  );
};

export default Cart;
