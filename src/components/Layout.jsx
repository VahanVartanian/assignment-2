import { Outlet } from 'react-router-dom'; // imports the outlet component 
import Header from './Header'; // imports the header component
import Footer from './Footer'; // imports the footer component

function Layout() {
  return (
    <>
      {/* header component that displays at the top of every page */}
      <Header />

      {/* main section where child pages (like home, menu, etc) will be */}
      <main>
        <Outlet /> {/* this is where the content of the current route gets displayed */}
      </main>

      {/* footer component that displays at the bottom of every page */}
      <Footer />
    </>
  );
}

export default Layout; 
