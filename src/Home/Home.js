import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


export class Home extends Component {
    componentDidMount(){
        $("nav").addClass('nav-clear');
    }
    componentWillUnmount(){
        $("nav").removeClass('nav-clear');
    }
    render() {
        return (
            <div id="home">
                <section className="hero hero-one">
                    <div className="hero-content">
                        <h3 className="page-heading white large">Vegan <br/>Dairy-free. <br/> Delicious.</h3>
                        <p className="white">All new Oatmilk bars.</p>
                        <Link to="/shop"><button className="btn btn-white-clear">Shop Now</button></Link>
                    </div>
                    <div className="hero-image">
                        <img src={require("../img/home/hero-image.png")} />
                    </div>
                </section>
                <div className="splash-overlay splash-overlay-one"></div>
                <section className="hero hero-two">
                    <div className="hero-image">
                        <img src={require("../img/home/fruit-bars.png")} />
                    </div>
                    <div className="hero-content">
                        <h3 className="page-heading white large">Vegan <br/>Dairy-free. <br/> Delicious.</h3>
                        <p className="white">All new fruit bars.</p>
                        <Link to="/shop"><button className="btn btn-white-clear">Shop Now</button></Link>
                    </div>
                </section>
                <div className="splash-overlay splash-overlay-two"></div>
                <section className="hero hero-three">
                    <img className="oat oat-one" src={require("../img/home/oat.png")} />
                    <img className="oat oat-two" src={require("../img/home/oat.png")} />

                    <div className="home-intro">
                        <div className="page-heading">
                            <h1>Introduction</h1>
                            <p>A well thought out description belongs here.  And relevant info is further detailed before.</p>
                        </div>
                        <div className="intro-content">

                            <div className="col">
                                <img src={require('../img/home/stock-1.png')} />
                                <p>Something goes here.  Something goes here.  Something goes here.</p>
                            </div>
                            <div className="col">
                                <img src={require('../img/home/stock-2.png')} />
                                <p>Something goes here.  Something goes here.  Something goes here.</p>
                            </div>
                            <div className="col">
                                <img src={require('../img/home/stock-3.png')} />
                                <p>Something goes here.  Something goes here.  Something goes here.</p>
                            </div>
                        </div>

                        {/* <CarouselProvider totalSlides={3} naturalSlideHeight={125} naturalSlideWidth={100}>
                            <Slider>
                                <Slide index={0}>
                                    <img src={require('../img/home/stock-1.png')} />
                                    <p>Something goes here.  Something goes here.  Something goes here.</p>
                                </Slide>
                                <Slide index={1}>
                                    <img src={require('../img/home/stock-2.png')} />
                                    <p>Something goes here.  Something goes here.  Something goes here.</p>
                           
                                </Slide>
                                <Slide index={2}>
                                    <img src={require('../img/home/stock-3.png')} />
                                    <p>Something goes here.  Something goes here.  Something goes here.</p>
                            
                                </Slide>
                            </Slider>
                        </CarouselProvider> */}

                        <div className="intro-cta">
                            <Link to="/about"><button className="btn btn-green">Explore</button></Link>
                        </div>
                        <div className="intro-banner">
                            <div className="page-heading">
                                <h1>Find Us Near You!</h1>
                                <p>Enter your zip code to find our products in the nearest retailer near you!</p>
                            </div>
                            <div className="page-heading">
                                <h1>Store Locator</h1>
                                <div className="store-locator">
                                    <input id="home-locator" placeholder="Enter zip code"></input>
                                    <input type="submit" className="btn btn-green" value="Search"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
