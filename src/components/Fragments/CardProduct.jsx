import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-900 border border-blue-500 rounded-lg shadow-sm mx-2 flex flex-col justify-between mb-3">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt=""
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { name, children, id } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white text-start mb-2 uppercase">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)} ...</p>
      </Link>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="text-xl font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to chart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
