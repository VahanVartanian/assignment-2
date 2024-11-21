import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="relative">
      <img
        src="/images/cake.png"
        alt="Home Banner"
        className="w-full object-cover max-h-[45rem]"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-4xl lg:text-5xl md:text-3xl sm:text-2xl font-bold text-green-800 mb-4">
          Welcome to Sweet Safari!
        </h1>
        <p className="text-lg lg:text-2xl md:text-xl sm:text-lg text-green-600">
          An Adventure in Every Bite!
        </p>
        <Link to="/menu">
          <button className="bg-green-800 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 mt-6 rounded hover:bg-green-600">
            Explore Menu
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Home;
