import { Inter } from 'next/font/google';
import Link from "next/link"; 
import React from "react";

const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});

const WelcomePage = () => {
  return (
    <div className={inter.className} style={styles.container}>
      <h1 style={styles.title}>Welcome to the Movie App</h1>
      <p style={styles.description}>Click below to see the trending movies.</p>
      <Link href="/movies" style={styles.link}>
        <button style={styles.button}>Go to Movies List</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    backgroundColor: "#f8f9fa", 
    textAlign: "center",
    padding: "2rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#343a40", 
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#6c757d", 
  },
  button: {
    backgroundColor: "#0070f3", 
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s, transform 0.3s",
  },
  buttonHover: {
    backgroundColor: "#005bb5", 
    transform: "scale(1.05)",
  },
  link: {
    textDecoration: "none",
  },
};

export default WelcomePage;
