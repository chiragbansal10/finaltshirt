// // import React from 'react';

// // function CartItem({ item, updateQuantity, removeFromCart }) {
// //   return (
// //     <div className="cart-item">
// //     <div className='product-cart-image'></div>
// //     <div className='cart-item-info'>
// //     <h4>{item.name}</h4>
// //     <p>Rs {item.price}</p>
// //     </div>
     
// //       <label>
// //         Qty:
// //         <select value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))}>
// //           {[...Array(10).keys()].map(i => (
// //             <option key={i + 1} value={i + 1}>{i + 1}</option>
// //           ))}
// //         </select>
// //       </label>
// //       <button onClick={() => removeFromCart(item.id)} className='delete-button'>Delete</button>
// //     </div>
// //   );
// // }

// // export default CartItem;
// // import React from 'react';
// // import '../Styles/CartItem.css';
// // function CartItem({ item, updateQuantity, removeFromCart }) {
// //   return (
// //     <div className="app-container">
// //     <div className="cart-container">
// //         <div className="header">
// //             <h1 className="title">TeeRex Store</h1>
// //             <div className="header-links">
// //                 <a href="#" className="products-link">Products</a>
// //                 <div className="cart-icon">
// //                     <i className="fas fa-shopping-cart"></i>
// //                     <span className="cart-count">6</span>
// //                 </div>
// //             </div>
// //         </div>
// //         <div className="cart-content">
// //             <h2 className="cart-title">Shopping Cart</h2>
// //             <div className="cart-item">
// //                 <div className="item-info">
// //                     <div className="item-image"></div>
// //                     <div className="item-details">
// //                         <p className="item-name">Pink Round</p>
// //                         <p className="item-price">Rs 250</p>
// //                     </div>
// //                 </div>
// //                 <div className="item-actions">
// //                     <select className="quantity-select">
// //                         <option>Qty 2</option>
// //                     </select>
// //                     <button className="delete-button">Delete</button>
// //                 </div>
// //             </div>
// //             <div className="cart-item">
// //                 <div className="item-info">
// //                     <div className="item-image"></div>
// //                     <div className="item-details">
// //                         <p className="item-name">Pink Polo</p>
// //                         <p className="item-price">Rs 350</p>
// //                     </div>
// //                 </div>
// //                 <div className="item-actions">
// //                     <select className="quantity-select">
// //                         <option>Qty 2</option>
// //                     </select>
// //                     <button className="delete-button">Delete</button>
// //                 </div>
// //             </div>
// //             <div className="cart-item">
// //                 <div className="item-info">
// //                     <div className="item-image"></div>
// //                     <div className="item-details">
// //                         <p className="item-name">Black Hoodie</p>
// //                         <p className="item-price">Rs 500</p>
// //                     </div>
// //                 </div>
// //                 <div className="item-actions">
// //                     <select className="quantity-select">
// //                         <option>Qty 2</option>
// //                     </select>
// //                     <button className="delete-button">Delete</button>
// //                 </div>
// //             </div>
// //             <div className="cart-total">
// //                 <p className="total-label">Total amount</p>
// //                 <p className="total-amount">Rs. 2200</p>
// //             </div>
// //         </div>
// //     </div>
// // </div>
// //   );
// // }

// // export default CartItem;

// // import React from 'react';
// // import '../Styles/CartItem.css';

// // function CartItem({ item, updateQuantity, removeFromCart }) {
// //   return (
// //     <div className="cart-item">
// //       <div className='product-cart-image'></div>
// //       <div className='cart-item-info'>
// //         <h4>{item.name}</h4>
// //         <p>Rs {item.price}</p>
// //       </div>
// //       <label>
        
// //         <select className='quantity-label'
          
         
// //         >
// //           {[...Array(10).keys()].map(i => (
// //             <option > Qty: {i + 1} +</option>
// //           ))}
// //         </select>
// //       </label>
// //       <button 
// //         onClick={() => removeFromCart(item.id)} 
// //         className='delete-button'
// //       >
// //         Delete
// //       </button>
// //     </div>
// //   );
// // }

// // export default CartItem;
// import React from 'react';
// import '../Styles/CartItem.css';

// function CartItem({ item, updateQuantity, removeFromCart }) {
//   return (
//     <div className="cart-item">
//       <div className='product-cart-image'></div>
//       <div className='cart-item-info'>
//         <h4>{item.name}</h4>
//         <p>Rs {item.price}</p>
//       </div>
//       <label>
//         <select 
//           className='quantity-label' 
//           value={item.quantity} // Set selected quantity from store
//           disabled // Make select non-editable
//         >
//           {[...Array(10).keys()].map(i => (
//             <option key={i} value={i + 1}>
//               Qty: {i + 1}
//             </option>
//           ))}
//         </select>
//       </label>
//       <button 
//         onClick={() => removeFromCart(item.id)} 
//         className='delete-button'
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

// export default CartItem;
// import React from 'react';
// import '../Styles/CartItem.css';
// import Header from './Header';

// function CartItem({ item, updateQuantity, removeFromCart }) {
//   return (
//     <>

//     {/* <Header/> */}
//     <div className="cart-item">
//       <div className='product-cart-image'></div>
//       <div className='cart-item-info'>
//         <h4>{item.name}</h4>
//         <p>Rs {item.price}</p>
//       </div>
//       <span className='quantity-label'>
//         Qty: {item.quantity} +
//       </span>
//       <button 
//         onClick={() => removeFromCart(item.id)} 
//         className='delete-button'
//       >
//         Delete
//       </button>
//     </div></>
//   );
// }

// export default CartItem;
// CartItem.js
import React from 'react';
import '../Styles/CartItem.css';

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className='product-cart-image'>
      <img src={item.image} alt={item.name} className="cart-item-image" />

      </div>
      <div className='cart-item-info'>
        <h4>{item.name}</h4>
        <p>Rs {item.price}</p>
      </div>
      <span className='quantity-label'>
        Qty: {item.quantity}
        <button 
        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
        className='quantity-button'
      >
        +
      </button>
      </span>
      
    
      <button 
        onClick={() => removeFromCart(item.id)} 
        className='delete-button'
      >
        Delete
      </button>
    </div>
  );
}

export default CartItem;
