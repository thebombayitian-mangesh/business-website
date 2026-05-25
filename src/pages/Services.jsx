function Services() {

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern responsive websites."
    },

    {
      id: 2,
      title: "UI UX Design",
      description: "Beautiful user interfaces."
    },

    {
      id: 3,
      title: "SEO Optimization",
      description: "Better website ranking."
    }
  ];

  return (
    <section className="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;