import React from 'react';
import emailjs from 'emailjs-com';

function Form() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail','template_yjaerk7',e.target,'user_zqzKV4oCWzuORdYWmnkDY')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset();
        alert('Mail Sent Succesfully!');
    }

    return (
        <div className="form">
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea id="" cols="30" rows="8" className="form-control" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
