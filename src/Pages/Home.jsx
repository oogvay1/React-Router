import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Home() {

    return (
        <>
            <section>
                <div className="container">
                    <div className="words">
                        <div className="rasm">
                            <img src="Imgs/Image (16).png" alt="img/Image" />
                        </div>
                        <div className="word">
                            <h2>Andrew Jonson</h2>
                            <p>Posted on 27th January 2022</p>
                        </div>

                    </div>
                    <div className="word2">
                        <h2>Step-by-step guide to choosing <br /> great font pairs</h2>

                    </div>
                    <div className="word3">
                        <img src="Imgs/shuttle.png" alt="img/shuttle" />
                        <p>Startup</p>
                    </div>
                    <div className="rasm2">
                        <img src="Imgs/ffddfb9498174abefa2a086436f620be49d2f85c.png"
                            alt="Imgs/ffddfb9498174abefa2a086436f620be49d2f85c" />
                    </div>
                    <div className="word4">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam
                            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                            montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                    </div>
                    <div className="word5">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam
                            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                            montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam
                            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                            montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                    </div>

                    <ul className="word6">
                        <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                        <li><a href="#">Non blandit massa enim nec scelerisque</a></li>
                        <li><a href="#">Neque egestas congue quisque egestas</a></li>

                    </ul>
                    <div className="word7">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam
                            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                            montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                    </div>
                    <div className="word8">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore <br />magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />mauris in aliquam
                            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                            montes. Ridiculus mus mauris vitae <br />ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                    </div>
                    <div className="word9">
                        <h2>What to read next</h2>
                    </div>
                    <div className="rasmlar">
                        <div className="img">
                            <img src="Imgs/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54.png"
                                alt="Imgs/f36aceb1331b3b8ac3a1d67fcd41a038e1383b54" />
                            <p>By John Doe l Aug 23, 2021 </p>
                            <h2>A UX Case Study Creating a <br />Studious Environment for <br />Students: </h2>
                            <div className="word10">
                                <p>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat
                                    nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="img2">
                            <img src="Imgs/1c9dc67a009ea3ac2018c459ce84161d1b88796f.png"
                                alt="Imgs/1c9dc67a009ea3ac2018c459ce84161d1b88796f" />
                            <p>By John Doe l Aug 23, 2021 </p>
                            <h2>A UX Case Study Creating a <br />Studious Environment for <br />Students: </h2>
                            <div className="word10">
                                <p>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat
                                    nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="img3">
                            <img src="Imgs/0624fa8156d20f4f437855e425ccde79eec2a93c.png"
                                alt="Imgs/0624fa8156d20f4f437855e425ccde79eec2a93c" />
                            <p>By John Doe l Aug 23, 2021 </p>
                            <h2>A UX Case Study Creating a <br />Studious Environment for <br />Students: </h2>
                            <div className="word10">
                                <p>Duis aute irure dolor in reprehenderit in voluptate <br />velit esse cillum dolore eu fugiat
                                    nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sunnat">
                <div className="container">
                    <div className="card">
                        <h1>Join our team to be a part of our story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="card-btn">
                            Join Now
                        </button>
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

export default Home
