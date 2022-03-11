import React from "react";
import ProductCard from "../../components/common/ProductCard";

const ProductsArry = () => {
  return (
    <div className="grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductsArry;
