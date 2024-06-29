import { useParams } from "react-router-dom";

function Product() {
  const { productID } = useParams();
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default Product;
