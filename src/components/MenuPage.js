import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './MenuPage.css';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍖' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  const menuItems = [
    // Appetizers
    { id: 1, name: 'Caesar Salad', price: 8.99, category: 'appetizers', description: 'Fresh romaine lettuce with parmesan cheese and croutons', image: '/1.jpg', popular: true },
    { id: 2, name: 'Buffalo Wings', price: 12.99, category: 'appetizers', description: 'Spicy chicken wings with blue cheese dip', image: '/2.jpg', popular: false },
    { id: 3, name: 'Mozzarella Sticks', price: 9.99, category: 'appetizers', description: 'Crispy breaded mozzarella with marinara sauce', image: '/3.jpg', popular: true },
    { id: 4, name: 'Bruschetta', price: 7.99, category: 'appetizers', description: 'Toasted bread with fresh tomatoes and basil', image: '/4.jpg', popular: false },
    
    // Main Courses
    { id: 5, name: 'Grilled Salmon', price: 18.99, category: 'mains', description: 'Fresh Atlantic salmon with lemon herb butter', image: '/5.jpg', popular: true },
    { id: 6, name: 'Beef Burger', price: 14.99, category: 'mains', description: 'Juicy beef patty with lettuce, tomato, and special sauce', image: '/6.jpg', popular: true },
    { id: 7, name: 'Chicken Parmesan', price: 16.99, category: 'mains', description: 'Breaded chicken breast with marinara and mozzarella', image: '/7.jpg', popular: false },
    { id: 8, name: 'Vegetarian Pasta', price: 13.99, category: 'mains', description: 'Penne pasta with seasonal vegetables and olive oil', image: '/8.jpg', popular: false },
    { id: 9, name: 'Ribeye Steak', price: 24.99, category: 'mains', description: 'Premium ribeye steak cooked to perfection', image: '/1.jpg', popular: true },
    { id: 10, name: 'Fish & Chips', price: 15.99, category: 'mains', description: 'Beer-battered fish with crispy fries', image: '/2.jpg', popular: false },
    
    // Desserts
    { id: 11, name: 'Chocolate Cake', price: 6.99, category: 'desserts', description: 'Rich chocolate cake with vanilla ice cream', image: '/3.jpg', popular: true },
    { id: 12, name: 'Tiramisu', price: 7.99, category: 'desserts', description: 'Classic Italian dessert with coffee and mascarpone', image: '/4.jpg', popular: true },
    { id: 13, name: 'Chicken Katsu W/ Cucumber', price: 150, category: 'desserts', description: 'Three scoops with your choice of toppings', image: '/5.jpg', popular: false },
    { id: 14, name: 'Cheesecake', price: 6.99, category: 'desserts', description: 'New York style cheesecake with berry compote', image: '/6.jpg', popular: false },
    
    // Beverages
    { id: 15, name: 'Fresh Orange Juice', price: 4.99, category: 'beverages', description: 'Freshly squeezed orange juice', image: '/7.jpg', popular: false },
    { id: 16, name: 'Premium Coffee', price: 3.99, category: 'beverages', description: 'Premium roasted coffee beans', image: '/8.jpg', popular: true },
    { id: 17, name: 'Soft Drinks', price: 2.99, category: 'beverages', description: 'Coke, Pepsi, Sprite, or Fanta', image: '/1.jpg', popular: false },
    { id: 18, name: 'Craft Beer', price: 5.99, category: 'beverages', description: 'Local craft beer selection', image: '/2.jpg', popular: true },
    { id: 19, name: 'Wine Selection', price: 8.99, category: 'beverages', description: 'Curated wine selection by the glass', image: '/3.jpg', popular: false }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  // Debug logging
  console.log('Selected Category:', selectedCategory);
  console.log('Filtered Items:', filteredItems);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="menu-page">
      <Header />
      
      <main className="menu-main">
        {/* Hero Section */}
        <section className="menu-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Our Menu</h1>
              <p className="hero-description">
                Discover our carefully crafted selection of delicious dishes, 
                prepared with the finest ingredients and culinary expertise.
              </p>
              <div className="cart-indicator">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">{getTotalItems()} items</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="category-filter">
          <div className="container">
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="menu-items">
          <div className="container">
            <div className="menu-header">
              <h2 className="menu-section-title">
                {selectedCategory === 'all' ? 'All Items' : 
                 categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="menu-count">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
              </p>
            </div>
            <div className="menu-grid">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="menu-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  {item.popular && <div className="popular-badge">⭐ Popular</div>}
                  <div className="card-image">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="food-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="food-emoji" style={{ display: 'none' }}>🍽️</div>
                  </div>
                  <div className="card-content">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="card-footer">
                      <span className="item-price">${item.price}</span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="special-offers">
          <div className="container">
            <h2 className="section-title">Special Offers</h2>
            <div className="offers-grid">
              <div className="offer-card">
                <div className="offer-icon">🍕</div>
                <h3>Pizza Combo</h3>
                <p>Any large pizza + 2 drinks for $19.99</p>
                <span className="offer-price">Save $5</span>
              </div>
              <div className="offer-card">
                <div className="offer-icon">🍔</div>
                <h3>Burger Deal</h3>
                <p>Burger + Fries + Drink for $12.99</p>
                <span className="offer-price">Save $3</span>
              </div>
              <div className="offer-card">
                <div className="offer-icon">🍰</div>
                <h3>Dessert Special</h3>
                <p>Any 2 desserts for $10.99</p>
                <span className="offer-price">Save $2</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
