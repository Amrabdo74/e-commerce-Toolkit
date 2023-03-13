import { Link } from 'react-router-dom';
import contactImg from '../imeges/contact.png'

function Contact() {
    return (
        <>
            <div className="container About py-5 my-5">
                <div className="col-md-12 contactTitle">
                    <h1 className="about__title fw-bold mb-4 text-center">Have Some Question?</h1>
                </div>
                <div className="row contactform" >
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={contactImg} alt="About Us" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form><div className="mb-3">
                            <label htmlFor="exampleForm" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
                        </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div><div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <Link to="/Contact" className="btn btn-header">Send Message</Link>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Contact;