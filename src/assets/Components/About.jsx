import "./about.css";
function About() {
  return (
    <>
      <section className="container-fluid about">
        <div className="container">
          <h3 className="hc3 text-center">About Me</h3>
          <h5 className="hc5 text-center">
            User Interface and User Experience and Also video editing{" "}
          </h5>
          <div className="row ">
            <div className="col-md-6">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="">
                <p className="about-txt">
                  A software engineer, the modern-day architect of digital
                  realms, navigates the ethereal landscapes of code, sculpting
                  intangible structures that shape our technological world. With
                  fingers poised over keyboards like virtuoso pianists, they
                  compose symphonies of logic, their minds a labyrinth of
                  algorithms and solutions.
                </p>
                <a href="#contact" className="contact-btn">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
