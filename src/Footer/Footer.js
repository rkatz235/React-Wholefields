import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-home">
                    <img width="120px" height="50px" src={require("../img/wf-logo.png")} />
                </div>
                <div className="footer-menu">
                    <div className="col footer-col">
                        <p>Contact Us</p>
                        <a href="/">1-800-543-5198</a>
                        <a href="mailto:contact@wholefields.com">contact@wholefields.com</a>
                    </div>
                    <div className="col footer-col">
                        <p>Links</p>
                        <a href="/about">About Us</a>
                        <a href="/locations">Store Locator</a>
                        <a href="/faq">FAQ</a>
                    </div>
                    <div className="col footer-col">
                        <p>Info</p>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Shipping Policy</a>
                        <a href="/">Terms and Conditions</a>
                    </div>
                    <div className="col footer-col">
                        <p>Follow Us</p>
                        <a href="/">FB</a>
                        <a href="/">IG</a>
                    </div>
                </div>
                <div className="footer-rights">
                    <p>&copy; 2020 Wholefield's. All rights reserved.</p>
                </div>

            </footer>
        )
    }
}

export default Footer
