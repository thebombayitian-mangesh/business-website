function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "Business Website"
    },

    {
      id: 2,
      title: "E-Commerce App"
    },

    {
      id: 3,
      title: "Portfolio Website"
    },

    {
      id: 4,
      title: "Dashboard UI"
    }
  ];

  return (
    <section className="portfolio">

      <h2>Our Portfolio</h2>

      <div className="portfolio-grid">

        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>

            <h3>{project.title}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;