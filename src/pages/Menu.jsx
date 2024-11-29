import { useState } from 'react'; // imports useState hook to manage the menu items
import { motion } from 'framer-motion'; // imports motion from framer-motion for animations

function Menu() {
  const [menuItems] = useState([
    // initializes the state with a list of menu items
    { name: 'Banana Boat Split', price: '$9', img: '/images/banana-boat-split.png', description: 'A banana split with jungle themed decorations' },
    { name: 'Fruit Tart', price: '$7', img: '/images/fruit-tart.png', description: 'A tart filled with exotic fruits like mango, pineapple and kiwi.' },
    { name: 'Jungle Mud Pie', price: '$8', img: '/images/jungle-mud-pie.png', description: 'A rich chocolate pie with a crumbly cookie crust and chocolate shavings' },
    { name: 'Mango Parfait', price: '$6', img: '/images/mango-parfait.png', description: 'Layers of mango puree, cream, and crunchy granola.' },
    { name: 'Monkey Cake', price: '$7', img: '/images/monkey-cake.png', description: 'A coconut flavoured cake shaped like a monkey’s face.' },
    { name: 'Rainforest Macarons', price: '$4', img: '/images/macarons.png', description: 'Macarons with flavors inspired by the rainforest, like passion fruit and guava.' },
  ]);
  // menuItems is the list of items displayed, and it doesn't change, 

  return (
    <section id="menu" className="bg-green-100 py-12">
      {/* section for the menu */}
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Menu</h1>
      {/* heading for the menu section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
       
        {menuItems.map((item, index) => (
          <motion.div
            key={index} // unique key for each menu item
            className="bg-green-200 p-6 rounded-lg shadow-lg"
            // card styling for each menu item
            initial={{ opacity: 0, y: 20 }} // animation starts slightly faded and lower
            animate={{ opacity: 1, y: 0 }} // animation ends fully visible and in place
            transition={{ delay: index * 0.2, duration: 0.5 }} // animation with a slight delay for each item
          >
            {/* image for the menu item */}
            <img
              src={item.img}
              alt={item.name} // alt text 
              className="w-full h-48 object-cover rounded-lg mb-4"
              // image that fills the card 
            />
            {/* menu item name */}
            <h2 className="text-xl font-bold text-green-800">{item.name}</h2>
            {/* description of the menu item */}
            <p className="text-md text-green-600">{item.description}</p>
            {/* price of the menu item */}
            <p className="text-lg text-green-600">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu; // exports the Menu component 
