
const Contact = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="section-flex">
                        <h2>Contact us</h2>
                        <h1>Let’s Start a Conversation</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section1">
                <div className="container">
                    <div className="section-flex1">
                        <div className="section-card">
                            <h2>Working hours</h2>
                            <div className="line"></div>
                            <h1>Monday To Friday</h1>
                            <h1>9:00 AM to 8:00 PM </h1>
                            <p>Our Support Team is available 24/7</p>
                        </div>

                        <div className="section-card1">
                            <h2 className="islom-h2">Contact Us</h2>
                            <div className="line"></div>
                            <h1>020 7993 2905</h1>
                            <p className="islom-h2">hello@finsweet.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="container">
                    <div className="section-flex2">
                        <div className="input">
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Your Email" />
                            <input type="text" placeholder="Query Related " />
                            <input type="text" placeholder="Message" className="input2" />
                            <button className="button">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-wrapper">
                    <div className="container">
                        <div className="footer_page">
                            <div className="foots">
                                <div className="fot_logo">Finsweet</div>
                                <div className="fot_contack">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <div className="cont">
                                    <div className="content1">
                                        <h2>Subscribe to our news letter to get latest updates and news</h2>
                                    </div>
                                    <div className="content2">
                                        <input type="text" placeholder="Enter Your Email" style={{ color: "#fff" }} />
                                        <button className="sub_btn">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bit">
                                <div className="fot_a">
                                    <a href="#">Finstreet 118 2561 Fintown</a>
                                    <br />
                                    <a href="#">Hello@finsweet.com 020 7993 2905</a>
                                </div>
                                <div className="foot_icons">
                                    <div className="foot_icon"><i className="ri-linkedin-box-line"></i></div>
                                    <div className="foot_icon"><i className="ri-instagram-line"></i></div>
                                    <div className="foot_icon"><i className="ri-facebook-circle-line"></i></div>
                                    <div className="foot_icon"><i className="ri-telegram-2-line"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
