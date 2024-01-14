import { Fragment, useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/productservice";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });
  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title} id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-blue-600 text-start mb-2">
            Chart
          </h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
