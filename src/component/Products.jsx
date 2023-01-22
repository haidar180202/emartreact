import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  const componentMounted = true;

  const filterProduct = (cat) =>{
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (componentMounted) {
        setLoading(false);
        setData(response.data);
        setFilter(response.data);
        console.log(response.data);
      }

      // try {
      //     setLoading(true);
      //     const response = await axios.get('https://fakestoreapi.com/products');
      //     setData(response.data.data);
      //     console.log(response);
      //   } catch (error) {
      //     console.log(error);
      //   } finally {
      //     setLoading(false);
      //   }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=> setFilter(data)} >All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothes</button>
          <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothes</button>
          <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center ">
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt="..."
                    height={250}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    < Link to={`/products/${product.id}`} class="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
