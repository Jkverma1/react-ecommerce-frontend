import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import watch from "./images/watch.jpg";
import "./style.css";
import Container from "./Container";
const ProductPage = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,

    img: watch,
  };

  return (
    <>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img src={watch} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={watch} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={watch} className="img-fluid" alt="" />
              </div>
              <div>
                <img src={watch} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
