import React from "react";
import { FaHome, FaFilm, FaHeart, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={brandStyle}>MovieFlix</div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link href="/" style={linkStyle}>
            <FaHome style={iconStyle} /> Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link href="/movies" style={linkStyle}>
            <FaFilm style={iconStyle} /> Movies
          </Link>
        </li>
        <li style={liStyle}>
          <Link href="/favourite-movies" style={linkStyle}>
            <FaHeart style={iconStyle} /> Favorites
          </Link>
        </li>
        <li style={liStyle}>
          <Link href="/about" style={linkStyle}>
            <FaInfoCircle style={iconStyle} /> About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 20px",
  backgroundColor: "#1a1a1a",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
};

const brandStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ff4500",
  fontFamily: "var(--font-geist-sans)",
};

const ulStyle = {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
  flexGrow: 1,
};

const liStyle = {
  margin: "0 20px",
  transition: "transform 0.3s ease",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "500",
  fontFamily: "var(--font-geist-sans)",
};

const iconStyle = {
  marginRight: "8px",
  fontSize: "20px",
};

export default Navbar;
