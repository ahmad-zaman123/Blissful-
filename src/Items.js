import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";

const Items = ({ img, product_name, newprice, oldprice, discount }) => {
  return (
    <div className="card mx-auto border-0 hover:shadow-xl" style={{ width: "13rem" }}>
      <div className="position-relative">
        {/* Product Image */}
        <img className="card-img-top" src={img} alt={product_name} />

        {/* Sale Badge */}
        {discount && (
          <span
            className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
            style={{ fontSize: "12px", borderRadius: "3px", margin: "8px" }}
          >
            Sale {discount}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body d-flex justify-content-between align-items-start">

      <div className="title text-dark fw-semibold" style={{ width: "200px",fontSize:"13px",paddingTop:"2px",marginLeftLeft:"-10px" }}>
        {/* Product Name */}

            {product_name}
                
        </div>

        {/* Price Section */}
        <div className="d-flex flex-column align-items-end justify-content-start" style={{ width: "220px" }}>
          {oldprice && (
            <span className="text-muted text-decoration-line-through fw-bold text-right" style={{ fontSize: "15px" }}>
              Rs. {oldprice}
            </span>
          )}
          <span className="fw-bold text-right" style={{ color: "#f9a8d4", fontSize: "16px" }}>
            Rs. {newprice}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}

      <div className="d-flex flex-column align-items-center justify-content-center" style={{paddingBottom:"7px"}}  >
      <Button 
                      className="fw-bold d-flex align-items-center justify-content-between text-white mt-auto px-3"
                      style={{ backgroundColor: "#f8a8c9", border: "none", padding: "10px", width: "95%",height:"30px" }}
                    >
                      <FaShoppingCart color="white" size={16} />
                      <span className="flex-grow-1 text-right" style={{fontSize:"13px"}}>ADD TO CART</span>
                    </Button>

      </div> 

    </div>
  );
};


export default Items;
