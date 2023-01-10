import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createItemAction } from "../../../redux/actions/itemAction";

import "./newItem.scss";

const NewItem = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const [productName, setProductName] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const myform = new FormData();
    myform.set("itemNumber", itemNumber);
    myform.set("productName", productName);
    myform.set("images", images);
    myform.set("price", price);

    images.forEach((image) => {
      myform.append("images", image);
    });

    dispatch(createItemAction(myform));
  };

  const imageHandler = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
  };

  return (<>
    <section className="largeContainer allSection">
      <div className=" smallSection allSectionContainer">
        <div>
         <h2>CREATE NEW PRODUCT</h2>
        </div>

        <div className="productForm">
          <form onSubmit={formSubmitHandler} encType="multipart/form-data" className="productMainForm" >
            <input
              type="number"
              onChange={(e) => {
                setItemNumber(e.target.value);
              }}
              placeholder="Product Number"
            />
            <input
              type="text"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              placeholder="Product Name"
              value={productName}
            />
            <input
              type="file"
              name="profile"
              accept="image/*"
              onChange={imageHandler}
              multiple
            />
            <input
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price"
            />
          </form>
        </div>
        <div className="submitBtn"><button onClick={formSubmitHandler}>Create</button></div>
      </div>
    </section>
    </>
  );
};

export default NewItem;
