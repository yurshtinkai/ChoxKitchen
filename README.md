# FoodHub - Professional Food & Beverage Ordering System

A modern, responsive food ordering system built with React and Tailwind CSS.

## Features

### 🍽️ Menu Management
- **Category Filtering**: Browse items by categories (Appetizers, Main Courses, Desserts, Beverages)
- **Rich Item Display**: Each menu item includes emoji icons, descriptions, and pricing
- **Responsive Grid**: Beautiful grid layout that adapts to different screen sizes

### 🛒 Shopping Cart
- **Add/Remove Items**: Easy item management with quantity controls
- **Real-time Updates**: Cart updates instantly when items are added or removed
- **Price Calculation**: Automatic total calculation with item quantities
- **Persistent State**: Cart maintains state throughout the session

### 📋 Order Processing
- **Customer Information**: Collect customer details including name, email, phone, and address
- **Special Instructions**: Allow customers to add special requests or dietary restrictions
- **Order Summary**: Complete order review before submission
- **Confirmation Flow**: Professional order confirmation with estimated delivery time

### 🎨 Professional Design
- **Modern UI**: Clean, professional interface using Tailwind CSS
- **Color Scheme**: Custom primary (blue) and secondary (yellow) color palette
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG icons)
- **State Management**: React Hooks (useState)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd food-ordering-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with cart indicator
│   ├── Menu.js            # Menu display with category filtering
│   ├── Cart.js            # Shopping cart sidebar
│   └── OrderSummary.js    # Order confirmation modal
├── App.js                 # Main application component
├── App.css                # Custom styles
└── index.css              # Tailwind CSS imports
```

## Key Components

### Header Component
- Displays restaurant branding
- Shows cart item count
- Navigation menu

### Menu Component
- Displays menu items in a responsive grid
- Category filtering functionality
- Add to cart functionality

### Cart Component
- Sidebar cart display
- Quantity management
- Remove items functionality
- Checkout button

### OrderSummary Component
- Customer information form
- Order review
- Order confirmation flow

## Customization

### Adding New Menu Items
Edit the `menuItems` array in `src/components/Menu.js`:

```javascript
const menuItems = [
  {
    id: 15,
    name: 'New Item',
    price: 12.99,
    category: 'mains',
    description: 'Description of the new item',
    image: '🍕'
  },
  // ... more items
];
```

### Modifying Categories
Update the `categories` array in `src/components/Menu.js`:

```javascript
const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'new-category', name: 'New Category' },
  // ... more categories
];
```

### Styling Customization
The color scheme can be modified in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
  secondary: {
    // Your custom secondary colors
  }
}
```

## Future Enhancements

- **Backend Integration**: Connect to a real API for order processing
- **Payment Processing**: Integrate payment gateways
- **User Authentication**: Add user accounts and order history
- **Admin Dashboard**: Management interface for restaurant staff
- **Real-time Updates**: WebSocket integration for order status updates
- **Mobile App**: React Native version for mobile devices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.