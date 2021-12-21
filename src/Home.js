import React from 'react';
import "./Home.css";
import img from "./Assert/slider-img.png";
import About from './components/About';
import img1 from "./Assert/icon-bucket.png";
import img2 from "./Assert/icon-signboard.png";
import img3 from "./Assert/icon-human.png";
import img4 from "./Assert/icon-trophy.png";
import mobileimg from "./Assert/phone-img.png";
import MobileFeature from "./components/MobileFeature";
import Facts from './components/Facts';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EmailIcon from '@material-ui/icons/Email';
import img5 from "./Assert/bg-tilted.png"
// import img6 from "./Assert/img-post-one.jpg";
import img6 from "./Assert/img-post-three.jpg"
import img7 from "./Assert/img-post-two.jpg"

import NewsPost from './components/NewsPost';


function Home() {
    return (
        <div className='home'>
            <div className='home-banner'>
                <div className='newProduct'>
                    <p>We're happy to tell you about new product</p>
                    <h2>AN AWESOME DESIGN</h2>
                    <div className='apple-brand'>
                        <p>Apple IOS</p>
                        <p>Android</p>
                    </div>
                    <div className='sliderimg'>
                        <img
                            src={img}
                            alt=""
                            className='img'
                        />
                    </div>
                </div>

            </div>
            <div className='home-about'>
                <div className='home-about-container'>
                    <About
                        img={img1}
                        title="Unique Design"
                        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <About
                        img={img2}
                        title="User Findley"
                        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <About
                        img={img3}
                        title="Excellent Support"
                        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                    <About
                        img={img4}
                        title="App of The Year"
                        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    />
                </div>
            </div>
            <div className="mobile-feature">
                <div className="mobile-feature-wrap">
                    <p className='mobile-feature-title'>Amazing <span>Features</span></p>
                    <div className='mobile-feature-container'>
                        <div className='mobile-feature-info'>
                            <MobileFeature
                                id="1"
                                title="CLEAN DESIGN"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                            <MobileFeature
                                id="2"
                                title="54 LANGUAGES"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                            <MobileFeature
                                id="3"
                                title="5000+ SUPPORTERS"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                        </div>
                        <img
                            src={mobileimg}
                            alt=''
                            className='phoneImg'
                        />
                        <div className='mobile-feature-info'>
                            <MobileFeature
                                id="4"
                                title="FAST CONNECT"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                            <MobileFeature
                                id="5"
                                title="FREE UPDATE"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                            <MobileFeature
                                id="6"
                                title="60+ THEMMES"
                                disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className='somefacts'>
                <div className='somefacts-wrap'>
                    <p>Some <span>Facts</span></p>
                    <div>
                        <Facts
                            Icon={CallIcon}
                            number="1991"
                            action="Calls"
                        />
                        <Facts
                            Icon={PersonIcon}
                            number="4047"
                            action="User"

                        />
                        <Facts
                            Icon={CloudDownloadIcon}
                            number="10000"
                            action="Downloads"
                        />
                        <Facts
                            Icon={EmailIcon}
                            number="2390"
                            action="Mails"
                        />
                    </div>
                </div>
            </div>
            <div className='avante'>
                <div className='avante-wrap'>

                    <img
                        src={img5}
                        alt=""
                        className='avante-wrap-img'
                    />

                    <div>
                        <span><span>Why</span> Choose Avante</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div>
                            <p>Vivamus cursus placerat porttitor</p>
                            <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
            <div className='news-section'>
                <div className='news-section-wrap'>
                    <div className='news-title'>Latest <span> News</span></div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className='post'>
                        <div className='post-section1'>
                            <div className="main-post">
                                <span>20 March 2016</span>
                                <h3>Androide App</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='post-section2'>
                            <NewsPost
                                img={img6}
                                time="20 April 2016"
                                title="Amazing For App"
                                disc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "
                            />
                            <NewsPost
                                img={img7}
                                time="27 April 2016"
                                title="Apple"
                                disc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin  old"
                            />
                            <NewsPost
                                img={img6}
                                time="24 April 2016"
                                title="Mobile View"
                                disc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin  old"

                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

