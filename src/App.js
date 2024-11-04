
// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import ProductList from './Components/ProductList';
// // // import Cart from './Components/Cart';
// // // import Sidebar from './Components/Sidebar';
// // // import './App.css';
// // // import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// // // import Header from './Components/Header';

// // // function App() {
// // //   const [products, setProducts] = useState([]);
// // //   const [filteredProducts, setFilteredProducts] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [filters, setFilters] = useState({
// // //     gender: [],
// // //     color: [],
// // //     type: [],
// // //     price: []
// // //   });

// // //   useEffect(() => {
// // //     axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
// // //       .then(response => {
// // //         setProducts(response.data);
// // //         setFilteredProducts(response.data);
// // //       })
// // //       .catch(error => console.error('Error fetching products:', error));
// // //   }, []);

// // //   useEffect(() => {
// // //     const savedCart = JSON.parse(localStorage.getItem('cart'));
// // //     if (savedCart) setCart(savedCart);
// // //   }, []);

// // //   useEffect(() => {
// // //     localStorage.setItem('cart', JSON.stringify(cart));
// // //   }, [cart]);

// // //   const handleFilterChange = (category, value) => {
// // //     setFilters(prevFilters => {
// // //       const isChecked = prevFilters[category].includes(value);
// // //       const updatedCategory = isChecked
// // //         ? prevFilters[category].filter(item => item !== value)
// // //         : [...prevFilters[category], value];
// // //       return { ...prevFilters, [category]: updatedCategory };
// // //     });
// // //   };

// // //   const applyFilters = () => {
// // //     let filtered = products;
// // //     if (filters.color && filters.color.length > 0) {
// // //       filtered = filtered.filter(product => filters.color.includes(product.color));
// // //     }
// // //     if (filters.gender && filters.gender.length > 0) {
// // //       filtered = filtered.filter(product => filters.gender.includes(product.gender));
// // //     }
// // //     if (filters.price && filters.price.length > 0) {
// // //       filtered = filtered.filter(product => {
// // //         const price = product.price;
// // //         return filters.price.some(range => {
// // //           if (range === '0-Rs250') return price <= 250;
// // //           if (range === 'Rs251-450') return price > 250 && price <= 450;
// // //           if (range === 'Rs450') return price > 450;
// // //           return false;
// // //         });
// // //       });
// // //     }
// // //     if (filters.type && filters.type.length > 0) {
// // //       filtered = filtered.filter(product => filters.type.includes(product.type));
// // //     }
// // //     setFilteredProducts(filtered);
// // //   };

// // //   useEffect(() => {
// // //     applyFilters();
// // //   }, [filters, products]);

// // //   // const addToCart = (product) => {
// // //   //   setCart(prevCart => {
// // //   //     const itemExists = prevCart.find(item => item.id === product.id);
// // //   //     if (itemExists) {
// // //   //       if (itemExists.quantity < product.stock) {
// // //   //         return prevCart.map(item =>
// // //   //           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// // //   //         );
// // //   //        }
// // //   //        // else {
// // //   //       //   alert('Cannot add more than available stock');
// // //   //       //   return prevCart;
// // //   //       // }
// // //   //     }
// // //   //     return [...prevCart, { ...product, quantity: 1 }];
// // //   //   });
// // //   // };
// // //   const addToCart = (product) => {
// // //     setCart(prevCart => {
// // //       const itemExists = prevCart.find(item => item.id === product.id);
  
// // //       if (itemExists) {
// // //         // If item exists in the cart and its quantity is less than the stock, increase quantity
// // //         if (itemExists.quantity < product.stock) {
// // //           return prevCart.map(item =>
// // //             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// // //           );
// // //         }
// // //         //  else {
// // //         //   // Show an alert if trying to add more than available stock
// // //         //   alert('Cannot add more than available stock');
// // //         //   return prevCart;
// // //         // }
// // //       }
  
// // //       // If item does not exist in the cart, add it with quantity of 1
// // //       return [...prevCart, { ...product, quantity: 1 }];
// // //     });
// // //   };
  

// // //   const removeFromCart = (productId) => {
// // //     setCart(prevCart => prevCart.filter(item => item.id !== productId));
// // //   };

// // //   const updateQuantity = (productId, quantity) => {
// // //     setCart(prevCart =>
// // //       prevCart.map(item =>
// // //         item.id === productId ? { ...item, quantity: quantity } : item
// // //       )
// // //     );
// // //   };

// // //   // const handleSearch = () => {
// // //   //   const searchedProducts = products.filter(
// // //   //     product =>
// // //   //       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //   //       product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //   //       product.type.toLowerCase().includes(searchQuery.toLowerCase())
// // //   //   );
// // //   //   setFilteredProducts(searchedProducts);
// // //   // };
// // //   useEffect(() => {
// // //   if (searchQuery.trim() === '') {
// // //     setFilteredProducts(products);
// // //   } else {
// // //     const searchedProducts = products.filter(
// // //       product =>
// // //         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //         product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //         product.type.toLowerCase().includes(searchQuery.toLowerCase())
// // //     );
// // //     setFilteredProducts(searchedProducts);
// // //   }
// // // }, [searchQuery, products]);
// // //   const handleSearch = () => {
// // //     if (searchQuery.trim() === '') {
// // //       setFilteredProducts(products);
// // //     } else {
// // //       const searchedProducts = products.filter(
// // //         product =>
// // //           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //           product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //           product.type.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //       setFilteredProducts(searchedProducts);
// // //     }
// // //   };
  

