import transition from '../transition.jsx';
function Blog() {

  return (
    <>
      <section className="has-divider text-light jarallax divider">
        {/* <img src="./public/images/powered.jpg" alt="" className="jarallax-img opacity-50" /> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <h1 className="display-4 text-center pt-5 mt-5 fw-bold">Blog</h1>
             
            </div>
          </div>
        </div>
        {/* <div className="divider">
          <img src="./public/icon/divider-2.svg" alt="graphical divider" data-inject-svg />
        </div> */}
      </section>
      <section id="blog" className="blog bg-primary-alt py-5 text-center text-lg-start">
      <div className="container">
        <div className="row mb-5 row-gap-4 ">
          <div className="col-md-6 col-lg-4 justify-content-between d-flex">
            <a href="https://www.yankodesign.com/2023/01/12/airtag-inspired-google-tracking-device-has-literally-the-most-unfortunate-name-ever/" className="card card-body justify-content-between bg-primary text-light" target="_blank">
              <div className="d-flex justify-content-between mb-3">
                <div className="text-small d-flex">
                  <div className="me-2">
                    Links
                  </div>
                  <span className="opacity-75">15th May</span>
                </div>
                <span className="badge bg-primary-alt text-primary">
                  <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />27
                </span>
              </div>
              <div>
                <h2>The most unfortunate name ever!</h2>
                <span className="text-small opacity-75">yankodesign.com</span>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-1.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">Design</a>
                    </div>
                    <span className="text-muted">29th April</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />12
                  </span>
                </div>
                <a href="#">
                  <h4>Innovation in Product Design: The G Spot</h4>
                </a>
                <p className="flex-grow-1 opacity-75">
                Explore how the G Spot project represents innovation in the world of product design, focusing on its distinctive features and implications for the future of the industry.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/female-3.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">Abby Sims</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-2.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">UX</a>
                    </div>
                    <span className="text-muted">27th April</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />23
                  </span>
                </div>
                <a href="#">
                  <h4>The Ergonomics and Functionality jubilation</h4>
                </a>
                <p className="flex-grow-1 opacity-75">
                This article analyzes how the G Spot&rsquo;s studied ergonomics and impeccable functionality ensured its success in the market, providing a superior user experience and meeting consumers&rsquo; needs.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/male-4.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">Cedric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-3.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">Life</a>
                    </div>
                    <span className="text-muted">23rd March</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />82
                  </span>
                </div>
                <a href="#">
                  <h4>Beyond the Product, a Cultural Statement</h4>
                </a>
                <p className="flex-grow-1 opacity-75">
                The G Spot is not only a product but a cultural statement that challenges conventions and opens new perspectives on human relationships and intimacy in the context of contemporary society.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/male-1.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">Ben Cameron</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card card-body justify-content-between bg-primary-2 text-light">
              <div className="d-flex justify-content-between mb-3">
                <div className="text-small d-flex">
                  <div className="me-2">
                    <a href="#">Quotes</a>
                  </div>
                  <span className="opacity-75">16th March</span>
                </div>
                <span className="badge bg-primary-alt text-primary">
                  <img className="icon icon-sm bg-white" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />93
                </span>
              </div>
              <div>
                <h2>The best smart tracking ex-perience so far!</h2>
                <span className="text-small opacity-75">– Lew Later</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-4.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">Social</a>
                    </div>
                    <span className="text-muted">16th February</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />93
                  </span>
                </div>
                <a href="#">
                  <h4>Design as a Driver of Social Innovation</h4>
                </a>
                <p className="flex-grow-1 opacity-75">
                Analyze how the G Spot project has acted as a catalyst for social innovation, promoting meaningful discussions on gender norms, intimacy, and human relationships in the modern context.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/female-4.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">Anne Souzakis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-5.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">Production</a>
                    </div>
                    <span className="text-muted">10th February</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />41
                  </span>
                </div>
                <a href="#">
                  <h4>From concept to reality, the process behind the Project</h4>
                </a>
                <p className="flex-grow-1 opacity-75">
                This article unveils the creative and development process that led to the realization of the G Spot project, offering an in-depth look at the stages of ideation, prototyping, and production that made this innovative product possible.
                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/male-2.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">Anwar K.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card">
              <a href="#">
                <img src="./images/blog/article-6.jpg" alt="Image" className="card-img-top"/>
              </a>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <div className="text-small d-flex">
                    <div className="me-2">
                      <a href="#">Business</a>
                    </div>
                    <span className="text-muted">4th February</span>
                  </div>
                  <span className="badge bg-primary-alt text-primary">
                    <img className="icon icon-sm" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />96
                  </span>
                </div>
                <a href="#">
                  <h4>Design as an Emotional Experience:<br/>The G Spot Project</h4>
                </a>
                <p className="flex-grow-1">
                Explore the importance of aesthetics and emotion in product design through the case of the G Spot, highlighting how its bold and captivating design elicited a strong emotional impact on consumers.


                </p>
                <div className="d-flex align-items-center mt-3">
                  <img src="./images/blog/avatars/male-5.jpg" alt="Image" className="avatar avatar-sm"/>
                  <div className="ms-1">
                    <span className="text-small text-muted">By </span>
                    <span className="text-small">James</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card card-body justify-content-between bg-primary-3 text-light">
              <img src="./images/blog/article-7.jpg" alt="Image" className="bg-image opacity-25"/>
              <div className="d-flex justify-content-between mb-3 position-relative">
                <div className="text-small d-flex">
                  <div className="me-2">
                    <a className="text-light" href="#">Videos</a>
                  </div>
                  <span className="opacity-75">27th January</span>
                </div>
                <span className="badge bg-primary-alt text-light">
                  <img className="icon icon-sm bg-white" src="./icon/heart.svg" alt="heart interface icon" data-inject-svg />21
                </span>
              </div>
              <div className="d-flex position-relative">
                <a href="https://www.youtube.com/watch?v=R7Ucc2YBkIQ" target="_blank" className="btn btn-primary btn-round btn-lg flex-shrink-0">
                  <img className="icon" src="./icon/play.svg" alt="play icon" data-inject-svg />
                </a>
                <div className="ms-3">
                  <a href="https://www.youtube.com/watch?v=R7Ucc2YBkIQ" target="_blank">
                    <h4 className="mb-1 text-light">«Is it real? I feel like they could figured that out»</h4>
                  </a>
                  <span className="text-small opacity-75">– 1hr 22mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default transition(Blog)
