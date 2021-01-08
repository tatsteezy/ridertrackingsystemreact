import React from 'react';
import '../styles/style.css';
import covid_updates from "../assets/COVID19-updates.png";
import risk_ass from "../assets/risk-assessment.png";
import interactive_map from "../assets/interactive-map.png";

function Home() {
    return (
        <div>
            <section>
                <div id="home-info">
                    <div className="container">
                        <div className="info-content">
                            <h1><span className="titles">R</span>ider <span className="titles">T</span>racking <span className="titles">S</span>ystem</h1>
                            <p className="intro">RTS aims to provide accurate data
                            for determining the risk level of riders.
                            Rider Tracking System monitors the
                            risk level of the riders to ensure their
                            safety as well as their customers.</p>
                            <a className="btn" href="about.html">About Us</a>
                        </div>
                    </div>
                </div>
            </section>


            <section id="home-updates" className="bg-dark">
                <div className="updates-img">
                    <img src={covid_updates} alt="updates" />
                </div>
                <div className="updates-content">
                    <h2>COVID-19 Updates</h2>
                    <p>Rider Tracking System offers you a feature of daily COVID-19 Updates using the information of the Department of Health. It provides COVID-19 Updates Nationwide up to City level of selected provinces. COVID-19 Updates helps you to keep on track regarding the lastest updates in the country.</p>
                </div>
            </section>



            <section id="home-risk" className="bg-theme">
                <div className="risk-img">
                    <img src={risk_ass} alt="risk" />
                </div>
                <div className="risk-content">
                    <h2>Rider Risk Assessment</h2>
                    <p>Rider Tracking System ensures the safety of the food delivery riders and buyers by having a realtime monitoring of risk percentage of the riders. Having the risk percentage of the riders regularly assessed, the Delivery Service Provider would make sure that all the deliveries are 100% safe and COVID-free.</p>
                </div>
            </section>

            <div className="clr"></div>

            <section id="home-map" className="bg-dark">
                <div className="map-img">
                    <img src={interactive_map} alt="map" />
                </div>
                <div className="map-content">
                    <h2>COVID-19 Interactive Map</h2>
                    <p>COVID-19 Interactive Map is useful on tracking the COVID-19 active cases on a City. The map is connected to Google Maps API that is modified to show the current active cases that may have a food transaction fron the Delivery Service Provider.</p>
                </div>
            </section>

            <div className="clr"></div>

            <section id="details">
                <div className="box">
                    <i className="fab fa-facebook fa-3x"></i>
                    <h3>Learn More!</h3>
                    <a href="https://www.facebook.com/RiderTrackingSystem"><u>RTS Facebook Page</u></a>
                </div>
                <div className="box bg-theme">
                    <i className="fas fa-phone fa-3x"></i>
                    <h3>Contact Us</h3>
                    <p>Cellphone no. 09674469960</p>
                </div>
                <div className="box">
                    <i className="fas fa-envelope fa-3x"></i>
                    <h3>Email Us</h3>
                    <p>ridertrackingsystem@gmail.com</p>
                </div>
            </section>

            <div className="clr"></div>

            <div className="clr"></div>
            <footer id="main-footer">
                <p>Rider Tracking System &copy; 2020</p>
            </footer>
        </div >
    )
}

export default Home
