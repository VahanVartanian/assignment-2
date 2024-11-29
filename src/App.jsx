import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// imports react-router-dom components 
import Layout from './components/Layout'; // imports the Layout component
import Home from './pages/Home'; // imports the Home page component
import Menu from './pages/Menu'; // imports the Menu page component
import Staff from './pages/Staff'; // imports the Staff page component
import Contact from './pages/Contact'; // imports the Contact page component

function App() {
  return (
    <Router>
      {/* wraps the entire app with the Router to enable navigation */}
      <Routes>
        {/* defines all the routes for the app */}
        <Route path="/" element={<Layout />}>
          {/* Layout component wraps the shared Header, Footer, and Outlet */}
          
          <Route index element={<Home />} />
          {/* 'index' means this route will be rendered when the user visits the base path '/' */}

          <Route path="menu" element={<Menu />} />
          {/* path="menu" loads the Menu page when the user visits '/menu' */}

          <Route path="staff" element={<Staff />} />
          {/* path="staff" loads the Staff page when the user visits '/staff' */}

          <Route path="contact" element={<Contact />} />
          {/* path="contact" loads the Contact page when the user visits '/contact' */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App; // exports the App component 
