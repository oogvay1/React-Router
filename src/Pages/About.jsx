
function About() {


    return (
        <>
            <section className="section_n">
                <div className="container">
                    <div className="sec_part">
                        <img src="Imgs/close-up-photography-of-man-wearing-sunglasses-1212984.png" alt="" />
                        <div className="sec_h1">
                            <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                                sem. At risus viverra adipiscing at in tellus.</p>
                            <div className="icon">
                                <i className="ri-facebook-circle-fill"></i>
                                <i className="ri-twitter-fill"></i>
                                <i className="ri-instagram-line"></i>
                                <i className="ri-linkedin-box-line"></i>
                            </div>
                        </div>
                    </div>
                    <div className="bacc">
                        <div className="dd"></div>
                        <div className="bb"></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="sec_two_part">
                        <h1 className="bn">My Posts</h1>
                        <div className="dfg">
                            <div className="sec_text">
                                <img src="Imgs/stained-glass-high-rise-building-1106476.png" alt="" />
                                <div className="text">
                                    <h2>BUSINESS</h2>
                                    <h1>Font sizes in UI design: The complete guide to follow</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut
                                        labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="sec_text">
                                <img src="Imgs/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.png" alt="" />
                                <div className="text">
                                    <h2>ECONOMY</h2>
                                    <h1>How to build rapport with your web design clients</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
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
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">Contact us</a></li>
                                        <li><a href="">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <div className="cont">
                                    <div className="content1">
                                        <h2> Subscribe to our news letter to get latest updates and news</h2>
                                    </div>
                                    <div className="content2">
                                        <input type="text" placeholder="Enter Your Email" />
                                        <button className="sub_btn">Subscribe</button>
                                    </div>

                                </div>
                            </div>
                            <div className="bit">
                                <div className="fot_a">
                                    <a href="">Finstreet 118 2561 Fintown</a>
                                    <br />
                                    <a href="">Hello@finsweet.com 020 7993 2905</a>
                                </div>
                                <div className="foot_icons">
                                    <div className="foot_icon">
                                        <i className="ri-linkedin-box-line"></i>
                                    </div>
                                    <div className="foot_icon">
                                        <i className="ri-instagram-line"></i>
                                    </div>
                                    <div className="foot_icon">
                                        <i className="ri-facebook-circle-line"></i>
                                    </div>
                                    <div className="foot_icon">
                                        <i className="ri-telegram-2-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );

}

export default About