// // //   const MainContent = () => {
// // //     return (
// // //       <div className="app">
// // //         {/* <header className="header">
// // //           <h1>TeeRex Store</h1>
// // //           <div className="cart-icon">
// // //             <span>Products</span>
// // //             <Link to="/cart"><span role="img" aria-label="cart">🛒</span></Link>
// // //           </div>
// // //         </header> */}
// // //         <Header/>
// // //         <div className="main-content">
// // //           <Sidebar filters={filters} onFilterChange={handleFilterChange} />
// // //           <div className="product-container">
// // //             <div className="search-bar">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search for products..."
// // //                 className='search-input'
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
// // //               />
// // //               <button className="search-button-container" onClick={handleSearch}>🔍</button>
// // //             </div>
// // //             <ProductList products={filteredProducts} addToCart={addToCart} />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<MainContent />} />
// // //         <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // // App.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductList from './Components/ProductList';
// // import Cart from './Components/Cart';
// // import Sidebar from './Components/Sidebar';
// // import './App.css';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import Header from './Components/Header';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [filters, setFilters] = useState({
// //     gender: [],
// //     color: [],
// //     type: [],
// //     price: []
// //   });

// //   useEffect(() => {
// //     axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
// //       .then(response => {
// //         setProducts(response.data);
// //         setFilteredProducts(response.data);
// //       })
// //       .catch(error => console.error('Error fetching products:', error));
// //   }, []);

// //   useEffect(() => {
// //     const savedCart = JSON.parse(localStorage.getItem('cart'));
// //     if (savedCart) setCart(savedCart);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //   }, [cart]);

// //   const addToCart = (product) => {
// //     setCart(prevCart => {
// //       const itemExists = prevCart.find(item => item.id === product.id);
  
// //       if (itemExists) {
// //         // If item exists in the cart, increase quantity
// //         return prevCart.map(item =>
// //           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //       }
  
// //       // If item does not exist in the cart, add it with quantity of 1
// //       return [...prevCart, { ...product, quantity: 1 }];
// //     });
// //   };

// //   const removeFromCart = (productId) => {
// //     setCart(prevCart => prevCart.filter(item => item.id !== productId));
// //   };

// //   const updateQuantity = (productId, quantity) => {
// //     setCart(prevCart =>
// //       prevCart.map(item =>
// //         item.id === productId ? { ...item, quantity: quantity } : item
// //       )
// //     );
// //   };
// //   const handleFilterChange = (category, value) => {
// //     setFilters(prevFilters => {
// //       const isChecked = prevFilters[category].includes(value);
// //       const updatedCategory = isChecked
// //         ? prevFilters[category].filter(item => item !== value)
// //         : [...prevFilters[category], value];
// //       return { ...prevFilters, [category]: updatedCategory };
// //     });
// //   };
// //   const applyFilters = () => {
// //     let filtered = products;
// //     if (filters.color && filters.color.length > 0) {
// //       filtered = filtered.filter(product => filters.color.includes(product.color));
// //     }
// //     if (filters.gender && filters.gender.length > 0) {
// //       filtered = filtered.filter(product => filters.gender.includes(product.gender));
// //     }
// //     if (filters.price && filters.price.length > 0) {
// //       filtered = filtered.filter(product => {
// //         const price = product.price;
// //         return filters.price.some(range => {
// //           if (range === '0-Rs250') return price <= 250;
// //           if (range === 'Rs251-450') return price > 250 && price <= 450;
// //           if (range === 'Rs450') return price > 450;
// //           return false;
// //         });
// //       });
// //     }
// //     if (filters.type && filters.type.length > 0) {
// //       filtered = filtered.filter(product => filters.type.includes(product.type));
// //     }
// //     setFilteredProducts(filtered);
// //   };

// //   useEffect(() => {
// //     applyFilters();
// //   }, [filters, products]);
// //     useEffect(() => {
// //   if (searchQuery.trim() === '') {
// //     setFilteredProducts(products);
// //   } else {
// //     const searchedProducts = products.filter(
// //       product =>
// //         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         product.type.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     setFilteredProducts(searchedProducts);
// //   }
// // }, [searchQuery, products]);

// //   const handleSearch = () => {
// //     if (searchQuery.trim() === '') {
// //       setFilteredProducts(products);
// //     } else {
// //       const searchedProducts = products.filter(
// //         product =>
// //           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           product.type.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredProducts(searchedProducts);
// //     }
// //   };

