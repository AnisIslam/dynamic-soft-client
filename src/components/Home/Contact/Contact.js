import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact mt-1" id='contact'>
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h2 className=""> Contact With Us</h2>
                </div>

                <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id=""  cols="30" rows="10"  placeholder="Write Your Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
            </div>
        </section>
    );
};

export default Contact;