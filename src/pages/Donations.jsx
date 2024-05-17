import { useState } from 'react';
import transition from '../transition.jsx';

function Donations() {
  const [countCurrentDon, setCurrentDon] = useState(8000);
  const [countDonators, setCountDon] = useState(286);
  const [selectedVal, setSelectedVal] = useState(10);
  const [text, setText] = useState('');
  const [modal, setModal] = useState('');
  const [name, setName] = useState('');


  function controllaForm() { 
    let nome = document.getElementById('fullname');
    let email = document.getElementById('email');
    const classRequired = 'obbligatorio';
  
    if (nome.value === '' && nome.className != classRequired ) {
        nome.className = classRequired;
        nome.placeholder = 'Obbligatorio';
    }
    if (email.value === '' && email.className != classRequired ) {
        email.className = classRequired;
        email.placeholder = 'Obbligatorio';
    }
  
  /* ----- CONTROLLO STRINGHE ----- */
    let campiValidi = false;
    
    if (!nome.value || !email.value) {
      alert('Compila tutti i campi prima!');
    }
    else if (nome.value || email.value) {
      if (nome.value && !nome.value.match(/^[a-z ,.'-]+$/i)) {
          alert('Nel campo nome possono essere inserite solo lettere');
      }
      else if (email.value && !email.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g)) {
          alert('Inserisci un indirizzo email valido');
      }
      else {
          campiValidi = true;
      }
          
    }
    if (campiValidi) {
      setName(nome.value);
      setModal('#thankyou');
      setName(nome.value);
      setCountDon(countDonators + 1);
      setCurrentDon(countCurrentDon + selectedVal);
    }
  
  }

  function mutedCheckFields() {

    let nome = document.getElementById('fullname');
    let email = document.getElementById('email');

    let campiValidi = false;

      if (nome.value && !nome.value.match(/^[a-z ,.'-]+$/i) && email.value && email.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g)) {
        campiValidi = true;
        console.log(campiValidi);
      }
      
    if (campiValidi) {
      setModal('#thankyou');
      setName(nome.value);
      setCountDon(countDonators + 1);
      setCurrentDon(countCurrentDon + selectedVal);
    }  


  }
  // function handleIncrement() {
  //   controllaForm();
  // }
  function handleInputChange(event) {
    setText(event.target.value);
  }
  function setSelectedValClass(event) {
    setSelectedVal('');
    setText('');
    document.querySelector('.give-final-total-amount input').classList.add('d-none');
    document.querySelector('.give-final-total-amount span').classList.remove('d-none');
    document.querySelector('.donateamount.sel').classList.remove('sel');
    event.target.classList.add('sel');

    setSelectedVal(parseInt(document.querySelector('.donateamount.sel').getAttribute('value')));
  }
  function customVal(event) {
    setText(event.target.value);
    document.querySelector('.give-final-total-amount input').classList.remove('d-none');
    document.querySelector('.give-final-total-amount span').classList.add('d-none');
    document.querySelector('.give-final-total-amount input').setAttribute('value', '');
    document.querySelector('.give-final-total-amount input').setAttribute('placeholder', 'custom amount');
    console.log(document.querySelector('.give-final-total-amount input'));
    
    document.querySelector('.donateamount.sel').classList.remove('sel');
    event.target.classList.add('sel');

    setSelectedVal(document.querySelector('.give-final-total-amount input').getAttribute('value'));
  }
  <style>
    footer {
    }
  </style>
  

  return (
    <>
      <section id="howto" className="howto bg-primary-alt pt-5 text-center text-lg-start">
        <div className="container px-5">
          <div className="row flex-md-wrap justify-content-center align-items-center">
            <div className="col-md-9 col-lg-7 mb-5">
              <div className="text-center">
                <img className="img-fluid w-75" src="./images/powered.jpg" alt="Obi Fidler" />
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <div className="plus-jakarta-sbd sopratitolo">It can be</div>
                  <h3 className="plus-jakarta fw-bold mb-5">The Greatest so far!</h3>
                  <p>This journey is absolute amazing.
                    <br />
                    If you think that this product should turn to life, we agreed!
                    <br />
                    Let&rsquo;s find out how YOU can support us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cause-contents-wrapper section-padding donation-form-wrapper my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 pe-5">
              <div className="cause-details-wrapper">
                <div className="featured-thumb">
                  {/* <img src=".images/donation_bg.jpg" alt="donation"/> */}
                </div>
                <div className="give-form-wrap cause-form-wrap">
                  <div className="row donation-form align-items-baseline">
                    <div className="donation-title col-12 col-lg-7">
                      <h2 className="give-form-title">To make this real</h2>
                    </div>
                    <div className="cause-amount d-flex mt-2 mb-3 m-lg-0 justify-content-between col-12 col-lg-5">
                      <div className="price-raised">
                        <i className="fa fa-donate me-2"></i><span> {countCurrentDon} €</span> Raised
                      </div>
                      <div className="price-goal">
                        <i className="fa-solid fa-chart-line me-2"></i><span> 10000 € </span> Goal
                      </div>
                    </div>
                  </div>
                  <div className="total-bar-counts row align-items-center mt-3 mb-4">
                    <div className="goal-progress-wrap col-12">
                      <div className="progress">
                        <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: "80%", visibility: "visible", animationName: "fadeInLeft" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="give-form">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-12">
                        <div className="donate-amount-buttons give-donation-amount">
                          <span onClick={setSelectedValClass} className="donateamount" value="5">5€</span>
                          <span onClick={setSelectedValClass} className="donateamount sel" value="10">10€</span>
                          <span onClick={setSelectedValClass} className="donateamount" value="15">15€</span>
                          <span onClick={setSelectedValClass} className="donateamount" value="49">49€</span>
                          <span onClick={setSelectedValClass} className="donateamount" value="98">98€</span>
                          <span onClick={customVal} className="donateamount" value="">Custom</span>
                        </div>
                      </div>
                    </div>

                    <div className="give-purchase-form-wrap">
                      <div className="row">
                        <div className="col-md-12 col-lg-6 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="fname">Full Name</label>
                            <input type="text" className="give-input" id="fullname" placeholder="Full Name" onChange={mutedCheckFields}  />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="give-input" id="email" placeholder="Email *" onChange={mutedCheckFields} />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 mt-4">
                          <div className="donate-total-amount">
                            <div className="give-donation-total-label">Your Donation:</div>
                            <div className="give-final-total-amount"><input className="d-none" value={text?text:selectedVal} onChange={handleInputChange}/><span>{text?text:selectedVal}</span>€</div>
                            <button onClick={controllaForm} className="give-submit give-btn" data-bs-toggle="modal" data-bs-target={modal} type="button"><img src="./icon/heart-baloon.svg"/> Donate Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 ps-5">
              <div className="donners-content">
                {/* <div className="thumb-bg-layer" data-aos="fade-left" data-bg-img="assets/img/photos/bg-donate1.jpg"></div> */}
                <div className="donners-info aos-init aos-animate" data-aos="fade-up">
                  <h3>Major donner</h3>
                  <p>A list of some of our last supporters.<br/>
                    If you want to be part of them, just donate now!
                    <br/>You can also donate anonimously by not entering your name!</p>
                  <div className="container p-0">
                    <div className="row gx-0 w-100 donners-item align-items-start flex-nowrap justify-content-between">
                      <div className="col donner-item">
                        <img src="./images/blog/avatars/female-3.jpg" alt="Image-Givest" />
                      </div>
                      <div className="col donner-item">
                        <img src="./images/blog/avatars/female-4.jpg" alt="Image-Givest" />
                      </div>
                      <div className="col donner-item">
                        <img src="./images/blog/avatars/male-4.jpg" alt="Image-Givest" />
                      </div>
                      <div className="col donner-item donner-number d-flex justify-content-center align-items-center">+{countDonators}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* -- Modal -- */}
      <div className="modal fade" id="thankyou" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content bg-primary ">
            <div className="modal-header">
              <h1 className="modal-title text-light fs-5" id="exampleModalLabel">Thanks {name}!</h1>
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-light">
              for your {selectedVal}€ donation.
              You will be updated via email when the project reaches the established amount. 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      



      
    </>
  )

}

export default transition(Donations)