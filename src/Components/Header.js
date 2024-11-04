// import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// const Header = () => {
//   return (
//     <header className="header">
//     <h1>TeeRex Store</h1>
//     <div className="cart-icon">
//       <span>Products</span>
//       <Link to="/cart"><span role="img" aria-label="cart">🛒</span></Link>
//     </div>
//   </header>
//   )
// }

// export default Header
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleCartClick = (e) => {
    e.preventDefault(); // Prevents default anchor tag behavior
    navigate('/cart'); // Navigates to the cart route
  };

  return (
    <header className="header">
      <h1>TeeRex Store</h1>
      <div className="cart-icon">
        <span>Products</span>
        <a href="/cart" onClick={handleCartClick} role="button" aria-label="cart">
          🛒
        </a>
      </div>
    </header>
  );
};

export default Header;
