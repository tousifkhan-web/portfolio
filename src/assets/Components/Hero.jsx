import "./hero.css";

function Hero() {
  return (
    <>
      <section className="container-fluid hero">
        <div className="container">
          <div className="txt-wrap">
            <h2 className="hc2">"Hi"</h2>
            <h1 className="hc1">
              I am <span>Tousif</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sollicitudin egestas neque nec volutpat. Cras rhoncus magna id
              tellus sodales viverra eu eu nisi. Nam venenatis mattis dictum.
            </p>
            <div className="social-link d-flex align-items-center gap-2">
              <div className="">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="">
                <a href="#">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
              <div className="">
                <a href="#">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="deco1">
            <img src="/images/light-bulb.webp" alt="" />
          </div>
        </div>
        <div className="deco2">
          <img src="/images/deco2.webp" alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
