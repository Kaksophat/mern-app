import { useEffect, useState } from "react";
import "./Listproduct.css";
import cross_icon from "../../assets/cross_icon.png";

const Listproduct = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:3000/allproduct');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      

     // Check if data contains the array
      if (Array.isArray(data)) {
        setAllproduct(data);
      } else if (Array.isArray(data.products)) {
        // Adjust this condition based on your actual data structure
        setAllproduct(data.products);
      } else {
        throw new Error("Fetched data is not an array");
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []); // Empty dependency array ensures this runs only once
  const remove_product= async (_id)=>{
    await fetch('http://localhost:3000/removeproduct',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id:_id}),
    })
    await fetchInfo()
  }

 
  console.log("Rendered products:", allproduct); // Log products being rendered

  return (
    <div className="list-product">
      <h1>List All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproduct.map((product, index) => (
          <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt={product.name} className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product._id)}} src={cross_icon} alt="Remove" className="listproduct-remove-icon" />
          </div>
          <hr />
          </>
        ))}

      </div>
    </div>
  );
};

export default Listproduct;
