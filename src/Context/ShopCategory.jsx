import React from "react";
import { useParams } from "react-router-dom";
import all_product from "../Assets/all_product";

function ShopCategory() {
  const { categoryName } = useParams();
  const products = all_product.filter(
    (product) => product.category === categoryName
  );

  return (
    <div>
      <h1>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category
      </h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>New Price: ${product.new_price}</p>
            <p>Old Price: ${product.old_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
