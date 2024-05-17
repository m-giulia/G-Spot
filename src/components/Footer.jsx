import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-light" id="footer">
        <section className={location.pathname}>
          <div className="make_donation_area">
            <div className="container pb-0 px-5">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section_title text-center  my-5">
                    <h3 className="text-light opacity-75"><span>Make a Donation</span></h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center d-none">
                <div className="col-lg-7">
                  <form action="#" className="donation_form">
                    <div className="row align-items-center">
                      <div className="col-md-9 mb-4">
                        <div className="single_amount">
                          <div className="fixed_donat d-flex align-items-center justify-content-between">
                            <div className="select_prise">
                              Donate:
                            </div>
                            <div className="single_doonate">
                              <input type="radio" id="blns_1" name="radio-group" /> {/* checked */}
                              <label htmlFor="blns_1">5€</label>
                            </div>
                            <div className="single_doonate">
                              <input type="radio" id="blns_2" name="radio-group" /> {/* checked */}
                              <label htmlFor="blns_2">10€</label>
                            </div>
                            <div className="single_doonate">
                              <input type="radio" id="blns_3" name="radio-group" /> {/* checked */}
                              <label htmlFor="blns_3">15€</label>
                            </div>
                            <div className="single_doonate">
                              <input type="radio" id="Other" name="radio-group" /> {/* checked */}
                              <label htmlFor="Other">Other</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="single_amount">
                          <div className="input_field">
                            <div className="input-group align-items-center">
                              <input type="text" className="form-control" placeholder="40" aria-label="Username" aria-describedby="basic-addon1" />
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">€</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row justify-content-center">
                    <p className="col-md-4 mb-4 payment-method text-center">
                      <img src="images/payments.png" alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-12">
                  <div className="donate-area donate-default-area bg-primary aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <div className="d-flex justify-content-center flex-column flex-md-row">
                      <a href="#/" className="btn-theme btn-gradient d-none btn-slide hover-arrow text-center mb-4  m-md-0 me-md-4"><span className="hover-arrow">Donate Now </span></a>

                      <Link to="/donations#" className="btn-theme btn-gradient btn-border text-center"><span className="hover-arrow">Donate Now </span></Link>
                      {/* <a href="#/" className="btn-theme btn-gradient btn-border"><span className="hover-arrow">Donation details </span></a> */}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <div className="container p-5">
          <div className="row justify-content-center mb-2">
            <div className="col-auto">
              <div className="nav">
                <div className="nav-item">
                  <a href="https://www.behance.net/obifidler" className="nav-link" target="_blank">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://www.linkedin.com/in/obifidler/" className="nav-link" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div className="nav-item">
                  <a href="https://www.instagram.com/studiofidler" className="nav-link" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-md-auto text-center">
              <small className="text-muted">G Spot &copy;2024 <a className="text-secondary" href="https://www.google.com/policies/privacy/">Privacy Policy</a>
              </small>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" className="btn back-to-top btn-primary btn-round opacity-0" data-smooth-scroll>
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  )
}

export default Footer
