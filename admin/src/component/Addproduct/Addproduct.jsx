import { useState } from "react";
import "./Addproduct.css";
import upload_area from "../../assets/upload_area.svg";

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category:"women",
    new_price: "",
    old_price: ""
  });

  const imageHandle = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandle = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);

    try {
      let response = await fetch('https://reactjs-e-comer-backend.onrender.com/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      let responseData = await response.json();

      if (response.ok) {
        product.image = responseData.image_url;
        console.log(product);

        let addProductResponse = await fetch('https://reactjs-e-comer-backend.onrender.com/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        let addProductData = await addProductResponse.json();
        console.log('Add product response:', addProductData);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <>
      <div className='addproduct'>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandle} type="text" name='name' placeholder='type here' />
        </div>
        <div className="addproduct-price">
          <div className='addproduct-itemfield'>
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandle} type="text" name='old_price' placeholder='type here' />
          </div>
          <div className='addproduct-itemfield'>
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandle} type="text" name='new_price' placeholder='type here' />
          </div>
        </div>
        <div className='addproduct-itemfield'>
          <p>Category</p>
          <select value={productDetails.category} onChange={changeHandle} name="category" className='addproduct-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='addproduct-thumbnail-img' />
          </label>
          <input onChange={imageHandle} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={addProduct} className='addproduct-btn'>Add</button>
      </div>
    </>
  );
};

export default Addproduct;
