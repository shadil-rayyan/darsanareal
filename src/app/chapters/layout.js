import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from '../component/footer/footer';
// import Navigation from '../component/Navigation'; // Import your navigation component


const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Render aboutustop at the top */}
      
      
      {/* Main content area for your pages */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
