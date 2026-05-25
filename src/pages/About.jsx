import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {

  return (
    <div>

      <Navbar />

      <section className="about">

        <h1>About Our Company</h1>

        <p>
          We are a modern web development company
          providing responsive and user-friendly
          websites using React and modern frontend
          technologies.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h2>Our Mission</h2>

            <p>
              To create high-quality digital experiences
              for businesses worldwide.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>

            <p>
              To become a leading technology company
              in frontend development.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Goal</h2>

            <p>
              Deliver fast, responsive and accessible
              websites for all users.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;