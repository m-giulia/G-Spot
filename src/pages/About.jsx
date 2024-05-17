import transition from '../transition.jsx';

function About() {

  return (
    <>
      <section id="howto" className="howto bg-primary-alt pt-5 text-center">
        <div className="container px-5 mt-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-9 col-lg-8 my-5">
              <div className="text-center circle">
                <img className="" src="./images/Obi-Fidler.jpg" alt="Obi Fidler"/>
              </div>
            </div>
          </div>
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h1 className="plus-jakarta-bd mb-5">Obi Fidler</h1>
                  <p>MA student at ISIA U and a tech enthusiast.
                  <br />
                  I have an approach to design that generates in different fields in order to achieve multidimensional experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howto bg-white pt-5">
        <div className="container px-5 mt-5">
            <h2 className="plus-jakarta-bd text-center">Education</h2>
          <div className="row flex-md-wrap justify-content-start align-items-center">
            <div className="col-md-9 col-lg-6  py-5">
              <div className="text-center">
                <img className="" src="./images/education.jpg" alt="Education"/>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mt-5 p-5">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h4 className="mb-0">Master of Arts</h4><h5 className="mb-0 ">Comunication and design for publishing</h5>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary">ott 2021 - giu 2023</span></div>
                  <div className="mb-3 text-body-tertiary">ISIA Urbino - Higher Institute for Artistic Industries <br/>Urbino</div>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary"></span></div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h4 className="mb-0 ">Bachelor · <h5 className="d-inline">110/110</h5></h4><h5 className="mb-0 ">Industrial Design, Graphic & Product Design</h5>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary mb-0">ott 2017 - mar 2021</span></div>
                  <div className="mb-3 text-body-tertiary">Unirsm Design <br/>San Marino</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howto bg-white pb-5">
        <div className="container px-5 my-5">
          <h2 className="plus-jakarta-bd text-center">Experience</h2>
          <div className="row flex-md-wrap justify-content-start align-items-center">
            <div className="col-md-12 col-lg-6 mt-5 text-end p-5">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h4 className="mb-0">Teaching Assistant Tutor</h4>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary">set 2021 &nbsp;·&nbsp; 1 mese &nbsp;&nbsp; | &nbsp;&nbsp;  lug 2022 &nbsp;·&nbsp; 1 mese</span></div>
                  <div className="mb-3 text-body-tertiary">Unirsm Design · Freelance <br/>San Marino</div>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary"></span></div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h4 className="mb-0 ">3D Graphic Designer</h4>
                  <div className="flex-shrink-0 mb-3"><span className="text-body-tertiary">ott 2020 - set 2021  &nbsp; · &nbsp; 1 anno</span></div>
                  <div className="mb-3 text-body-tertiary">Circus Sushi · Freelance <br/>Emilia Romagna</div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-6 py-5">
              <div className="text-center">
                <img className="" src="./images/experience.jpg" alt="Experience"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default transition(About)
