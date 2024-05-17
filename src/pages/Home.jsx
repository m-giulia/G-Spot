import transition from '../transition.jsx';

function Home() {

  return (
    <>
      <section id="home" className="vh-100 o-hidden d-flex flex-column hero">
      {/* <Navbar></Navbar> */}
    
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-6 text-center">
              </div>
            </div>
          </div>
      </section>
      <section id="about" className="about pt-5 my-5 text-center">
        <div className="container px-5">
          <h2 className="plus-jakarta fw-bold titolo mb-5">Hey Google,<br/> where&rsquo;s your smart tracker?</h2>
          <div className="row flex-md-wrap justify-content-center align-items-center">
            
            <div className="col-md-12 col-lg-10">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5 text-lg-start">
                <div className="flex-grow-1">
                  <p>Google&rsquo;s two main competitors, Apple & Samsung, each have their version of a GPS tracker, respectively AirTag & SmartTag.<br/> So why doesn&rsquo;t Google, which has already figured out a Find My Device software, developed the most popular and deeply-rooted mainstream maps system out there, owns the most popular mobile OS in the world and for quite some time been making beautifully designed and accessible hardware combine these four aspects in what could be the best smart tracking experience to date?
                  </p>
                  <a href="#howdo" className="hover-arrow">So I had a go myself at designing a Googley smart tracker with a sarcastic twist to it.</a>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </section>
      
      <section id="howdo" className="howdo bg-primary-alt pt-5 text-center text-lg-start">
        <div className="container px-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-9 col-lg-8 mb-5">
              <div className="text-center find">
                <img className="" src="./images/how-do-i-find-the-g-spot.gif" alt="How do I find the G Spot"/>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="plus-jakarta fw-bold mb-5">How do I find<br />the G Spot?</h3>
                  <p>You&rsquo;re probably not the only one asking, luckily it&rsquo;s just as easy as asking: &ldquo;Hey Google, find my keys&rdquo; or making it ring by going to the Items tab in the Find my device app. If its in your vicinity, just follow the sound from the built-in speaker.<br />
                    That&rsquo;s what I call a key feature.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="battery" className="battery bg-white pt-5 text-center">
        <div className="container mt-5 px-5">
          <h3 className="plus-jakarta mb-4 fw-bold">All year battery life</h3>
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <p>G SPot is designed to keep going more than a year on a standard CR2032 battery you can easily pop in and pop out.
                  </p>
                </div>
              </div>              
            </div>
            <div className="col-md-12 col-lg-10 mb-5">
              <div className="text-center">
                <img className="" src="./images/battery.gif" alt="All year battery life."/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section id="sofast" className="sofast d-none bg-primary-alt pt-5 text-center text-lg-start">
        <div className="container px-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-9 col-lg-7 order-2 order-lg-0">
              <div className="text-center find">
                <img className="" src="./images/so-fast.gif" alt="So fast you didn't see it coming."/>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="plus-jakarta fw-bold mb-5">So fast <br />you didn&rsquo;t see it coming.</h3>
                  <p>With Google&rsquo;s Fast Pair Service (GFPS) G Spot utilizes Bluetooth Low Energy (BLE) to discover nearby Bluetooth devices without using significant phone battery, enabling &ldquo;magical&rdquo; scenarios based on device proximity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="wherear" className="wherear d-none bg-white pt-5 text-center text-lg-start">
        <div className="container px-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-12 col-lg-4">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="plus-jakarta fw-bold mb-5">Where AR you?</h3>
                  <p>Your G Spot ends out a secure Bluetooth signal that can be detected by nearby devices in the Find My Device and Google Maps network. These devices send the location of your G Spot to the Cloud - then you can go to the Find My Device app and see it on a map, and with the help of Live View be guided by AR directions. The whole process is anonymous and encrypted to protect your privacy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-8">
              <div className="text-center where-ar">
                <img className="invisible" src="./images/where-ar.jpg" alt="Where AR you?" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="colours" className="colours bg-primary-alt pt-5 text-center">
        <div className="container px-5">
          <h3 className="plus-jakarta fw-bold mb-4">Five Colours</h3>
          <p>That can easily blend in with your Everyday Carry.</p>
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-9 col-lg-7 mb-5">
              <div className="text-center">
                <img className="" src="./images/colours.gif" alt="All year battery life."/>
              </div>
            </div>
            <div className="row flex-md-wrap justify-content-center align-items-center">
              <div className="col-md-7 col-lg-5 mb-5">
                <div className="text-center">
                  <img className="" src="./images/colours.jpg" alt="All year battery life."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="justincase" className="justincase bg-white text-center text-lg-start">
        <div className="container px-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-6 col-lg-5 mb-5">
              <div className="text-center find">
                <img className="" src="./images/just-in-case.gif" alt="How do I find the G Spot"/>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="plus-jakarta fw-bold mb-5">Use Protection!<br />Just in case...</h3>
                  <p>A Google Maps pin shaped case attached to a keyring or lanyard to help you not loose it in the first place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="onefor" className="onefor bg-primary-alt pt-5">
        <div className="container mt-5 px-5">
          <h3 className="plus-jakarta fw-bold text-center">One for anyone </h3>
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1  text-center">
                  <p>A pin shaped case with the same color as the one you own!
                  </p>
                </div>
              </div>              
            </div>
            <div className="col-md-12 col-lg-10">
              <div className="text-center">
                <img className="" src="./images/coloured-case.jpg" alt="All year battery life."/>
              </div>
            </div>
            <div className="col-md-12 col-lg-10">
              <div className="text-center">
                <img className="" src="./images/thanks.gif" alt="All year battery life."/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default transition(Home)
