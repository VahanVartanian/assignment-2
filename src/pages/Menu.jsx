import { useState } from 'react';
import { motion } from 'framer-motion';

function Menu() {
  const [menuItems] = useState([
    { name: 'Banana Boat Split', price: '$9', img: '/images/banana-boat-split.png', description: 'A banana split with jungle themed decorations' },
    { name: 'Fruit Tart', price: '$7', img: '/images/fruit-tart.png', description: 'A tart filled with exotic fruits like mango, pineapple and kiwi.' },
    { name: 'Jungle Mud Pie', price: '$8', img: '/images/jungle-mud-pie.png', description: 'A rich chocolate pie with a crumbly cookie crust and chocolate shavings' },
    { name: 'Mango Parfait', price: '$6', img: '/images/mango-parfait.png', description: 'Layers of mango puree, cream, and crunchy granola.' },
    { name: 'Monkey Cake', price: '$7', img: '/images/monkey-cake.png', description: 'A coconut flavoured cake shaped like a monkey’s face.' },
    { name: 'Rainforest Macarons', price: '$4', img: '/images/macarons.png', description: 'Macarons with flavors inspired by the rainforest, like passion fruit and guava.' },
  ]);

  return (
    <section id="menu" className="bg-green-100 py-12">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-green-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold text-green-800">{item.name}</h2>
            <p className="text-md text-green-600">{item.description}</p>
            <p className="text-lg text-green-600">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
