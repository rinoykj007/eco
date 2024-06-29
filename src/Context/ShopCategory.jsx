import React from "react";
import { useParams } from "react-router-dom";
import all_product from "../Assets/all_product";
import "./ShopCategory.css";

function ShopCategory() {
  const { categoryName } = useParams();
  const products = all_product.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="Products">
      <h1>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category
      </h1>
      <div className="productList">
        {products.map((product) => (
          <div key={product.id} className="product-Item">
            <div className="image-conatiner">
              <Link to={`/product/${product.id}`}>
                <img
                  className="container-img "
                  src={product.image}
                  alt={product.name}
                />
              </Link>
            </div>
            <div className="product-Item-details">
              <h5>{product.name}</h5>
              <p>New Price: ${product.new_price}</p>
              <p>Old Price: ${product.old_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
