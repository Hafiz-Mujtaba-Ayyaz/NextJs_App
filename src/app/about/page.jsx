import React from "react";
import Image from "next/image";

const AboutPage = async () => {
  const response = await fetch("http://localhost:3000/api/about", { // SSG
    cache: "force-cache",
    next:{
      revalidate: 20,
    }
  });
  const data = await response.json();
  return (
    <div style={styles.page}>
      <section style={styles.heroSection}>
        <Image
          src="https://via.placeholder.com/1920x1080.png?text=Cinematic+Banner"
          alt="Cinematic still"
          layout="fill"
          objectFit="cover"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <Image
            src="https://via.placeholder.com/150"
            alt="App Logo"
            width={150}
            height={150}
            style={styles.logo}
          />
          <h1 style={styles.tagline}>{data.message}</h1>
        </div>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Our Platform</h2>
        <div style={styles.aboutContent}>
          <div style={styles.column}>
            <p>
              Our platform offers a world-class streaming experience with a
              library full of diverse content that spans genres, countries, and
              languages. Whether you&apos;re a fan of thrilling dramas, light-hearted
              comedies, or cutting-edge documentaries, we have something for
              everyone.
            </p>
            <p>
              Enjoy seamless playback, uninterrupted by ads, on any device you
              choose. Our mission is to provide entertainment that moves you,
              wherever you are.
            </p>
          </div>
          <div style={styles.column}>
            <p>
              With an intuitive interface, personalized recommendations, and
              exclusive original content, our goal is to revolutionize the way
              you watch TV and movies.
            </p>
            <p>
              Join millions of subscribers globally who have access to premium
              quality streaming, all in one place.
            </p>
          </div>
        </div>
        <div style={styles.videoWrapper}>
          <video autoPlay loop muted style={styles.video}>
            <source src="/videos/app-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Top Features</h2>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <Image
              src="https://via.placeholder.com/60?text=4K"
              alt="4K Streaming Icon"
              width={60}
              height={60}
            />
            <h3 style={styles.featureTitle}>4K Streaming</h3>
            <p>
              Experience breathtaking visuals with ultra-high-definition
              streaming.
            </p>
          </div>
          <div style={styles.featureCard}>
            <Image
              src="https://via.placeholder.com/60?text=Offline"
              alt="Offline Viewing Icon"
              width={60}
              height={60}
            />
            <h3 style={styles.featureTitle}>Offline Viewing</h3>
            <p>
              Download your favorite shows and movies to watch anytime,
              anywhere.
            </p>
          </div>
          <div style={styles.featureCard}>
            <Image
              src="https://via.placeholder.com/60?text=Originals"
              alt="Original Content Icon"
              width={60}
              height={60}
            />
            <h3 style={styles.featureTitle}>Exclusive Originals</h3>
            <p>
              Enjoy content you won’t find anywhere else, from gripping dramas
              to thrilling documentaries.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet Our Team</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <Image
              src="https://via.placeholder.com/150?text=Team+Member+1"
              alt="Team Member 1"
              width={150}
              height={150}
              style={styles.profileImage}
            />
            <h4>John Doe</h4>
            <p>Co-Founder & CEO</p>
          </div>
          <div style={styles.teamMember}>
            <Image
              src="https://via.placeholder.com/150?text=Team+Member+2"
              alt="Team Member 2"
              width={150}
              height={150}
              style={styles.profileImage}
            />
            <h4>Jane Smith</h4>
            <p>Chief Content Officer</p>
          </div>
        </div>

        <div style={styles.values}>
          <h3>Our Core Values</h3>
          <ul style={styles.valuesList}>
            <li>Innovation</li>
            <li>Creativity</li>
            <li>Diversity</li>
            <li>Customer First</li>
          </ul>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Dive In?</h2>
        <button style={styles.ctaButton}>Start Your Free Trial</button>
      </section>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: "#FFF",
    backgroundColor: "#111",
    paddingBottom: "50px",
  },
  heroSection: {
    position: "relative",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    zIndex: -1,
    objectFit: "cover",
    opacity: 0.7,
  },
  heroOverlay: {
    position: "absolute",
    textAlign: "center",
  },
  logo: {
    marginBottom: "20px",
  },
  tagline: {
    fontSize: "2rem",
    fontWeight: "300",
    color: "#fff",
  },
  aboutSection: {
    padding: "80px 20px",
    background: "linear-gradient(45deg, #333, #111)",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
  },
  aboutContent: {
    display: "flex",
    justifyContent: "space-around",
    gap: "40px",
    marginBottom: "50px",
  },
  column: {
    flex: 1,
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },
  videoWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  video: {
    borderRadius: "10px",
    maxWidth: "80%",
  },
  featuresSection: {
    padding: "60px 20px",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
  },
  featureCard: {
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  featureTitle: {
    marginTop: "10px",
    fontSize: "1.5rem",
    color: "#FF6347",
  },
  teamSection: {
    padding: "80px 20px",
    backgroundColor: "#111",
  },
  team: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px",
  },
  teamMember: {
    textAlign: "center",
    color: "#fff",
  },
  profileImage: {
    borderRadius: "50%",
  },
  values: {
    textAlign: "center",
  },
  valuesList: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.2rem",
  },
  ctaSection: {
    backgroundColor: "#FF6347",
    textAlign: "center",
    padding: "40px 0",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    color: "#FFF",
  },
  ctaButton: {
    backgroundColor: "#FFF",
    color: "#FF6347",
    padding: "15px 30px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default AboutPage;
