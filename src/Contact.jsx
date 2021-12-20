import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_mNF2hAyVwCH02WN5e7WQV");



function App(){
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const notify = () => toast("Sending...");
    e.preventDefault();

    emailjs.sendForm("service_08qhiud", "template_kxor1li", form.current, "user_mNF2hAyVwCH02WN5e7WQV")
      .then((result) => {
          console.log(result.text);
          toast.success('Email Send',{
            position:"top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop:false,
            closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      }, (error) => {
          console.log(error.text);
          toast.warn('Error',{
            position:"top-right",
            autoClose: 5000,
            hideProgressBar:false,
            newestOnTop:false,
            closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        });
        e.target.reset()
  }
  return (
    <>
      <ToastContainer/>
      <div className="=my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
         
            <form ref={form}onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="user_name"
                  //value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  />
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="user_phone"
                  //value={data.phone}
                  onChange={InputEvent}
                  placeholder="Phone"
                />
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="user_email"
                  //value={data.email}
                  onChange={InputEvent}
                  placeholder="email"
                />
               
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  //value={data.message}
                  onChange={InputEvent}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
              <button type="submit" value="Send" class="btn btn-outline-primary">
                Submit
              </button>
              </div>
            </form>
           
          </div>
        </div>
      </div>

      <ToastContainer/>
    </>
  );
};

export default Contact;
