// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import ImageZoom from "react-image-zoom";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

// const ProductDetails = ({ match }) => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${match.params.id}`).then((response) => {
//       setProduct(response.data);
//     });
//   }, [match.params.id]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <div>
//         {product.images.map((img, index) => (
//         <zoom>
//           <ImageZoom key={index} img={img} zoomScale={2} />
//           </zoom>
//         ))}
//       </div>
//       <p>{product.description}</p>
//       <p><strong>Specifications:</strong> {product.specifications}</p>
//       <p><strong>Price:</strong> ${product.price}</p>
//       <p><strong>Offers:</strong> {product.offers}</p>
//       <p><strong>EMI Options:</strong> {product.emiOptions}</p>

//       <h3>Available Dealers</h3>
//       {product.dealers.map((dealer) => (
//         <div key={dealer._id}>
//           <p>{dealer.name}</p>
//           <p>{dealer.address}</p>
//           <p>Contact: {dealer.contact}</p>
//         </div>
//       ))}

//       <h3>Customer Reviews</h3>
//       {product.ratings.map((review, index) => (
//         <div key={index}>
//           <p><strong>{review.user}</strong>: {review.rating} ★</p>
//           <p>{review.review}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Zoom from "react-medium-image-zoom"; // ✅ Correct import
import "react-medium-image-zoom/dist/styles.css"; // ✅ Import styles

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${match.params.id}`).then((response) => {
      setProduct(response.data);
    });
  }, [match.params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      
      <div>
        {product.images.map((img, index) => (
          <Zoom key={index}>
            <img src={img} alt="Product" width="300px" />
          </Zoom>
        ))}
      </div>

      <p>{product.description}</p>
      <p><strong>Specifications:</strong> {product.specifications}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Offers:</strong> {product.offers}</p>
      <p><strong>EMI Options:</strong> {product.emiOptions}</p>

      <h3>Available Dealers</h3>
      {product.dealers.map((dealer) => (
        <div key={dealer._id}>
          <p>{dealer.name}</p>
          <p>{dealer.address}</p>
          <p>Contact: {dealer.contact}</p>
        </div>
      ))}

      <h3>Customer Reviews</h3>
      {product.ratings.map((review, index) => (
        <div key={index}>
          <p><strong>{review.user}</strong>: {review.rating} ★</p>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
