

// import React from 'react';
// // import '../Styles/ProductList.css';
// function ProductList({ products, addToCart }) {
//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div key={product.id} className="product-item">
//           <h4>{product.name}</h4>
//           <p>Price: Rs{product.price}</p>
//           <p>Color: {product.color}</p>
//           <p>Gender: {product.gender}</p>
//           <p>Type: {product.type}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
// ProductList.js
import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div className="product-containers">
            {products.map((product) => (
                <div key={product.id} className="product-cards">
                <div className='product-image'>


               
                    <h3 className='product-name'>{product.name}</h3> </div>
                    {/* <p>Color: {product.color}</p>
                    <p>Gender: {product.gender}</p> */}
                    <div className='product-details'><p>Rs {product.price}</p>
                    <button onClick={() => addToCart(product)} className='add-to-cart'>Add to Cart</button></div>
                    
                </div>
            ))}
        </div>
    );
}

export default ProductList;