// //   const MainContent = () => {
// //     return (
// //       <div className="app">
// //         <Header />
// //         <div className="main-content">
// //           <Sidebar filters={filters} onFilterChange={handleFilterChange} />
// //           <div className="product-container">
// //             <div className="search-bar">
// //               <input
// //                 type="text"
// //                 placeholder="Search for products..."
// //                 className='search-input'
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
// //               />
// //               <button className="search-button-container" onClick={handleSearch}>🔍</button>
// //             </div>
// //             <ProductList products={filteredProducts} addToCart={addToCart} />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<MainContent />} />
// //         <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductList from './Components/ProductList';
// import Cart from './Components/Cart';
// import Sidebar from './Components/Sidebar';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     gender: [],
//     color: [],
//     type: [],
//     price: []
//   });

//   useEffect(() => {
//     axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
//       .then(response => {
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     if (savedCart) setCart(savedCart);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const itemExists = prevCart.find(item => item.id === product.id);
//       if (itemExists) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== productId));
//   };

//   const updateQuantity = (productId, quantity) => {
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === productId ? { ...item, quantity: quantity } : item
//       )
//     );
//   };

//   const handleFilterChange = (category, value) => {
//     setFilters(prevFilters => {
//       const isChecked = prevFilters[category].includes(value);
//       const updatedCategory = isChecked
//         ? prevFilters[category].filter(item => item !== value)
//         : [...prevFilters[category], value];
//       return { ...prevFilters, [category]: updatedCategory };
//     });
//   };

//   const applyFilters = () => {
//     let filtered = products;
//     if (filters.color && filters.color.length > 0) {
//       filtered = filtered.filter(product => filters.color.includes(product.color));
//     }
//     if (filters.gender && filters.gender.length > 0) {
//       filtered = filtered.filter(product => filters.gender.includes(product.gender));
//     }
//     if (filters.price && filters.price.length > 0) {
//       filtered = filtered.filter(product => {
//         const price = product.price;
//         return filters.price.some(range => {
//           if (range === '0-Rs250') return price <= 250;
//           if (range === 'Rs251-450') return price > 250 && price <= 450;
//           if (range === 'Rs450') return price > 450;
//           return false;
//         });
//       });
//     }
//     if (filters.type && filters.type.length > 0) {
//       filtered = filtered.filter(product => filters.type.includes(product.type));
//     }
//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, products]);

//   const handleSearch = () => {
//     if (searchQuery.trim() === '') {
//       setFilteredProducts(products);
//     } else {
//       const searchedProducts = products.filter(
//         product =>
//           product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           product.type.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredProducts(searchedProducts);
//     }
//   };

//   const MainContent = () => {
//     return (
//       <div className="app">
//         <Header />
//         <div className="main-content">
//           <Sidebar filters={filters} onFilterChange={handleFilterChange} />
//           <div className="product-container">
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className='search-input'
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//               />
//               <button className="search-button-container" onClick={handleSearch}>Search</button>
//             </div>
//             <ProductList products={filteredProducts} addToCart={addToCart} />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainContent />} />
//         <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Sidebar from './Components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    type: [],
    price: []
  });

  useEffect(() => {
    axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setErrorMessage(''); 
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      const newQuantity = itemExists ? itemExists.quantity + 1 : 1;

      if (newQuantity > product.stock) {
        setErrorMessage(`Only ${product.stock} items available for ${product.name}`);
        return prevCart;
      }

      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    const product = products.find(p => p.id === productId);
    if (quantity > product.stock) {
      setErrorMessage(`Only ${product.stock} items available for ${product.name}`);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const isChecked = prevFilters[category].includes(value);
      const updatedCategory = isChecked
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const applyFilters = () => {
    let filtered = products;
    if (filters.color && filters.color.length > 0) {
      filtered = filtered.filter(product => filters.color.includes(product.color));
    }
    if (filters.gender && filters.gender.length > 0) {
      filtered = filtered.filter(product => filters.gender.includes(product.gender));
    }
    if (filters.price && filters.price.length > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        return filters.price.some(range => {
          if (range === '0-Rs250') return price <= 250;
          if (range === 'Rs251-450') return price > 250 && price <= 450;
          if (range === 'Rs450') return price > 450;
          return false;
        });
      });
    }
    if (filters.type && filters.type.length > 0) {
      filtered = filtered.filter(product => filters.type.includes(product.type));
    }
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  // const handleSearch = () => {
  //   if (searchQuery.trim() === '') {
  //     setFilteredProducts(products);
  //   } else {
  //     const searchedProducts = products.filter(
  //       product =>
  //         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         product.type.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredProducts(searchedProducts);
  //   }
  // };
  
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (query === '') {
      setFilteredProducts(products);
    } else {
      const searchedProducts = products.filter(product => {
        const name = product.name ? product.name.toLowerCase() : '';
        const color = product.color ? product.color.toLowerCase() : '';
        const type = product.type ? product.type.toLowerCase() : '';
        
        return (
          name.includes(query) ||
          color.includes(query) ||
          type.includes(query)
        );
      });
      setFilteredProducts(searchedProducts);
    }
  };
  
  const MainContent = () => {
    return (
      <div className="app">
      <Header />
        
        <div className="main-content">
          <Sidebar filters={filters} onFilterChange={handleFilterChange} />
          <div className="product-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for products..."
                className='search-input'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button className="search-button-container" onClick={handleSearch}>Search</button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <ProductList products={filteredProducts} addToCart={addToCart} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

