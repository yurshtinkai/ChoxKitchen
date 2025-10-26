import React, { useState } from 'react';

const Menu = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    // Appetizers
    { id: 1, name: 'Caesar Salad', price: 8.99, category: 'appetizers', description: 'Fresh romaine lettuce with parmesan cheese and croutons', image: '/1.jpg' },
    { id: 2, name: 'Buffalo Wings', price: 12.99, category: 'appetizers', description: 'Spicy chicken wings with blue cheese dip', image: '/2.jpg' },
    { id: 3, name: 'Mozzarella Sticks', price: 9.99, category: 'appetizers', description: 'Crispy breaded mozzarella with marinara sauce', image: '/3.jpg' },
    
    // Main Courses
    { id: 4, name: 'Grilled Salmon', price: 18.99, category: 'mains', description: 'Fresh Atlantic salmon with lemon herb butter', image: '/4.jpg' },
    { id: 5, name: 'Beef Burger', price: 14.99, category: 'mains', description: 'Juicy beef patty with lettuce, tomato, and special sauce', image: '/5.jpg' },
    { id: 6, name: 'Chicken Parmesan', price: 16.99, category: 'mains', description: 'Breaded chicken breast with marinara and mozzarella', image: '/6.jpg' },
    { id: 7, name: 'Vegetarian Pasta', price: 13.99, category: 'mains', description: 'Penne pasta with seasonal vegetables and olive oil', image: '/7.jpg' },
    
    // Desserts
    { id: 8, name: 'Chocolate Cake', price: 6.99, category: 'desserts', description: 'Rich chocolate cake with vanilla ice cream', image: '/8.jpg' },
    { id: 9, name: 'Tiramisu', price: 7.99, category: 'desserts', description: 'Classic Italian dessert with coffee and mascarpone', image: '/1.jpg' },
    { id: 10, name: 'Chicken Katsu W/ Cucumber', price: 150, category: 'desserts', description: 'Three scoops with your choice of toppings', image: '/2.jpg' },
    
    // Beverages
    { id: 11, name: 'Fresh Orange Juice', price: 4.99, category: 'beverages', description: 'Freshly squeezed orange juice', image: '/3.jpg' },
    { id: 12, name: 'Coffee', price: 3.99, category: 'beverages', description: 'Premium roasted coffee beans', image: '/4.jpg' },
    { id: 13, name: 'Soft Drinks', price: 2.99, category: 'beverages', description: 'Coke, Pepsi, Sprite, or Fanta', image: '/5.jpg' },
    { id: 14, name: 'Craft Beer', price: 5.99, category: 'beverages', description: 'Local craft beer selection', image: '/6.jpg' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-3 text-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-4xl" style={{ display: 'none' }}>🍽️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary-600">${item.price}</span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
